import type { LegalDoc } from "@/components/legal/LegalDocument";

// ReaMed dovanų kuponų taisyklės, redakcija 2026-11-22 (the voucher terms of 2026-11-15 brought in line with the
// purchase rules and the privacy policy of the same redakcija; Piotr 2026-11-22: the validity is not extended).
// The rules themselves live in klinika-system (src/gift-voucher.ts, VOUCHER_TERMS_VERSION, AGENTS.md "Gift vouchers");
// the voucher sheet (server/gift-voucher-pdf.ts) and its letters say the same in short. Change only by a new redakcija.
export const voucherRules: Record<"lt" | "en", LegalDoc> = {
  lt: {
    title: "Dovanų kuponų taisyklės",
    edition: "MB „Kineziterapija“ · Redakcija 2026-11-22",
    sections: [
      {
        h: "1. Kas yra dovanų kuponas",
        blocks: [
          {
            p: "ReaMed dovanų kuponas yra išankstinis apmokėjimas už ReaMed klinikos paslaugas. Kuponą parduoda ir paslaugas teikia MB „Kineziterapija“, juridinio asmens kodas 305136936, Olimpiečių g. 1A-7, LT-09235 Vilnius; info@reamed.lt, +370 601 34304. Toliau – Klinika.",
          },
          {
            p: "Kupono suma pasirenkama perkant: nuo 50 € iki 2 000 €, kas 10 €. Didesnę sumą suderinkite su Klinika.",
          },
          {
            p: "Šios taisyklės taikomos kuponui. Kuponu apmokėtiems vizitams ir vizitų paketams taikomos [ReaMed paslaugų pirkimo, registracijos ir atšaukimo taisyklės](/rezervacija/salygos).",
          },
        ],
      },
      {
        h: "2. Pirkimas ir pristatymas",
        blocks: [
          {
            p: "Kuponas apmokamas internetu per Paysera. Prieš apmokėjimą pirkėjo el. pašto adresas patvirtinamas kodu iš laiško. Gavę mokėjimo patvirtinimą sukuriame kuponą su unikaliu kodu ir išsiunčiame jį (PDF) el. paštu: pirkėjui arba, pirkėjui pasirinkus, gavėjui – iškart arba pasirinktą dieną 9 val., ne vėliau kaip per 90 dienų; tada kopiją gauna ir pirkėjas. Popierinio kupono nesiunčiame.",
          },
          {
            p: "Pirkėjui išrašome sąskaitą faktūrą pirkėjo arba jo nurodytos įmonės vardu ir išsiunčiame ją atskiru laišku; kupono kodas sąskaitoje nespausdinamas. Gavėjo el. pašto adresą naudojame tik kuponui išsiųsti. Daugiau apie duomenis – [privatumo politikoje](/privatumas).",
          },
        ],
      },
      {
        h: "3. Galiojimas",
        blocks: [
          {
            p: "Kuponas galioja 12 mėnesių nuo apmokėjimo dienos iki tos pačios dienos imtinai pagal Lietuvos laiką; jei tokios dienos mėnesyje nėra – iki paskutinės to mėnesio dienos. Pavyzdžiui, apmokėtas 2026 m. lapkričio 22 d., kuponas galioja iki 2027 m. lapkričio 22 d. imtinai. Paskutinė galiojimo diena nurodyta kupone ir puslapyje [„Kupono likutis“](/dovanu-kuponas/likutis).",
          },
          {
            p: "Kai kuponas išsiunčiamas gavėjui vėliau, galiojimas vis tiek skaičiuojamas nuo apmokėjimo dienos.",
          },
          {
            p: "Kupono galiojimas nepratęsiamas. Pasibaigus galiojimui kuponu atsiskaityti nebegalima, o nepanaudota suma negrąžinama.",
          },
        ],
      },
      {
        h: "4. Kaip pasinaudoti",
        blocks: [
          {
            p: "Kuponu atsiskaitoma Klinikoje už bet kurią ReaMed paslaugą ar vizitų paketą pagal tos dienos kainas. Vizitui registruokitės iš anksto telefonu +370 601 34304 ir pasakykite, kad turite dovanų kuponą; atvykę pateikite kupono kodą. Registruojantis internetu visa suma apmokama per Paysera, todėl ten kuponu atsiskaityti negalima.",
          },
          {
            p: "Sumą galima naudoti dalimis per kelis vizitus, likutis lieka kupone iki galiojimo pabaigos. Jei paslauga kainuoja daugiau, nei liko kupone, skirtumas primokamas Klinikoje. Likutį galite pasitikrinti puslapyje [„Kupono likutis“](/dovanu-kuponas/likutis).",
          },
          {
            p: "Jei kuponu apmokėtas vizitas atšaukiamas laiku arba jį atšaukia Klinika, suma grąžinama į kuponą, o jei kuponas jau nebegalioja – lieka kaip likutis kitoms ReaMed paslaugoms. Vėlyvam atšaukimui ir neatvykimui taikomos paslaugų pirkimo taisyklės.",
          },
          {
            p: "Kuponu gali pasinaudoti kiekvienas, kas pateikia jo kodą, todėl kodą saugokite kaip pinigus.",
          },
        ],
      },
      {
        h: "5. Keitimas ir grąžinimas",
        blocks: [
          { p: "Kuponas į pinigus nekeičiamas." },
          {
            p: "Pirkėjas gali atsisakyti nepanaudoto kupono per 14 dienų nuo apmokėjimo, parašęs info@reamed.lt. Tada kuponas anuliuojamas, sumokėtą sumą grąžiname tuo pačiu būdu, kuriuo ji buvo sumokėta, ir grąžinimą inicijuojame ne vėliau kaip per 14 kalendorinių dienų nuo prašymo gavimo; sąskaitai faktūrai išrašoma kreditinė sąskaita faktūra.",
          },
        ],
      },
      {
        h: "6. Jei pametėte kuponą",
        blocks: [
          {
            p: "Parašykite info@reamed.lt iš to adreso, kuriuo pirkote kuponą, arba paskambinkite +370 601 34304: kuponą išsiųsime dar kartą.",
          },
        ],
      },
      {
        h: "7. Klausimai, skundai ir redakcijos",
        blocks: [
          {
            p: "Dėl kupono kreipkitės info@reamed.lt arba telefonu +370 601 34304. Jei atsakymas netenkina, galite kreiptis į Valstybinę vartotojų teisių apsaugos tarnybą; teisė kreiptis į teismą išlieka.",
          },
          {
            p: "Kuponui taikoma jo pirkimo metu paskelbta taisyklių redakcija; vėlesnė redakcija jos vienašališkai nekeičia.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Gift voucher rules",
    edition: "MB Kineziterapija · Version of 22 November 2026",
    sections: [
      {
        h: "1. What the gift voucher is",
        blocks: [
          {
            p: "A ReaMed gift voucher is a prepayment for the services of the ReaMed clinic. It is sold, and the services are provided, by MB Kineziterapija, company code 305136936, Olimpiečių g. 1A-7, LT-09235 Vilnius; info@reamed.lt, +370 601 34304. Hereinafter, the Clinic.",
          },
          {
            p: "The amount is chosen at purchase: from €50 to €2,000, in steps of €10. For a larger amount, contact the Clinic.",
          },
          {
            p: "These rules apply to the voucher. Visits and visit packages paid with a voucher are covered by the [ReaMed rules for buying services, booking and cancellation](/rezervacija/salygos).",
          },
        ],
      },
      {
        h: "2. Purchase and delivery",
        blocks: [
          {
            p: "The voucher is paid online through Paysera. Before payment, the buyer's e-mail address is confirmed with a code sent by e-mail. Once the payment is confirmed we create the voucher with a unique code and e-mail it (PDF): to the buyer or, if the buyer chooses so, to the recipient – at once or at 9 a.m. on a chosen day, no more than 90 days ahead; the buyer then receives a copy. No paper voucher is posted.",
          },
          {
            p: "We issue an invoice in the name of the buyer or the company the buyer gives and send it in a separate e-mail; the voucher code is not printed on the invoice. The recipient's e-mail address is used only to send the voucher. More about data in the [privacy policy](/privatumas).",
          },
        ],
      },
      {
        h: "3. Validity",
        blocks: [
          {
            p: "The voucher is valid for 12 months from the day of payment up to and including the same day, in Lithuanian time; if the month has no such day, up to its last day. For example, paid on 22 November 2026, the voucher is valid up to and including 22 November 2027. The last valid day is printed on the voucher and shown on the [“Voucher balance”](/dovanu-kuponas/likutis) page.",
          },
          {
            p: "When the voucher is sent to the recipient later, the validity still counts from the day of payment.",
          },
          {
            p: "The validity is not extended. After the last valid day the voucher can no longer be used, and an unused sum is not refunded.",
          },
        ],
      },
      {
        h: "4. How to use it",
        blocks: [
          {
            p: "The voucher pays at the Clinic for any ReaMed service or visit package at that day's prices. Book a visit in advance by phone +370 601 34304 and say you have a gift voucher; at the Clinic, give the voucher code. Online booking is paid in full through Paysera, so the voucher cannot be used there.",
          },
          {
            p: "The sum can be used in parts over several visits; the rest stays on the voucher until it expires. If a service costs more than is left, the difference is paid at the Clinic. The balance can be checked on the [“Voucher balance”](/dovanu-kuponas/likutis) page.",
          },
          {
            p: "If a visit paid with the voucher is cancelled in time or cancelled by the Clinic, the sum returns to the voucher or, if the voucher is no longer valid, stays as a balance for other ReaMed services. Late cancellation and missed visits follow the rules for buying services.",
          },
          {
            p: "Anyone who gives the code can use the voucher, so keep the code as you would keep money.",
          },
        ],
      },
      {
        h: "5. Exchange and refund",
        blocks: [
          { p: "The voucher is not exchanged for money." },
          {
            p: "The buyer may withdraw from an unused voucher within 14 days of payment by writing to info@reamed.lt. The voucher is then cancelled, the sum is refunded by the same means it was paid, and we initiate the refund no later than 14 calendar days after receiving the request; a credit note is issued for the invoice.",
          },
        ],
      },
      {
        h: "6. If you lose the voucher",
        blocks: [
          {
            p: "Write to info@reamed.lt from the address you bought the voucher with, or call +370 601 34304: we will send the voucher again.",
          },
        ],
      },
      {
        h: "7. Questions, complaints and versions",
        blocks: [
          {
            p: "For questions about the voucher write to info@reamed.lt or call +370 601 34304. If the reply does not satisfy you, you can apply to the State Consumer Rights Protection Authority; the right to go to court remains.",
          },
          {
            p: "A voucher is governed by the version of these rules published when it was bought; a later version does not change it unilaterally.",
          },
        ],
      },
    ],
  },
};
