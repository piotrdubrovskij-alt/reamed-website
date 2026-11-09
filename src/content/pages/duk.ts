import type { InfoPage } from "./types";
import { eur, minutes, packEur } from "@/content/services/price-text";
import { translations } from "@/lib/translations";

const t = translations.lt;

// Batch 15. Plan of 07.11.2026: referral, prices, number of visits, compensation, what to bring. Every answer repeats what
// the site already states (Kainos, Kontaktai, service pages) or Piotr's decisions in CLAUDE.md; prices come from prices.ts.
export const duk: InfoPage = {
  path: "/duk",
  navTitle: "DUK",
  schema: "FAQPage",
  meta: {
    title: "DUK: siuntimas, kainos, vizitai ir atšaukimas | ReaMed",
    description:
      "Atsakymai apie ReaMed kliniką: ar reikia siuntimo, kiek kainuoja vizitas, kiek vizitų prireiks, ar kompensuoja draudimas, kaip atšaukti vizitą, ką atsinešti.",
  },
  back: { href: "/", label: "Pradžia" },
  hero: {
    h1: "Dažniausiai užduodami klausimai",
    lead: `Trumpi atsakymai apie registraciją, vizitus, kainas ir atšaukimą. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia, pirmasis vizitas trunka ${minutes("pirmasis-vizitas")} ir kainuoja ${eur("pirmasis-vizitas")}. Neradote atsakymo? Paskambinkite ${t.contact.phone}.`,
  },
  blocks: [
    {
      kind: "faq",
      id: "registracija",
      title: "Registracija",
      items: [
        {
          q: "Ar reikia gydytojo siuntimo?",
          a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai. Plačiau: [privati reabilitacija be siuntimo](/reabilitacija-be-siuntimo).",
        },
        {
          q: "Kaip užsiregistruoti?",
          a: `Greičiausia paskambinti ${t.contact.phone}. Galite ir palikti užklausą [registracijos puslapyje](/registracija): susisieksime per 24 valandas darbo dienomis.`,
        },
        {
          q: "Ar galiu ateiti be diagnozės ir tyrimų?",
          a: "Taip. Būklę ištiriame per pirmąjį vizitą. Jei paaiškės, kad pirmiausia reikia gydytojo, pasakysime ir paaiškinsime, kur kreiptis.",
        },
        {
          q: "Kaip išsirinkti specialistą?",
          a: "Galite rinktis patys pagal [specialistų aprašymus](/specialistai) arba registruodamiesi trumpai pasakyti, kas skauda: patarsime, kam geriausia užsirašyti.",
        },
        {
          q: "Kada ir kur dirbate?",
          a: `${t.booking.hoursValue}. Adresas: ${t.contact.address}, atskiras įėjimas pirmame pastato aukšte, iš Sporto rūmų pusės. [Kaip mus rasti](/kontaktai).`,
        },
        {
          q: "Kur palikti automobilį?",
          a: "Prie klinikos parkavimo vietų nėra. Artimiausia stovėjimo vieta yra prie Energetikos ir technikos muziejaus, taip pat galima statyti automobilį UNIPARK aikštelėse netoliese.",
        },
        {
          q: "Kokiomis kalbomis dirbate?",
          a: "Lietuvių, anglų ir rusų. Registruodamiesi pasakykite, kuri kalba jums patogiausia.",
        },
        {
          q: "Ar gydote vaikus?",
          a: "Ne. Vaikų kineziterapija ir skoliozė yra FitKid klinikos sritis (fitkid.lt).",
        },
      ],
    },
    {
      kind: "faq",
      id: "vizitas",
      title: "Vizitas ir gydymas",
      items: [
        {
          q: "Kaip vyksta pirmasis vizitas?",
          a: `Pirmasis vizitas trunka ${minutes("pirmasis-vizitas")}: konsultacija, ištyrimas, gydymo planas ir gydymas. Jau per jį parodome, ką daryti namuose.`,
        },
        {
          q: "Ką atsinešti ir kaip apsirengti?",
          a: "Atvykite 5–10 min. anksčiau ir vilkėkite patogią aprangą. Jei turite, atsineškite tyrimų atsakymus, gydytojų rekomendacijas, o po operacijos ir išrašą.",
        },
        {
          q: "Kiek vizitų prireiks?",
          a: "Priklauso nuo būklės. Ūmiam skausmui dažnai pakanka kelių vizitų, tikslingam gydymui dažniausiai planuojame bent 5, o užsitęsusiai radikulopatijai gali prireikti 10 ir daugiau. Tikslesnį planą pasakome po ištyrimo.",
        },
        {
          q: "Kineziterapeutas, osteopatas ar manualinis terapeutas: ką rinktis?",
          a: "Iš anksto žinoti nebūtina. Per pirmąjį vizitą ištiriame ir parenkame metodą. Manualinė terapija dažniausiai yra kineziterapijos vizito dalis, o osteopatiją atlieka Piotr Dubrovskij.",
        },
        {
          q: "Ar pas jus dirba chiropraktikas?",
          a: "Ne. Panašias problemas sprendžia manualinės terapijos specialistai ir osteopatas. Plačiau: [kuo skiriasi chiropraktika, manualinė terapija ir osteopatija](/chiropraktikas-vilniuje).",
        },
        {
          q: "Ar gydymas skausmingas?",
          a: "Neturėtų būti. Technikų stiprumą parenkame pagal jūsų skausmą. Kitą dieną gali jaustis lengvas maudimas ar nuovargis, jis dažniausiai greitai praeina.",
        },
        {
          q: "Ar darote MRT ar rentgeno tyrimus?",
          a: "Ne, tyrimų klinikoje neatliekame. Jei jų reikia, pasakome, pas kokį gydytoją kreiptis.",
        },
        {
          q: "Kada po operacijos galima pradėti reabilitaciją?",
          a: "Kai leidžia chirurgas. Po kryžminio raiščio ir menisko operacijų paprastai pradedame maždaug po savaitės: pirmiausia patarimai ir pasyvūs judesiai. Plačiau: [atsistatymas po operacijų](/ka-gydome/atsistatymas-po-operaciju).",
        },
        {
          q: "Kada reikia ne kineziterapeuto, o skubios pagalbos?",
          a: "Skambinkite 112 arba kreipkitės į skubiosios pagalbos skyrių, jei staiga sutriko šlapinimasis, greitai silpsta ranka ar koja, po traumos negalite atsistoti arba atsirado staigus neįprastas galvos ir kaklo skausmas su svaigimu, regos ar kalbos sutrikimais.",
        },
      ],
    },
    {
      kind: "faq",
      id: "kainos",
      title: "Kainos ir apmokėjimas",
      items: [
        {
          q: "Kiek kainuoja vizitas?",
          a: `Pirmasis vizitas su ištyrimu ${eur("pirmasis-vizitas")} (${minutes("pirmasis-vizitas")}), kineziterapija ${eur("kineziterapija")} (${minutes("kineziterapija")}), vizitas pas Piotrą Dubrovskij ${eur("piotr")} (${minutes("piotr")}). [Visos kainos](/kainos).`,
        },
        {
          q: "Ar yra vizitų paketų?",
          a: `Taip, 5 ir 10 vizitų. Kineziterapijos vizitas pakete kainuoja ${packEur("kineziterapija", 5)} arba ${packEur("kineziterapija", 10)}. Paketas galioja 49 arba 84 dienas nuo pirkimo dienos, yra vardinis ir skirtas vienai paslaugai. Pirmajam vizitui ir vizitams pas Piotrą Dubrovskij paketai netaikomi.`,
        },
        {
          q: "Kaip galima sumokėti?",
          a: "Grynaisiais, banko kortele arba pavedimu.",
        },
        {
          q: "Ar kompensuoja ligonių kasos?",
          a: "Ne. Su ligonių kasomis nedirbame, todėl visos paslaugos mokamos.",
        },
        {
          q: "Ar sumoka sveikatos draudimas?",
          a: "Jei turite sveikatos draudimą, po vizito išrašome sąskaitą faktūrą draudimo bendrovei. Ar ir kiek ji kompensuos, priklauso nuo jūsų sutarties, todėl verta pasitikslinti iš anksto.",
        },
      ],
    },
    {
      kind: "faq",
      id: "atsaukimas",
      title: "Atšaukimas ir perkėlimas",
      items: [
        {
          q: "Kaip atšaukti ar perkelti vizitą?",
          a: `Nemokamai pakeisti ar atšaukti vizitą galima, kol iki jo liko ne mažiau kaip 12 valandų. Paskambinkite ${t.contact.phone}.`,
        },
        {
          q: "Kas, jei iki vizito liko mažiau nei 12 valandų?",
          a: "Perkelti galima tik per administraciją, mokestis 20 €. Vėlesnis atšaukimas ar neatvykimas prilygsta įvykusiam vizitui: iš paketo jis nurašomas, už vienkartinį vizitą pinigai negrąžinami.",
        },
        {
          q: "Kas nutinka pasibaigus paketo galiojimui?",
          a: "Paketas nepratęsiamas. Įvykę vizitai perskaičiuojami pagal vienkartinio vizito kainą, o likutis lieka jūsų sąskaitoje ir gali būti naudojamas bet kurioms ReaMed paslaugoms pagal tos dienos kainas. Paprašius likutį grąžiname, išskyrus dovanų kuponu apmokėtą dalį.",
        },
      ],
    },
  ],
  sources: [],
  reviewed: null,
  related: [
    { href: "/apie-mus", label: "Apie mus" },
    { href: "/kainos", label: "Kainos" },
    { href: "/kontaktai", label: "Kontaktai" },
    { href: "/reabilitacija-be-siuntimo", label: "Privati reabilitacija be siuntimo" },
  ],
};
