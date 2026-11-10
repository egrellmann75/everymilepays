DriveI18n.register("en", {
  meta: { name: "English", native: "English", dir: "ltr", htmlLang: "en" },
  brand: {
    name: "Every Mile Pays",
    tagline: "Track every mile. Keep more of what you earn.",
    short: "Track miles, money, and taxes on your phone — free, offline, and only on your device."
  },
  nav: {
    home: "Home",
    logs: "Logs",
    tools: "Tools",
    learn: "Learn",
    more: "More",
    skip: "Skip to content"
  },
  lang: { label: "Language", choose: "Choose your language" },
  common: {
    save: "Save",
    cancel: "Cancel",
    add: "Add",
    edit: "Edit",
    delete: "Delete",
    close: "Close",
    back: "Back",
    done: "Done",
    optional: "optional",
    notes: "Notes",
    date: "Date",
    platform: "Platform",
    amount: "Amount",
    total: "Total",
    year: "Year",
    hours: "Hours",
    miles: "Miles",
    actions: "Actions",
    empty: "Nothing here yet.",
    required: "Please fill in the required fields.",
    confirmDelete: "Delete this entry?",
    today: "Today",
    print: "Print",
    exportJson: "Export backup (JSON)",
    exportCsv: "Export CSV",
    importJson: "Import backup",
    imported: "Backup imported.",
    importError: "That file could not be imported. Use a Every Mile Pays JSON backup.",
    copied: "Copied.",
    yes: "Yes",
    no: "No",
    vs: "vs",
    better: "Better this year",
    source: "Source",
    sources: "Sources",
    learnMore: "Learn more"
  },
  platforms: {
    uber: "Uber",
    lyft: "Lyft",
    doordash: "DoorDash",
    uber_eats: "Uber Eats",
    instacart: "Instacart",
    grubhub: "Grubhub",
    amazon_flex: "Amazon Flex",
    spark: "Spark",
    shipt: "Shipt",
    other: "Other"
  },
  categories: {
    gas: "Gas / charging",
    maintenance: "Maintenance",
    oil: "Oil changes",
    repairs: "Repairs",
    insurance: "Auto insurance",
    registration: "Registration / plates",
    car_wash: "Car wash",
    tires: "Tires",
    depreciation: "Depreciation (your estimate)",
    lease: "Lease payment",
    parking: "Parking",
    tolls: "Tolls",
    car_loan_interest: "Car loan interest (business share)",
    property_tax: "Vehicle personal property tax",
    phone: "Phone / data",
    accessories: "Accessories (mount, charger, dashcam)",
    supplies: "Supplies",
    health_insurance: "Health insurance (self-employed)",
    other: "Other"
  },
  filing: {
    single: "Single",
    mfj: "Married filing jointly",
    mfs: "Married filing separately",
    hoh: "Head of household"
  },
  header: {
    yearAria: "Tax year",
    langAria: "Language"
  },
  disclaimer: {
    banner: "Informational only — not tax, legal, or financial advice, and not affiliated with Uber, Lyft, or any other platform. Tax rules change. Confirm figures with IRS.gov and a qualified tax preparer.",
    footer: "Every Mile Pays is a free, private tool. Your data stays in this browser unless you export it. Not affiliated with Uber Technologies, Inc., Lyft, Inc., or other gig platforms.",
    credit: "Created by Emerson Grellmann",
    tax: "Estimates on this page are rough planning numbers, not a tax return. They do not include state or local income tax, credits, other jobs, or every federal rule (for example additional Medicare tax or the Social Security wage base if you also have W-2 wages)."
  },
  dash: {
    title: "Dashboard",
    intro: "A live picture of this tax year from the trips, earnings, and expenses you logged.",
    gross: "Gross + tips",
    fees: "Platform fees",
    payout: "Net payout",
    miles: "Business miles",
    mileageValue: "Mileage deduction",
    profit: "Estimated net profit",
    perMile: "Payout per mile",
    perHour: "Payout per hour",
    netPerMile: "Net profit per mile",
    netPerHour: "Net profit per hour",
    seTax: "Estimated SE tax",
    federal: "Rough federal income tax",
    setAside: "Suggested set-aside",
    qbi: "Rough QBI (20%)",
    compareTitle: "Standard mileage vs actual expenses",
    standard: "Standard mileage method",
    actual: "Actual expense method",
    standardHelp: "Miles × the IRS rate for each date, plus business parking, tolls, and the business share of car loan interest and vehicle property tax.",
    actualHelp: "Business share of gas, maintenance, insurance, and other vehicle operating costs, plus parking, tolls, and the same interest and property-tax items.",
    betterStandard: "Standard mileage is larger this year — many drivers come out ahead this way, but compare both before you file.",
    betterActual: "Actual expenses are larger this year with the numbers you entered. You must qualify to use this method — see the tax guide.",
    noTotalMiles: "Enter your total miles driven this year (business + personal) in Settings so actual expenses can be split by business-use percentage.",
    platformTitle: "By platform",
    quarterlyTitle: "Quarterly estimated federal tax",
    quarterlyHelp: "Self-employed people who expect to owe $1,000 or more in federal tax generally make four estimated payments. If a due date falls on a weekend or legal holiday, the IRS treats the next business day as on time.",
    quarter: "Period",
    due: "Due date",
    share: "Equal share of set-aside",
    past: "Past",
    upcoming: "Upcoming",
    stateTitle: "State taxes",
    stateHelp: "This dashboard estimates federal tax only. Most states — and some cities — have their own rules, forms, and estimated-payment calendars.",
    statePick: "Your state",
    stateNone: "Choose your state to see the official tax agency.",
    stateHasTax: "{name} has a personal income tax. Check {agency} for estimated payments, deductions, and whether you need to make state estimates in addition to federal ones.",
    stateNoTax: "{name} does not levy a broad tax on wage or self-employment earnings. You may still owe other state or local taxes. Confirm with {agency}.",
    stateNote: "{note}",
    visitAgency: "Visit {agency}",
    empty: "Log a few trips and a shift of earnings to see your numbers.",
    ctaLogs: "Add a log"
  },
  logs: {
    title: "Logs",
    milesTab: "Mileage",
    earnTab: "Earnings",
    expTab: "Expenses",
    milesTitle: "Mileage log",
    milesIntro: "The IRS expects a timely record: date, miles, and business purpose. You can type miles or start and end odometer readings. A weekly log still counts as timely if it covers that week.",
    startOdo: "Start odometer",
    endOdo: "End odometer",
    purpose: "Business purpose",
    purposeDefault: "Rideshare / delivery — business use",
    milesValue: "Deduction at IRS rate",
    rateUsed: "Rate used",
    earnTitle: "Earnings log",
    earnIntro: "Enter what the platform shows for the shift: fares or offers (gross), tips, and the fees or commissions it kept. Hours are optional but unlock dollars-per-hour on the dashboard.",
    gross: "Gross fares",
    tips: "Tips",
    fees: "Platform fees",
    expTitle: "Expense log",
    expIntro: "Save receipts. Gas, maintenance, insurance, car washes, and similar vehicle costs are compared with the standard mileage rate — you generally cannot deduct both for the same year. Parking, tolls, phone service, and supplies are different; see the tax guide.",
    category: "Category",
    bizPct: "Business %",
    runningMiles: "Miles this year",
    runningDeduction: "Mileage deduction this year"
  },
  tools: {
    title: "Tools",
    tripTab: "Trip offer",
    cpmTab: "Cost per mile",
    goalTab: "Annual goal",
    tripTitle: "Trip profitability",
    tripIntro: "Before you accept, include pickup miles and time — not just the passenger or drop-off distance. Compare the offer with your real cost per mile and a target such as $1 per mile.",
    offer: "Offer amount",
    tripMiles: "Miles (include pickup)",
    minutes: "Minutes (include pickup)",
    costPerMile: "Your cost per mile",
    targetPerMile: "Target per mile",
    targetPerHour: "Target per hour",
    resultMile: "Dollars per mile",
    resultHour: "Dollars per hour",
    resultCost: "Estimated driving cost",
    resultNet: "Left after driving cost",
    accept: "Looks like a yes — it meets your targets and covers your cost.",
    decline: "Consider declining — it misses a target or does not cover your cost.",
    missMile: "Below your per-mile target.",
    missHour: "Below your per-hour target.",
    meetMile: "Meets your per-mile target.",
    meetHour: "Meets your per-hour target.",
    useSettings: "Use my saved cost per mile",
    cpmTitle: "Vehicle cost per mile",
    cpmIntro: "This is your real operating cost, not the IRS standard mileage rate. Use it as the floor in the trip calculator so a “good” offer still pays you after gas, wear, insurance, and the other costs of keeping the car on the road.",
    milesYear: "Miles you expect to drive this year (all use)",
    mpg: "Miles per gallon (or MPGe)",
    gasPrice: "Price per gallon (or per kWh × your own conversion)",
    insuranceYear: "Insurance per year",
    maintenanceYear: "Maintenance per year",
    registrationYear: "Registration per year",
    tiresYear: "Tires per year (average)",
    depreciationYear: "Depreciation or value lost per year",
    otherYear: "Other vehicle costs per year",
    gasPerMile: "Fuel per mile",
    fixedPerMile: "Fixed costs per mile",
    totalPerMile: "Total cost per mile",
    annualFuel: "Fuel for the year",
    annualTotal: "All vehicle costs for the year",
    saveAsDefault: "Save as my cost per mile",
    savedCpm: "Saved to Settings and the trip calculator.",
    goalTitle: "Annual goal planner",
    goalIntro: "Pick a net-profit goal for the year (after platform fees and the method that looks better on your dashboard). We turn it into a weekly and hourly target using the hours you plan to work, and we measure progress from this year’s logged profit.",
    annualGoal: "Net profit goal for the year",
    weeksWorked: "Weeks you will work",
    hoursWeek: "Hours per week",
    weeklyTarget: "Weekly net target",
    hourlyTarget: "Hourly net target",
    remaining: "Still to earn",
    progress: "Progress this year",
    loggedNet: "Logged net profit this year"
  },

  book: {
    nav: "The book",
    title: "Get the book",
    headline: "Every Mile Pays: The Rideshare Driver's Playbook",
    byAuthor: "By Emerson Grellmann",
    lede: "A companion guide for U.S. rideshare and delivery drivers who want clearer numbers, smarter trip decisions, and a calmer tax season. This website stays free either way.",
    p1: "The Playbook walks through the same habits this site is built around: knowing your real cost per mile, judging an offer before you accept it, keeping records the IRS can follow, and treating bonuses as extra — not as a reason to take a losing trip.",
    bulletsTitle: "Inside the Playbook",
    bullets: [
      "How to set a personal per-mile and per-hour floor",
      "How to keep a timely mileage and expense log",
      "How to think about promotions, multi-apping, and unpaid miles",
      "What to hand your tax preparer at year-end"
    ],
    buy: "Get the book",
    coming: "Coming soon on Amazon",
    note: "The book is a separate purchase. You do not need it to use these free tools."
  },
  learn: {
    title: "Learn",
    intro: "Guides for earning more and keeping more of it — with official sources, not guesses.",
    topics: {
      deductions: "Tax deductions",
      hours: "Best times to drive",
      bonuses: "Bonuses and promos",
      multi: "Multi-apping",
      gas: "Save on gas",
      earn: "Earn more per hour",
      safety: "Safety",
      health: "Comfortable driving",
      resources: "Resources and links"
    }
  },
  more: {
    title: "More",
    summaryTab: "Year-end summary",
    backupTab: "Backup",
    settingsTab: "Settings",
    summaryTitle: "Year-end summary for your tax preparer",
    summaryIntro: "Print or save as a PDF from your browser. This is a worksheet, not a tax form.",
    backupTitle: "Your data stays on this device",
    backupIntro: "Every Mile Pays does not create an account or upload your logs. Export a JSON backup to another phone, or CSV files you can open in a spreadsheet. Importing a JSON file replaces the data currently stored in this browser.",
    settingsTitle: "Settings",
    totalMiles: "Total miles driven this year (business + personal)",
    totalMilesHelp: "Needed to split actual vehicle expenses between business and personal use.",
    filingStatus: "Filing status (for the rough federal estimate)",
    onlyIncome: "Treat this driving income as my only income when estimating federal tax (uses the standard deduction).",
    country: "Country",
    state: "State",
    privacy: "Privacy: all entries are saved in localStorage in this browser only."
  },
  img: {
    hero: "Illustration of a diverse rideshare driver checking a phone app inside a car at dusk",
    mileage: "Illustration of a friendly odometer and mileage log notebook",
    taxes: "Illustration of organized receipts and a tax savings folder",
    calculator: "Illustration of a driver comparing a trip offer on a simple calculator",
    safety: "Illustration of a driver pausing in a well-lit area and focusing on the road",
    health: "Illustration of a driver stretching beside a car and sitting with good posture"
  },
  selftest: { running: "Running checks…", pass: "All checks passed.", fail: "Checks failed." },
  guides: {
    deductions: {
      title: "Tax deductions for U.S. rideshare and delivery drivers",
      lede: "You are generally self-employed. You report income and expenses on Schedule C and figure self-employment tax on Schedule SE. This guide summarizes published IRS rules so you can keep better records — it is not a substitute for a tax preparer.",
      sections: [
        {
          title: "Standard mileage vs actual expenses",
          paragraphs: [
            "You may generally figure car expenses with the standard mileage rate or the actual expense method. If you qualify for both, the IRS suggests figuring it both ways and using the larger deduction (Topic no. 510).",
            "For 2025 the business standard mileage rate is 70 cents per mile. For 2026 it is 72.5 cents per mile from January 1 through June 30, and 76 cents per mile from July 1 through December 31. Every Mile Pays applies the correct rate to each trip’s date.",
            "If you use the standard mileage rate for a year, you generally cannot also deduct gas, oil, repairs, maintenance, insurance, registration, depreciation, or lease payments for that year. You may still deduct business parking and tolls. The business portion of vehicle loan interest and personal property taxes on the vehicle is reported separately on Schedule C even if you use standard mileage (see the Schedule C instructions).",
            "To use standard mileage for a car you own, you must choose it in the first year the car is available for business. In later years you may switch. For a leased car, if you choose standard mileage you must use it for the entire lease (including renewals). You cannot use standard mileage if you operate five or more cars at the same time (a fleet), or if you claimed MACRS, Section 179, or special depreciation on the car."
          ]
        },
        {
          title: "What many drivers also deduct",
          paragraphs: [
            "Platform fees and commissions are ordinary business expenses. If a Form 1099-K shows a gross amount before fees, you still report your income correctly and deduct the fees — the form is an information return, not the last word on your profit.",
            "Your phone and data plan are deductible only for the share used in the business (for example maps, driver apps, and rider messages). Keep a reasonable business-use percentage.",
            "Supplies such as a phone mount, charger, or dashcam are often treated as supplies or equipment, not as vehicle operating costs covered by the mileage rate. Car washes are generally vehicle operating costs, so they belong in the actual-expense comparison, not as an extra deduction on top of standard mileage.",
            "Self-employed health insurance may be deductible as an adjustment to income (not on Schedule C) if you qualify. It usually does not reduce self-employment tax. See the Instructions for Form 7206 and Publication 502, and ask a preparer.",
            "Eligible owners of sole proprietorships may deduct up to 20% of qualified business income (the Section 199A / QBI deduction), subject to limits. QBI is reduced by items such as the deductible part of self-employment tax and the self-employed health insurance deduction."
          ]
        },
        {
          title: "Self-employment tax and quarterly payments",
          paragraphs: [
            "The self-employment tax rate is 15.3% (12.4% Social Security plus 2.9% Medicare) on 92.35% of net earnings. You generally owe it if those net earnings are $400 or more. For 2026, the Social Security portion applies to the first $184,500 of combined wages and net earnings. You can deduct the employer-equivalent half of SE tax when figuring adjusted gross income — that deduction does not reduce the SE tax itself.",
            "If you expect to owe at least $1,000 in federal tax after withholding and credits, you generally must make quarterly estimated payments (Form 1040-ES). The statutory due dates are April 15, June 15, September 15, and January 15 of the following year. If a date falls on a Saturday, Sunday, or legal holiday, the payment is on time the next business day."
          ]
        },
        {
          title: "1099-K, 1099-NEC, and reporting all income",
          paragraphs: [
            "All of your driving income is taxable whether or not you receive a form. Platforms may send a Form 1099-K, a Form 1099-NEC, or both (for example, rider payments versus some incentives).",
            "For third-party settlement organizations, the federal Form 1099-K threshold is more than $20,000 and more than 200 transactions. Payment-card transactions have no de minimis threshold. A payer may still send a form below a threshold, and your state may use a lower threshold.",
            "For payments made in 2026, the Form 1099-NEC reporting threshold for nonemployee compensation is $2,000 (it was $600 for payments made before 2026). That is a payer reporting rule — it does not make smaller amounts tax-free."
          ]
        },
        {
          title: "Records the IRS expects",
          paragraphs: [
            "Keep adequate records or other sufficient evidence. For a car, that usually means the date of each business use, miles, destination or area, and business purpose, plus total miles for the year. A log kept at or near the time of use is stronger than one rebuilt at tax time. A weekly log that accounts for that week is considered timely (Publication 463).",
            "Keep receipts for expenses and generally keep tax records for at least three years after you file the return that uses them. Photograph your year-start and year-end odometer. Export a Every Mile Pays backup more than once a year."
          ]
        },
        {
          title: "Newer federal rules to ask a preparer about",
          paragraphs: [
            "For tax years 2025 through 2028, Congress created a deduction for certain qualified tips (up to $25,000, with income phaseouts and occupation rules) and other individual provisions described on the IRS Working Families Tax Cuts page. Whether your platform tips qualify depends on current IRS guidance. Do not assume a tip is tax-free — show your records to a preparer.",
            "A separate 2025–2028 deduction for some personal-use car loan interest is not the same as deducting the business share of loan interest on Schedule C. Do not mix the two."
          ]
        }
      ]
    },
    hours: {
      title: "When demand is usually higher",
      lede: "No website can tell you the best hour on your corner. These are patterns the platforms themselves describe. Check the demand tools in your driver app for your city — they change by neighborhood and by the day.",
      sections: [
        {
          title: "What Uber publishes",
          paragraphs: [
            "Uber’s driver help article “When and where are the most riders?” says that in most cities, weekends, rush hours, and evening hours have more trip requests than other times.",
            "The same article tells drivers to use Hourly Trends in the Driver app to see when the city is expected to be busiest, and to use the heat map to compare trip requests across areas. Fare multipliers shown on the map are informational; Uber says the amount on your screen is the timely figure."
          ]
        },
        {
          title: "What Lyft publishes",
          paragraphs: [
            "Lyft’s driver blog on how when and where you drive affects pay lists common busy times: morning commute hours, evening commute hours, after special events such as concerts, and Friday and Saturday nights.",
            "It lists common busy areas as downtowns, college campuses, essential businesses, bars and restaurants, and transportation hubs such as airports. Lyft also says a high concentration of riders with relatively few drivers nearby makes a quick match more likely. That is about booked time — it is not a promise of higher pay on every trip."
          ]
        },
        {
          title: "Airports, weather, and events",
          paragraphs: [
            "Airport trips usually require a designated staging lot and a first-in, first-out queue. Uber’s airport help page says the Driver app can show expected peak flight hours, and that delays, cancellations, and other factors can change the forecast. Lyft’s airport help page lets drivers view estimated queue wait times and upcoming flight arrivals, and notes that the data can change.",
            "Uber’s engineering blog on airport forecasting describes demand that moves with irregular flight schedules, holidays, and weather, and notes that a long queue can leave drivers waiting without a guarantee that the next trip is worth the wait. Use the wait-time and earnings comparisons in your app before you deadhead to the airport.",
            "Special events (concerts, sports, festivals) appear in Lyft’s own list of busy times. Local event calendars still matter: a stadium let-out can be busy, and it can also be gridlocked. Your trip calculator is there so a surge-looking offer is still judged by miles, minutes, and your cost."
          ]
        }
      ]
    },
    bonuses: {
      title: "Bonus and promo strategy",
      lede: "Promotions can raise a good hour and can also talk you into unprofitable trips. Treat every bonus as extra on top of a trip that already makes sense.",
      sections: [
        {
          title: "Read the full offer before you chase it",
          paragraphs: [
            "Platforms run time-limited promotions — trip quests or ride challenges, streaks, busy-area bonuses, and similar offers. The terms usually limit which hours, neighborhoods, and ride types count. Screenshot the terms when the offer appears.",
            "Before you stretch a shift just to finish a quest, estimate the extra miles and hours it will take. If those extra trips fall below your cost per mile or your hourly target, the bonus has to be large enough to close the gap. The trip calculator and cost-per-mile tool are built for that math.",
            "Some promotions or loyalty tiers may ask for a minimum acceptance or completion rate, or may apply only while you are in a certain mode. Read the program rules. An offer that requires you to accept weak trips can cost more than the bonus pays."
          ]
        },
        {
          title: "Streaks, zones, and guarantees",
          paragraphs: [
            "Streak bonuses pay extra for consecutive trips in a window. A long pickup or a trip that leaves you far from demand can break the economics even if it “keeps the streak alive.” Judge the next ping with pickup miles included.",
            "Bonus or busy zones highlight where more riders are requesting trips. They are a hint, not a guarantee — other drivers see the same map. Pair the zone with your own hours and the live wait you actually experience.",
            "Earnings guarantees, if offered, almost always have fine print (trip counts, hours online, acceptance, specific cities). Count only trips that the terms say qualify, and keep your own log so you can compare the guarantee with what you would have earned anyway."
          ]
        }
      ]
    },
    multi: {
      title: "Running more than one app",
      lede: "Multi-apping — going online on more than one platform at a time — is common. Used carefully, it can cut unpaid waiting. Used carelessly, it creates late pickups, extra cancellations, and unsafe phone use.",
      sections: [
        {
          title: "What the platforms say",
          paragraphs: [
            "Uber’s help center explains that the driver app keeps running if you switch to other apps, and that GPS continues so trips can be recorded. It also reminds drivers to follow local laws about phone use and notes that talking on the phone while driving can be distracting and unsafe.",
            "Neither this guide nor Every Mile Pays is a legal opinion on any platform’s terms. Program rules, airports, and cities can add extra conditions — including exclusivity during some promotions. Read the terms that apply to you."
          ]
        },
        {
          title: "A safer habit",
          paragraphs: [
            "Go online on the apps you want to use. When you accept a trip on one, immediately pause or go offline on the others so you are not assigned a second rider or a delivery you cannot take.",
            "Stay on one active trip at a time. Accepting a second offer while a rider is already in the car leads to cancellations, delays, and complaints.",
            "Compare offers with dollars per mile and dollars per hour, including pickup, not by which headline number is larger.",
            "Handle the apps only when you are legally parked or safely stopped. NHTSA warns that distracted driving — including phones — is dangerous. No extra request is worth a crash or a ticket.",
            "Watch each platform’s cancellation and acceptance metrics separately. If juggling apps starts to hurt those numbers or your on-time record, run one app until things settle."
          ]
        }
      ]
    },
    gas: {
      title: "Save money on fuel",
      lede: "Fuel is often a driver’s largest cash cost. These figures come from the U.S. Department of Energy and EPA FuelEconomy.gov — not from platform marketing.",
      sections: [
        {
          title: "How you drive",
          paragraphs: [
            "FuelEconomy.gov says you can save 10% to 40% by avoiding speeding and aggressive accelerating and braking. A companion DOE/EPA tip sheet states that aggressive driving can lower MPG by roughly 15% to 30% at highway speeds and 10% to 40% in stop-and-go traffic.",
            "Each 5 mph you drive over 50 mph can lower gas mileage by 7% or more (FuelEconomy.gov gas-mileage tips).",
            "Idling can use about a quarter to a half gallon of fuel per hour. Turn the engine off when you are stopped and not in traffic, when it is safe and lawful to do so. Idling gets zero miles per gallon.",
            "Cruise control on the highway helps you hold a steady speed and, in most cases, saves gas. Combine trips when you can: several short trips from a cold start can use more fuel than one longer trip covering the same distance."
          ]
        },
        {
          title: "How you keep the car",
          paragraphs: [
            "Keeping tires inflated to the pressure on the driver’s door sticker or glove-box label (not the maximum on the tire sidewall) can improve gas mileage by about 0.6% on average, and up to about 3% in some cases. Under-inflation can lower mileage by about 0.2% for every 1 psi drop in the average pressure of all four tires.",
            "Using the manufacturer’s recommended grade of motor oil can improve mileage by 1% to 2% if you had been using the wrong grade. Fixing an out-of-tune engine can improve efficiency by about 4% on average.",
            "An extra 100 pounds can lower gas mileage by about 1%. Remove unneeded cargo. A rooftop cargo box can reduce fuel economy from 2% to 17% because of drag."
          ]
        }
      ]
    },
    earn: {
      title: "Earn more from the hours you already work",
      lede: "Raising your hourly net is usually a mix of better trip selection, less unpaid driving, and knowing your real costs — not working until you are exhausted.",
      sections: [
        {
          title: "Know your floor before the first ping",
          paragraphs: [
            "Use the cost-per-mile tool, then set a per-mile and per-hour target in the trip calculator. Include pickup miles and minutes. A larger fare with a long unpaid pickup can pay less than a shorter offer nearby.",
            "Log gross, tips, fees, hours, and miles after every shift — in the same week, while you still remember. The dashboard then shows which platform pays you more after fees, and whether you are beating your goal.",
            "Decline trips that miss your floor unless you have a clear reason (a bonus that truly covers the gap, a destination you already needed, or a safety need to move). Your own logs beat a rumor about what “everyone” accepts."
          ]
        },
        {
          title: "Cut unpaid miles",
          paragraphs: [
            "Deadhead miles — driving without a paying offer — still burn fuel and time. After a drop-off, decide whether to stay put, reposition toward a busy area shown in your app, or go offline. The heat map is a clue; your recent payout-per-hour is evidence.",
            "If one platform is already keeping you booked, you may not need a second app that hour. Multi-apping helps most when you are waiting, not when you are already on a trip.",
            "Reposition only when the expected wait and the trip calculator still work. A long drive to an airport queue is a bet; Uber and Lyft both warn that airport forecasts and wait times can change."
          ]
        }
      ]
    },
    safety: {
      title: "Drive so you can keep earning",
      lede: "A damaged car or a suspended license ends the week’s income. These habits protect you, your riders, and your ability to stay on the road.",
      sections: [
        {
          title: "Phones, fatigue, and the road",
          paragraphs: [
            "The National Highway Traffic Safety Administration (NHTSA) warns that distracted driving — texting, using a handheld phone, and other tasks that take your eyes or mind off the road — is dangerous. Pull over and park legally before you switch apps, type, or read a long offer.",
            "Follow every traffic law and your city’s rules for where rideshare vehicles may wait. Airports and stadiums often have dedicated lots; leaving them can cost your queue spot or a citation.",
            "Platforms may limit consecutive driving hours. Use those limits as a ceiling, not a target. If you are drowsy, go offline. No promotion is worth falling asleep at the wheel."
          ]
        },
        {
          title: "Personal safety",
          paragraphs: [
            "Share your trip status with someone you trust when that feature is available, and keep doors locked until you have confirmed the rider. Well-lit pickup and drop-off spots are easier for everyone.",
            "You may decline or end a trip that feels unsafe, following the platform’s safety process. Trust that instinct.",
            "A dashcam, where legal in your state, can protect you in a dispute. Check two-party consent recording laws before you rely on audio."
          ]
        }
      ]
    },
    health: {
      title: "More comfortable hours in the car",
      lede: "Long hours of sitting can be uncomfortable. The ideas below are general ergonomic and comfort tips for driving — they are not medical advice, a diagnosis, or a treatment plan. If you live with pain or another health condition, talk with a licensed clinician about what is safe for you.",
      sections: [
        {
          title: "Setup and breaks",
          paragraphs: [
            "Sit with your hips as far back in the seat as you can. A small lumbar cushion or a rolled towel at the lower back helps some drivers stay more upright. Keep your knees slightly bent and your hips roughly level with, or a bit higher than, your knees if the car allows it.",
            "Hold the wheel with relaxed shoulders. Adjust mirrors so you are not twisting to see traffic. Take your wallet out of a back pocket so the seat can support you evenly.",
            "When it is safe, step out at fuel stops or after a drop-off and move your back, hips, and legs for a minute. Short, regular pauses are easier on most bodies than one long grind.",
            "Keep water within reach and notice if you are getting stiff, numb, or unusually tired — those are reasons to pause, not to “push through” a quest. Nothing here is a claim that a stretch or a seat cushion will treat or cure pain."
          ]
        }
      ]
    },
    resources: {
      title: "Official resources",
      lede: "Primary sources used in Every Mile Pays. Open them when you want the rule itself, not a summary.",
      groups: [
        {
          title: "Internal Revenue Service",
          links: [
            { label: "Standard mileage rates", url: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
            { label: "IR-2025-128 (72.5¢ rate for the first half of 2026)", url: "https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents" },
            { label: "Notice 2026-10 (PDF)", url: "https://www.irs.gov/pub/irs-drop/n-26-10.pdf" },
            { label: "Notice 2025-05 (PDF, 2025 rates)", url: "https://www.irs.gov/pub/irs-drop/n-25-05.pdf" },
            { label: "Internal Revenue Bulletin 2026-29 (mid-year 76¢ rate)", url: "https://www.irs.gov/irb/2026-29_IRB" },
            { label: "Topic no. 510, Business use of car", url: "https://www.irs.gov/taxtopics/tc510" },
            { label: "Publication 463, Travel, Gift, and Car Expenses", url: "https://www.irs.gov/publications/p463" },
            { label: "Instructions for Schedule C", url: "https://www.irs.gov/instructions/i1040sc" },
            { label: "Self-employment tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
            { label: "Instructions for Schedule SE", url: "https://www.irs.gov/instructions/i1040sse" },
            { label: "Estimated tax FAQs and due dates", url: "https://www.irs.gov/faqs/estimated-tax" },
            { label: "About Form 1040-ES", url: "https://www.irs.gov/forms-pubs/about-form-1040-es" },
            { label: "Qualified business income deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" },
            { label: "Form 1099-K FAQs", url: "https://www.irs.gov/newsroom/form-1099-k-faqs-general-information" },
            { label: "Information return thresholds (1099-NEC $2,000 in 2026)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return" },
            { label: "Working Families Tax Cuts", url: "https://www.irs.gov/newsroom/working-families-tax-cuts-individuals-and-workers" },
            { label: "Publication 334, Tax Guide for Small Business", url: "https://www.irs.gov/publications/p334" },
            { label: "Topic no. 305, Recordkeeping", url: "https://www.irs.gov/taxtopics/tc305" }
          ]
        },
        {
          title: "Fuel and driving",
          links: [
            { label: "FuelEconomy.gov gas-mileage tips", url: "https://www.fueleconomy.gov/m/tips.shtml" },
            { label: "FuelEconomy.gov — keeping your vehicle in shape", url: "https://www.fueleconomy.gov/feg/maintain.jsp" },
            { label: "DOE/EPA gas-saving tip sheet (PDF)", url: "https://www.fueleconomy.gov/feg/toolkit/pdfs/fuel_tips/2026-G03039-FEG-Gas-Tips.pdf" },
            { label: "NHTSA — distracted driving", url: "https://www.nhtsa.gov/risky-driving/distracted-driving" }
          ]
        },
        {
          title: "Platform driver help",
          links: [
            { label: "Uber: When and where are the most riders?", url: "https://help.uber.com/en/driving-and-delivering/article/when-and-where-are-the-most-riders?nodeId=456fcc51-39ad-4b7d-999d-6c78c3a388bf" },
            { label: "Uber: Driving at the airport", url: "https://help.uber.com/driving-and-delivering/article/driving-at-the-airport?nodeId=1c8143ff-da32-46e6-b18d-254b9511efe0" },
            { label: "Uber: Using other apps while online", url: "https://help.uber.com/en/driving-and-delivering/article/can-i-use-other-apps-or-receive-personal-calls-while-online?nodeId=224190dc-9df8-4d5c-b836-3f33f3a9e061" },
            { label: "Lyft: How when and where you drive affects your pay", url: "https://www.lyft.com/hub/posts/how-when-and-where-you-drive-affects-your-pay" },
            { label: "Lyft: Airport FIFO pickup requests", url: "https://help.lyft.com/hc/en-us/all/articles/115012922787-Receiving-Airport-FIFO-pickup-requests" }
          ]
        }
      ]
    }
  }
});
