DriveI18n.register("es", {
  meta: { name: "Spanish", native: "Español", dir: "ltr", htmlLang: "es" },
  brand: {
    name: "Every Mile Pays",
    tagline: "Registra cada milla. Quédate con más de lo que ganas.",
    short: "Registra millas, dinero e impuestos en tu teléfono: gratis, sin conexión y solo en tu dispositivo."
  },
  nav: { home: "Inicio", logs: "Registros", tools: "Herramientas", learn: "Aprende", more: "Más", skip: "Saltar al contenido" },
  lang: { label: "Idioma", choose: "Elige tu idioma" },
  common: {
    save: "Guardar", cancel: "Cancelar", add: "Agregar", edit: "Editar", delete: "Eliminar", close: "Cerrar", back: "Atrás", done: "Listo",
    optional: "opcional", notes: "Notas", date: "Fecha", platform: "Plataforma", amount: "Importe", total: "Total", year: "Año",
    hours: "Horas", miles: "Millas", actions: "Acciones", empty: "Todavía no hay nada aquí.", required: "Completa los campos obligatorios.",
    confirmDelete: "¿Eliminar esta entrada?", today: "Hoy", print: "Imprimir", exportJson: "Exportar copia (JSON)", exportCsv: "Exportar CSV",
    importJson: "Importar copia", imported: "Copia importada.", importError: "No se pudo importar ese archivo. Usa una copia JSON de Every Mile Pays.",
    copied: "Copiado.", yes: "Sí", no: "No", vs: "frente a", better: "Mejor este año", source: "Fuente", sources: "Fuentes", learnMore: "Saber más"
  },
  platforms: { uber: "Uber", lyft: "Lyft", doordash: "DoorDash", uber_eats: "Uber Eats", instacart: "Instacart", grubhub: "Grubhub", amazon_flex: "Amazon Flex", spark: "Spark", shipt: "Shipt", other: "Otra" },
  categories: {
    gas: "Gasolina / carga", maintenance: "Mantenimiento", oil: "Cambios de aceite", repairs: "Reparaciones", insurance: "Seguro del auto",
    registration: "Registro / placas", car_wash: "Lavado", tires: "Llantas", depreciation: "Depreciación (tu estimado)", lease: "Pago de arrendamiento",
    parking: "Estacionamiento", tolls: "Peajes", car_loan_interest: "Intereses del préstamo del auto (parte de negocio)",
    property_tax: "Impuesto personal sobre el vehículo", phone: "Teléfono / datos", accessories: "Accesorios (soporte, cargador, cámara)",
    supplies: "Suministros", health_insurance: "Seguro médico (trabajo por cuenta propia)", other: "Otro"
  },
  filing: { single: "Soltero(a)", mfj: "Casados que presentan juntos", mfs: "Casados que presentan por separado", hoh: "Cabeza de familia" },
  header: { yearAria: "Año fiscal", langAria: "Idioma" },
  disclaimer: {
    banner: "Solo información: no es asesoría fiscal, legal ni financiera, y no está afiliado a Uber, Lyft ni a ninguna otra plataforma. Las reglas cambian. Confirma las cifras en IRS.gov y con un preparador de impuestos calificado.",
    footer: "Every Mile Pays es una herramienta gratuita y privada. Tus datos permanecen en este navegador salvo que los exportes. No está afiliado a Uber Technologies, Inc., Lyft, Inc. ni a otras plataformas.",
    credit: "Creado por Emerson Grellmann",
    tax: "Las estimaciones de esta página son cifras orientativas, no una declaración de impuestos. No incluyen impuestos estatales o locales, créditos, otros empleos ni todas las reglas federales (por ejemplo, el impuesto adicional de Medicare o la base salarial del Seguro Social si también tienes ingresos W-2)."
  },
  dash: {
    title: "Panel", intro: "Una foto en vivo de este año fiscal a partir de los viajes, ganancias y gastos que registraste.",
    gross: "Bruto + propinas", fees: "Comisiones de la plataforma", payout: "Pago neto", miles: "Millas de negocio",
    mileageValue: "Deducción por millas", profit: "Ganancia neta estimada", perMile: "Pago por milla", perHour: "Pago por hora",
    netPerMile: "Ganancia neta por milla", netPerHour: "Ganancia neta por hora", seTax: "Impuesto SE estimado",
    federal: "Impuesto federal aproximado", setAside: "Reserva sugerida", qbi: "QBI aproximado (20%)",
    compareTitle: "Millaje estándar frente a gastos reales", standard: "Método de millaje estándar", actual: "Método de gastos reales",
    standardHelp: "Millas × la tarifa del IRS de cada fecha, más estacionamiento y peajes de negocio, y la parte de negocio de los intereses del préstamo y del impuesto sobre el vehículo.",
    actualHelp: "La parte de negocio de gasolina, mantenimiento, seguro y otros costos de operación, más estacionamiento, peajes y los mismos intereses e impuestos sobre el vehículo.",
    betterStandard: "El millaje estándar es mayor este año: a muchos conductores les conviene, pero compara ambos métodos antes de presentar.",
    betterActual: "Los gastos reales son mayores este año con las cifras que ingresaste. Debes calificar para usar este método; consulta la guía fiscal.",
    noTotalMiles: "Ingresa en Ajustes el total de millas de este año (negocio + personales) para prorratear los gastos reales según el uso de negocio.",
    platformTitle: "Por plataforma", quarterlyTitle: "Impuesto federal estimado trimestral",
    quarterlyHelp: "Quienes trabajan por cuenta propia y esperan deber 1,000 USD o más de impuesto federal suelen hacer cuatro pagos estimados. Si la fecha cae en fin de semana o día feriado legal, el IRS acepta el siguiente día hábil.",
    quarter: "Período", due: "Fecha de vencimiento", share: "Parte igual de la reserva", past: "Pasado", upcoming: "Próximo",
    stateTitle: "Impuestos estatales", stateHelp: "Este panel estima solo el impuesto federal. La mayoría de los estados —y algunas ciudades— tienen sus propias reglas, formularios y calendarios de pagos estimados.",
    statePick: "Tu estado", stateNone: "Elige tu estado para ver la agencia tributaria oficial.",
    stateHasTax: "{name} tiene impuesto sobre la renta de las personas. Consulta {agency} para pagos estimados, deducciones y si debes hacer estimados estatales además de los federales.",
    stateNoTax: "{name} no cobra un impuesto general sobre sueldos o ingresos por cuenta propia. Aun así podrías deber otros impuestos estatales o locales. Confirma con {agency}.",
    stateNote: "{note}", visitAgency: "Visitar {agency}", empty: "Registra algunos viajes y un turno de ganancias para ver tus números.", ctaLogs: "Agregar un registro"
  },
  logs: {
    title: "Registros", milesTab: "Millas", earnTab: "Ganancias", expTab: "Gastos",
    milesTitle: "Registro de millas",
    milesIntro: "El IRS espera un registro oportuno: fecha, millas y propósito de negocio. Puedes escribir las millas o las lecturas inicial y final del odómetro. Un registro semanal sigue contando como oportuno si cubre esa semana.",
    startOdo: "Odómetro inicial", endOdo: "Odómetro final", purpose: "Propósito de negocio", purposeDefault: "Transporte / entrega — uso de negocio",
    milesValue: "Deducción según tarifa del IRS", rateUsed: "Tarifa usada",
    earnTitle: "Registro de ganancias",
    earnIntro: "Anota lo que muestra la plataforma en el turno: tarifas u ofertas (bruto), propinas y las comisiones que retuvo. Las horas son opcionales, pero activan dólares por hora en el panel.",
    gross: "Tarifas brutas", tips: "Propinas", fees: "Comisiones",
    expTitle: "Registro de gastos",
    expIntro: "Guarda los recibos. Gasolina, mantenimiento, seguro, lavados y costos similares del vehículo se comparan con el millaje estándar: por lo general no puedes deducir ambos en el mismo año. Estacionamiento, peajes, teléfono y suministros son otra categoría; consulta la guía fiscal.",
    category: "Categoría", bizPct: "Porcentaje de negocio", runningMiles: "Millas de este año", runningDeduction: "Deducción por millas de este año"
  },
  tools: {
    title: "Herramientas", tripTab: "Oferta de viaje", cpmTab: "Costo por milla", goalTab: "Meta anual",
    tripTitle: "Rentabilidad del viaje",
    tripIntro: "Antes de aceptar, incluye las millas y el tiempo de recogida, no solo la distancia con el pasajero. Compara la oferta con tu costo real por milla y una meta, por ejemplo 1 USD por milla.",
    offer: "Importe de la oferta", tripMiles: "Millas (incluye recogida)", minutes: "Minutos (incluye recogida)",
    costPerMile: "Tu costo por milla", targetPerMile: "Meta por milla", targetPerHour: "Meta por hora",
    resultMile: "Dólares por milla", resultHour: "Dólares por hora", resultCost: "Costo estimado de conducir", resultNet: "Lo que queda después del costo",
    accept: "Parece un sí: cumple tus metas y cubre tu costo.", decline: "Considera rechazarla: no cumple una meta o no cubre tu costo.",
    missMile: "Por debajo de tu meta por milla.", missHour: "Por debajo de tu meta por hora.", meetMile: "Cumple tu meta por milla.", meetHour: "Cumple tu meta por hora.",
    useSettings: "Usar el costo por milla guardado",
    cpmTitle: "Costo del vehículo por milla",
    cpmIntro: "Este es tu costo real de operación, no la tarifa estándar del IRS. Úsalo como piso en la calculadora de viajes para que una oferta “buena” todavía te pague después de gasolina, desgaste, seguro y el resto de mantener el auto en la calle.",
    milesYear: "Millas que esperas conducir este año (todo uso)", mpg: "Millas por galón (o MPGe)",
    gasPrice: "Precio por galón (o por kWh, con tu propia conversión)", insuranceYear: "Seguro por año", maintenanceYear: "Mantenimiento por año",
    registrationYear: "Registro por año", tiresYear: "Llantas por año (promedio)", depreciationYear: "Depreciación o pérdida de valor por año",
    otherYear: "Otros costos del vehículo por año", gasPerMile: "Combustible por milla", fixedPerMile: "Costos fijos por milla",
    totalPerMile: "Costo total por milla", annualFuel: "Combustible del año", annualTotal: "Todos los costos del vehículo en el año",
    saveAsDefault: "Guardar como mi costo por milla", savedCpm: "Guardado en Ajustes y en la calculadora de viajes.",
    goalTitle: "Planificador de meta anual",
    goalIntro: "Elige una meta de ganancia neta para el año (después de comisiones y del método que se ve mejor en tu panel). La convertimos en una meta semanal y por hora según las horas que planeas trabajar, y medimos el avance con la ganancia registrada de este año.",
    annualGoal: "Meta de ganancia neta del año", weeksWorked: "Semanas que trabajarás", hoursWeek: "Horas por semana",
    weeklyTarget: "Meta neta semanal", hourlyTarget: "Meta neta por hora", remaining: "Pendiente por ganar", progress: "Avance de este año", loggedNet: "Ganancia neta registrada este año"
  },

  book: {
    nav: "El libro",
    title: "Consigue el libro",
    headline: "Every Mile Pays: The Rideshare Driver's Playbook",
    byAuthor: "Por Emerson Grellmann",
    lede: "Una guía complementaria para conductores de transporte y entrega en EE. UU. que quieren números más claros, mejores decisiones en cada viaje y una temporada de impuestos más tranquila. Este sitio sigue siendo gratuito de todos modos.",
    p1: "El Playbook recorre los mismos hábitos en los que se basa este sitio: conocer tu costo real por milla, evaluar una oferta antes de aceptarla, llevar registros que el IRS pueda seguir y tratar los bonos como un extra, no como una razón para aceptar un viaje que te hace perder.",
    bulletsTitle: "Dentro del Playbook",
    bullets: [
      "Cómo fijar un piso personal por milla y por hora",
      "Cómo llevar un registro oportuno de millas y gastos",
      "Cómo pensar en promociones, en usar varias apps y en las millas sin pago",
      "Qué entregarle a tu preparador de impuestos al final del año"
    ],
    buy: "Conseguir el libro",
    coming: "El enlace de compra aparecerá aquí cuando el libro salga a la venta.",
    note: "El libro es una compra aparte. No lo necesitas para usar estas herramientas gratuitas."
  },
  learn: {
    title: "Aprende", intro: "Guías para ganar más y quedarte con más: con fuentes oficiales, no con suposiciones.",
    topics: { deductions: "Deducciones fiscales", hours: "Mejores horarios para conducir", bonuses: "Bonos y promociones", multi: "Usar varias apps", gas: "Ahorrar gasolina", earn: "Ganar más por hora", safety: "Seguridad", health: "Conducir con más comodidad", resources: "Recursos y enlaces", book: "El libro" }
  },
  more: {
    title: "Más", summaryTab: "Resumen de fin de año", backupTab: "Copia de seguridad", settingsTab: "Ajustes", bookTab: "El libro",
    summaryTitle: "Resumen de fin de año para tu preparador de impuestos",
    summaryIntro: "Imprime o guarda como PDF desde el navegador. Esto es una hoja de trabajo, no un formulario fiscal.",
    backupTitle: "Tus datos se quedan en este dispositivo",
    backupIntro: "Every Mile Pays no crea una cuenta ni sube tus registros. Exporta una copia JSON a otro teléfono, o archivos CSV para una hoja de cálculo. Importar un JSON reemplaza los datos guardados en este navegador.",
    settingsTitle: "Ajustes", totalMiles: "Millas totales de este año (negocio + personales)",
    totalMilesHelp: "Se necesita para dividir los gastos reales del vehículo entre uso de negocio y personal.",
    filingStatus: "Estado civil fiscal (para el estimado federal aproximado)",
    onlyIncome: "Tratar estos ingresos de conducir como mis únicos ingresos al estimar el impuesto federal (usa la deducción estándar).",
    country: "País", state: "Estado", privacy: "Privacidad: todas las entradas se guardan solo en el localStorage de este navegador."
  },
  img: {
    hero: "Ilustración de un conductor diverso de transporte compartido revisando una app dentro de un auto al anochecer",
    mileage: "Ilustración de un odómetro amigable y un cuaderno de millas",
    taxes: "Ilustración de recibos organizados y una carpeta de ahorro fiscal",
    calculator: "Ilustración de un conductor comparando una oferta de viaje en una calculadora sencilla",
    safety: "Ilustración de un conductor deteniéndose en un lugar bien iluminado y prestando atención al camino",
    health: "Ilustración de un conductor estirándose junto al auto y sentado con buena postura"
  },
  selftest: { running: "Ejecutando comprobaciones…", pass: "Todas las comprobaciones pasaron.", fail: "Las comprobaciones fallaron." },
  guides: {
    deductions: {
      title: "Deducciones fiscales para conductores de transporte y entrega en EE. UU.",
      lede: "Por lo general eres trabajador por cuenta propia. Informas ingresos y gastos en el Anexo C y calculas el impuesto sobre el trabajo por cuenta propia en el Anexo SE. Esta guía resume reglas publicadas por el IRS para que lleves mejores registros; no sustituye a un preparador de impuestos.",
      sections: [
        { title: "Millaje estándar frente a gastos reales", paragraphs: [
          "En general puedes calcular los gastos del auto con la tarifa estándar por milla o con el método de gastos reales. Si calificas para ambos, el IRS sugiere calcularlos de las dos maneras y usar la deducción mayor (Tema n.º 510).",
          "En 2025 la tarifa estándar de negocio es de 70 centavos por milla. En 2026 es de 72.5 centavos desde el 1 de enero hasta el 30 de junio, y de 76 centavos desde el 1 de julio hasta el 31 de diciembre. Every Mile Pays aplica la tarifa correcta a la fecha de cada viaje.",
          "Si usas la tarifa estándar en un año, por lo general no puedes deducir también gasolina, aceite, reparaciones, mantenimiento, seguro, registro, depreciación o pagos de arrendamiento de ese año. Sí puedes deducir estacionamiento y peajes de negocio. La parte de negocio de los intereses del préstamo del vehículo y de los impuestos sobre la propiedad personal del vehículo se informa por separado en el Anexo C incluso si usas millaje estándar (consulta las instrucciones del Anexo C).",
          "Para usar el millaje estándar en un auto propio, debes elegirlo el primer año en que el auto esté disponible para el negocio. En años posteriores puedes cambiar. En un auto arrendado, si eliges millaje estándar debes usarlo durante todo el arrendamiento (incluidas las renovaciones). No puedes usarlo si operas cinco o más autos al mismo tiempo (una flota), o si reclamaste MACRS, la Sección 179 o depreciación especial sobre el auto."
        ]},
        { title: "Lo que también deducen muchos conductores", paragraphs: [
          "Las comisiones de las plataformas son gastos ordinarios del negocio. Si un Formulario 1099-K muestra un bruto antes de comisiones, igual debes informar tu ingreso correctamente y deducir esas comisiones: el formulario es informativo, no la última palabra sobre tu ganancia.",
          "El teléfono y el plan de datos son deducibles solo en la parte usada para el negocio (por ejemplo mapas, apps de conductor y mensajes). Mantén un porcentaje de uso de negocio razonable.",
          "Suministros como un soporte, un cargador o una cámara del tablero suelen tratarse como suministros o equipo, no como costos de operación cubiertos por la tarifa por milla. Los lavados suelen ser costos de operación del vehículo, así que van en la comparación de gastos reales, no como una deducción extra encima del millaje estándar.",
          "El seguro médico de trabajadores por cuenta propia puede deducirse como un ajuste al ingreso (no en el Anexo C) si calificas. Por lo general no reduce el impuesto SE. Consulta las instrucciones del Formulario 7206 y la Publicación 502, y pregunta a un preparador.",
          "Los dueños elegibles de un negocio individual pueden deducir hasta el 20% del ingreso calificado del negocio (deducción QBI / Sección 199A), con límites. El QBI se reduce por partidas como la parte deducible del impuesto SE y la deducción del seguro médico por cuenta propia."
        ]},
        { title: "Impuesto SE y pagos trimestrales", paragraphs: [
          "La tarifa del impuesto sobre el trabajo por cuenta propia es del 15.3% (12.4% de Seguro Social más 2.9% de Medicare) sobre el 92.35% de las ganancias netas. Por lo general lo debes si esas ganancias netas son de 400 USD o más. En 2026, la parte del Seguro Social aplica a los primeros 184,500 USD de sueldos y ganancias netas combinados. Puedes deducir la mitad equivalente a la del empleador al calcular el ingreso bruto ajustado; esa deducción no reduce el impuesto SE en sí.",
          "Si esperas deber al menos 1,000 USD de impuesto federal después de retenciones y créditos, por lo general debes hacer pagos estimados trimestrales (Formulario 1040-ES). Las fechas legales son el 15 de abril, el 15 de junio, el 15 de septiembre y el 15 de enero del año siguiente. Si la fecha cae en sábado, domingo o feriado legal, el pago llega a tiempo el siguiente día hábil."
        ]},
        { title: "1099-K, 1099-NEC y declarar todos los ingresos", paragraphs: [
          "Todos tus ingresos por conducir son imponibles recibas o no un formulario. Las plataformas pueden enviar un 1099-K, un 1099-NEC o ambos (por ejemplo, pagos de pasajeros frente a algunos incentivos).",
          "Para organizaciones de liquidación de terceros, el umbral federal del 1099-K es más de 20,000 USD y más de 200 transacciones. Las transacciones con tarjeta de pago no tienen un umbral mínimo. Un pagador igual puede enviar un formulario por debajo del umbral, y tu estado puede usar uno más bajo.",
          "Para pagos hechos en 2026, el umbral de información del 1099-NEC por compensación a no empleados es de 2,000 USD (era de 600 USD para pagos hechos antes de 2026). Esa es una regla de información del pagador: no hace que las cantidades menores estén libres de impuestos."
        ]},
        { title: "Los registros que espera el IRS", paragraphs: [
          "Conserva registros adecuados u otra evidencia suficiente. Para un auto, eso suele significar la fecha de cada uso de negocio, las millas, el destino o la zona y el propósito, además del total de millas del año. Un registro llevado en el momento del uso (o cerca) vale más que uno reconstruido en temporada de impuestos. Un registro semanal que cubra esa semana se considera oportuno (Publicación 463).",
          "Guarda los recibos de los gastos y, en general, conserva los registros fiscales al menos tres años después de presentar la declaración que los usa. Fotografía el odómetro al inicio y al final del año. Exporta una copia de Every Mile Pays más de una vez al año."
        ]},
        { title: "Reglas federales más nuevas para consultar con un preparador", paragraphs: [
          "Para los años fiscales 2025 a 2028, el Congreso creó una deducción para ciertas propinas calificadas (hasta 25,000 USD, con límites de ingreso y reglas de ocupación) y otras disposiciones descritas en la página del IRS sobre los recortes fiscales para las familias trabajadoras. Si tus propinas de la plataforma califican depende de la guía vigente del IRS. No asumas que una propina está libre de impuestos: muestra tus registros a un preparador.",
          "Una deducción aparte de 2025–2028 para ciertos intereses de préstamos de autos de uso personal no es lo mismo que deducir la parte de negocio de los intereses en el Anexo C. No mezcles las dos."
        ]}
      ]
    },
    hours: {
      title: "Cuándo suele haber más demanda",
      lede: "Ningún sitio web puede decirte la mejor hora en tu esquina. Estos son patrones que describen las propias plataformas. Revisa las herramientas de demanda de tu app de conductor para tu ciudad: cambian por barrio y por día.",
      sections: [
        { title: "Lo que publica Uber", paragraphs: [
          "El artículo de ayuda para conductores de Uber «When and where are the most riders?» indica que, en la mayoría de las ciudades, los fines de semana, las horas pico y las noches tienen más solicitudes de viaje que otros momentos.",
          "El mismo artículo recomienda usar Hourly Trends (tendencias por hora) en la app de conductor para ver cuándo se espera más movimiento, y el mapa de calor para comparar solicitudes entre zonas. Los multiplicadores del mapa son informativos; Uber dice que la cifra oportuna es la que aparece en tu pantalla."
        ]},
        { title: "Lo que publica Lyft", paragraphs: [
          "El blog para conductores de Lyft sobre cómo el cuándo y el dónde afectan tu pago menciona horarios ocupados habituales: la hora pico de la mañana, la de la tarde, después de eventos especiales como conciertos, y las noches de viernes y sábado.",
          "Menciona zonas ocupadas habituales: centros de la ciudad, campus universitarios, negocios esenciales, bares y restaurantes, y centros de transporte como aeropuertos. Lyft también dice que una alta concentración de pasajeros con relativamente pocos conductores cerca hace más probable un viaje rápido. Eso habla del tiempo ocupado, no es una promesa de mejor pago en cada viaje."
        ]},
        { title: "Aeropuertos, clima y eventos", paragraphs: [
          "Los viajes al aeropuerto suelen exigir un lote de espera designado y una fila de primero en entrar, primero en salir. La ayuda de aeropuertos de Uber indica que la app puede mostrar las horas pico de vuelos esperadas, y que retrasos, cancelaciones y otros factores pueden cambiar el pronóstico. La ayuda de aeropuertos de Lyft permite ver tiempos de espera estimados de la fila y llegadas de vuelos, y advierte que esos datos pueden cambiar.",
          "El blog de ingeniería de Uber sobre pronósticos en aeropuertos describe una demanda que se mueve con horarios de vuelo irregulares, días festivos y el clima, y señala que una fila larga puede dejarte esperando sin garantía de que el siguiente viaje valga la pena. Usa las comparaciones de espera y ganancias de tu app antes de ir al aeropuerto vacío.",
          "Los eventos especiales (conciertos, deportes, festivales) aparecen en la propia lista de horarios ocupados de Lyft. El calendario local sigue importando: la salida de un estadio puede estar muy solicitada y también congestionada. La calculadora de viajes existe para que una oferta con aspecto de tarifa dinámica se juzgue por millas, minutos y tu costo."
        ]}
      ]
    },
    bonuses: {
      title: "Estrategia de bonos y promociones",
      lede: "Las promociones pueden mejorar una buena hora y también convencerte de aceptar viajes poco rentables. Trata cada bono como un extra encima de un viaje que ya tenga sentido.",
      sections: [
        { title: "Lee la oferta completa antes de perseguirla", paragraphs: [
          "Las plataformas ofrecen promociones por tiempo limitado: misiones o desafíos de viajes, rachas, bonos de zona ocupada y ofertas parecidas. Las condiciones suelen limitar qué horas, barrios y tipos de viaje cuentan. Toma una captura de las condiciones cuando aparezca la oferta.",
          "Antes de alargar un turno solo para terminar una misión, estima las millas y las horas extra. Si esos viajes extra quedan por debajo de tu costo por milla o de tu meta por hora, el bono tiene que ser lo bastante grande para cerrar la diferencia. La calculadora de viajes y la de costo por milla existen para esa cuenta.",
          "Algunas promociones o niveles de lealtad pueden pedir una tasa mínima de aceptación o de finalización, o aplicarse solo en cierto modo. Lee las reglas. Una oferta que te obliga a aceptar viajes débiles puede costar más de lo que paga el bono."
        ]},
        { title: "Rachas, zonas y garantías", paragraphs: [
          "Los bonos por racha pagan extra por viajes consecutivos en una ventana. Una recogida larga o un viaje que te deja lejos de la demanda puede romper la economía aunque «mantenga la racha». Evalúa el siguiente aviso incluyendo las millas de recogida.",
          "Las zonas de bono o de alta demanda señalan dónde hay más solicitudes. Son una pista, no una garantía: otros conductores ven el mismo mapa. Combina la zona con tus propios horarios y con la espera que realmente experimentas.",
          "Las garantías de ganancias, si se ofrecen, casi siempre tienen letra pequeña (número de viajes, horas en línea, aceptación, ciudades concretas). Cuenta solo los viajes que las condiciones digan que califican, y lleva tu propio registro para comparar la garantía con lo que habrías ganado de todos modos."
        ]}
      ]
    },
    multi: {
      title: "Usar más de una aplicación",
      lede: "Usar varias apps —estar en línea en más de una plataforma a la vez— es habitual. Bien usado, puede reducir la espera sin pago. Mal usado, genera recogidas tardías, más cancelaciones y un uso peligroso del teléfono.",
      sections: [
        { title: "Lo que dicen las plataformas", paragraphs: [
          "El centro de ayuda de Uber explica que la app de conductor sigue funcionando si cambias a otras apps, y que el GPS continúa para registrar los viajes. También recuerda seguir las leyes locales sobre el uso del teléfono y señala que hablar por teléfono al conducir puede distraer y ser inseguro.",
          "Ni esta guía ni Every Mile Pays son una opinión legal sobre los términos de ninguna plataforma. Las reglas de un programa, los aeropuertos y las ciudades pueden añadir condiciones, incluida la exclusividad durante algunas promociones. Lee los términos que te apliquen."
        ]},
        { title: "Un hábito más seguro", paragraphs: [
          "Ponte en línea en las apps que quieras usar. Cuando aceptes un viaje en una, pausa o sal de línea de inmediato en las demás para que no te asignen un segundo pasajero o un pedido que no puedes tomar.",
          "Mantén un solo viaje activo a la vez. Aceptar una segunda oferta con un pasajero ya en el auto provoca cancelaciones, retrasos y quejas.",
          "Compara las ofertas con dólares por milla y por hora, incluyendo la recogida, no por cuál número grande se ve mejor.",
          "Maneja las apps solo cuando estés estacionado de forma legal o detenido con seguridad. La NHTSA advierte que conducir distraído —incluido el uso del teléfono— es peligroso. Ninguna solicitud extra vale un choque o una multa.",
          "Revisa por separado las métricas de cancelación y aceptación de cada plataforma. Si hacer malabares empieza a dañar esos números o tu puntualidad, usa una sola app hasta que se estabilice."
        ]}
      ]
    },
    gas: {
      title: "Ahorrar dinero en combustible",
      lede: "El combustible suele ser el mayor costo en efectivo de un conductor. Estas cifras vienen del Departamento de Energía de EE. UU. y de EPA FuelEconomy.gov, no del marketing de las plataformas.",
      sections: [
        { title: "Cómo conduces", paragraphs: [
          "FuelEconomy.gov indica que puedes ahorrar entre un 10% y un 40% si evitas el exceso de velocidad y la aceleración y el frenado agresivos. Una hoja complementaria de DOE/EPA afirma que conducir de forma agresiva puede bajar el rendimiento aproximadamente un 15% a 30% en carretera y un 10% a 40% en tráfico con paradas.",
          "Cada 5 mph que conduzcas por encima de 50 mph puede bajar el rendimiento de la gasolina un 7% o más (consejos de FuelEconomy.gov).",
          "Dejar el motor en marcha puede usar entre un cuarto y medio galón por hora. Apaga el motor cuando estés detenido y no en el tráfico, si es seguro y legal. En marcha lenta obtienes cero millas por galón.",
          "El control de crucero en carretera ayuda a mantener una velocidad constante y, en la mayoría de los casos, ahorra gasolina. Combina recados cuando puedas: varios viajes cortos en frío pueden usar más combustible que un viaje más largo de la misma distancia."
        ]},
        { title: "Cómo cuidas el auto", paragraphs: [
          "Mantener las llantas a la presión de la etiqueta de la puerta del conductor o de la guantera (no el máximo del costado de la llanta) puede mejorar el rendimiento alrededor de un 0.6% en promedio, y hasta cerca de un 3% en algunos casos. Una presión baja puede reducir el rendimiento alrededor de un 0.2% por cada 1 psi que baje la presión promedio de las cuatro llantas.",
          "Usar el grado de aceite que recomienda el fabricante puede mejorar el rendimiento un 1% a 2% si venías usando el grado equivocado. Reparar un motor desajustado puede mejorar la eficiencia alrededor de un 4% en promedio.",
          "Unas 100 libras extra pueden bajar el rendimiento alrededor de un 1%. Quita carga innecesaria. Una caja de techo puede reducir el rendimiento entre un 2% y un 17% por la resistencia al aire."
        ]}
      ]
    },
    earn: {
      title: "Ganar más con las horas que ya trabajas",
      lede: "Subir tu ganancia neta por hora suele ser una mezcla de elegir mejor los viajes, conducir menos sin pago y conocer tus costos reales — no de trabajar hasta el agotamiento.",
      sections: [
        { title: "Conoce tu piso antes del primer aviso", paragraphs: [
          "Usa la herramienta de costo por milla y luego fija una meta por milla y por hora en la calculadora de viajes. Incluye millas y minutos de recogida. Una tarifa más alta con una recogida larga sin pago puede pagar menos que una oferta más corta cerca de ti.",
          "Registra bruto, propinas, comisiones, horas y millas después de cada turno — en la misma semana, mientras lo recuerdas. El panel mostrará qué plataforma te paga más después de comisiones y si vas cumpliendo tu meta.",
          "Rechaza viajes que no lleguen a tu piso salvo que tengas una razón clara (un bono que de verdad cubra la diferencia, un destino al que ya ibas o una necesidad de seguridad). Tus propios registros valen más que el rumor de lo que «todos» aceptan."
        ]},
        { title: "Reduce las millas sin pago", paragraphs: [
          "Las millas en vacío —conducir sin una oferta que pague— siguen gastando combustible y tiempo. Después de dejar a alguien, decide si te quedas, te acercas a una zona ocupada de tu app o sales de línea. El mapa de calor es una pista; tu pago reciente por hora es evidencia.",
          "Si una plataforma ya te mantiene ocupado, tal vez no necesites una segunda app en esa hora. Usar varias apps ayuda más cuando esperas, no cuando ya vas en un viaje.",
          "Reubícate solo cuando la espera esperada y la calculadora de viajes aún funcionen. Un viaje largo a la fila del aeropuerto es una apuesta; Uber y Lyft advierten que los pronósticos y los tiempos de espera pueden cambiar."
        ]}
      ]
    },
    safety: {
      title: "Conduce para poder seguir ganando",
      lede: "Un auto dañado o una licencia suspendida terminan el ingreso de la semana. Estos hábitos te protegen, protegen a tus pasajeros y protegen tu capacidad de seguir en la calle.",
      sections: [
        { title: "Teléfonos, cansancio y el camino", paragraphs: [
          "La Administración Nacional de Seguridad del Tráfico en las Carreteras (NHTSA) advierte que conducir distraído —escribir mensajes, usar el teléfono en la mano y otras tareas que apartan la vista o la mente del camino— es peligroso. Detente y estaciona de forma legal antes de cambiar de app, escribir o leer una oferta larga.",
          "Cumple todas las leyes de tránsito y las reglas de tu ciudad sobre dónde pueden esperar los vehículos de transporte compartido. Aeropuertos y estadios suelen tener lotes dedicados; salir de ellos puede costarte el lugar en la fila o una multa.",
          "Las plataformas pueden limitar las horas consecutivas de conducción. Usa esos límites como techo, no como meta. Si tienes sueño, sal de línea. Ninguna promoción vale quedarse dormido al volante."
        ]},
        { title: "Seguridad personal", paragraphs: [
          "Comparte el estado del viaje con alguien de confianza cuando esa función esté disponible, y mantén las puertas cerradas hasta confirmar al pasajero. Los puntos de recogida y bajada bien iluminados son más fáciles para todos.",
          "Puedes rechazar o terminar un viaje que se sienta inseguro, siguiendo el proceso de seguridad de la plataforma. Confía en ese instinto.",
          "Una cámara del tablero, donde sea legal en tu estado, puede protegerte en una disputa. Revisa las leyes de consentimiento para grabar audio antes de confiar en el sonido."
        ]}
      ]
    },
    health: {
      title: "Horas más cómodas en el auto",
      lede: "Pasar muchas horas sentado puede ser incómodo. Las ideas siguientes son consejos generales de ergonomía y comodidad al conducir: no son asesoría médica, un diagnóstico ni un plan de tratamiento. Si vives con dolor o con otra condición de salud, habla con un profesional autorizado sobre lo que es seguro para ti.",
      sections: [
        { title: "Postura y pausas", paragraphs: [
          "Siéntate con las caderas lo más atrás posible en el asiento. Un cojín lumbar pequeño o una toalla enrollada en la parte baja de la espalda ayuda a algunos conductores a mantenerse más erguidos. Mantén las rodillas ligeramente flexionadas y las caderas aproximadamente al nivel de las rodillas, o un poco más alto, si el auto lo permite.",
          "Sujeta el volante con los hombros relajados. Ajusta los espejos para no torcerte al ver el tráfico. Saca la billetera del bolsillo trasero para que el asiento te sostenga de manera uniforme.",
          "Cuando sea seguro, baja en una parada de combustible o después de dejar a alguien y mueve la espalda, las caderas y las piernas un minuto. Las pausas cortas y regulares suelen sentirse mejor que una jornada larguísima sin parar.",
          "Ten agua a mano y fíjate si te pones rígido, entumecido o inusualmente cansado: esas son razones para pausar, no para «aguantar» una misión. Nada de esto afirma que un estiramiento o un cojín trate o cure el dolor."
        ]}
      ]
    },
    resources: {
      title: "Recursos oficiales",
      lede: "Fuentes primarias usadas en Every Mile Pays. Ábrelas cuando quieras la regla misma, no un resumen.",
      groups: [
        { title: "Internal Revenue Service", links: [
          { label: "Tarifas estándar por milla", url: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
          { label: "IR-2025-128 (72.5¢ en la primera mitad de 2026)", url: "https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents" },
          { label: "Aviso 2026-10 (PDF)", url: "https://www.irs.gov/pub/irs-drop/n-26-10.pdf" },
          { label: "Aviso 2025-05 (PDF, tarifas de 2025)", url: "https://www.irs.gov/pub/irs-drop/n-25-05.pdf" },
          { label: "Boletín 2026-29 (tarifa de 76¢ a mitad de año)", url: "https://www.irs.gov/irb/2026-29_IRB" },
          { label: "Tema n.º 510, Uso del auto para negocios", url: "https://www.irs.gov/taxtopics/tc510" },
          { label: "Publicación 463, Gastos de viaje, regalos y auto", url: "https://www.irs.gov/publications/p463" },
          { label: "Instrucciones del Anexo C", url: "https://www.irs.gov/instructions/i1040sc" },
          { label: "Impuesto sobre el trabajo por cuenta propia", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
          { label: "Instrucciones del Anexo SE", url: "https://www.irs.gov/instructions/i1040sse" },
          { label: "Preguntas frecuentes sobre el impuesto estimado y fechas", url: "https://www.irs.gov/faqs/estimated-tax" },
          { label: "Acerca del Formulario 1040-ES", url: "https://www.irs.gov/forms-pubs/about-form-1040-es" },
          { label: "Deducción por ingreso calificado del negocio", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" },
          { label: "Preguntas frecuentes del Formulario 1099-K", url: "https://www.irs.gov/newsroom/form-1099-k-faqs-general-information" },
          { label: "Umbrales de declaración informativa (1099-NEC 2,000 USD en 2026)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return" },
          { label: "Recortes fiscales para las familias trabajadoras", url: "https://www.irs.gov/newsroom/working-families-tax-cuts-individuals-and-workers" },
          { label: "Publicación 334, Guía fiscal para pequeños negocios", url: "https://www.irs.gov/publications/p334" },
          { label: "Tema n.º 305, Llevar registros", url: "https://www.irs.gov/taxtopics/tc305" }
        ]},
        { title: "Combustible y conducción", links: [
          { label: "Consejos de rendimiento de FuelEconomy.gov", url: "https://www.fueleconomy.gov/m/tips.shtml" },
          { label: "FuelEconomy.gov — mantener el vehículo en forma", url: "https://www.fueleconomy.gov/feg/maintain.jsp" },
          { label: "Hoja de consejos DOE/EPA para ahorrar gasolina (PDF)", url: "https://www.fueleconomy.gov/feg/toolkit/pdfs/fuel_tips/2026-G03039-FEG-Gas-Tips.pdf" },
          { label: "NHTSA — conducir distraído", url: "https://www.nhtsa.gov/risky-driving/distracted-driving" }
        ]},
        { title: "Ayuda para conductores de las plataformas", links: [
          { label: "Uber: cuándo y dónde hay más pasajeros", url: "https://help.uber.com/en/driving-and-delivering/article/when-and-where-are-the-most-riders?nodeId=456fcc51-39ad-4b7d-999d-6c78c3a388bf" },
          { label: "Uber: conducir en el aeropuerto", url: "https://help.uber.com/driving-and-delivering/article/driving-at-the-airport?nodeId=1c8143ff-da32-46e6-b18d-254b9511efe0" },
          { label: "Uber: usar otras apps estando en línea", url: "https://help.uber.com/en/driving-and-delivering/article/can-i-use-other-apps-or-receive-personal-calls-while-online?nodeId=224190dc-9df8-4d5c-b836-3f33f3a9e061" },
          { label: "Lyft: cómo el cuándo y el dónde afectan tu pago", url: "https://www.lyft.com/hub/posts/how-when-and-where-you-drive-affects-your-pay" },
          { label: "Lyft: solicitudes FIFO en el aeropuerto", url: "https://help.lyft.com/hc/en-us/all/articles/115012922787-Receiving-Airport-FIFO-pickup-requests" }
        ]}
      ]
    }
  }
});
