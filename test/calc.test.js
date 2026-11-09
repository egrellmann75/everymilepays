const assert = require("assert");
const path = require("path");
const calc = require(path.join(__dirname, "..", "js", "calc.js"));

function nearly(a, b, eps) {
  assert.ok(Math.abs(a - b) < (eps || 0.011), "expected " + a + " ~= " + b);
}

// Mileage rates
assert.strictEqual(calc.rateForDate("2025-06-15"), 0.7);
assert.strictEqual(calc.rateForDate("2026-01-01"), 0.725);
assert.strictEqual(calc.rateForDate("2026-06-30"), 0.725);
assert.strictEqual(calc.rateForDate("2026-07-01"), 0.76);
assert.strictEqual(calc.rateForDate("2026-11-08"), 0.76);
assert.strictEqual(calc.rateForDate("2026-12-31"), 0.76);
assert.strictEqual(calc.rateForDate("2027-02-01"), 0.76);

// Odometer vs direct miles
assert.strictEqual(calc.tripMiles({ startOdo: 1000, endOdo: 1042.4 }), 42.4);
assert.strictEqual(calc.tripMiles({ miles: 12.5, startOdo: 1, endOdo: 99 }), 12.5);

const md = calc.mileageDeduction([
  { date: "2026-03-15", miles: 100 },
  { date: "2026-08-01", miles: 100 },
  { date: "2025-06-01", miles: 100 }
]);
nearly(md.miles, 300);
nearly(md.value, 100 * 0.725 + 100 * 0.76 + 100 * 0.7);
nearly(md.value, 218.5);

// Sample year 2026 driver
const sample = {
  settings: { year: 2026, filingStatus: "single", onlyIncome: true, totalMilesYear: 400 },
  trips: [
    { date: "2026-03-15", miles: 100, platform: "lyft" },
    { date: "2026-08-01", miles: 100, platform: "uber" }
  ],
  earnings: [
    { date: "2026-03-15", platform: "lyft", gross: 200, tips: 30, fees: 40, hours: 8 },
    { date: "2026-08-01", platform: "uber", gross: 180, tips: 20, fees: 35, hours: 7 },
    { date: "2026-09-01", platform: "lyft", gross: 500, tips: 40, fees: 80, hours: 10 }
  ],
  expenses: [
    { date: "2026-03-16", category: "gas", amount: 50, businessPct: 100 },
    { date: "2026-03-16", category: "parking", amount: 10, businessPct: 100 },
    { date: "2026-03-16", category: "phone", amount: 80, businessPct: 50 },
    { date: "2026-08-02", category: "tolls", amount: 5, businessPct: 100 }
  ]
};

const dash = calc.dashboard(sample);
nearly(dash.miles.miles, 200);
nearly(dash.miles.value, 148.5); // 72.50 + 76.00
nearly(dash.earn.income, 970);
nearly(dash.earn.fees, 155);
nearly(dash.earn.payout, 815);
nearly(dash.earn.hours, 25);
nearly(dash.perMile, 815 / 200);
nearly(dash.perHour, 815 / 25);
nearly(dash.exp.vehicleActual, 50);
nearly(dash.exp.withStandard, 15);
nearly(dash.exp.scheduleCOther, 40);
nearly(dash.vehicleActualAllocated, 25); // 50 * (200/400)
nearly(dash.stdVehicle, 163.5); // 148.5 + 15
nearly(dash.actualVehicle, 40); // 25 + 15
assert.strictEqual(dash.better, "standard");
nearly(dash.stdNet, 970 - (155 + 163.5 + 40));
nearly(dash.stdNet, 611.5);

const se = dash.se;
nearly(se.netEarnings, 611.5 * 0.9235);
nearly(se.tax, se.ss + se.medicare);
assert.ok(se.tax > 0);

// SE tax below $400 is zero
const tiny = calc.seTax(399, 2026);
assert.strictEqual(tiny.tax, 0);
const edge = calc.seTax(400, 2026);
assert.ok(edge.tax > 0);
nearly(edge.netEarnings, 400 * 0.9235);
nearly(edge.ss, 400 * 0.9235 * 0.124);
nearly(edge.medicare, 400 * 0.9235 * 0.029);

// Trip calculator
const offer = calc.tripOffer({
  offer: 18,
  miles: 20,
  minutes: 40,
  costPerMile: 0.35,
  targetPerMile: 1,
  targetPerHour: 20
});
nearly(offer.perMile, 0.9);
nearly(offer.perHour, 27);
nearly(offer.estCost, 7);
nearly(offer.netAfterCost, 11);
assert.strictEqual(offer.accept, false);
assert.strictEqual(offer.meetsMile, false);
assert.strictEqual(offer.meetsHour, true);

const good = calc.tripOffer({
  offer: 22,
  miles: 20,
  minutes: 40,
  costPerMile: 0.35,
  targetPerMile: 1,
  targetPerHour: 20
});
assert.strictEqual(good.accept, true);
nearly(good.perMile, 1.1);

// Quarterly dates
const q = calc.quarterlySchedule(2026);
assert.strictEqual(q[0].due, "2026-04-15");
assert.strictEqual(q[1].due, "2026-06-15");
assert.strictEqual(q[2].due, "2026-09-15");
assert.strictEqual(q[3].due, "2027-01-15");
assert.strictEqual(calc.nextBusinessDay("2025-06-15"), "2025-06-16"); // Sunday -> Monday

// Federal tax smoke: 10% bracket
nearly(calc.federalTaxOn(10000, "single"), 1000);

console.log("All calc tests passed.");
console.log("Sample 2026 dashboard:", JSON.stringify({
  miles: dash.miles,
  income: dash.earn.income,
  payout: dash.earn.payout,
  stdVehicle: dash.stdVehicle,
  actualVehicle: dash.actualVehicle,
  stdNet: dash.stdNet,
  seTax: dash.se.tax,
  setAside: dash.tax.setAside,
  perMile: dash.perMile,
  perHour: dash.perHour
}, null, 2));


// Vehicle cost per mile
const cpm = calc.vehicleCostPerMile({
  milesYear: 20000,
  mpg: 25,
  gasPrice: 3.50,
  insuranceYear: 1400,
  maintenanceYear: 800,
  registrationYear: 200,
  tiresYear: 200,
  depreciationYear: 2000,
  otherYear: 200
});
nearly(cpm.gasPerMile, 3.5 / 25);
nearly(cpm.fixedPerMile, 4800 / 20000);
nearly(cpm.total, 3.5 / 25 + 4800 / 20000);

const gp = calc.goalPlan({ annualNetGoal: 26000, weeksWorked: 52, hoursPerWeek: 25, currentNet: 6500 });
nearly(gp.weeklyTarget, 500);
nearly(gp.hourlyTarget, 20);
nearly(gp.remaining, 19500);
nearly(gp.progress, 0.25);
