import type { ServicePage } from "./types";
import { BERVOETS_2015, FURLAN_2015 } from "@/content/conditions/sources";
import { eur, minutes } from "./price-text";

// Batch 6, draft of 07.11.2026. Plan: therapeutic massage only (most "masažas" searches are SPA), to be developed.
export const gydomasisMasazas: ServicePage = {
  slug: "gydomasis-masazas",
  navTitle: "Gydomasis masažas",
  meta: {
    title: "Gydomasis masažas Vilniuje: nugaros, kaklo, sporto | ReaMed",
    description: `Gydomasis masažas Vilniaus centre raumenų įtampai ir skausmui mažinti: 30 min. ${eur("masazas-30")}, 60 min. ${eur("masazas-60")}. Atlieka kineziterapeutai, prireikus deriname su pratimais.`,
  },
  therapyName: "Gydomasis masažas",
  hero: {
    h1: "Gydomasis masažas Vilniuje",
    lead: "Gydomasis masažas mažina raumenų įtampą ir skausmą, kai skauda nugarą, kaklą ar pečius, po krūvio ar traumos. Mūsų klinikoje masažą atlieka kineziterapeutai: jie žino, kas sukelia įtampą, ir prireikus masažą derina su pratimais. Tai ne SPA procedūra, o gydymo dalis.",
  },
  about: {
    paragraphs: [
      "Masažas veikia raumenis, sausgysles ir fascijas: spaudimu, glostymu, minkymu ir tempimu. Daugelis jaučia, kad po procedūros skausmas sumažėja ir judėti lengviau.",
      "Tyrimų duomenimis, masažas trumpuoju laikotarpiu gali sumažinti skausmą ir pagerinti funkciją esant nugaros ar peties skausmui ir kelio artrozei, tačiau ilgalaikis poveikis neįrodytas, o įrodymų kokybė žema. Todėl pasikartojančiai įtampai masažą deriname su pratimais.",
      "Masažą galima užsisakyti atskirai arba kaip papildomą priemonę kineziterapijos vizito metu.",
    ],
  },
  helps: {
    items: [
      "Nugaros, kaklo ir pečių juostos įtampa",
      "Raumenų skausmas po krūvio ar treniruočių",
      "Įtampos galvos skausmas",
      "Raumenų sustingimas po traumos, kai ūmus laikotarpis praėjęs",
      "Pasiruošimas varžyboms ir atsigavimas po jų",
      "Sėdimas darbas ir ilgas buvimas vienoje padėtyje",
    ],
    note: "Jei skausmas plinta į ranką ar koją, tirpsta pirštai ar skausmas vis kartojasi, pradėkite nuo kineziterapeuto konsultacijos.",
    pages: ["nugaros-skausmas", "kaklo-skausmas", "itampos-galvos-skausmas", "raumenu-patempimas"],
  },
  visit: [
    { lead: "Paklausiame,", text: "kur jaučiate įtampą ar skausmą, ar yra ligų ir traumų, dėl kurių masažas netinka." },
    { lead: "Masažuojame", text: "pagal jūsų poreikį: nuo atpalaiduojančio iki gilesnio raumenų darbo." },
    { lead: "Stiprumą derinamės kartu:", text: "masažas gali būti juntamas, bet neturi būti nepakeliamai skausmingas." },
    { lead: "Patariame,", text: "ką daryti, kad įtampa negrįžtų taip greitai." },
  ],
  methods: {
    items: [
      { title: "Klasikinis gydomasis masažas", text: "nugarai, kaklui, pečių juostai, rankoms ir kojoms." },
      { title: "Sporto masažas", text: "prieš varžybas ir po jų, atsigavimui po krūvio." },
      { title: "Miofascialinės technikos", text: "ir gilesnis raumenų darbas, kai įtampa užsitęsusi." },
      { title: "Trigerinių taškų technikos", text: "skausmingiems raumenų sukietėjimams." },
      { title: "Derinimas su kineziterapija,", text: "kai problema kartojasi." },
    ],
    paragraphs: [
      "Masažas trunka 30 arba 60 min. Pusvalandžio pakanka vienai sričiai, pavyzdžiui, kaklui ir pečiams; valanda tinka nugarai ir kojoms ar visam kūnui.",
      "Tyrimuose masažas rimtų nepageidaujamų reiškinių nesukėlė. Dažniausias buvo laikinas skausmo padidėjimas.",
    ],
  },
  price: {
    lines: ["masazas-30", "masazas-60"],
    note: `Kineziterapijos vizito metu masažas gali būti papildomas modulis: ${minutes("papildomas-modulis")}, ${eur("papildomas-modulis")}.`,
  },
  limits: {
    items: [
      "Karščiuojate ar sergate ūmia infekcija",
      "Ką tik patirta trauma, kraujosruva, galimas lūžis",
      "Blauzda tinsta, skauda ir kaista: tai gali būti kraujo krešulys",
      "Odos pažeidimai, uždegimas ar bėrimas masažuojamoje vietoje",
      "Onkologinė liga gydymo metu: tik gydytojui leidus",
    ],
    note: "Tokiais atvejais masažas gali pakenkti. Pirmiausia pasitarkite su gydytoju.",
  },
  team: {
    title: "Gydomąjį masažą atlieka",
    specialists: ["mangirdas-kazacenko", "erikas-jatkauskas", "edmundas-zlatkus"],
  },
  faq: [
    {
      q: "Kuo gydomasis masažas skiriasi nuo SPA masažo?",
      a: "SPA masažas skirtas atsipalaiduoti, o gydomasis masažas skirtas konkrečiam skausmui ar įtampai. Jį atlieka kineziterapeutai, kurie įvertina, ar masažas jums tinka, ir prireikus pasiūlo kitą gydymą.",
    },
    {
      q: "Kiek kainuoja masažas?",
      a: `30 min. masažas kainuoja ${eur("masazas-30")}, 60 min. ${eur("masazas-60")}. Perkant 5 ar 10 procedūrų paketą, viena procedūra pigesnė.`,
    },
    {
      q: "Kiek kartų reikia ateiti?",
      a: "Kartais pakanka kelių procedūrų. Jei įtampa nuolat grįžta, verta su kineziterapeutu ieškoti priežasties.",
    },
    {
      q: "Ar masažas gydo stuburo išvaržą?",
      a: "Masažas gali sumažinti raumenų įtampą ir skausmą, bet išvaržos nepašalina. Kai skausmas plinta į koją, pirmiausia reikia ištyrimo ir pratimų.",
    },
    {
      q: "Ar masažas turi skaudėti?",
      a: "Gilesnis masažas gali būti juntamas, bet neturi būti nepakeliamas. Stiprumą derinamės kartu, o kitą dieną galimas lengvas raumenų maudimas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "gydomasis-masazas",
  sources: [FURLAN_2015, BERVOETS_2015],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
  ],
};
