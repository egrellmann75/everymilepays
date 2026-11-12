DriveI18n.register("pt", {
  meta: { name: "Portuguese", native: "Português", dir: "ltr", htmlLang: "pt-BR" },
  brand: {
    name: "Every Mile Pays",
    tagline: "Registre cada milha. Fique com mais do que você ganha.",
    short: "Registre milhas, dinheiro e impostos no celular — grátis, offline e só no seu aparelho."
  },
  nav: { home: "Início", logs: "Registros", tools: "Ferramentas", learn: "Aprenda", more: "Mais", skip: "Pular para o conteúdo" },
  lang: { label: "Idioma", choose: "Escolha seu idioma" },
  common: {
    save: "Salvar", cancel: "Cancelar", add: "Adicionar", edit: "Editar", delete: "Excluir", close: "Fechar", back: "Voltar", done: "Concluído",
    optional: "opcional", notes: "Observações", date: "Data", platform: "Plataforma", amount: "Valor", total: "Total", year: "Ano",
    hours: "Horas", miles: "Milhas", actions: "Ações", empty: "Ainda não há nada aqui.", required: "Preencha os campos obrigatórios.",
    confirmDelete: "Excluir este lançamento?", today: "Hoje", print: "Imprimir", exportJson: "Exportar cópia (JSON)", exportCsv: "Exportar CSV",
    importJson: "Importar cópia", imported: "Cópia importada.", importError: "Não foi possível importar esse arquivo. Use uma cópia JSON do Every Mile Pays.",
    copied: "Copiado.", yes: "Sim", no: "Não", vs: "versus", better: "Melhor neste ano", source: "Fonte", sources: "Fontes", learnMore: "Saiba mais"
  },
  platforms: { uber: "Uber", lyft: "Lyft", doordash: "DoorDash", uber_eats: "Uber Eats", instacart: "Instacart", grubhub: "Grubhub", amazon_flex: "Amazon Flex", spark: "Spark", shipt: "Shipt", other: "Outra" },
  categories: {
    gas: "Gasolina / recarga", maintenance: "Manutenção", oil: "Trocas de óleo", repairs: "Reparos", insurance: "Seguro do carro",
    registration: "Licenciamento / placas", car_wash: "Lavagem", tires: "Pneus", depreciation: "Depreciação (sua estimativa)", lease: "Parcela de leasing",
    parking: "Estacionamento", tolls: "Pedágios", car_loan_interest: "Juros do financiamento do carro (parte comercial)",
    property_tax: "Imposto sobre a propriedade do veículo", phone: "Telefone / dados", accessories: "Acessórios (suporte, carregador, câmera)",
    supplies: "Materiais", health_insurance: "Plano de saúde (autônomo)", other: "Outro"
  },
  filing: { single: "Solteiro(a)", mfj: "Casados declarando em conjunto", mfs: "Casados declarando em separado", hoh: "Chefe de família" },
  header: { yearAria: "Ano fiscal", langAria: "Idioma" },
  disclaimer: {
    banner: "Apenas informação — não é consultoria fiscal, jurídica ou financeira, e não tem vínculo com Uber, Lyft ou qualquer outra plataforma. As regras mudam. Confirme os valores em IRS.gov e com um preparador de impostos qualificado.",
    footer: "O Every Mile Pays é uma ferramenta gratuita e privada. Seus dados ficam neste navegador, a menos que você os exporte. Não é afiliado à Uber Technologies, Inc., à Lyft, Inc. nem a outras plataformas.",
    credit: "Criado por Emerson Grellmann",
    tax: "As estimativas desta página são números de planejamento, não uma declaração de imposto. Elas não incluem imposto estadual ou local, créditos, outros empregos nem todas as regras federais (por exemplo, o imposto adicional de Medicare ou a base salarial da Previdência Social se você também tiver rendimentos W-2)."
  },
  dash: {
    title: "Painel", intro: "Um retrato ao vivo deste ano fiscal a partir das viagens, ganhos e despesas que você registrou.",
    gross: "Bruto + gorjetas", fees: "Taxas da plataforma", payout: "Repasse líquido", miles: "Milhas comerciais",
    mileageValue: "Dedução por milhas", profit: "Lucro líquido estimado", perMile: "Repasse por milha", perHour: "Repasse por hora",
    netPerMile: "Lucro líquido por milha", netPerHour: "Lucro líquido por hora", seTax: "Imposto SE estimado",
    federal: "Imposto federal aproximado", setAside: "Reserva sugerida", qbi: "QBI aproximado (20%)",
    compareTitle: "Milhagem padrão versus despesas reais", standard: "Método da milhagem padrão", actual: "Método das despesas reais",
    standardHelp: "Milhas × a tarifa do IRS de cada data, mais estacionamento e pedágios comerciais e a parte comercial dos juros do financiamento e do imposto sobre o veículo.",
    actualHelp: "A parte comercial de gasolina, manutenção, seguro e outros custos de operação, mais estacionamento, pedágios e os mesmos juros e impostos sobre o veículo.",
    betterStandard: "A milhagem padrão é maior neste ano — muitos motoristas saem ganhando assim, mas compare os dois métodos antes de declarar.",
    betterActual: "As despesas reais estão maiores neste ano com os números que você informou. É preciso se qualificar para usar este método — veja o guia fiscal.",
    noTotalMiles: "Informe em Configurações o total de milhas deste ano (comerciais + pessoais) para ratear as despesas reais pela porcentagem de uso comercial.",
    platformTitle: "Por plataforma", quarterlyTitle: "Imposto federal estimado trimestral",
    quarterlyHelp: "Autônomos que esperam dever US$ 1.000 ou mais de imposto federal em geral fazem quatro pagamentos estimados. Se o vencimento cair em fim de semana ou feriado legal, o IRS considera em dia o próximo dia útil.",
    quarter: "Período", due: "Vencimento", share: "Cota igual da reserva", past: "Passado", upcoming: "Próximo",
    stateTitle: "Impostos estaduais", stateHelp: "Este painel estima apenas o imposto federal. A maioria dos estados — e algumas cidades — tem regras, formulários e calendários próprios de pagamentos estimados.",
    statePick: "Seu estado", stateNone: "Escolha seu estado para ver o órgão tributário oficial.",
    stateHasTax: "{name} cobra imposto de renda das pessoas físicas. Consulte {agency} sobre pagamentos estimados, deduções e se você precisa fazer estimativas estaduais além das federais.",
    stateNoTax: "{name} não cobra um imposto geral sobre salários ou rendimentos de autônomo. Você ainda pode dever outros impostos estaduais ou locais. Confirme com {agency}.",
    stateNote: "{note}", visitAgency: "Visitar {agency}", empty: "Registre algumas viagens e um turno de ganhos para ver seus números.", ctaLogs: "Adicionar um registro"
  },
  logs: {
    title: "Registros", milesTab: "Milhas", earnTab: "Ganhos", expTab: "Despesas",
    milesTitle: "Registro de milhas",
    milesIntro: "O IRS espera um registro em tempo hábil: data, milhas e finalidade comercial. Você pode digitar as milhas ou as leituras inicial e final do hodômetro. Um registro semanal ainda conta como oportuno se cobrir aquela semana.",
    startOdo: "Hodômetro inicial", endOdo: "Hodômetro final", purpose: "Finalidade comercial", purposeDefault: "Transporte / entrega — uso comercial",
    milesValue: "Dedução pela tarifa do IRS", rateUsed: "Tarifa usada",
    earnTitle: "Registro de ganhos",
    earnIntro: "Anote o que a plataforma mostra no turno: tarifas ou ofertas (bruto), gorjetas e as taxas que reteve. As horas são opcionais, mas liberam dólares por hora no painel.",
    gross: "Tarifas brutas", tips: "Gorjetas", fees: "Taxas da plataforma",
    expTitle: "Registro de despesas",
    expIntro: "Guarde os recibos. Gasolina, manutenção, seguro, lavagens e custos semelhantes do veículo entram na comparação com a milhagem padrão — em geral você não pode deduzir os dois no mesmo ano. Estacionamento, pedágios, telefone e materiais são outra categoria; veja o guia fiscal.",
    category: "Categoria", bizPct: "% comercial", runningMiles: "Milhas deste ano", runningDeduction: "Dedução por milhas deste ano"
  },
  tools: {
    title: "Ferramentas", tripTab: "Oferta de viagem", cpmTab: "Custo por milha", goalTab: "Meta anual",
    tripTitle: "Rentabilidade da viagem",
    tripIntro: "Antes de aceitar, inclua as milhas e o tempo de busca — não só a distância com o passageiro. Compare a oferta com o seu custo real por milha e uma meta, como US$ 1 por milha.",
    offer: "Valor da oferta", tripMiles: "Milhas (inclua a busca)", minutes: "Minutos (inclua a busca)",
    costPerMile: "Seu custo por milha", targetPerMile: "Meta por milha", targetPerHour: "Meta por hora",
    resultMile: "Dólares por milha", resultHour: "Dólares por hora", resultCost: "Custo estimado de dirigir", resultNet: "Sobra depois do custo",
    accept: "Parece um sim — atinge suas metas e cobre o seu custo.", decline: "Considere recusar — fica abaixo de uma meta ou não cobre o seu custo.",
    missMile: "Abaixo da sua meta por milha.", missHour: "Abaixo da sua meta por hora.", meetMile: "Atinge a sua meta por milha.", meetHour: "Atinge a sua meta por hora.",
    useSettings: "Usar o custo por milha salvo",
    cpmTitle: "Custo do veículo por milha",
    cpmIntro: "Este é o seu custo real de operação, não a tarifa padrão do IRS. Use-o como piso na calculadora de viagens para que uma oferta “boa” ainda pague depois da gasolina, do desgaste, do seguro e do restante para manter o carro na rua.",
    milesYear: "Milhas que você espera dirigir neste ano (todo uso)", mpg: "Milhas por galão (ou MPGe)",
    gasPrice: "Preço por galão (ou por kWh, com a sua conversão)", insuranceYear: "Seguro por ano", maintenanceYear: "Manutenção por ano",
    registrationYear: "Licenciamento por ano", tiresYear: "Pneus por ano (média)", depreciationYear: "Depreciação ou perda de valor por ano",
    otherYear: "Outros custos do veículo por ano", gasPerMile: "Combustível por milha", fixedPerMile: "Custos fixos por milha",
    totalPerMile: "Custo total por milha", annualFuel: "Combustível do ano", annualTotal: "Todos os custos do veículo no ano",
    saveAsDefault: "Salvar como meu custo por milha", savedCpm: "Salvo em Configurações e na calculadora de viagens.",
    goalTitle: "Planejador de meta anual",
    goalIntro: "Escolha uma meta de lucro líquido para o ano (depois das taxas e do método que aparece melhor no painel). Transformamos isso em uma meta semanal e por hora com as horas que você planeja trabalhar, e medimos o progresso pelo lucro registrado neste ano.",
    annualGoal: "Meta de lucro líquido do ano", weeksWorked: "Semanas que você vai trabalhar", hoursWeek: "Horas por semana",
    weeklyTarget: "Meta líquida semanal", hourlyTarget: "Meta líquida por hora", remaining: "Ainda falta ganhar", progress: "Progresso deste ano", loggedNet: "Lucro líquido registrado neste ano"
  },

  book: {
    nav: "O livro",
    title: "Garanta o livro",
    headline: "Every Mile Pays: The Rideshare Driver's Playbook",
    byAuthor: "Por Emerson Grellmann",
    lede: "Um guia complementar para motoristas de transporte e entrega nos EUA que querem números mais claros, decisões melhores em cada viagem e uma temporada de impostos mais tranquila. Este site continua gratuito de qualquer forma.",
    p1: "O Playbook percorre os mesmos hábitos em que este site se baseia: conhecer o seu custo real por milha, avaliar uma oferta antes de aceitá-la, manter registros que o IRS consiga acompanhar e tratar bônus como um extra — não como motivo para aceitar uma viagem que dá prejuízo.",
    bulletsTitle: "Dentro do Playbook",
    bullets: [
      "Como definir um piso pessoal por milha e por hora",
      "Como manter um registro oportuno de milhas e despesas",
      "Como pensar em promoções, no uso de vários apps e nas milhas sem pagamento",
      "O que entregar ao seu preparador de impostos no fim do ano"
    ],
    buy: "Compre na Amazon",
    coming: "Em breve na Amazon",
    note: "O livro é uma compra à parte. Você não precisa dele para usar estas ferramentas gratuitas."
  },
  learn: {
    title: "Aprenda", intro: "Guias para ganhar mais e ficar com mais — com fontes oficiais, não com achismos.",
    topics: { deductions: "Deduções fiscais", hours: "Melhores horários para dirigir", bonuses: "Bônus e promoções", multi: "Usar vários apps", gas: "Economizar combustível", earn: "Ganhar mais por hora", safety: "Segurança", health: "Dirigir com mais conforto", resources: "Recursos e links", book: "O livro" }
  },
  more: {
    title: "Mais", summaryTab: "Resumo de fim de ano", backupTab: "Cópia de segurança", settingsTab: "Configurações", bookTab: "O livro",
    summaryTitle: "Resumo de fim de ano para o seu preparador de impostos",
    summaryIntro: "Imprima ou salve como PDF pelo navegador. Isto é uma planilha de trabalho, não um formulário fiscal.",
    backupTitle: "Seus dados ficam neste aparelho",
    backupIntro: "O Every Mile Pays não cria conta nem envia seus registros para a nuvem. Exporte uma cópia JSON para outro celular, ou arquivos CSV para uma planilha. Importar um JSON substitui os dados atualmente salvos neste navegador.",
    settingsTitle: "Configurações", totalMiles: "Milhas totais deste ano (comerciais + pessoais)",
    totalMilesHelp: "Necessário para dividir as despesas reais do veículo entre uso comercial e pessoal.",
    filingStatus: "Situação de declaração (para a estimativa federal aproximada)",
    onlyIncome: "Tratar esta renda de motorista como minha única renda ao estimar o imposto federal (usa a dedução padrão).",
    country: "País", state: "Estado", privacy: "Privacidade: todos os lançamentos são salvos apenas no localStorage deste navegador."
  },
  img: {
    hero: "Ilustração de um motorista diverso conferindo um aplicativo dentro do carro ao entardecer",
    mileage: "Ilustração de um hodômetro amigável e um caderno de milhas",
    taxes: "Ilustração de recibos organizados e uma pasta de economia fiscal",
    calculator: "Ilustração de um motorista comparando uma oferta de viagem em uma calculadora simples",
    safety: "Ilustração de um motorista parando em um local bem iluminado e prestando atenção à estrada",
    health: "Ilustração de um motorista alongando-se ao lado do carro e sentado com boa postura"
  },
  selftest: { running: "Executando verificações…", pass: "Todas as verificações passaram.", fail: "As verificações falharam." },
  guides: {
    deductions: {
      title: "Deduções fiscais para motoristas de transporte e entrega nos EUA",
      lede: "Em geral você é autônomo. Informa receitas e despesas no Anexo C e calcula o imposto sobre trabalho autônomo no Anexo SE. Este guia resume regras publicadas pelo IRS para você manter registros melhores — não substitui um preparador de impostos.",
      sections: [
        { title: "Milhagem padrão versus despesas reais", paragraphs: [
          "Em geral você pode calcular as despesas do carro com a tarifa padrão por milha ou com o método das despesas reais. Se puder usar os dois, o IRS sugere calcular das duas formas e usar a maior dedução (Tópico nº 510).",
          "Em 2025, a tarifa padrão comercial é de 70 centavos por milha. Em 2026, é de 72,5 centavos de 1º de janeiro a 30 de junho e de 76 centavos de 1º de julho a 31 de dezembro. O Every Mile Pays aplica a tarifa correta à data de cada viagem.",
          "Se você usa a tarifa padrão em um ano, em geral não pode deduzir também gasolina, óleo, reparos, manutenção, seguro, licenciamento, depreciação ou parcelas de leasing daquele ano. Ainda pode deduzir estacionamento e pedágios comerciais. A parte comercial dos juros do financiamento e dos impostos sobre a propriedade do veículo é informada à parte no Anexo C mesmo com milhagem padrão (veja as instruções do Anexo C).",
          "Para usar a milhagem padrão em um carro próprio, você deve escolhê-la no primeiro ano em que o carro ficar disponível para o negócio. Nos anos seguintes, pode trocar. Em um carro alugado/leased, se escolher a milhagem padrão deve usá-la durante todo o contrato (incluindo renovações). Você não pode usá-la se operar cinco ou mais carros ao mesmo tempo (uma frota), ou se tiver usado MACRS, a Seção 179 ou depreciação especial no carro."
        ]},
        { title: "O que muitos motoristas também deduzem", paragraphs: [
          "Taxas e comissões das plataformas são despesas ordinárias do negócio. Se um Formulário 1099-K mostrar um valor bruto antes das taxas, você ainda informa a renda corretamente e deduz as taxas — o formulário é informativo, não a última palavra sobre o lucro.",
          "Telefone e plano de dados são dedutíveis apenas na parcela usada no negócio (por exemplo mapas, aplicativos de motorista e mensagens). Mantenha uma porcentagem de uso comercial razoável.",
          "Materiais como suporte de celular, carregador ou câmera veicular costumam ser tratados como suprimentos ou equipamento, não como custos de operação cobertos pela tarifa por milha. Lavagens em geral são custos de operação do veículo, então entram na comparação de despesas reais, não como dedução extra além da milhagem padrão.",
          "O plano de saúde de autônomo pode ser dedutível como ajuste à renda (não no Anexo C) se você se qualificar. Em geral não reduz o imposto SE. Consulte as instruções do Formulário 7206 e a Publicação 502, e pergunte a um preparador.",
          "Proprietários elegíveis de firma individual podem deduzir até 20% da renda qualificada do negócio (dedução QBI / Seção 199A), com limites. O QBI é reduzido por itens como a parte dedutível do imposto SE e a dedução do plano de saúde de autônomo."
        ]},
        { title: "Imposto SE e pagamentos trimestrais", paragraphs: [
          "A alíquota do imposto sobre trabalho autônomo é de 15,3% (12,4% de Previdência Social mais 2,9% de Medicare) sobre 92,35% do lucro líquido. Em geral você o deve se esse lucro líquido for de US$ 400 ou mais. Em 2026, a parte da Previdência Social se aplica aos primeiros US$ 184.500 de salários e lucros líquidos combinados. Você pode deduzir a metade equivalente à do empregador ao calcular a renda bruta ajustada — essa dedução não reduz o próprio imposto SE.",
          "Se você espera dever pelo menos US$ 1.000 de imposto federal após retenções e créditos, em geral precisa fazer pagamentos estimados trimestrais (Formulário 1040-ES). Os vencimentos legais são 15 de abril, 15 de junho, 15 de setembro e 15 de janeiro do ano seguinte. Se a data cair em sábado, domingo ou feriado legal, o pagamento está em dia no próximo dia útil."
        ]},
        { title: "1099-K, 1099-NEC e informar toda a renda", paragraphs: [
          "Toda a sua renda como motorista é tributável, receba ou não um formulário. As plataformas podem enviar um 1099-K, um 1099-NEC ou ambos (por exemplo, pagamentos de passageiros versus alguns incentivos).",
          "Para organizações de liquidação de terceiros, o limiar federal do 1099-K é mais de US$ 20.000 e mais de 200 transações. Transações com cartão de pagamento não têm limiar mínimo. Um pagador ainda pode enviar um formulário abaixo do limiar, e o seu estado pode usar um limiar menor.",
          "Para pagamentos feitos em 2026, o limiar de informação do 1099-NEC para compensação a não empregados é de US$ 2.000 (era US$ 600 para pagamentos feitos antes de 2026). Essa é uma regra de informação do pagador — não torna valores menores isentos de imposto."
        ]},
        { title: "Os registros que o IRS espera", paragraphs: [
          "Guarde registros adequados ou outra evidência suficiente. Para um carro, isso costuma significar a data de cada uso comercial, as milhas, o destino ou a área e a finalidade, além do total de milhas do ano. Um registro feito na hora do uso (ou perto dela) vale mais do que um reconstruído na época do imposto. Um registro semanal que cubra aquela semana é considerado oportuno (Publicação 463).",
          "Guarde recibos das despesas e, em geral, conserve os registros fiscais por pelo menos três anos depois de entregar a declaração que os utiliza. Fotografe o hodômetro no início e no fim do ano. Exporte uma cópia do Every Mile Pays mais de uma vez por ano."
        ]},
        { title: "Regras federais mais novas para discutir com um preparador", paragraphs: [
          "Para os anos fiscais de 2025 a 2028, o Congresso criou uma dedução para certas gorjetas qualificadas (até US$ 25.000, com limites de renda e regras de ocupação) e outras disposições descritas na página do IRS sobre os cortes de impostos para famílias trabalhadoras. Se as gorjetas da sua plataforma se qualificam depende da orientação vigente do IRS. Não presuma que uma gorjeta é isenta — mostre seus registros a um preparador.",
          "Uma dedução separada de 2025–2028 para certos juros de financiamento de carro de uso pessoal não é a mesma coisa que deduzir a parte comercial dos juros no Anexo C. Não misture as duas."
        ]}
      ]
    },
    hours: {
      title: "Quando a demanda costuma ser maior",
      lede: "Nenhum site pode dizer o melhor horário na sua esquina. Estes são padrões que as próprias plataformas descrevem. Confira as ferramentas de demanda no aplicativo de motorista da sua cidade — elas mudam por bairro e por dia.",
      sections: [
        { title: "O que a Uber publica", paragraphs: [
          "O artigo de ajuda da Uber “When and where are the most riders?” diz que, na maioria das cidades, fins de semana, horários de pico e períodos noturnos têm mais pedidos de viagem do que outros momentos.",
          "O mesmo artigo pede que o motorista use as Tendências por hora no aplicativo para ver quando a cidade deve ficar mais movimentada, e o mapa de calor para comparar pedidos entre áreas. Os multiplicadores do mapa são informativos; a Uber diz que o valor oportuno é o que aparece na sua tela."
        ]},
        { title: "O que a Lyft publica", paragraphs: [
          "O blog da Lyft sobre como o quando e o onde afetam o pagamento lista horários movimentados comuns: o pico da manhã, o pico da tarde, depois de eventos especiais como shows, e as noites de sexta e sábado.",
          "Lista áreas movimentadas comuns: centros da cidade, campi universitários, comércios essenciais, bares e restaurantes e hubs de transporte como aeroportos. A Lyft também diz que muita gente pedindo corrida com relativamente poucos motoristas por perto torna um encaixe rápido mais provável. Isso fala do tempo ocupado — não é uma promessa de pagamento maior em cada viagem."
        ]},
        { title: "Aeroportos, clima e eventos", paragraphs: [
          "Viagens de aeroporto em geral exigem um pátio de espera designado e uma fila de primeiro a entrar, primeiro a sair. A ajuda de aeroporto da Uber diz que o aplicativo pode mostrar horários de pico de voos esperados, e que atrasos, cancelamentos e outros fatores podem mudar a previsão. A ajuda de aeroporto da Lyft permite ver tempos estimados de fila e chegadas de voos, e observa que esses dados podem mudar.",
          "O blog de engenharia da Uber sobre previsões em aeroportos descreve uma demanda que se move com horários de voo irregulares, feriados e o clima, e observa que uma fila longa pode deixar o motorista esperando sem garantia de que a próxima viagem valha a espera. Use as comparações de espera e ganhos do aplicativo antes de ir ao aeroporto sem passageiro.",
          "Eventos especiais (shows, esportes, festivais) aparecem na própria lista de horários movimentados da Lyft. O calendário local ainda importa: a saída de um estádio pode estar cheia de pedidos e também congestionada. A calculadora de viagens existe para que uma oferta com cara de tarifa dinâmica ainda seja julgada por milhas, minutos e o seu custo."
        ]}
      ]
    },
    bonuses: {
      title: "Estratégia de bônus e promoções",
      lede: "Promoções podem melhorar uma boa hora e também convencer você a aceitar viagens pouco lucrativas. Trate cada bônus como um extra em cima de uma viagem que já faça sentido.",
      sections: [
        { title: "Leia a oferta inteira antes de persegui-la", paragraphs: [
          "As plataformas fazem promoções por tempo limitado — missões ou desafios de viagens, sequências, bônus de área movimentada e ofertas parecidas. As regras geralmente limitam quais horários, bairros e tipos de viagem contam. Tire um print das condições quando a oferta aparecer.",
          "Antes de alongar um turno só para terminar uma missão, estime as milhas e as horas extras. Se essas viagens extras ficarem abaixo do seu custo por milha ou da meta por hora, o bônus precisa ser grande o bastante para fechar a diferença. A calculadora de viagens e a de custo por milha existem para essa conta.",
          "Algumas promoções ou níveis de fidelidade podem exigir uma taxa mínima de aceitação ou de conclusão, ou valer só em certo modo. Leia as regras. Uma oferta que obriga você a aceitar viagens fracas pode custar mais do que o bônus paga."
        ]},
        { title: "Sequências, zonas e garantias", paragraphs: [
          "Bônus de sequência pagam extra por viagens consecutivas em uma janela. Uma busca longa ou uma viagem que o deixa longe da demanda pode quebrar a conta mesmo que “mantenha a sequência”. Avalie o próximo chamado incluindo as milhas de busca.",
          "Zonas de bônus ou de movimento mostram onde há mais pedidos. São uma pista, não uma garantia — outros motoristas veem o mesmo mapa. Una a zona aos seus horários e à espera que você de fato enfrenta.",
          "Garantias de ganhos, quando existem, quase sempre têm letra miúda (número de viagens, horas online, aceitação, cidades específicas). Conte apenas as viagens que as regras disserem que valem, e mantenha o próprio registro para comparar a garantia com o que você teria ganhado de qualquer forma."
        ]}
      ]
    },
    multi: {
      title: "Usar mais de um aplicativo",
      lede: "Ficar online em mais de uma plataforma ao mesmo tempo é comum. Usado com cuidado, pode reduzir a espera sem pagamento. Usado sem cuidado, gera buscas atrasadas, mais cancelamentos e um uso perigoso do celular.",
      sections: [
        { title: "O que as plataformas dizem", paragraphs: [
          "A central de ajuda da Uber explica que o aplicativo de motorista continua funcionando se você mudar para outros apps, e que o GPS segue coletando dados para registrar as viagens. Também lembra de seguir as leis locais sobre o uso do telefone e observa que falar ao telefone dirigindo pode distrair e ser inseguro.",
          "Nem este guia nem o Every Mile Pays são uma opinião jurídica sobre os termos de qualquer plataforma. Regras de programa, aeroportos e cidades podem acrescentar condições — inclusive exclusividade durante algumas promoções. Leia os termos que se aplicam a você."
        ]},
        { title: "Um hábito mais seguro", paragraphs: [
          "Fique online nos aplicativos que quiser usar. Ao aceitar uma viagem em um deles, pause ou saia do ar imediatamente nos outros para não receber um segundo passageiro ou uma entrega que você não pode fazer.",
          "Mantenha apenas uma viagem ativa de cada vez. Aceitar uma segunda oferta com um passageiro já no carro gera cancelamentos, atrasos e reclamações.",
          "Compare ofertas em dólares por milha e por hora, incluindo a busca, não pelo número que parece maior no título.",
          "Mexa nos aplicativos somente quando estiver estacionado de forma legal ou parado com segurança. A NHTSA alerta que dirigir distraído — inclusive com o celular — é perigoso. Nenhum pedido extra vale um acidente ou uma multa.",
          "Acompanhe à parte as métricas de cancelamento e aceitação de cada plataforma. Se malabarizar os apps começar a prejudicar esses números ou a sua pontualidade, use um só aplicativo até as coisas se estabilizarem."
        ]}
      ]
    },
    gas: {
      title: "Economizar combustível",
      lede: "O combustível costuma ser o maior custo em dinheiro de um motorista. Estes números vêm do Departamento de Energia dos EUA e da EPA FuelEconomy.gov — não do marketing das plataformas.",
      sections: [
        { title: "Como você dirige", paragraphs: [
          "A FuelEconomy.gov diz que é possível economizar de 10% a 40% evitando excesso de velocidade e aceleração e frenagem agressivas. Uma folha complementar do DOE/EPA afirma que dirigir de forma agressiva pode reduzir o rendimento cerca de 15% a 30% na estrada e 10% a 40% no trânsito com paradas.",
          "Cada 5 mph acima de 50 mph pode reduzir o rendimento da gasolina em 7% ou mais (dicas da FuelEconomy.gov).",
          "Deixar o motor ligado parado pode usar de um quarto a meio galão por hora. Desligue o motor quando estiver parado e fora do fluxo, se for seguro e permitido. Em marcha lenta você faz zero milhas por galão.",
          "O piloto automático na estrada ajuda a manter uma velocidade constante e, na maioria dos casos, economiza combustível. Junte trajetos quando puder: várias viagens curtas com o motor frio podem gastar mais combustível do que uma viagem mais longa na mesma distância."
        ]},
        { title: "Como você cuida do carro", paragraphs: [
          "Manter os pneus na pressão da etiqueta da porta do motorista ou do porta-luvas (não o máximo escrito no flanco do pneu) pode melhorar o rendimento em cerca de 0,6% em média, e até cerca de 3% em alguns casos. Pneus murchos demais podem reduzir o rendimento em cerca de 0,2% para cada 1 psi a menos na pressão média dos quatro pneus.",
          "Usar o grau de óleo recomendado pelo fabricante pode melhorar o rendimento em 1% a 2% se você vinha usando o grau errado. Consertar um motor desregulado pode melhorar a eficiência em cerca de 4% em média.",
          "Cerca de 100 libras extras podem reduzir o rendimento em cerca de 1%. Tire carga desnecessária. Um bagageiro de teto pode reduzir o rendimento de 2% a 17% por causa do arrasto."
        ]}
      ]
    },
    earn: {
      title: "Ganhar mais com as horas que você já trabalha",
      lede: "Aumentar o lucro líquido por hora costuma ser uma mistura de escolher melhor as viagens, dirigir menos sem pagamento e conhecer seus custos reais — não de trabalhar até a exaustão.",
      sections: [
        { title: "Conheça o seu piso antes do primeiro chamado", paragraphs: [
          "Use a ferramenta de custo por milha e depois defina uma meta por milha e por hora na calculadora de viagens. Inclua milhas e minutos de busca. Uma tarifa maior com uma busca longa sem pagamento pode render menos do que uma oferta mais curta perto de você.",
          "Registre bruto, gorjetas, taxas, horas e milhas depois de cada turno — na mesma semana, enquanto você ainda se lembra. O painel então mostra qual plataforma paga mais depois das taxas e se você está batendo a meta.",
          "Recuse viagens que fiquem abaixo do seu piso, a menos que tenha um motivo claro (um bônus que de fato cubra a diferença, um destino para o qual você já ia ou uma necessidade de segurança). Seus próprios registros valem mais do que o rumor do que “todo mundo” aceita."
        ]},
        { title: "Corte milhas sem pagamento", paragraphs: [
          "Milhas ociosas — dirigir sem uma oferta que pague — ainda queimam combustível e tempo. Depois de deixar alguém, decida se fica onde está, se se reposiciona rumo a uma área movimentada do aplicativo ou se sai do ar. O mapa de calor é uma pista; o seu repasse recente por hora é evidência.",
          "Se uma plataforma já o mantém ocupado, talvez você não precise de um segundo aplicativo naquela hora. Usar vários apps ajuda mais na espera, não no meio de uma viagem.",
          "Reposicione-se só quando a espera esperada e a calculadora de viagens ainda funcionarem. Uma viagem longa até a fila do aeroporto é uma aposta; Uber e Lyft avisam que previsões e tempos de espera podem mudar."
        ]}
      ]
    },
    safety: {
      title: "Dirija para continuar ganhando",
      lede: "Um carro danificado ou uma habilitação suspensa encerram a renda da semana. Estes hábitos protegem você, os passageiros e a sua capacidade de continuar na rua.",
      sections: [
        { title: "Celular, cansaço e a estrada", paragraphs: [
          "A Administração Nacional de Segurança no Tráfego Rodoviário (NHTSA) alerta que dirigir distraído — enviar mensagens, usar o telefone na mão e outras tarefas que tiram os olhos ou a atenção da estrada — é perigoso. Pare e estacione legalmente antes de trocar de aplicativo, digitar ou ler uma oferta longa.",
          "Cumpra todas as leis de trânsito e as regras da sua cidade sobre onde veículos de transporte por aplicativo podem esperar. Aeroportos e estádios costumam ter pátios próprios; sair deles pode custar sua posição na fila ou uma multa.",
          "As plataformas podem limitar as horas consecutivas de direção. Use esses limites como teto, não como meta. Se estiver com sono, saia do ar. Nenhuma promoção vale adormecer ao volante."
        ]},
        { title: "Segurança pessoal", paragraphs: [
          "Compartilhe o status da viagem com alguém de confiança quando o recurso existir, e mantenha as portas trancadas até confirmar o passageiro. Pontos de embarque e desembarque bem iluminados são mais fáceis para todos.",
          "Você pode recusar ou encerrar uma viagem que parecer insegura, seguindo o processo de segurança da plataforma. Confie nesse instinto.",
          "Uma câmera veicular, onde for legal no seu estado, pode protegê-lo em uma disputa. Verifique as leis de consentimento para gravação de áudio antes de depender do som."
        ]}
      ]
    },
    health: {
      title: "Horas mais confortáveis no carro",
      lede: "Ficar sentado por muitas horas pode ser desconfortável. As ideias abaixo são dicas gerais de ergonomia e conforto ao dirigir — não são conselho médico, diagnóstico nem plano de tratamento. Se você convive com dor ou outra condição de saúde, converse com um profissional licenciado sobre o que é seguro para você.",
      sections: [
        { title: "Postura e pausas", paragraphs: [
          "Sente-se com os quadris o mais atrás possível no banco. Uma almofada lombar pequena ou uma toalha enrolada na parte baixa das costas ajuda alguns motoristas a permanecer mais eretos. Mantenha os joelhos um pouco flexionados e os quadris mais ou menos no nível dos joelhos, ou um pouco acima, se o carro permitir.",
          "Segure o volante com os ombros relaxados. Ajuste os espelhos para não torcer o corpo ao ver o trânsito. Tire a carteira do bolso de trás para que o banco o apoie de forma uniforme.",
          "Quando for seguro, desça no posto ou depois de deixar alguém e mova as costas, os quadris e as pernas por um minuto. Pausas curtas e regulares costumam ser mais leves do que um turno longo sem parar.",
          "Deixe água ao alcance e perceba se está ficando rígido, dormente ou incomumente cansado — esses são motivos para pausar, não para “aguentar” uma missão. Nada aqui afirma que um alongamento ou uma almofada trata ou cura dor."
        ]}
      ]
    },
    resources: {
      title: "Recursos oficiais",
      lede: "Fontes primárias usadas no Every Mile Pays. Abra-as quando quiser a regra em si, não um resumo.",
      groups: [
        { title: "Internal Revenue Service", links: [
          { label: "Tarifas padrão por milha", url: "https://www.irs.gov/tax-professionals/standard-mileage-rates" },
          { label: "IR-2025-128 (72,5¢ no primeiro semestre de 2026)", url: "https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents" },
          { label: "Aviso 2026-10 (PDF)", url: "https://www.irs.gov/pub/irs-drop/n-26-10.pdf" },
          { label: "Aviso 2025-05 (PDF, tarifas de 2025)", url: "https://www.irs.gov/pub/irs-drop/n-25-05.pdf" },
          { label: "Boletim 2026-29 (tarifa de 76¢ no meio do ano)", url: "https://www.irs.gov/irb/2026-29_IRB" },
          { label: "Tópico nº 510, Uso do carro para negócios", url: "https://www.irs.gov/taxtopics/tc510" },
          { label: "Publicação 463, Despesas de viagem, presentes e carro", url: "https://www.irs.gov/publications/p463" },
          { label: "Instruções do Anexo C", url: "https://www.irs.gov/instructions/i1040sc" },
          { label: "Imposto sobre trabalho autônomo", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
          { label: "Instruções do Anexo SE", url: "https://www.irs.gov/instructions/i1040sse" },
          { label: "Perguntas frequentes sobre imposto estimado e datas", url: "https://www.irs.gov/faqs/estimated-tax" },
          { label: "Sobre o Formulário 1040-ES", url: "https://www.irs.gov/forms-pubs/about-form-1040-es" },
          { label: "Dedução de renda qualificada do negócio", url: "https://www.irs.gov/newsroom/qualified-business-income-deduction" },
          { label: "Perguntas frequentes do Formulário 1099-K", url: "https://www.irs.gov/newsroom/form-1099-k-faqs-general-information" },
          { label: "Limiares de declaração informativa (1099-NEC US$ 2.000 em 2026)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/am-i-required-to-file-a-form-1099-or-other-information-return" },
          { label: "Cortes de impostos para famílias trabalhadoras", url: "https://www.irs.gov/newsroom/working-families-tax-cuts-individuals-and-workers" },
          { label: "Publicação 334, Guia fiscal para pequenos negócios", url: "https://www.irs.gov/publications/p334" },
          { label: "Tópico nº 305, Escrituração", url: "https://www.irs.gov/taxtopics/tc305" }
        ]},
        { title: "Combustível e direção", links: [
          { label: "Dicas de rendimento da FuelEconomy.gov", url: "https://www.fueleconomy.gov/m/tips.shtml" },
          { label: "FuelEconomy.gov — manter o veículo em forma", url: "https://www.fueleconomy.gov/feg/maintain.jsp" },
          { label: "Folha de dicas DOE/EPA para economizar gasolina (PDF)", url: "https://www.fueleconomy.gov/feg/toolkit/pdfs/fuel_tips/2026-G03039-FEG-Gas-Tips.pdf" },
          { label: "NHTSA — direção distraída", url: "https://www.nhtsa.gov/risky-driving/distracted-driving" }
        ]},
        { title: "Ajuda para motoristas das plataformas", links: [
          { label: "Uber: quando e onde há mais passageiros", url: "https://help.uber.com/en/driving-and-delivering/article/when-and-where-are-the-most-riders?nodeId=456fcc51-39ad-4b7d-999d-6c78c3a388bf" },
          { label: "Uber: dirigir no aeroporto", url: "https://help.uber.com/driving-and-delivering/article/driving-at-the-airport?nodeId=1c8143ff-da32-46e6-b18d-254b9511efe0" },
          { label: "Uber: usar outros aplicativos estando online", url: "https://help.uber.com/en/driving-and-delivering/article/can-i-use-other-apps-or-receive-personal-calls-while-online?nodeId=224190dc-9df8-4d5c-b836-3f33f3a9e061" },
          { label: "Lyft: como o quando e o onde afetam o seu pagamento", url: "https://www.lyft.com/hub/posts/how-when-and-where-you-drive-affects-your-pay" },
          { label: "Lyft: pedidos FIFO no aeroporto", url: "https://help.lyft.com/hc/en-us/all/articles/115012922787-Receiving-Airport-FIFO-pickup-requests" }
        ]}
      ]
    }
  }
});
