"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// Approved wording from the clinic system's registration terms (2026-10-04, adapted to Paysera
// on 2026-11-01), brought in line with the ReaMed patient document, redakcija 2026-11-22 (Piotr
// 2026-11-21). Changes to the rules go through docs/DECISIONS.md in klinika-system first.
const terms = {
  lt: {
    title: "Registracijos, apmokėjimo ir atšaukimo sąlygos",
    updated: "Galioja registracijai internetu reamed.lt svetainėje. Redakcija 2026-11-22.",
    sections: [
      {
        h: "Paslaugų teikėjas",
        p: [
          "Paslaugų teikėjas – MB „Kineziterapija“, įmonės kodas 305136936, buveinė Olimpiečių g. 1A-7, Vilnius. ReaMed klinika: Olimpiečių g. 1A-7, Vilnius, tel. +370 601 34304, info@reamed.lt.",
        ],
      },
      {
        h: "Registracija ir apmokėjimas",
        p: [
          "Vizitui būtina išankstinė registracija. Svetainėje pasirinkite specialistą, paslaugą ir laisvą laiką. Viename užsakyme galima užsisakyti kelis vizitus; kiekvienas apmokamas vieno vizito kaina, be nuolaidų ar abonementų.",
          "Registracija patvirtinama tik gavus visą apmokėjimą. Iki tol pasirinktas laikas laikomas laikinai, 20 minučių. Mokėjimas atliekamas per „Paysera“; galimi mokėjimo būdai rodomi mokėjimo lange. Patvirtinimą ir nuorodą vizitui tvarkyti atsiųsime el. paštu.",
        ],
      },
      {
        h: "Pirmasis apsilankymas",
        p: [
          "Pirmą kartą registruojamasi pirminei konsultacijai, kurios metu specialistas įvertina būklę, sudaro planą ir pradeda gydymą. Kineziterapijos procedūros ir masažas registruojami po konsultacijos.",
        ],
      },
      {
        h: "Vizito perkėlimas ir atšaukimas",
        p: [
          "Vizitą perkelti ar atšaukti galite per užsakymo nuorodą iš patvirtinimo laiško, telefonu +370 601 34304 arba el. paštu info@reamed.lt. Laikas skaičiuojamas nuo pokalbio, praleisto skambučio ar el. laiško gavimo momento (Lietuvos laiku).",
          "Kol iki vizito pradžios liko ne mažiau kaip 12 valandų, vizitą galima nemokamai perkelti arba atšaukti. Jei vizitas užregistruotas likus mažiau kaip 12 valandų, nemokamo atšaukimo laikotarpis netaikomas.",
          "Likus mažiau kaip 12 valandų, vizitą iki jo pradžios galima perkelti per administraciją už 20 € mokestį. Mokestis netaikomas, jei susirgote ir pateikiate gydytojo pažymą arba nedarbingumo pažymėjimą. Perkeltas vizitas turi įvykti per 30 dienų nuo pirminės vizito datos; per šį laiką jį galima perkelti dar kartą tomis pačiomis sąlygomis. Per 30 dienų neįvykęs vizitas laikomas neatvykimu.",
          "Pavėlavus vizitas trumpinamas, kaina nemažinama; pavėlavus daugiau kaip 15 minučių, vizitas gali būti laikomas neatvykimu.",
        ],
      },
      {
        h: "Sumokėtų lėšų grąžinimas",
        p: [
          "Atšaukus vizitą, kai iki jo liko ne mažiau kaip 12 valandų, sumokėta suma grąžinama tuo pačiu būdu per 14 dienų.",
          "Jei likus mažiau kaip 12 valandų vizito atsisakote jo neperkeldami arba neatvykstate, sumokėta vizito kaina negrąžinama: taip padengiamos klinikos išlaidos jums rezervuotam specialisto laikui ir kabinetui.",
          "Jei vizitą atšaukia klinika, galite pasirinkti kitą laiką arba atgauti visą sumokėtą sumą. Jei po įvertinimo specialistas dėl medicininių priežasčių procedūros neatlieka, mokama pusė vizito kainos, o likusi dalis jūsų pasirinkimu grąžinama arba įskaitoma į kitą vizitą.",
          "Šios sąlygos neriboja jūsų teisės bet kada nutraukti sveikatos priežiūros paslaugų sutartį ir kitų įstatymuose nustatytų teisių.",
        ],
      },
      {
        h: "Asmens duomenys",
        p: [
          "Registracijai naudojame vardą, pavardę, telefoną ir el. paštą: jie reikalingi vizitui patvirtinti, priminti ir susisiekti dėl pakeitimų. Sveikatos informacijos registracijos formoje neprašome. Daugiau – privatumo politikoje.",
        ],
      },
    ],
  },
  en: {
    title: "Booking, payment and cancellation terms",
    updated: "Apply to online booking on reamed.lt. Version of 22 November 2026.",
    sections: [
      {
        h: "Service provider",
        p: [
          "The service provider is MB Kineziterapija, company code 305136936, registered office Olimpiečių g. 1A-7, Vilnius. ReaMed clinic: Olimpiečių g. 1A-7, Vilnius, tel. +370 601 34304, info@reamed.lt.",
        ],
      },
      {
        h: "Booking and payment",
        p: [
          "A visit requires advance booking. Choose a specialist, a service and a free time on the website. One order may contain several visits; each is paid at its single-visit price, without discounts or packages.",
          "The booking is confirmed only once the full payment is received. Until then the chosen time is held temporarily, for 20 minutes. Payment is made through Paysera; the available payment methods are shown in the payment window. We e-mail the confirmation and a link to manage the visit.",
        ],
      },
      {
        h: "First visit",
        p: [
          "The first visit is an initial consultation, during which the specialist assesses your condition, makes a plan and starts treatment. Physiotherapy procedures and massage are booked after the consultation.",
        ],
      },
      {
        h: "Rescheduling and cancelling a visit",
        p: [
          "You can reschedule or cancel a visit through the order link in the confirmation e-mail, by phone on +370 601 34304 or by e-mail to info@reamed.lt. The time counts from the call, the missed call or the receipt of the e-mail (Lithuanian time).",
          "While at least 12 hours remain before the visit starts, it can be rescheduled or cancelled free of charge. If a visit is booked less than 12 hours in advance, there is no free cancellation period.",
          "With less than 12 hours left, a visit can be rescheduled through the administration before it starts for a €20 fee. No fee applies if you are ill and present a doctor's certificate or a certificate of incapacity for work. A rescheduled visit must take place within 30 days of the original visit date; within that period it can be rescheduled again on the same terms. A visit that does not take place within 30 days counts as a missed visit.",
          "If you are late, the visit is shortened and the price stays the same; if you are more than 15 minutes late, the visit may count as a missed visit.",
        ],
      },
      {
        h: "Refunds",
        p: [
          "If you cancel a visit at least 12 hours before it, the amount paid is refunded by the same method within 14 days.",
          "If, with less than 12 hours left, you cancel without rescheduling or do not attend, the price paid is not refunded: this covers the clinic's costs for the specialist's time and the room reserved for you.",
          "If the clinic cancels a visit, you can choose another time or receive a full refund. If, after assessment, the specialist does not perform the procedure for medical reasons, half of the visit price is paid and the other half is refunded or credited to another visit, as you choose.",
          "These terms do not limit your right to terminate the healthcare services agreement at any time or other rights provided by law.",
        ],
      },
      {
        h: "Personal data",
        p: [
          "For a booking we use your first name, last name, phone and e-mail: they are needed to confirm the visit, remind you of it and contact you about changes. We do not ask for health information in the booking form. See the privacy policy for more.",
        ],
      },
    ],
  },
} as const;

export default function TermsContent() {
  const { lang } = useLanguage();
  const t = terms[lang];
  return (
    <article className="bg-paper rounded-[28px] p-5 md:p-8 max-w-[760px] flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-h2 text-balance">{t.title}</h1>
        <p className="text-small text-graphite">{t.updated}</p>
      </header>
      {t.sections.map((section) => (
        <section key={section.h} className="flex flex-col gap-2">
          <h2 className="text-h3-m font-medium">{section.h}</h2>
          {section.p.map((paragraph) => (
            <p key={paragraph} className="text-body text-ink text-pretty">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
