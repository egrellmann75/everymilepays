DriveI18n.register("zh", {
  meta: { name: "Chinese", native: "中文", dir: "ltr", htmlLang: "zh-CN" },
  brand: {
    name: "Every Mile Pays",
    tagline: "记下每一英里，把更多收入留在自己手里。",
    short: "在手机上记录里程、收入和税务——免费、可离线，数据只留在你的设备上。"
  },
  nav: { home: "首页", logs: "记录", tools: "工具", learn: "学习", more: "更多", skip: "跳到正文" },
  lang: { label: "语言", choose: "选择语言" },
  common: {
    save: "保存", cancel: "取消", add: "添加", edit: "编辑", delete: "删除", close: "关闭", back: "返回", done: "完成",
    optional: "选填", notes: "备注", date: "日期", platform: "平台", amount: "金额", total: "合计", year: "年份",
    hours: "小时", miles: "英里", actions: "操作", empty: "这里还没有内容。", required: "请填写必填项。",
    confirmDelete: "删除这条记录？", today: "今天", print: "打印", exportJson: "导出备份（JSON）", exportCsv: "导出 CSV",
    importJson: "导入备份", imported: "备份已导入。", importError: "无法导入该文件。请使用 Every Mile Pays 的 JSON 备份。",
    copied: "已复制。", yes: "是", no: "否", vs: "对比", better: "今年更有利", source: "来源", sources: "来源", learnMore: "了解更多"
  },
  platforms: { uber: "Uber", lyft: "Lyft", doordash: "DoorDash", uber_eats: "Uber Eats", instacart: "Instacart", grubhub: "Grubhub", amazon_flex: "Amazon Flex", spark: "Spark", shipt: "Shipt", other: "其他" },
  categories: {
    gas: "汽油 / 充电", maintenance: "保养", oil: "机油更换", repairs: "维修", insurance: "车辆保险",
    registration: "注册 / 车牌", car_wash: "洗车", tires: "轮胎", depreciation: "折旧（自行估算）", lease: "租赁付款",
    parking: "停车费", tolls: "过路费", car_loan_interest: "车贷利息（生意用途部分）",
    property_tax: "车辆财产税", phone: "手机 / 流量", accessories: "配件（支架、充电器、行车记录仪）",
    supplies: "耗材", health_insurance: "医疗保险（自雇）", other: "其他"
  },
  filing: { single: "单身", mfj: "已婚合并申报", mfs: "已婚分别申报", hoh: "户主" },
  header: { yearAria: "纳税年度", langAria: "语言" },
  disclaimer: {
    banner: "仅供参考——不构成税务、法律或财务建议，亦与 Uber、Lyft 或任何其他平台无关。税法会调整。请以 IRS.gov 和合格报税人为准。",
    footer: "Every Mile Pays 是免费的私人工具。除非你主动导出，数据只保存在本浏览器中。与 Uber Technologies, Inc.、Lyft, Inc. 或其他零工平台均无关联。",
    credit: "由 Emerson Grellmann 创建",
    tax: "本页估算仅供规划，不是报税表。其中不包括州税或地方所得税、税收抵免、其他工作收入，也无法覆盖全部联邦规则（例如额外 Medicare 税，或你同时有 W-2 工资时的社会保障工资基数）。"
  },
  dash: {
    title: "总览", intro: "根据你记录的行程、收入和支出，实时查看本纳税年度的情况。",
    gross: "总额 + 小费", fees: "平台佣金", payout: "实际到账", miles: "生意用途里程",
    mileageValue: "里程扣除额", profit: "估计净利润", perMile: "每英里到账", perHour: "每小时到账",
    netPerMile: "每英里净利润", netPerHour: "每小时净利润", seTax: "估计自雇税",
    federal: "大致联邦所得税", setAside: "建议预留税款", qbi: "大致 QBI（20%）",
    compareTitle: "标准里程法与实际费用法", standard: "标准里程法", actual: "实际费用法",
    standardHelp: "英里数 × 该日期适用的 IRS 费率，再加上生意用途的停车费、过路费，以及车贷利息和车辆财产税中的生意份额。",
    actualHelp: "汽油、保养、保险等车辆运营成本中的生意份额，再加上停车费、过路费，以及同样的利息与财产税项目。",
    betterStandard: "今年标准里程法的扣除额更大——不少司机这样更划算，但报税前请两种方法都算一遍。",
    betterActual: "按你输入的数字，今年实际费用法更大。使用该方法需要符合资格，请参阅税务指南。",
    noTotalMiles: "请在设置中填写今年的总行驶里程（生意 + 私人），以便按生意使用比例分摊实际车辆费用。",
    platformTitle: "按平台", quarterlyTitle: "联邦预估税（季度）",
    quarterlyHelp: "自雇人士如果预计扣除预扣和抵免后仍欠联邦税 1,000 美元或以上，一般需要分四次缴纳预估税。若到期日适逢周末或法定假日，IRS 将下一个工作日视为按时。",
    quarter: "期间", due: "到期日", share: "预留税款的平均份额", past: "已过", upcoming: "即将到期",
    stateTitle: "州税", stateHelp: "本总览只估算联邦税。大多数州——以及一些城市——有各自的规则、表格和预估税日历。",
    statePick: "你所在的州", stateNone: "选择你的州以查看官方税务机关。",
    stateHasTax: "{name} 征收个人所得税。请向 {agency} 查询预估税、扣除项目，以及除联邦预估税外是否还需要缴纳州预估税。",
    stateNoTax: "{name} 不对工资或自雇收入征收普遍所得税。你仍可能需要缴纳其他州税或地方税。请向 {agency} 确认。",
    stateNote: "{note}", visitAgency: "访问 {agency}", empty: "先记录几段行程和一个班次的收入，即可看到数字。", ctaLogs: "添加记录"
  },
  logs: {
    title: "记录", milesTab: "里程", earnTab: "收入", expTab: "支出",
    milesTitle: "里程记录",
    milesIntro: "IRS 希望你及时记账：日期、英里数和生意目的。你可以输入英里数，或填写起止里程表读数。按周补记、且覆盖该周的行程，仍视为及时。",
    startOdo: "起始里程表", endOdo: "结束里程表", purpose: "生意目的", purposeDefault: "网约车 / 外卖配送 — 生意用途",
    milesValue: "按 IRS 费率计算的扣除额", rateUsed: "所用费率",
    earnTitle: "收入记录",
    earnIntro: "按平台在该班次显示的内容填写：车费或报价（总额）、小费，以及平台扣留的佣金。工时为选填，但填写后总览页才能显示每小时收入。",
    gross: "车费总额", tips: "小费", fees: "平台佣金",
    expTitle: "支出记录",
    expIntro: "请保存收据。汽油、保养、保险、洗车等车辆成本会与标准里程费率比较——同一年通常不能两种方法都用。停车费、过路费、手机和耗材属于不同类别，详见税务指南。",
    category: "类别", bizPct: "生意用途占比", runningMiles: "本年度英里数", runningDeduction: "本年度里程扣除额"
  },
  tools: {
    title: "工具", tripTab: "行程报价", cpmTab: "每英里成本", goalTab: "年度目标",
    tripTitle: "行程盈亏",
    tripIntro: "接单前，请把接客里程和时间算进去，而不只是载客或送达距离。把报价与你的真实每英里成本以及目标（例如每英里 1 美元）比较。",
    offer: "报价金额", tripMiles: "英里（含接客）", minutes: "分钟（含接客）",
    costPerMile: "你的每英里成本", targetPerMile: "每英里目标", targetPerHour: "每小时目标",
    resultMile: "每英里美元", resultHour: "每小时美元", resultCost: "估计驾驶成本", resultNet: "扣除驾驶成本后剩余",
    accept: "看起来可以接——达到了你的目标并覆盖成本。", decline: "可考虑拒绝——未达到目标，或无法覆盖成本。",
    missMile: "低于你的每英里目标。", missHour: "低于你的每小时目标。", meetMile: "达到你的每英里目标。", meetHour: "达到你的每小时目标。",
    useSettings: "使用已保存的每英里成本",
    cpmTitle: "车辆每英里成本",
    cpmIntro: "这是你真实的运营成本，不是 IRS 标准里程费率。把它当作行程计算器的底线，这样“看起来不错”的报价在扣除油费、损耗、保险和养车成本后，仍然能赚钱。",
    milesYear: "预计今年行驶的总英里（全部用途）", mpg: "每加仑英里数（或 MPGe）",
    gasPrice: "每加仑价格（或按每千瓦时自行换算）", insuranceYear: "每年保险", maintenanceYear: "每年保养",
    registrationYear: "每年注册费", tiresYear: "每年轮胎（平均值）", depreciationYear: "每年折旧或贬值",
    otherYear: "每年其他车辆费用", gasPerMile: "每英里燃料成本", fixedPerMile: "每英里固定成本",
    totalPerMile: "每英里总成本", annualFuel: "全年燃料", annualTotal: "全年车辆总成本",
    saveAsDefault: "保存为我的每英里成本", savedCpm: "已保存到设置和行程计算器。",
    goalTitle: "年度目标规划",
    goalIntro: "为今年设定一个净利润目标（扣除平台佣金，并采用总览中看起来更有利的方法）。我们会按你计划工作的时间折算成每周和每小时目标，并用今年已记录的利润衡量进度。",
    annualGoal: "全年净利润目标", weeksWorked: "计划工作的周数", hoursWeek: "每周小时数",
    weeklyTarget: "每周净目标", hourlyTarget: "每小时净目标", remaining: "仍需赚取", progress: "今年进度", loggedNet: "今年已记录的净利润"
  },
  book: {
    nav: "电子书",
    title: "获取本书",
    headline: "Every Mile Pays: The Rideshare Driver's Playbook",
    byAuthor: "作者：Emerson Grellmann",
    lede: "这是写给美国网约车和配送司机的配套指南，帮助你把数字算清楚、更明智地决定是否接单，并让报税季更从容。无论买不买书，本网站都保持免费。",
    p1: "《Playbook》讲解的，正是本站所围绕的习惯：了解真实的每英里成本、接单前先判断报价、留下 IRS 能够核对的记录，并把奖金当作额外收入——而不是接受亏本单的理由。",
    bulletsTitle: "书中内容",
    bullets: [
      "如何设定自己的每英里和每小时底线",
      "如何及时记录里程和支出",
      "如何看待促销、多平台接单以及空驶里程",
      "年终应交给报税人哪些材料"
    ],
    buy: "获取本书",
    coming: "书籍开售后，购买链接将显示在这里。",
    note: "电子书需另行购买。使用这些免费工具不必买书。"
  },
  learn: {
    title: "学习", intro: "关于如何多赚、多留——依据官方来源，而不是猜测。",
    topics: { deductions: "税务扣除", hours: "较好的出车时段", bonuses: "奖金与促销", multi: "同时使用多个应用", gas: "节省油费", earn: "提高每小时收入", safety: "安全", health: "更舒适地驾驶", resources: "资源与链接", book: "电子书" }
  },
  more: {
    title: "更多", summaryTab: "年终汇总", backupTab: "备份", settingsTab: "设置", bookTab: "电子书",
    summaryTitle: "给报税人的年终汇总",
    summaryIntro: "可通过浏览器打印或另存为 PDF。这是工作底稿，不是税表。",
    backupTitle: "你的数据留在这台设备上",
    backupIntro: "Every Mile Pays 不会创建账户，也不会上传你的记录。你可以导出 JSON 备份到另一部手机，或导出可在表格软件中打开的 CSV。导入 JSON 会替换当前浏览器中保存的数据。",
    settingsTitle: "设置", totalMiles: "今年行驶的总英里（生意 + 私人）",
    totalMilesHelp: "用于按生意使用比例分摊实际车辆费用。",
    filingStatus: "报税身份（用于大致的联邦税估算）",
    onlyIncome: "估算联邦税时，将这份驾驶收入视为我的唯一收入（会使用标准扣除额）。",
    country: "国家", state: "州", privacy: "隐私：所有记录仅保存在本浏览器的 localStorage 中。"
  },
  img: {
    hero: "插画：一位多元背景的网约车司机在黄昏的车内查看手机应用",
    mileage: "插画：友好的里程表和里程记录本",
    taxes: "插画：整理好的收据和税务节省文件夹",
    calculator: "插画：司机用简单的计算器比较一笔行程报价",
    safety: "插画：司机在光线充足处停车，并专注于路面",
    health: "插画：司机在车旁伸展，并以良好坐姿坐好"
  },
  selftest: { running: "正在检查…", pass: "全部检查通过。", fail: "检查未通过。" },
  guides: {
    deductions: {
      title: "美国网约车和配送司机的税务扣除",
      lede: "你通常属于自雇人士，需在附表 C 上申报收入和支出，并在附表 SE 上计算自雇税。本指南概括 IRS 已公布的规则，帮助你把账记得更好——不能替代专业报税人。",
      sections: [
        { title: "标准里程法与实际费用法", paragraphs: [
          "车辆费用一般可用标准里程费率或实际费用法计算。如果两种都符合资格，IRS 建议两种都算，并采用较大的扣除额（主题 510）。",
          "2025 年生意用途的标准里程费率是每英里 70 美分。2026 年 1 月 1 日至 6 月 30 日为每英里 72.5 美分，7 月 1 日至 12 月 31 日为每英里 76 美分。Every Mile Pays 会按每段行程的日期套用正确费率。",
          "如果某一年使用标准里程费率，通常不能再扣除当年的汽油、机油、维修、保养、保险、注册、折旧或租赁付款。生意用途的停车费和过路费仍可扣除。即使使用标准里程法，车辆贷款利息和车辆个人财产税中的生意部分也要在附表 C 上单独申报（见附表 C 说明）。",
          "对于自有车辆，必须在该车首次可用于生意的当年选择标准里程法。之后年份可以更换方法。对于租赁车辆，一旦选择标准里程法，整个租期（包括续租）都必须沿用。若同时经营五辆或以上车辆（车队），或已对该车申报 MACRS、第 179 条或特殊折旧，则不能使用标准里程法。"
        ]},
        { title: "许多司机还会扣除的项目", paragraphs: [
          "平台佣金是普通且必要的经营费用。如果 1099-K 显示的是扣费前的总额，你仍应正确申报收入并扣除这些费用——该表格只是信息申报，不是利润的最终结论。",
          "手机和流量套餐仅就可归于生意的部分扣除（例如地图、司机应用和乘客消息）。请保持合理的生意使用比例。",
          "手机支架、充电器或行车记录仪等通常视为耗材或设备，而不是已包含在里程费率中的车辆运营成本。洗车一般属于车辆运营成本，应纳入实际费用比较，而不是在标准里程法之上再额外扣除。",
          "如果符合条件，自雇医疗保险可作为收入调整扣除（不在附表 C 上）。它通常不会降低自雇税。请参阅表格 7206 说明和出版物 502，并向报税人咨询。",
          "符合条件的独资经营者最多可扣除合格经营收入的 20%（第 199A 条 / QBI 扣除），但受限制。QBI 会因自雇税可扣除部分以及自雇医疗保险扣除等项目而减少。"
        ]},
        { title: "自雇税与季度付款", paragraphs: [
          "自雇税税率为 15.3%（社会保障 12.4% 加 Medicare 2.9%），税基是净收入的 92.35%。净收入达到 400 美元或以上时，一般需要缴纳。2026 年，社会保障部分适用于工资与净收入合计的前 184,500 美元。计算调整后总收入时，可以扣除相当于雇主承担的那一半自雇税——该扣除不会减少自雇税本身。",
          "如果预计在预扣和抵免之后仍欠联邦税至少 1,000 美元，一般必须按季度缴纳预估税（表格 1040-ES）。法定到期日是 4 月 15 日、6 月 15 日、9 月 15 日，以及次年 1 月 15 日。若日期适逢周六、周日或法定假日，则下一个工作日视为按时。"
        ]},
        { title: "1099-K、1099-NEC 以及申报全部收入", paragraphs: [
          "无论是否收到表格，你的驾驶收入都应纳税。平台可能发送 1099-K、1099-NEC，或两者都发（例如乘客付款与部分奖励）。",
          "对于第三方结算组织，联邦 1099-K 门槛是超过 20,000 美元且超过 200 笔交易。支付卡交易没有最低门槛。付款方仍可能在低于门槛时寄表，你所在的州也可能采用更低门槛。",
          "对于 2026 年支付的款项，非雇员报酬的 1099-NEC 报告门槛是 2,000 美元（2026 年之前支付的款项为 600 美元）。这是付款方的报告规则——并不意味着较小金额可以免税。"
        ]},
        { title: "IRS 期望的记录", paragraphs: [
          "请保存充分的记录或其他足够证据。对于车辆，通常包括每次生意使用的日期、英里数、目的地或区域、生意目的，以及全年总英里数。接近使用当时所作的记录，比报税时补做的更有说服力。覆盖该周的每周记录视为及时（出版物 463）。",
          "请保存支出收据，并且一般在使用这些扣除的报税表提交后至少保存三年。拍摄年初和年末里程表。每年多次导出 Every Mile Pays 备份。"
        ]},
        { title: "应向报税人咨询的较新联邦规则", paragraphs: [
          "在 2025 至 2028 纳税年度，国会设立了针对某些合格小费的扣除（最高 25,000 美元，设有收入递减和职业规则），以及 IRS「工薪家庭减税」页面所述的其他个人条款。你的平台小费是否符合条件，取决于现行 IRS 指引。不要假定小费免税——请把记录交给报税人审阅。",
          "2025–2028 年间另有一项针对部分个人用途车贷利息的扣除，与在附表 C 上扣除车贷利息的生意份额不是一回事。请勿混淆。"
        ]}
      ]
    },
    hours: {
      title: "需求通常更高的时段",
      lede: "没有网站能告诉你你家附近哪一小时最好。以下是平台自己描述的规律。请查看司机应用里面向你所在城市的需求工具——它们会随街区和日期变化。",
      sections: [
        { title: "Uber 公布的内容", paragraphs: [
          "Uber 司机帮助文章《When and where are the most riders?》指出，在大多数城市，周末、高峰时段和晚间的行程请求多于其他时间。",
          "同一篇文章建议司机使用应用中的 Hourly Trends（小时趋势）查看城市预计最繁忙的时段，并用热力图比较不同区域的请求。地图上的倍数仅供参考；Uber 表示屏幕上显示的金额才是即时数字。"
        ]},
        { title: "Lyft 公布的内容", paragraphs: [
          "Lyft 司机博客在讨论何时何地出车如何影响收入时，列出常见忙碌时段：早高峰、晚高峰、音乐会等特殊活动结束后，以及周五和周六晚上。",
          "它列出的常见忙碌区域包括市中心、大学校园、民生商家、酒吧和餐厅，以及机场等交通枢纽。Lyft 还表示，附近乘客多而司机相对较少时，更快匹配的可能性更高。这说的是载客时间，并不是每单都会更高收入的承诺。"
        ]},
        { title: "机场、天气和活动", paragraphs: [
          "机场单通常需要在指定候车场排队，并采用先到先得。Uber 的机场帮助页指出，司机应用可以显示预计的航班高峰时段，而且延误、取消和其他因素可能改变预测。Lyft 的机场帮助页让司机查看估计排队等待时间和即将抵达的航班，并注明这些数据可能变化。",
          "Uber 工程博客在讨论机场预测时，描述需求会随不规律的航班时刻、节假日和天气变动，并指出排队很长时，司机可能等待很久，而下一段行程未必值得等待。去机场空驶之前，先看应用里的等待时间和收入对比。",
          "特殊活动（演唱会、体育赛事、节庆）出现在 Lyft 自己列出的忙碌时段中。本地活动日历仍然重要：体育场散场可能很忙，也可能严重堵车。行程计算器的作用，就是让看起来像动态加价的报价，仍然按英里、分钟和你的成本来衡量。"
        ]}
      ]
    },
    bonuses: {
      title: "奖金与促销策略",
      lede: "促销既能抬高本来不错的一小时，也可能让你接上不赚钱的单。请把每项奖金当作“已经合理的行程之上的额外收入”。",
      sections: [
        { title: "追奖励之前先读完整条款", paragraphs: [
          "平台会推出限时促销——行程任务或挑战、连单奖励、热区奖金等。条款通常限制哪些时段、街区和行程类型算数。优惠出现时，请截图保存条款。",
          "如果只是为了做完任务而延长班次，先估算额外的英里数和小时数。若这些额外行程低于你的每英里成本或每小时目标，奖金必须足够大才能补上缺口。行程计算器和每英里成本工具就是为此设计的。",
          "有些促销或忠诚等级可能要求最低接单率或完成率，或仅在特定模式生效。请阅读活动规则。如果一项优惠迫使你接受差单，损失可能大于奖金。"
        ]},
        { title: "连单、热区和保底", paragraphs: [
          "连单奖金会在时间窗口内为连续行程支付额外奖励。较长的接客距离，或把你带离需求区的行程，即使“保住了连单”，经济账也可能算不过来。判断下一单时，请把接客英里算进去。",
          "奖金区或忙碌区标出请求较多的地方。这只是提示，不是保证——其他司机也看得到同一张地图。请把热区与你自己的时段、以及你实际感受到的等待结合起来。",
          "收入保底（如有）几乎总有细则（单量、在线时长、接单率、特定城市）。只统计条款确认符合条件的行程，并保留自己的记录，以便把保底与你本来就能赚到的收入相比较。"
        ]}
      ]
    },
    multi: {
      title: "同时使用多个应用",
      lede: "多平台接单——同时在一个以上的平台上线——很常见。用得谨慎，可以减少无酬等待；用得草率，则会造成迟到接客、更多取消，以及不安全的手机使用。",
      sections: [
        { title: "平台怎么说", paragraphs: [
          "Uber 帮助中心说明，即使你切换到其他应用，司机应用仍会继续运行，并且 GPS 会继续记录行程。它也提醒司机遵守当地关于手机使用的法律，并指出开车时打电话可能分心且不安全。",
          "本指南和 Every Mile Pays 都不是对任何平台条款的法律意见。活动规则、机场和城市可能附加额外条件，包括某些促销期间的排他要求。请阅读适用于你的条款。"
        ]},
        { title: "更安全的习惯", paragraphs: [
          "在你想用的应用上上线。当在其中一个应用接单后，立即暂停或让其他应用下线，以免被派发你无法承接的第二位乘客或配送单。",
          "同一时间只保留一单进行中的行程。车上已有乘客时再接第二单，会导致取消、延误和投诉。",
          "用包含接客在内的每英里和每小时美元来比较报价，而不是看哪个标题数字更大。",
          "只有在合法停车或安全停下时再操作应用。NHTSA 警告分心驾驶——包括使用手机——十分危险。多接一单不值得换来事故或罚单。",
          "分别关注各平台的取消率和接单率。如果同时操作开始损害这些指标或准时记录，就先只用一个应用，直到情况稳定。"
        ]}
      ]
    },
    gas: {
      title: "节省燃料开支",
      lede: "燃料往往是司机最大的现金成本。以下数据来自美国能源部和 EPA 的 FuelEconomy.gov，而不是平台营销材料。",
      sections: [
        { title: "你怎么开", paragraphs: [
          "FuelEconomy.gov 指出，避免超速以及猛加速、猛刹车，可节省 10% 到 40%。DOE/EPA 的配套提示还写道，激烈驾驶在公路速度下可能使油耗表现下降约 15% 至 30%，在走走停停的交通中下降约 10% 至 40%。",
          "时速每超过 50 英里每小时 5 英里，油耗表现就可能下降 7% 或更多（FuelEconomy.gov 省油提示）。",
          "怠速大约每小时消耗四分之一到半加仑燃油。在安全且合法的情况下，停车且不在车流中时应熄火。怠速的每加仑英里数为零。",
          "在公路上使用巡航定速有助于保持稳定车速，多数情况下能省油。尽可能合并行程：多次冷启动的短途，往往比一次驶完相同总距离更费油。"
        ]},
        { title: "你怎么保养车辆", paragraphs: [
          "把轮胎充到驾驶侧车门贴纸或手套箱标签上的建议气压（不要用轮胎侧面印的最大气压），平均大约可提高 0.6% 的油耗表现，某些情况下最高约 3%。四条轮胎平均气压每下降 1 psi，油耗表现约降低 0.2%。",
          "使用制造商建议的机油等级，若你之前用错等级，油耗表现可提高 1% 到 2%。修好失调的发动机，效率平均大约可提高 4%。",
          "额外 100 磅大约会降低 1% 的油耗表现。去掉不必要的载重。车顶行李箱会增加阻力，可能使燃油经济性下降 2% 到 17%。"
        ]}
      ]
    },
    earn: {
      title: "让已经付出的工时赚得更多",
      lede: "提高每小时净利润，通常靠更好的选单、更少的无酬驾驶，以及了解真实成本——而不是把自己做到精疲力尽。",
      sections: [
        { title: "在第一单到来前就知道底线", paragraphs: [
          "先使用每英里成本工具，再在行程计算器中设定每英里和每小时目标。把接客英里和分钟算进去。一笔金额更大、但接客很长且无酬的单，可能还不如附近一笔更短的报价。",
          "每个班次结束后记录总额、小费、佣金、工时和英里——最好在同一周内、记忆还清楚时完成。总览随后会显示扣费后哪个平台付得更多，以及你是否达到目标。",
          "除非有明确理由（奖金确实能补上缺口、本来就要去那个方向，或出于安全需要离开），否则拒绝低于底线的行程。你自己的记录，比“大家都接”的传闻更可靠。"
        ]},
        { title: "减少无酬英里", paragraphs: [
          "空驶英里——没有付费订单时仍在开车——照样消耗燃料和时间。送达后，决定是留在原地、前往应用显示的繁忙区域，还是下线。热力图是线索；你最近的每小时到账才是证据。",
          "如果一个平台已经让你保持载客，那一小时也许不需要第二个应用。多平台接单在等待时最有帮助，而不是行程进行中。",
          "只有在预期等待和行程计算器仍然说得通时才去改换位置。长途开往机场排队是一场赌注；Uber 和 Lyft 都提醒机场预测和等待时间可能变化。"
        ]}
      ]
    },
    safety: {
      title: "安全驾驶，才能持续赚钱",
      lede: "车辆受损或驾照被暂停，这一周的收入也就结束了。以下习惯保护你、保护乘客，也保护你继续上路的能力。",
      sections: [
        { title: "手机、疲劳和路面", paragraphs: [
          "美国国家公路交通安全管理局（NHTSA）警告，分心驾驶——发短信、手持使用手机，以及其他让眼睛或注意力离开路面的事情——十分危险。在切换应用、打字或阅读较长报价之前，请先合法停车。",
          "遵守全部交通法规，以及你所在城市关于网约车等候地点的规定。机场和体育场往往有专用停车场；离开这些地点可能让你失去排队位置或收到罚单。",
          "平台可能限制连续驾驶时长。把这些限制当作上限，而不是目标。如果困倦，就下线。没有任何促销值得让你在方向盘前睡着。"
        ]},
        { title: "人身安全", paragraphs: [
          "若有行程分享功能，请与你信任的人分享行程状态；确认乘客前保持车门上锁。光线充足的上下车地点对每个人都更轻松。",
          "如果行程让你感到不安全，可以按照平台的安全流程拒绝或结束行程。请相信这种直觉。",
          "在本州合法的前提下，行车记录仪可以在争议中保护你。依赖录音之前，请先了解是否需要双方同意才能录音。"
        ]}
      ]
    },
    health: {
      title: "在车里更舒服地度过工时",
      lede: "长时间坐着可能让人不适。以下是关于驾驶姿势和舒适度的一般建议——不是医疗建议、诊断或治疗方案。如果你有疼痛或其他健康状况，请向有执照的临床人员咨询对你安全的做法。",
      sections: [
        { title: "座椅设置与休息", paragraphs: [
          "坐下时尽量让髋部靠向座椅深处。有些司机会用小型腰靠或卷起的毛巾垫在下背部，以便坐得更直。膝盖略微弯曲；如果车辆允许，髋部大致与膝盖齐平或略高。",
          "握住方向盘时放松肩膀。调整后视镜，避免为了看清车流而扭身。不要把钱包放在后口袋，好让座椅均匀承托身体。",
          "在安全的情况下，加油时或送达后下车，活动一下背部、髋部和双腿，哪怕只有一分钟。对大多数人来说，短而规律的暂停，比一口气连开很久更轻松。",
          "把水放在手边，并留意自己是否发僵、发麻或异常疲倦——这些是该停一停的信号，而不是硬撑着做完任务的理由。这里的任何内容都不表示伸展或坐垫可以治疗或治愈疼痛。"
        ]}
      ]
    },
    resources: {
      title: "官方资源",
      lede: "Every Mile Pays 使用的一手来源。若要查看规则原文而不是摘要，请打开这些链接。",
      groups: [
        { title: "美国国税局（IRS）", links: [
          { label: "标准里程费率", url: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
          { label: "IR-2025-128（2026 年上半年 72.5¢）", url: "https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents" },
          { label: "通知 2026-10（PDF）", url: "https://www.irs.gov/pub/irs-drop/n-26-10.pdf" },
          { label: "通知 2025-05（PDF，2025 年费率）", url: "https://www.irs.gov/pub/irs-drop/n-25-05.pdf" },
          { label: "国税收报 2026-29（年中 76¢ 费率）", url: "https://www.irs.gov/irb/2026-29_IRB" },
          { label: "主题 510，车辆的生意用途", url: "https://www.irs.gov/taxtopics/tc510" },
          { label: "出版物 463，差旅、礼品和汽车费用", url: "https://www.irs.gov/publications/p463" },
          { label: "附表 C 说明", url: "https://www.irs.gov/instructions/i1040sc" },
          { label: "自雇税", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
          { label: "附表 SE 说明", url: "https://www.irs.gov/instructions/i1040sse" },
          { label: "预估税常见问题与到期日", url: "https://www.irs.gov/faqs/estimated-tax" },
          { label: "关于表格 1040-ES", url: "https://www.irs.gov/forms-pubs/about-form-1040-es" },
          { label: "合格经营收入扣除", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" },
          { label: "表格 1099-K 常见问题", url: "https://www.irs.gov/newsroom/form-1099-k-faqs-general-information" },
          { label: "信息申报门槛（2026 年 1099-NEC 为 2,000 美元）", url: "https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return" },
          { label: "工薪家庭减税", url: "https://www.irs.gov/newsroom/working-families-tax-cuts-individuals-and-workers" },
          { label: "出版物 334，小企业税务指南", url: "https://www.irs.gov/publications/p334" },
          { label: "主题 305，记账", url: "https://www.irs.gov/taxtopics/tc305" }
        ]},
        { title: "燃油与驾驶", links: [
          { label: "FuelEconomy.gov 省油提示", url: "https://www.fueleconomy.gov/m/tips.shtml" },
          { label: "FuelEconomy.gov — 保持车辆状态", url: "https://www.fueleconomy.gov/feg/maintain.jsp" },
          { label: "DOE/EPA 省油提示单（PDF）", url: "https://www.fueleconomy.gov/feg/toolkit/pdfs/fuel_tips/2026-G03039-FEG-Gas-Tips.pdf" },
          { label: "NHTSA — 分心驾驶", url: "https://www.nhtsa.gov/risky-driving/distracted-driving" }
        ]},
        { title: "平台司机帮助", links: [
          { label: "Uber：何时何地乘客最多", url: "https://help.uber.com/en/driving-and-delivering/article/when-and-where-are-the-most-riders?nodeId=456fcc51-39ad-4b7d-999d-6c78c3a388bf" },
          { label: "Uber：在机场开车", url: "https://help.uber.com/driving-and-delivering/article/driving-at-the-airport?nodeId=1c8143ff-da32-46e6-b18d-254b9511efe0" },
          { label: "Uber：在线时使用其他应用", url: "https://help.uber.com/en/driving-and-delivering/article/can-i-use-other-apps-or-receive-personal-calls-while-online?nodeId=224190dc-9df8-4d5c-b836-3f33f3a9e061" },
          { label: "Lyft：何时何地出车如何影响收入", url: "https://www.lyft.com/hub/posts/how-when-and-where-you-drive-affects-your-pay" },
          { label: "Lyft：机场 FIFO 接单", url: "https://help.lyft.com/hc/en-us/all/articles/115012922787-Receiving-Airport-FIFO-pickup-requests" }
        ]}
      ]
    }
  }
});
