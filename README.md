# Every Mile Pays

A free, private, mobile-first website for **U.S. rideshare and delivery drivers** (Uber, Lyft, DoorDash, and other platforms). It helps you log miles, earnings, and expenses, compare the IRS standard mileage method with actual expenses, judge trip offers, and keep records you can hand to a tax preparer.

There is no account and no backend. Everything is static HTML, CSS, and JavaScript. Your data stays in this browser’s `localStorage` unless you export it.

**Companion ebook:** *Every Mile Pays: The Rideshare Driver’s Playbook*. The site’s buy button reads `BOOK_URL` in `js/config.js`. Leave that string empty (the default) to hide the button until the book is on sale.

## Open the site

Open `index.html` locally, or serve the folder with any static host (GitHub Pages, Netlify, or `python3 -m http.server`).

```bash
cd rideshare-site
python3 -m http.server 8765
```

Then visit `http://127.0.0.1:8765/`.

## What it does

- **Mileage log** with date, platform, odometer or miles, purpose, and the IRS rate that applied that day
- **Earnings log** (gross, tips, platform fees, optional hours) and **expense log**
- **Dashboard:** payout per mile and per hour, net profit, standard mileage vs actual expenses, estimated self-employment tax, a rough federal set-aside, and quarterly estimated-tax dates
- **State tax note** with a link to each U.S. state or D.C. tax agency (federal estimates only)
- **Trip offer calculator**, **vehicle cost-per-mile calculator**, and **annual goal planner**
- **Guides:** deductions, busy-time patterns, bonuses, multi-apping, fuel savings, earning more, safety, comfortable driving, and official links
- **Printable year-end summary** and JSON/CSV backup
- **Languages:** English, Español, Português, 中文, हिन्दी (saved in `localStorage`)
- Works **offline** via a service worker after the first visit

## IRS figures used (as of the research date)

| Item | Figure | Source |
| --- | --- | --- |
| 2025 business standard mileage rate | 70¢/mile | [IRS standard mileage rates](https://www.irs.gov/tax-professionals/standard-mileage-rates), [Notice 2025-05](https://www.irs.gov/pub/irs-drop/n-25-05.pdf) |
| 2026 business rate, Jan 1–Jun 30 | 72.5¢/mile | [IR-2025-128](https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents), [Notice 2026-10](https://www.irs.gov/pub/irs-drop/n-26-10.pdf) |
| 2026 business rate, Jul 1–Dec 31 | 76¢/mile | [IRS standard mileage rates](https://www.irs.gov/tax-professionals/standard-mileage-rates), Announcement 2026-11 / [IRB 2026-29](https://www.irs.gov/irb/2026-29_IRB) |
| Parking and tolls | Deductible under either method | [Topic no. 510](https://www.irs.gov/taxtopics/tc510) |
| Self-employment tax | 15.3% (12.4% + 2.9%) on 92.35% of net earnings; generally if net earnings ≥ $400. 2026 Social Security wage base $184,500 | [IRS SE tax page](https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes) |
| Quarterly estimated tax dates | Apr 15, Jun 15, Sep 15, Jan 15 of the following year (next business day if the date is a weekend or legal holiday) | [Estimated tax FAQs](https://www.irs.gov/faqs/estimated-tax) |
| Form 1099-K (TPSO) | More than $20,000 **and** more than 200 transactions (no de minimis for payment cards) | [1099-K FAQs](https://www.irs.gov/newsroom/form-1099-k-faqs-general-information) |
| Form 1099-NEC | $2,000 reporting threshold for payments made in 2026 ($600 before 2026) | [Information return thresholds](https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return) |
| QBI | Up to 20% of qualified business income, with limits | [QBI deduction](https://www.irs.gov/newsroom/qualified-business-income-deduction) |
| 2026 standard deduction | $16,100 single/MFS; $32,200 MFJ; $24,150 HOH | [Working Families Tax Cuts](https://www.irs.gov/newsroom/working-families-tax-cuts-individuals-and-workers) |

Tax, legal, and financial information here is educational only. Confirm current rules on IRS.gov and with a qualified preparer. The site is **not affiliated** with Uber, Lyft, or any other platform.

Country-specific rates, quarterly dates, currency, platforms, and state agency links live in `js/config.js`. UI translations live in `js/i18n/*.js`. Adding another country or language later should not require rewriting the calculators.

## Tests

```bash
node test/calc.test.js
node test/i18n.test.js
```

Open `/?selftest=1` in a browser to run in-page checks (sample math plus all five languages).

## Privacy

No signup. No server of your data. Export backups if you change phones.
