import type { Language } from "@/lib/translations";

// Texts of the gift voucher pages. Field labels shared with the booking form (name, e-mail,
// the e-mail code, the invoice buyer) come from bookingCopy, so both forms say the same thing.
const lt = {
  title: "Dovanų kuponas",
  lead: "Padovanokite sveikatą: kuponas konsultacijai, kineziterapijai ar masažui ReaMed klinikoje. Galioja 12 mėnesių, sumą galima naudoti dalimis.",
  menu: "Dovanų kuponas",

  amountTitle: "Kupono suma",
  amountOther: "Kita suma",
  amountLabel: "Suma, €",
  amountHint: (min: string, step: string) => `Nuo ${min}, kas ${step}.`,
  amountInvalid: (min: string, max: string, step: string) => `Suma: nuo ${min} iki ${max}, kas ${step}.`,
  amountLess: (step: string) => `Sumažinti ${step}`,
  amountMore: (step: string) => `Padidinti ${step}`,

  giftTitle: "Kam dovanojate",
  giftLead: "Neprivaloma. Šie žodžiai bus įrašyti kupone.",
  to: "Kam",
  toPlaceholder: "Pvz., Mamai",
  from: "Nuo ko",
  fromPlaceholder: "Pvz., Tomas ir Rūta",
  message: "Palinkėjimas",
  messagePlaceholder: "Keli žodžiai gavėjui",
  tooLong: "Per ilgas tekstas",

  deliveryTitle: "Kaip įteiksite",
  toMe: "Atsiųskite man",
  toMeHint: "Kuponą (PDF) gausite el. paštu: atsispausdinsite arba persiųsite patys.",
  toRecipient: "Išsiųskite gavėjui",
  toRecipientHint: "Kuponą el. paštu išsiųsime gavėjui, o jums atsiųsime kopiją.",
  recipientEmail: "Gavėjo el. paštas",
  recipientEmailNote: "Šį adresą naudosime tik kuponui išsiųsti.",
  sendWhen: "Kada išsiųsti",
  sendNow: "Iškart po apmokėjimo",
  sendOnDay: "Pasirinktą dieną",
  sendDate: "Išsiuntimo diena",
  sendDateHint: "Laišką išsiųsime tą dieną 9 val. ryto. Kupono galiojimas skaičiuojamas nuo apmokėjimo dienos.",
  sendDateInvalid: (days: number) => `Pasirinkite dieną nuo šiandien iki ${days} dienų į priekį.`,

  buyerTitle: "Jūsų duomenys",
  acceptTitle: "Susipažinau su:",
  acceptTerms: "dovanų kupono sąlygomis",
  pay: (sum: string) => `Apmokėti ${sum}`,
  payNote: "Apmokėsite per Paysera: el. bankininkyste arba kortele. Kuponą sukursime, kai gausime mokėjimo patvirtinimą.",
  paymentsOff: "Mokėjimai internetu dar neįjungti. Paskambinkite +370 601 34304: kuponą parengsime kitaip.",

  line: "Laikas pasirūpinti savimi.",
  previewFor: "ReaMed kineziterapijos ir reabilitacijos klinikos paslaugoms",
  previewCode: "Kupono kodas",
  previewValid: "Galioja iki",
  previewNote: "Taip atrodys kuponas (PDF, A5). Kodą sukursime po apmokėjimo.",
  facts: [
    "Galioja 12 mėnesių visoms ReaMed paslaugoms",
    "Sumą galima naudoti dalimis per kelis vizitus",
    "Kuponą ir sąskaitą faktūrą gausite el. paštu",
  ],

  unavailableTitle: "Dovanų kupono internetu dar neparduodame",
  unavailableText: "Paskambinkite arba parašykite: kuponą parengsime kitaip.",
  loading: "Kraunama…",

  resultTitle: "Dovanų kuponas",
  resultChecking: "Tikriname mokėjimą…",
  resultPaid: "Kuponas apmokėtas",
  resultToBuyer: (email: string) => `Kuponą ir sąskaitą faktūrą išsiuntėme adresu ${email}.`,
  resultToRecipientNow: (to: string, email: string) =>
    `Kuponą jau siunčiame gavėjui (${to}). Kopiją ir sąskaitą faktūrą išsiuntėme jums adresu ${email}.`,
  resultToRecipientLater: (to: string, day: string, email: string) =>
    `Kuponą gavėjui (${to}) išsiųsime ${day} Kopiją ir sąskaitą faktūrą išsiuntėme jums adresu ${email}.`,
  resultNotReceived: "Negavote laiško per 5 min.? Patikrinkite šlamšto aplanką arba skambinkite +370 601 34304.",
  resultPending: "Laukiame mokėjimo patvirtinimo",
  resultPendingText: "Paysera patvirtinimas paprastai ateina per kelias sekundes. Šio puslapio galite neuždaryti.",
  resultFailed: "Mokėjimas neįvyko",
  resultFailedText: "Kuponas nesukurtas, pinigai nenuskaityti. Galite bandyti dar kartą.",
  resultExpired: "Mokėjimo laikas baigėsi",
  resultExpiredText: "Kuponas nesukurtas. Užpildykite užsakymą iš naujo.",
  resultNotFound: "Užsakymas nerastas",
  download: "Atsisiųsti kuponą",
  buyAgain: "Pirkti kuponą",
  tryAgain: "Bandyti dar kartą",
  yourVoucher: "Jūsų kuponas",
  test: "Tai bandomasis kuponas: mokėjimai dar veikia bandymo režimu, todėl atsiskaityti juo negalima.",

  balanceTitle: "Kupono likutis",
  balanceLead: "Įveskite kodą iš kupono ir pamatysite, kiek liko ir iki kada kuponas galioja.",
  balanceCode: "Kupono kodas",
  balanceCheck: "Tikrinti",
  balanceInvalid: "Kodas atrodo taip: RM-AB3D-9KXQ.",
  balanceLeft: "Likutis",
  balanceOf: (sum: string) => `iš ${sum}`,
  balanceValid: (day: string) => `Galioja iki ${day} imtinai`,
  balanceExpired: (day: string) => `Galiojimas baigėsi ${day}`,
  stateActive: "Galioja",
  stateUsed: "Išnaudotas",
  stateExpired: "Nebegalioja",
  balanceBook: "Vizitui registruokitės tel. +370 601 34304 ir pasakykite, kad turite dovanų kuponą. Atvykę pateikite kodą.",

  termsTitle: "Dovanų kupono sąlygos",
  termsUpdated: "Redakcija: 2026 m. lapkričio 15 d.",
  terms: [
    {
      heading: "Kas yra dovanų kuponas",
      body: [
        "ReaMed dovanų kuponas yra išankstinis apmokėjimas už ReaMed klinikos paslaugas. Kuponą parduoda ir paslaugas teikia MB „Kineziterapija“ (įmonės kodas 305136936, Olimpiečių g. 1A-7, Vilnius).",
        "Kupono suma pasirenkama perkant: nuo 50 €, kas 10 €.",
      ],
    },
    {
      heading: "Pirkimas ir pristatymas",
      body: [
        "Kuponas apmokamas internetu per Paysera. Gavę mokėjimo patvirtinimą sukuriame kuponą su unikaliu kodu ir išsiunčiame jį (PDF) el. paštu: pirkėjui arba, pirkėjui pasirinkus, tiesiai gavėjui pasirinktą dieną. Popierinio kupono nesiunčiame.",
        "Pirkėjui išrašome sąskaitą faktūrą ir išsiunčiame ją atskiru laišku. Gavėjo el. pašto adresą naudojame tik kuponui išsiųsti.",
      ],
    },
    {
      heading: "Galiojimas",
      body: [
        "Kuponas galioja 12 mėnesių nuo apmokėjimo dienos. Paskutinė galiojimo diena nurodyta kupone.",
        "Pasibaigus galiojimui kuponu atsiskaityti nebegalima, o nepanaudota suma negrąžinama.",
      ],
    },
    {
      heading: "Kaip pasinaudoti",
      body: [
        "Kuponu atsiskaitoma klinikoje už bet kurią ReaMed paslaugą pagal tos dienos kainas. Vizitui registruokitės iš anksto telefonu +370 601 34304 ir pasakykite, kad turite dovanų kuponą; atvykę pateikite kupono kodą.",
        "Sumą galima naudoti dalimis per kelis vizitus, likutis lieka kupone iki galiojimo pabaigos. Jei paslauga kainuoja daugiau, nei liko kupone, skirtumas primokamas klinikoje. Likutį galite pasitikrinti puslapyje „Kupono likutis“.",
        "Kuponu gali pasinaudoti kiekvienas, kas pateikia jo kodą, todėl kodą saugokite kaip pinigus.",
      ],
    },
    {
      heading: "Keitimas ir grąžinimas",
      body: [
        "Kuponas į pinigus nekeičiamas. Nepanaudoto kupono pirkėjas gali atsisakyti per 14 dienų nuo įsigijimo, parašęs info@reamed.lt: sumokėtą sumą grąžiname tuo pačiu būdu, kuriuo ji buvo sumokėta.",
        "Vizitų registracijai, perkėlimui ir atšaukimui taikomos bendros ReaMed registracijos sąlygos.",
      ],
    },
    {
      heading: "Jei pametėte kuponą",
      body: [
        "Parašykite info@reamed.lt iš to adreso, kuriuo pirkote kuponą, arba paskambinkite +370 601 34304: kuponą išsiųsime dar kartą.",
      ],
    },
  ],
  termsBooking: "Registracijos ir atšaukimo sąlygos",
  termsBalance: "Kupono likutis",
};

