// Real Google reviews of ReaMed, picked by hand and tagged.
// Source: Google Maps listing (GOOGLE_REVIEWS.url). Collected 2026-10-31.
// `date` is approximate (Google shows only "prieš N mėn./metų").
// Author is shown as "Vardas P." on purpose: reviews mention health details.
// Left out by owner decision (2026-10-31): Liudmila V. (detailed health/disability
// history), Jurgita G. (criticises another clinic). Star-only and one-word reviews skipped.
// To update: re-collect from the listing, add new entries on top, bump GOOGLE_REVIEWS.

export type ConditionSlug =
  | "nugaros-skausmas"
  | "kaklo-skausmas"
  | "sporto-traumos"
  | "kelio-skausmas"
  | "peties-problemos"
  | "plintantis-skausmas"
  | "tendinopatijos"
  | "atsistatymas-po-operaciju";

export type ServiceSlug =
  | "kineziterapija"
  | "manualine-terapija"
  | "osteopatija"
  | "sporto-reabilitacija"
  | "pooperacine-reabilitacija"
  | "gydomasis-masazas";

export type SpecialistSlug =
  | "piotr-dubrovskij"
  | "kotryna-kairyte"
  | "erikas-jatkauskas"
  | "mangirdas-kazacenko";

export interface Review {
  id: string;
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  /** "YYYY-MM" or "YYYY", approximate */
  date: string;
  lang: "lt" | "en";
  /** Verbatim from Google */
  text: string;
  conditions: ConditionSlug[];
  services: ServiceSlug[];
  specialists: SpecialistSlug[];
  /** Candidate for the home page */
  featured?: boolean;
  /** Waiting for owner decision; not shown while set */
  hold?: string;
}

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 55,
  updated: "2026-10-31",
  url: "https://www.google.com/maps?cid=5379242466351535503",
};

