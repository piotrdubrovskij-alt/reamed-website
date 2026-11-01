"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// Approved wording from the clinic system's registration terms (2026-10-04, adapted to Paysera
// on 2026-11-01). Changes to the rules go through docs/DECISIONS.md in klinika-system first.
const terms = {
  lt: {
    title: "Registracijos, apmokėjimo ir atšaukimo sąlygos",
    updated: "Galioja registracijai internetu reamed.lt svetainėje.",
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
        h: "Vizito keitimas ir atšaukimas",
        p: [
          "Savitarnoje registraciją galima pakeisti ar atšaukti, kol iki vizito liko bent 12 valandų. Laikas vertinamas pagal Lietuvos laiko juostą. Vėliau įprastas atšaukimas ar perkėlimas nebegalimas.",
          "Susirgus ir likus mažiau nei 12 valandų iki vizito, suaugusiojo vizitą ReaMed galima perkelti suderinus su administracija. Perkėlimo mokestis – 15 €.",
        ],
      },
      {
        h: "Sumokėtų lėšų grąžinimas",
        p: [
          "Klientui atsisakius apmokėtos paslaugos, įmoka negrąžinama, išskyrus teisės aktuose numatytus atvejus. Dėl kito vizito laiko ar paslaugos pakeitimo kreipkitės į administraciją.",
          "Šios sąlygos neriboja privalomų kliento teisių, įskaitant teises dėl klinikos nesuteiktos ar netinkamai suteiktos paslaugos.",
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
    updated: "Apply to online booking on reamed.lt.",
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
        h: "Changing and cancelling a visit",
        p: [
          "Self-service cancellation or rescheduling is available at least 12 hours before the appointment, using Lithuanian local time. Standard cancellation or rescheduling is not available after that deadline.",
          "In case of illness less than 12 hours before the appointment, an adult ReaMed appointment may be rescheduled by agreement with the administration. The rescheduling fee is €15.",
        ],
      },
      {
        h: "Refunds",
        p: [
          "If the client declines a paid service, the payment is non-refundable except where required by law. Contact the administration about another appointment time or a change of service.",
          "These terms do not restrict mandatory client rights, including rights relating to a service not provided or improperly provided by the clinic.",
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
