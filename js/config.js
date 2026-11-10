/**
 * Every Mile Pays country, tax, platform, and locale-ready config.
 * Add a new country by copying countries.US and filling local rules.
 * Language UI strings live in i18n.js so translations stay separate.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.DriveConfig = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var US_STATES = [
    { code: "AL", name: "Alabama", agency: "Alabama Department of Revenue", url: "https://www.revenue.alabama.gov/", wageIncomeTax: true },
    { code: "AK", name: "Alaska", agency: "Alaska Department of Revenue", url: "https://tax.alaska.gov/", wageIncomeTax: false },
    { code: "AZ", name: "Arizona", agency: "Arizona Department of Revenue", url: "https://azdor.gov/", wageIncomeTax: true },
    { code: "AR", name: "Arkansas", agency: "Arkansas Department of Finance and Administration", url: "https://www.dfa.arkansas.gov/", wageIncomeTax: true },
    { code: "CA", name: "California", agency: "California Franchise Tax Board", url: "https://www.ftb.ca.gov/", wageIncomeTax: true },
    { code: "CO", name: "Colorado", agency: "Colorado Department of Revenue", url: "https://tax.colorado.gov/", wageIncomeTax: true },
    { code: "CT", name: "Connecticut", agency: "Connecticut Department of Revenue Services", url: "https://portal.ct.gov/DRS", wageIncomeTax: true },
    { code: "DE", name: "Delaware", agency: "Delaware Division of Revenue", url: "https://revenue.delaware.gov/", wageIncomeTax: true },
    { code: "DC", name: "District of Columbia", agency: "DC Office of Tax and Revenue", url: "https://otr.cfo.dc.gov/", wageIncomeTax: true },
    { code: "FL", name: "Florida", agency: "Florida Department of Revenue", url: "https://floridarevenue.com/", wageIncomeTax: false },
    { code: "GA", name: "Georgia", agency: "Georgia Department of Revenue", url: "https://dor.georgia.gov/", wageIncomeTax: true },
    { code: "HI", name: "Hawaii", agency: "Hawaii Department of Taxation", url: "https://tax.hawaii.gov/", wageIncomeTax: true },
    { code: "ID", name: "Idaho", agency: "Idaho State Tax Commission", url: "https://tax.idaho.gov/", wageIncomeTax: true },
    { code: "IL", name: "Illinois", agency: "Illinois Department of Revenue", url: "https://tax.illinois.gov/", wageIncomeTax: true },
    { code: "IN", name: "Indiana", agency: "Indiana Department of Revenue", url: "https://www.in.gov/dor/", wageIncomeTax: true },
    { code: "IA", name: "Iowa", agency: "Iowa Department of Revenue", url: "https://tax.iowa.gov/", wageIncomeTax: true },
    { code: "KS", name: "Kansas", agency: "Kansas Department of Revenue", url: "https://www.ksrevenue.gov/", wageIncomeTax: true },
    { code: "KY", name: "Kentucky", agency: "Kentucky Department of Revenue", url: "https://revenue.ky.gov/", wageIncomeTax: true },
    { code: "LA", name: "Louisiana", agency: "Louisiana Department of Revenue", url: "https://revenue.louisiana.gov/", wageIncomeTax: true },
    { code: "ME", name: "Maine", agency: "Maine Revenue Services", url: "https://www.maine.gov/revenue/", wageIncomeTax: true },
    { code: "MD", name: "Maryland", agency: "Comptroller of Maryland", url: "https://www.marylandtaxes.gov/", wageIncomeTax: true },
    { code: "MA", name: "Massachusetts", agency: "Massachusetts Department of Revenue", url: "https://www.mass.gov/orgs/massachusetts-department-of-revenue", wageIncomeTax: true },
    { code: "MI", name: "Michigan", agency: "Michigan Department of Treasury", url: "https://www.michigan.gov/taxes", wageIncomeTax: true },
    { code: "MN", name: "Minnesota", agency: "Minnesota Department of Revenue", url: "https://www.revenue.state.mn.us/", wageIncomeTax: true },
    { code: "MS", name: "Mississippi", agency: "Mississippi Department of Revenue", url: "https://www.dor.ms.gov/", wageIncomeTax: true },
    { code: "MO", name: "Missouri", agency: "Missouri Department of Revenue", url: "https://dor.mo.gov/", wageIncomeTax: true },
    { code: "MT", name: "Montana", agency: "Montana Department of Revenue", url: "https://mtrevenue.gov/", wageIncomeTax: true },
    { code: "NE", name: "Nebraska", agency: "Nebraska Department of Revenue", url: "https://revenue.nebraska.gov/", wageIncomeTax: true },
    { code: "NV", name: "Nevada", agency: "Nevada Department of Taxation", url: "https://tax.nv.gov/", wageIncomeTax: false },
    { code: "NH", name: "New Hampshire", agency: "New Hampshire Department of Revenue Administration", url: "https://www.revenue.nh.gov/", wageIncomeTax: false, note: "No general wage income tax; other state taxes may still apply." },
    { code: "NJ", name: "New Jersey", agency: "New Jersey Division of Taxation", url: "https://www.nj.gov/treasury/taxation/", wageIncomeTax: true },
    { code: "NM", name: "New Mexico", agency: "New Mexico Taxation and Revenue Department", url: "https://www.tax.newmexico.gov/", wageIncomeTax: true },
    { code: "NY", name: "New York", agency: "New York State Department of Taxation and Finance", url: "https://www.tax.ny.gov/", wageIncomeTax: true },
    { code: "NC", name: "North Carolina", agency: "North Carolina Department of Revenue", url: "https://www.ncdor.gov/", wageIncomeTax: true },
    { code: "ND", name: "North Dakota", agency: "North Dakota Office of State Tax Commissioner", url: "https://www.tax.nd.gov/", wageIncomeTax: true },
    { code: "OH", name: "Ohio", agency: "Ohio Department of Taxation", url: "https://tax.ohio.gov/", wageIncomeTax: true },
    { code: "OK", name: "Oklahoma", agency: "Oklahoma Tax Commission", url: "https://oklahoma.gov/tax.html", wageIncomeTax: true },
    { code: "OR", name: "Oregon", agency: "Oregon Department of Revenue", url: "https://www.oregon.gov/dor/", wageIncomeTax: true },
    { code: "PA", name: "Pennsylvania", agency: "Pennsylvania Department of Revenue", url: "https://www.revenue.pa.gov/", wageIncomeTax: true },
    { code: "RI", name: "Rhode Island", agency: "Rhode Island Division of Taxation", url: "https://tax.ri.gov/", wageIncomeTax: true },
    { code: "SC", name: "South Carolina", agency: "South Carolina Department of Revenue", url: "https://dor.sc.gov/", wageIncomeTax: true },
    { code: "SD", name: "South Dakota", agency: "South Dakota Department of Revenue", url: "https://dor.sd.gov/", wageIncomeTax: false },
    { code: "TN", name: "Tennessee", agency: "Tennessee Department of Revenue", url: "https://www.tn.gov/revenue.html", wageIncomeTax: false, note: "No tax on wage or self-employment earnings; other state taxes may still apply." },
    { code: "TX", name: "Texas", agency: "Texas Comptroller of Public Accounts", url: "https://comptroller.texas.gov/", wageIncomeTax: false },
    { code: "UT", name: "Utah", agency: "Utah State Tax Commission", url: "https://tax.utah.gov/", wageIncomeTax: true },
    { code: "VT", name: "Vermont", agency: "Vermont Department of Taxes", url: "https://tax.vermont.gov/", wageIncomeTax: true },
    { code: "VA", name: "Virginia", agency: "Virginia Department of Taxation", url: "https://www.tax.virginia.gov/", wageIncomeTax: true },
    { code: "WA", name: "Washington", agency: "Washington State Department of Revenue", url: "https://dor.wa.gov/", wageIncomeTax: false, note: "No general wage income tax; other state taxes may still apply." },
    { code: "WV", name: "West Virginia", agency: "West Virginia State Tax Department", url: "https://tax.wv.gov/", wageIncomeTax: true },
    { code: "WI", name: "Wisconsin", agency: "Wisconsin Department of Revenue", url: "https://www.revenue.wi.gov/", wageIncomeTax: true },
    { code: "WY", name: "Wyoming", agency: "Wyoming Department of Revenue", url: "https://www.wyo.gov/agencies/department-of-revenue", wageIncomeTax: false }
  ];

  var PLATFORMS = [
    { id: "uber", label: { en: "Uber", es: "Uber" } },
    { id: "lyft", label: { en: "Lyft", es: "Lyft" } },
    { id: "doordash", label: { en: "DoorDash", es: "DoorDash" } },
    { id: "uber_eats", label: { en: "Uber Eats", es: "Uber Eats" } },
    { id: "instacart", label: { en: "Instacart", es: "Instacart" } },
    { id: "grubhub", label: { en: "Grubhub", es: "Grubhub" } },
    { id: "amazon_flex", label: { en: "Amazon Flex", es: "Amazon Flex" } },
    { id: "spark", label: { en: "Spark", es: "Spark" } },
    { id: "shipt", label: { en: "Shipt", es: "Shipt" } },
    { id: "other", label: { en: "Other", es: "Otra" } }
  ];

  var US = {
    id: "US",
    name: { en: "United States", es: "Estados Unidos" },
    currency: { code: "USD", symbol: "$", locale: "en-US" },
    distance: { unit: "mile", label: { en: "miles", es: "millas" } },
    currentTaxYear: 2026,
    languages: ["en", "es"],
    platforms: PLATFORMS,
    regions: US_STATES,
    latestBusinessRate: 0.76,
    mileageRates: [
      { start: "2025-01-01", end: "2025-12-31", business: 0.7, label: "2025" },
      { start: "2026-01-01", end: "2026-06-30", business: 0.725, label: "2026 H1" },
      { start: "2026-07-01", end: "2026-12-31", business: 0.76, label: "2026 H2" }
    ],
    seTax: {
      combinedRate: 0.153,
      ssRate: 0.124,
      medicareRate: 0.029,
      factor: 0.9235,
      minNetProfit: 400,
      wageBase: { 2025: 176100, 2026: 184500 }
    },
    qbiRate: 0.2,
    standardDeduction: {
      2025: { single: 15750, mfs: 15750, mfj: 31500, hoh: 23625 },
      2026: { single: 16100, mfs: 16100, mfj: 32200, hoh: 24150 }
    },
    brackets: {
      2026: {
        single: [[12400, 0.1], [50400, 0.12], [105700, 0.22], [201775, 0.24], [256225, 0.32], [640600, 0.35], [Infinity, 0.37]],
        mfj: [[24800, 0.1], [100800, 0.12], [211400, 0.22], [403550, 0.24], [512450, 0.32], [768700, 0.35], [Infinity, 0.37]],
        mfs: [[12400, 0.1], [50400, 0.12], [105700, 0.22], [201775, 0.24], [256225, 0.32], [384350, 0.35], [Infinity, 0.37]],
        hoh: [[17700, 0.1], [67450, 0.12], [105700, 0.22], [201775, 0.24], [256225, 0.32], [640600, 0.35], [Infinity, 0.37]]
      }
    },
    estimatedTaxPeriods: [
      { id: "q1", label: "Q1", startMD: "01-01", endMD: "03-31", dueMD: "04-15", dueYearOffset: 0 },
      { id: "q2", label: "Q2", startMD: "04-01", endMD: "05-31", dueMD: "06-15", dueYearOffset: 0 },
      { id: "q3", label: "Q3", startMD: "06-01", endMD: "08-31", dueMD: "09-15", dueYearOffset: 0 },
      { id: "q4", label: "Q4", startMD: "09-01", endMD: "12-31", dueMD: "01-15", dueYearOffset: 1 }
    ],
    expenseGroups: {
      vehicleActual: ["gas", "maintenance", "oil", "repairs", "insurance", "registration", "car_wash", "tires", "depreciation", "lease"],
      withStandard: ["parking", "tolls", "car_loan_interest", "property_tax"],
      healthInsurance: ["health_insurance"]
    },
    sources: [
      { id: "mileage-rates", title: "IRS standard mileage rates", url: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
      { id: "ir-2025-128", title: "IR-2025-128 (72.5¢ from Jan 1, 2026)", url: "https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents" },
      { id: "notice-2026-10", title: "Notice 2026-10", url: "https://www.irs.gov/pub/irs-drop/n-26-10.pdf" },
      { id: "notice-2025-05", title: "Notice 2025-05 (2025 rates)", url: "https://www.irs.gov/pub/irs-drop/n-25-05.pdf" },
      { id: "ann-2026-11", title: "Announcement 2026-11 / IR-2026-29 (76¢ from July 1, 2026)", url: "https://www.irs.gov/irb/2026-29_IRB" },
      { id: "topic-510", title: "Topic no. 510, Business use of car", url: "https://www.irs.gov/taxtopics/tc510" },
      { id: "pub-463", title: "Publication 463, Travel, Gift, and Car Expenses", url: "https://www.irs.gov/publications/p463" },
      { id: "sched-c", title: "Instructions for Schedule C", url: "https://www.irs.gov/instructions/i1040sc" },
      { id: "se-tax", title: "Self-employment tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
      { id: "sched-se", title: "Instructions for Schedule SE", url: "https://www.irs.gov/instructions/i1040sse" },
      { id: "estimated", title: "Estimated tax FAQs", url: "https://www.irs.gov/faqs/estimated-tax" },
      { id: "form-1040-es", title: "Form 1040-ES", url: "https://www.irs.gov/forms-pubs/about-form-1040-es" },
      { id: "qbi", title: "Qualified business income deduction", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" },
      { id: "1099k", title: "Form 1099-K FAQs", url: "https://www.irs.gov/newsroom/form-1099-k-faqs-general-information" },
      { id: "1099nec", title: "Information return thresholds", url: "https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return" },
      { id: "wftc", title: "Working Families Tax Cuts (2026 brackets & standard deduction)", url: "https://www.irs.gov/newsroom/working-families-tax-cuts-individuals-and-workers" },
      { id: "ir-2025-103", title: "IR-2025-103, 2026 inflation adjustments", url: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" },
      { id: "pub-334", title: "Publication 334, Tax Guide for Small Business", url: "https://www.irs.gov/publications/p334" },
      { id: "topic-305", title: "Topic no. 305, Recordkeeping", url: "https://www.irs.gov/taxtopics/tc305" }
    ]
  };

  return {
    appName: "Every Mile Pays",
    BOOK_URL: "",
    book: {
      title: "Every Mile Pays: The Rideshare Driver's Playbook"
    },
    defaultCountry: "US",
    defaultLanguage: "en",
    languages: ["en", "es", "pt", "zh", "hi"],
    countries: { US: US },
    getCountry: function (code) {
      return this.countries[code] || this.countries[this.defaultCountry];
    }
  };
});