const en: typeof lt = {
  title: "Gift voucher",
  lead: "Give the gift of health: a voucher for a consultation, physiotherapy or massage at the ReaMed clinic. Valid for 12 months; the sum can be used in parts.",
  menu: "Gift voucher",

  amountTitle: "Voucher amount",
  amountOther: "Other amount",
  amountLabel: "Amount, €",
  amountHint: (min: string, step: string) => `From ${min}, in steps of ${step}.`,
  amountInvalid: (min: string, max: string, step: string) => `Amount: from ${min} to ${max}, in steps of ${step}.`,
  amountLess: (step: string) => `Decrease by ${step}`,
  amountMore: (step: string) => `Increase by ${step}`,

  giftTitle: "Who is it for",
  giftLead: "Optional. These words will be printed on the voucher.",
  to: "To",
  toPlaceholder: "E.g. Mum",
  from: "From",
  fromPlaceholder: "E.g. Tom and Ruth",
  message: "Message",
  messagePlaceholder: "A few words for the recipient",
  tooLong: "The text is too long",

  deliveryTitle: "How will you give it",
  toMe: "Send it to me",
  toMeHint: "You get the voucher (PDF) by e-mail: print it or forward it yourself.",
  toRecipient: "Send it to the recipient",
  toRecipientHint: "We e-mail the voucher to the recipient and send you a copy.",
  recipientEmail: "Recipient's e-mail",
  recipientEmailNote: "We use this address only to send the voucher.",
  sendWhen: "When to send",
  sendNow: "Right after the payment",
  sendOnDay: "On a chosen day",
  sendDate: "Sending day",
  sendDateHint: "The e-mail goes out at 9 a.m. that day. The validity counts from the day of payment.",
  sendDateInvalid: (days: number) => `Choose a day from today up to ${days} days ahead.`,

  buyerTitle: "Your details",
  acceptTitle: "I have read:",
  acceptTerms: "the gift voucher terms",
  pay: (sum: string) => `Pay ${sum}`,
  payNote: "You pay through Paysera: online banking or card. The voucher is created once the payment is confirmed.",
  paymentsOff: "Online payments are not switched on yet. Call +370 601 34304 and we will arrange the voucher another way.",

  line: "Time to take care of yourself.",
  previewFor: "For the services of ReaMed physiotherapy and rehabilitation clinic",
  previewCode: "Voucher code",
  previewValid: "Valid until",
  previewNote: "This is how the voucher will look (PDF, A5). The code is created after the payment.",
  facts: [
    "Valid for 12 months for all ReaMed services",
    "The sum can be used in parts over several visits",
    "The voucher and the invoice arrive by e-mail",
  ],

  unavailableTitle: "Gift vouchers are not sold online yet",
  unavailableText: "Call or write to us and we will arrange the voucher another way.",
  loading: "Loading…",

  resultTitle: "Gift voucher",
  resultChecking: "Checking the payment…",
  resultPaid: "The voucher is paid",
  resultToBuyer: (email: string) => `We sent the voucher and the invoice to ${email}.`,
  resultToRecipientNow: (to: string, email: string) =>
    `We are sending the voucher to the recipient (${to}) now. A copy and the invoice went to you at ${email}.`,
  resultToRecipientLater: (to: string, day: string, email: string) =>
    `We will send the voucher to the recipient (${to}) on ${day} A copy and the invoice went to you at ${email}.`,
  resultNotReceived: "No e-mail within 5 minutes? Check your spam folder or call +370 601 34304.",
  resultPending: "Waiting for the payment confirmation",
  resultPendingText: "Paysera usually confirms within seconds. You may keep this page open.",
  resultFailed: "The payment did not go through",
  resultFailedText: "No voucher was created and no money was taken. You can try again.",
  resultExpired: "The payment time has run out",
  resultExpiredText: "No voucher was created. Please fill in the order again.",
  resultNotFound: "Order not found",
  download: "Download the voucher",
  buyAgain: "Buy a voucher",
  tryAgain: "Try again",
  yourVoucher: "Your voucher",
  test: "This is a test voucher: payments still run in test mode, so it cannot be used to pay.",

  balanceTitle: "Voucher balance",
  balanceLead: "Enter the code from the voucher to see what is left and until when it is valid.",
  balanceCode: "Voucher code",
  balanceCheck: "Check",
  balanceInvalid: "A code looks like this: RM-AB3D-9KXQ.",
  balanceLeft: "Balance",
  balanceOf: (sum: string) => `of ${sum}`,
  balanceValid: (day: string) => `Valid until ${day} inclusive`,
  balanceExpired: (day: string) => `Expired on ${day}`,
  stateActive: "Valid",
  stateUsed: "Used up",
  stateExpired: "Expired",
  balanceBook: "Book a visit by phone +370 601 34304 and say you have a gift voucher. Bring the code with you.",

  termsTitle: "Gift voucher terms",
  termsUpdated: "Version of 15 November 2026",
  terms: [
    {
      heading: "What the gift voucher is",
      body: [
        "A ReaMed gift voucher is a prepayment for the services of the ReaMed clinic. It is sold, and the services are provided, by MB „Kineziterapija“ (company code 305136936, Olimpiečių g. 1A-7, Vilnius).",
        "The amount is chosen at purchase: from €50, in steps of €10.",
      ],
    },
    {
      heading: "Purchase and delivery",
      body: [
        "The voucher is paid online through Paysera. Once the payment is confirmed we create the voucher with a unique code and e-mail it (PDF): to the buyer or, if the buyer chooses so, straight to the recipient on a chosen day. No paper voucher is posted.",
        "The buyer receives an invoice in a separate e-mail. The recipient's e-mail address is used only to send the voucher.",
      ],
    },
    {
      heading: "Validity",
      body: [
        "The voucher is valid for 12 months from the day of payment. The last valid day is printed on the voucher.",
        "After that day the voucher can no longer be used, and an unused sum is not refunded.",
      ],
    },
    {
      heading: "How to use it",
      body: [
        "The voucher pays at the clinic for any ReaMed service at that day's prices. Book a visit in advance by phone +370 601 34304 and say you have a gift voucher; at the clinic, give the voucher code.",
        "The sum can be used in parts over several visits; the rest stays on the voucher until it expires. If a service costs more than is left, the difference is paid at the clinic. The balance can be checked on the “Voucher balance” page.",
        "Anyone who gives the code can use the voucher, so keep the code as you would keep money.",
      ],
    },
    {
      heading: "Exchange and refund",
      body: [
        "The voucher is not exchanged for money. The buyer may withdraw from an unused voucher within 14 days of the purchase by writing to info@reamed.lt: the sum is refunded by the same means it was paid.",
        "Booking, rescheduling and cancelling visits follow the general ReaMed booking terms.",
      ],
    },
    {
      heading: "If you lose the voucher",
      body: [
        "Write to info@reamed.lt from the address you bought the voucher with, or call +370 601 34304: we will send the voucher again.",
      ],
    },
  ],
  termsBooking: "Booking and cancellation terms",
  termsBalance: "Voucher balance",
};

export const voucherCopy: Record<Language, typeof lt> = { lt, en };