export const reviews: Review[] = [
  {
    id: "vaidas-m-2026-08",
    author: "Vaidas M.",
    rating: 5,
    date: "2026-08",
    lang: "lt",
    text: "Po sunkios ligos atsinaujino stuburo išvarža, vargino nugaros skausmai, nebegalėjau įveikti ilgesnių atstumų, pasireiškė skausmai kojose. Kreipiausi į ReaMed pagalbos. Piotro  profesionalumas, parinktas gydymas, pratimai, patarimai kasdieninėje veikloje žymiai pagerino sveikatos būklę, įgijau pasitikėjimo savimi, ko pasekoje išvengiau stuburo išvaržos operacijos. Labai rekomenduoju kreiptis pagalbos pas šį puikų specialistą. Asta",
    conditions: ["nugaros-skausmas", "plintantis-skausmas"],
    services: ["kineziterapija"],
    specialists: ["piotr-dubrovskij"],
    featured: true,
  },
  {
    id: "mazvydas-b-2026-08",
    author: "Mažvydas B.",
    rating: 5,
    date: "2026-08",
    lang: "lt",
    text: "ReaMed pradėjau lankyti kai prireikė reabilituotis po nugaros traumos, o gydytoja rekomendavo registruotis pas Mangirdą. Śiuo atveju rekomendacija buvo tiesiai į dešimtuką, nes Mangirdas ne tik žino, ką daro kineziterapijos srityje, bet turi talentą bendrauti su žmonėmis, nuteikti pozityviai, palaikyti pokalbį bet kokia tema ir apskritai paversti patį gydymosi procesą net, sakyčiau, maloniu, ko aš pradžioje visiškai nesitikėjau. Tai ir toliau dabar lankausi - net gaila pagalvojus, kad kažkada nugara pasitaisys… :D",
    conditions: ["nugaros-skausmas"],
    services: ["kineziterapija"],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "vita-a-2026-07",
    author: "Vita A.",
    rating: 5,
    date: "2026-07",
    lang: "lt",
    text: "Ačiū ReaMed už profesionalią  pagalbą grįžtant į pilnavertį gyvenimą po sudėtingos kelio operacijos. Užsiėmimai klinikoje, aiškus veiksmų planas, specialistų dėmesys leido pasiekti rezultatų greičiau, nei tikėjausi. Rekomenduoju!",
    conditions: ["kelio-skausmas", "atsistatymas-po-operaciju"],
    services: ["pooperacine-reabilitacija"],
    specialists: [],
  },
  {
    id: "urte-p-2026-08",
    author: "Urte P.",
    rating: 5,
    date: "2026-08",
    lang: "lt",
    text: "Super klinika ir super kineziterapeutas Mangirdas. Rado problemų kurių jokie gydytojai niekados nepastebėjo ir gydymas buvo labai efektyvus. Rekomenduočiau visiems!",
    conditions: [],
    services: ["kineziterapija"],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "artur-c-2025",
    author: "Artur C.",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Nuoširdžiai dėkoju gydytojui Piotrui už išskirtinį profesionalumą ir rūpestingumą gydant mano traumą – visiškai plyšusią Achilo sausgyslę. Po sėkmingai atliktos operacijos būtent jo dėka per vos tris mėnesius grįžau į įprastą gyvenimo ritmą. Ypatingai noriu išskirti reabilitacijos procesą, kurį gydytojas Piotras ne tik atidžiai prižiūrėjo, bet ir individualiai pritaikė prie mano situacijos. Kiekvienas žingsnis – nuo pratimų iki krūvio didinimo – buvo suplanuotas ir aiškiai paaiškintas, todėl jaučiausi saugiai ir užtikrintai viso gijimo laikotarpiu. Profesionalios žinios, kantrybė, nuoširdus bendravimas ir dėmesys detalėms. Esu labai dėkingas už grąžintą judėjimo laisvę ir galimybę gyventi aktyviai. Drąsiai rekomenduoju gydytoją Piotrą kiekvienam, kuris susidūrė su rimta trauma ir ieško patikimo specialisto reabilitacijai.",
    conditions: ["atsistatymas-po-operaciju"],
    services: ["pooperacine-reabilitacija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "greta-n-2025",
    author: "Greta N.",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Lankiausi pas specialistą Eriką Jatkauską su peties sąnario kapsulito problema. Specialistas labai atidžiai apžiūrėjo, kombinavome treniruotes su masažais, kas labai padėjo atstatyti peties stabilumą. Tuo pačiu, Erikas atkreipė dėmesį į mano netaisyklingą laikyseną, ko pasekoje iš tikro turiu kitų problemų, tačiau jų nesusiedavau su laikysena ir atitinkamai pradėjau tos srities tikslingesni gydymą. Lankantis pas kitus specialistus jie to nepastebėjo, tad didžiulis pliusas specialistui, kad žiūri į visumą, o ne į vieną konkrečia problemą. Likau patenkinta šio specialisto darbu.",
    conditions: ["peties-problemos"],
    services: ["kineziterapija", "gydomasis-masazas"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "lina-2025",
    author: "Lina",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Esu nuolatinė Reamed klinikos klientė ir labai vertinu jų profesionalų požiūrį bei nuoširdų rūpestį pacientais. Ypač noriu padėkoti Piotrui – jo dėka buvo visiškai išgydyta „tenisininko alkūnė“, o šiuo metu jis padeda ir dėl nugaros skausmų. Kiekviena procedūra kruopščiai pritaikyta individualiai, o rezultatai – puikiai jaučiami. Nuoširdžiai rekomenduoju šią kliniką visiems, ieškantiems kokybiškos, patikimos ir veiksmingos pagalbos sveikatai.",
    conditions: ["tendinopatijos", "nugaros-skausmas"],
    services: ["kineziterapija"],
    specialists: ["piotr-dubrovskij"],
    featured: true,
  },
  {
    id: "aleksandra-c-2025",
    author: "Aleksandra C.",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Man labai skaudėjo kelius– skausmas buvo toks stiprus, kad beveik nebegalėjau vaikščioti. Kreipiausi į Reamed kliniką, kur mane gydė gydytojas Piotras. Po atlikto gydymo mano keliai buvo visiškai išgydyti. Skausmas dingo, vėl galiu normaliai vaikščioti ir gyventi aktyviai. Esu labai dėkingas gydytojui už profesionalumą ir veiksmingą gydymą.",
    conditions: ["kelio-skausmas"],
    services: ["kineziterapija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "eugenija-j-2025",
    author: "Eugenija J.",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Labai noriu padėkoti už profesionalų darbą, patarimus, pateiktas rekomendacijas bei nuoširdų rūpestį! Pradėjus lankytis, esamos problemos buvo išspręstos, labai džiaugiuosi rezultatu bei rekomenduoju ReaMed!",
    conditions: [],
    services: [],
    specialists: [],
  },
  {
    id: "rozalija-g-2026-07",
    author: "Rozalija G.",
    rating: 5,
    date: "2026-07",
    lang: "lt",
    text: "Mangirdas nuostabiai dirba! Ačiū.",
    conditions: [],
    services: [],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "valdemaras-v-2024",
    author: "Valdemaras V.",
    rating: 5,
    date: "2024",
    lang: "lt",
    text: "Labai rekomenduoju įmonę ReaMed ir kineziterapeutą Eriką. Ilgą laiką kentėjau nuo peties skausmo, bet po konsultacijos ir individualių terapijų mano skausmas ženkliai sumažėjo. Erikas yra tikras profesionalas, atidus ir rūpestingas. Jis naudojo veiksmingas technikas ir pateikė pratimus, kurie padėjo man greičiau atsigauti. Dėka jo, galiu vėl mėgautis pilnaverčiu gyvenimu. Ačiū, ReaMed ir Erikui!",
    conditions: ["peties-problemos"],
    services: ["kineziterapija"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "ilja-m-2025",
    author: "Ilja M.",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Sveiki, pas Piotrą lankausi jau 7-us metus. Tai vienas geriausų specialistų, kurių man teko pažinoti ir už jo pagalbą esu labai dėkingas !",
    conditions: [],
    services: [],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "vilma-b-2022",
    author: "Vilma B.",
    rating: 5,
    date: "2022",
    lang: "lt",
    text: "Sveiki. Noriu iš visos širdies ir atsakingai rekomenduoti Reamed kliniką ir joje dirbančius profesionalius kineziterapeutus. Aš čia lankausi jau ketvirtus metus,  suteiktų paslaugų kokybe esu labai patenkinta. Patekau po kojos lūžio ir stipraus raiščių patempimo, kai reabilitacija poliklinikoje nepadėjo, o Reamed  kineziterapeutas Piotr Dubrovskij atstatė taip, kad dabar vis paklausiu, o kuri koja buvo lūžusi.  Šiuo metu esu po  sudėtingos rankos (alkūnės) operacijos, vėl prireikė rimtos Reamed pagalbos, vien tik sanatorinio ambulatorinio gydymo nepapako. Piotr Dubrovskij darbo išmanymas yra žodžiais nenusakomas. Jis daro stebuklus.  Padėka ir sėkmės visai Reamed komandai! P. S.  Beje, čia vyksta ne tik individualūs užsiėmimai su žmonėmis po traumų, operacijų ar tiesiog lydimų skausmo (masažai, osteopatinis gydymas, fizioterapija ir kt.), čia  galima ir tiesiog kūną stiprinti - vyksta smagios  treniruotės, mankštos (raumenų tempimas, pratimai vestibiuliariniam aparatui lavinti, kūnui gražinti  ir kt.). Super!  Rekomenduoju.",
    conditions: ["atsistatymas-po-operaciju"],
    services: ["pooperacine-reabilitacija", "kineziterapija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "kristina-p-2021",
    author: "Kristina P.",
    rating: 5,
    date: "2021",
    lang: "lt",
    text: "Į \"Reamed\" kreipiausi dėl gan sudėtingos traumos - po lūžio, dėl karantino metu laiku negautos pagalbos ir informacijos, buvo labai nusilpusi koja ir sustingęs kelio sąnarys. Piotro rūpesčio ir sudėliotos gydymo programos dėka, šiandien koja lenkiasi pilnai ir galiu judėti be skausmų ar diskomforto. Ačiū \"Reamed\" ir ten dirbantiems profesionalams už visą pagalbą ir palaikymą, suteiktą informaciją ir lankstumą derinant apsilankymų laikus. Gydymas truko ilgai, bet Piotro profesionalumo dėka galiu džiaugtis geriausiais rezultatais!!",
    conditions: ["kelio-skausmas"],
    services: ["kineziterapija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "tevas-2025",
    author: "Tėvas",
    rating: 5,
    date: "2025",
    lang: "lt",
    text: "Dėkoju Erikui už profesionalią pagalbą reabilitacijos metu po operacijos. Labai greitai padėjo atsigauti ir grįžti į sporta. Labai rekomenduoju!",
    conditions: ["atsistatymas-po-operaciju", "sporto-traumos"],
    services: ["pooperacine-reabilitacija", "sporto-reabilitacija"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "kajus-z-2024",
    author: "Kajus Z.",
    rating: 5,
    date: "2024",
    lang: "lt",
    text: "Esu Lietuvos jaunimo ledo ritulio rinktinės narys ir norėjau pasidalinti patirtimi su Reamed kineziterapeutu Eriku Jatkausku. Erikas sugebėjo per pora dienų atstatyti sužeistą riešą, po patirtos traumos, kas leido žaisti svarbiausiose varžybose. Taip pat padėjo susitvarkyti su dvigalvio raumens patempimu.",
    conditions: ["sporto-traumos"],
    services: ["sporto-reabilitacija"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "ilja-c-2024",
    author: "Ilja C.",
    rating: 5,
    date: "2024",
    lang: "lt",
    text: "Kaip Lietuvos ledo ritulio rinktinės žaidėjas reguliariai lankausi \"ReaMed\" klinikoje, kur dirbu su sporto kineziterapeute Kotryna Kairytė. Jos darbo įgūdžiai ir individualus priėjimas padeda man stiprinti raumenis ir išvengti traumų. Kotrynos dėka jaučiuosi geriau pasirengęs varžyboms. Labai rekomenduoju Kotryną ir kliniką \"ReaMed\" visiems, kurie nori būti sveiki ir geros fizinės formos.",
    conditions: ["sporto-traumos"],
    services: ["sporto-reabilitacija"],
    specialists: ["kotryna-kairyte"],
    featured: true,
  },
  {
    id: "daiva-s-2022",
    author: "Daiva S.",
    rating: 5,
    date: "2022",
    lang: "lt",
    text: "Piotr Dubrovskij taiko ne tik kineziterapijos metodus, bet ir osteopatiją. Tai padeda sveikti ne tik skaudamai vietai, bet ir visam kūnui. Šauni klinika, kurios specialistai  padėjo daugeliui žmonių atsigauti po traumų ir operacijų. Rekomenduoju.",
    conditions: ["atsistatymas-po-operaciju"],
    services: ["osteopatija", "kineziterapija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "aurimas-g-2021",
    author: "Aurimas G.",
    rating: 5,
    date: "2021",
    lang: "lt",
    text: "Esu profesionalus sportininkas ir ištikus bėdai visuomet kreipiuosi tik į Reamed kliniką. Piotr Dubrovskij yra savo srities specialistas ir tik jo pagalba sugebu gyventi be skausmo po traumų jau 10 metų.",
    conditions: ["sporto-traumos"],
    services: ["sporto-reabilitacija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "ramunas-k-2020",
    author: "Ramūnas K.",
    rating: 5,
    date: "2020",
    lang: "lt",
    text: "Čia dirbama nuosekliai ir užtikrintai. Man padėjo ne tik atsikratyti įvairių trauminių skausmų, bet ir paruošti kūną maratonams,  ultrabėgimams.",
    conditions: ["sporto-traumos"],
    services: ["sporto-reabilitacija"],
    specialists: [],
  },
  {
    id: "violeta-v-2024",
    author: "Violeta V.",
    rating: 5,
    date: "2024",
    lang: "lt",
    text: "Džiaugiuosi atradusi ReaMed ir rekomenduoju kliniką visiems, norintiems atstatyti savo fizinę būklę, sulaukiant profesionalaus požiūrio į pacientą.Ypatingai esu dėkinga Erikui Jatkauskui, kuris visą reabilitacijos laikotarpį buvo labai profesionalus ir dėmesingas mano situacijai.",
    conditions: [],
    services: ["kineziterapija"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "roman-2025-12",
    author: "Roman",
    rating: 5,
    date: "2025-12",
    lang: "lt",
    text: "Padėjo atsikratyti peties skausmų! Dirbau su Eriku, rekomenduoju!;)",
    conditions: ["peties-problemos"],
    services: ["kineziterapija"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "lina-s-2022",
    author: "Lina S.",
    rating: 5,
    date: "2022",
    lang: "lt",
    text: "Rekomenduoju. Savo darbą gerai išmanantis kineziterapeutas Piotr Dubrovskij  mano artimam žmogui  labai padėjo atsistatyti po traumų .",
    conditions: [],
    services: ["kineziterapija"],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "roman-l-2023",
    author: "Roman L.",
    rating: 5,
    date: "2023",
    lang: "lt",
    text: "Geriausia patirtis ir profesionalumas, uzsiemimai leidzia daug metu dziaugtis judejimo dziaugsmu ir gyvenimu.",
    conditions: [],
    services: [],
    specialists: [],
  },
  {
    id: "laima-k-2022",
    author: "Laima K.",
    rating: 5,
    date: "2022",
    lang: "lt",
    text: "Tik patys geriausi atsiliepimai apie Piotr Dubrovskij! Tikrai rekomenduoju!",
    conditions: [],
    services: [],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "gintaute-r-2020",
    author: "Gintautė R.",
    rating: 5,
    date: "2020",
    lang: "lt",
    text: "Labai profesionali ir draugiška komanda. Tikrai rekomenduoju!",
    conditions: [],
    services: [],
    specialists: [],
  },
  {
    id: "loreta-s-2022",
    author: "Loreta S.",
    rating: 5,
    date: "2022",
    lang: "lt",
    text: "Labai puiki klinika, rekomenduoju, dirba profesionalūs ir suprantantys problemas specialistai",
    conditions: [],
    services: [],
    specialists: [],
  },
  {
    id: "ruta-s-2022",
    author: "Ruta S.",
    rating: 5,
    date: "2022",
    lang: "lt",
    text: "Dievo duotos rankos,tai apie specialista Piotra.",
    conditions: [],
    services: [],
    specialists: ["piotr-dubrovskij"],
  },
  {
    id: "urte-2026-10",
    author: "Urtė",
    rating: 5,
    date: "2026-10",
    lang: "lt",
    text: "Dėkoju Mangirdui už pagalbą, palaikymą ir juokelius gydant išvaržomis \"nusėtą\" nugarą. MVP",
    conditions: ["nugaros-skausmas"],
    services: ["kineziterapija"],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "dominykas-d-2026-10",
    author: "Dominykas D.",
    rating: 5,
    date: "2026-10",
    lang: "lt",
    text: "Mano patirtis ReaMed klinikoje buvo puiki. Ypač noriu paminėti specialistą Eriką, kuris po rimtos kelio raiščių traumos tiesiogine prasme pastatė mane ant kojų. Krūvis ir pratimai buvo sudėlioti nuosekliai, atsižvelgiant į mano galimybes ir sveikimo etapą. Labai patiko dėmesys, rūpestis ir individualus požiūris į klientą. Jaučiausi tikrai gerose rankose 🙌",
    conditions: ["kelio-skausmas", "sporto-traumos"],
    services: ["sporto-reabilitacija", "kineziterapija"],
    specialists: ["erikas-jatkauskas"],
    featured: true,
  },
  {
    id: "mo-v-2026-09",
    author: "Mo V.",
    rating: 5,
    date: "2026-09",
    lang: "lt",
    text: "Lankausi pas Eriką Jatkauską. Kineziterapeutas profesionalus, bet kartu ir smagu su juo treniruotis (nelengva, bet smagu). Treniruotės labai efektyvios (kas itin svarbu), pastatė mane ant kojų ir galiu gyventi be skausmo. Taip pat jo masažai superiniai ir labai atpalaiduojantys. Pati ReaMed klinika labai tvarkinga, maloni atmosfera ir draugiškas kolektyvas.",
    conditions: [],
    services: ["kineziterapija", "gydomasis-masazas"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "rimvydas-s-2026-09",
    author: "Rimvydas Š.",
    rating: 5,
    date: "2026-09",
    lang: "lt",
    text: "Daugiau nei septynis mėnesius po kojos kryžminių raiščių plyšimo prieš bei po operacijos lankiausi pas Mangirdą Kazačenko - specialistą, kuris ne tik užvedė ant kelio, kaskart dalinosi savo patirtimi, bet ir palaikė psichologiškai tuomet, kai, atrodo, niekas nevyksta ir rankos svyra (arba tingulys apima). Gaudavau užduočių namų darbams, gaudavau daug informacijos apie savo traumą, jaučiau nuolatinį palaikymą sveikimo kelyje. Pats iš kitų žmonių gavęs rekomendaciją apie Mangirdą, dabar drąsiai ir pats galiu rekomenduoti visiems. Ačiū!",
    conditions: ["kelio-skausmas", "atsistatymas-po-operaciju", "sporto-traumos"],
    services: ["pooperacine-reabilitacija", "sporto-reabilitacija"],
    specialists: ["mangirdas-kazacenko"],
    featured: true,
  },
  {
    id: "olga-p-2026-08",
    author: "Olga P.",
    rating: 5,
    date: "2026-08",
    lang: "lt",
    text: "Jauki erdvė, kurioje dirba aukšto lygio specialistai. Kineziterapeutas Mangirdas Kazačenko – šiltas, dėmesingas ir itin atidus detalėms profesionalas. Nuoširdžiai rekomenduoju tiek „Reamed“, tiek Mangirdą!",
    conditions: [],
    services: ["kineziterapija"],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "nijole-l-2026-08",
    author: "Nijolė L.",
    rating: 5,
    date: "2026-08",
    lang: "lt",
    text: "Klinika siūlo įvairių paslaugų ir konsultuoja gan plataus spektro skausmo atvejais, visgi svarbiausia, su jais susidūrus, kompetentingas specialistas. Asmeninė patirtis leidžia drąsiai rekomenduoti kineziterapeutą Mangirdą Kazačenko, ne tik įsiklausantį į jaučiamus nusiskundimus, profesionaliai apžvelgiantį sveikatos anamnezę, bet ir parenkantį gydymą, leidžiantį mėgautis lengvesniu gyvenimu!",
    conditions: [],
    services: ["kineziterapija"],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "rokas-2026-08",
    author: "Rokas",
    rating: 5,
    date: "2026-08",
    lang: "lt",
    text: "Geriausia klinika ir geriausiais specialistas Mangirdas",
    conditions: [],
    services: [],
    specialists: ["mangirdas-kazacenko"],
  },
  {
    id: "egle-k-2026-07",
    author: "Eglė K.",
    rating: 5,
    date: "2026-07",
    lang: "lt",
    text: "Kreipiausi į kineziterapeutą Eriką Jatkauską dėl juosmeninės stuburo išvaržos ir peties traumos. Negalėjau nei sėdėti, nei gulėti, buvo sunku vaikščioti, tirpo koja ir rankos. Erikas labai nuodugniai išanalizavo mano problemas, sudarė tikslingą gydymo planą ir pritaikė man tinkamiausius pratimus. Pagerėjimą pajutau labai greitai. Iki šiol dirbame kartu, o rezultatai džiugina – jaučiuosi nepalyginamai geriau. Nuoširdžiausiai rekomenduoju Eriką Jatkauską visiems, ieškantiems profesionalaus kineziterapeuto. Tai atsakingas, dėmesingas, komunikabilus ir savo darbą puikiai išmanantis specialistas, kuriam nuoširdžiai rūpi paciento sveikimas.",
    conditions: ["nugaros-skausmas", "peties-problemos", "plintantis-skausmas"],
    services: ["kineziterapija"],
    specialists: ["erikas-jatkauskas"],
    featured: true,
  },
  {
    id: "giuseppe-d-2026-02",
    author: "Giuseppe D.",
    rating: 5,
    date: "2026-02",
    lang: "en",
    text: "Erikas Jatkauskas- Young and professional! I am an Italian drummer currently living in Vilnius. I started having pain in my forearm and went to the hospital, but they were unable to diagnose me and prescribed creams and painkillers. The pain remained the same, so I decided to seek a second opinion in view of some upcoming concerts. I found this clinic where I was followed by Erikas Jatkauskas, a young man with a lot of experience. In just two sessions, he managed to solve the problem without the use of creams or painkillers. Highly recommended!",
    conditions: [],
    services: ["kineziterapija"],
    specialists: ["erikas-jatkauskas"],
  },
  {
    id: "egidijus-m-2026-07",
    author: "Egidijus M.",
    rating: 5,
    date: "2026-07",
    lang: "en",
    text: "If you need truly professional physiotherapy, this is the place to go. I’m recovering from an ACL injury and the progress has been incredibly fast. Highly recommend!",
    conditions: ["kelio-skausmas", "sporto-traumos"],
    services: ["sporto-reabilitacija"],
    specialists: [],
  },
];

/** One review by id, or undefined if it is missing or on hold. */
export function getReviewById(id: string): Review | undefined {
  return reviews.find((r) => r.id === id && !r.hold);
}

type ReviewFilter = {
  condition?: ConditionSlug;
  service?: ServiceSlug;
  specialist?: SpecialistSlug;
  featured?: boolean;
  lang?: Review["lang"];
  limit?: number;
};

/** Visible reviews matching every given filter: featured first, then newest. */
export function getReviews(f: ReviewFilter = {}): Review[] {
  const list = reviews
    .filter((r) => !r.hold)
    .filter((r) => !f.condition || r.conditions.includes(f.condition))
    .filter((r) => !f.service || r.services.includes(f.service))
    .filter((r) => !f.specialist || r.specialists.includes(f.specialist))
    .filter((r) => f.featured === undefined || !!r.featured === f.featured)
    .filter((r) => !f.lang || r.lang === f.lang)
    .sort(
      (a, b) =>
        Number(!!b.featured) - Number(!!a.featured) || b.date.localeCompare(a.date)
    );
  return f.limit ? list.slice(0, f.limit) : list;
}
