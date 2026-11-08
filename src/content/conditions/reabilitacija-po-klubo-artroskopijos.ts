import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Klubas ir kirkšnis». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoKluboArtroskopijos: ConditionPage = {
  slug: "reabilitacija-po-klubo-artroskopijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po klubo artroskopijos",
  meta: {
    title: "Reabilitacija po klubo artroskopijos Vilniuje | ReaMed",
    description:
      "Reabilitacija po klubo artroskopijos, gūžduobės lūpos ar kremzlės gydymo. Atrama, pratimai ir grįžimas į veiklą pagal operaciją. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po klubo artroskopijos",
  hero: {
    h1: "Reabilitacija po klubo artroskopijos",
    lead: "Po klubo artroskopijos reabilitacija padeda atkurti judesius, raumenų jėgą ir pasitikėjimą koja. Planas priklauso nuo to, kas atlikta: koreguotas kaulinis ankštumas, susiūta gūžduobės lūpa ar gydyta kremzlė. ReaMed klinikoje Vilniuje deriname pratimus su chirurgo nustatytais apribojimais, kad galėtumėte nuosekliai grįžti prie vaikščiojimo, darbo ir jums svarbios fizinės veiklos, neperkraudami gyjančių audinių.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kas svarbu po klubo artroskopijos",
    paragraphs: [
      "Artroskopijos metu chirurgas per nedidelius pjūvius apžiūri ir gydo klubo sąnarį. Esant šlaunikaulio ir gūžduobės ankštumui, vadinamam FAI, gali būti koreguojama kaulo forma. Pažeista gūžduobės lūpa, sąnario kraštą juosianti audinio juosta, gali būti susiuvama arba tvarkoma kitu būdu.",
      "Maži pjūviai nereiškia, kad visi audiniai jau pasiruošę įprastai apkrovai. Po lūpos ar kapsulės susiuvimo saugome gyjančius audinius nuo per didelio tempimo. Jei kremzlei gydyti atliktas mikrofraktūravimas, atramos apribojimai gali būti ilgesni. Kai per vieną operaciją atliktos kelios procedūros, programą lemia labiausiai apsaugos reikalaujanti jų dalis.",
    ],
  },
  when: {
    items: [
      "Laukiate operacijos ir norite pasiruošti vaikščiojimui su ramentais.",
      "Po išrašymo neaišku, kiek galima remtis koja ar lenkti klubą.",
      "Vargina kirkšnies skausmas, sustingimas ar šlubavimas.",
      "Kasdienė veikla lengvėja, bet trūksta jėgos ilgesniam ėjimui.",
      "Norite grįžti prie bėgimo, treniruočių ar sporto su krypties keitimais.",
    ],
  },
  assess: [
    {
      lead: "Atsineškite operacijos išrašą",
      text: "ir reabilitacijos nurodymus. Svarbu žinoti, ar lūpa susiūta, ar atlikta kaulo korekcija, kremzlės procedūra, kapsulės susiuvimas. Jei apribojimai neaiškūs, prieš didindami krūvį juos patiksliname su operavusia komanda.",
    },
    {
      lead: "Įvertiname",
      text: "skausmą, leistiną judesių amplitudę, eiseną ir naudojimąsi ramentais. Vėliau stebime klubo bei liemens jėgą, dubens kontrolę ir vienos kojos užduotis. Progresą vertiname ir pagal jums svarbius pokyčius: kiek galite nueiti, sėdėti ar dirbti.",
    },
  ],
  services: [
    "pooperacine-reabilitacija",
    "sporto-reabilitacija",
    "kineziterapija",
  ],
  treatment: {
    items: [
      {
        title: "Audinių apsauga ir judesių pradžia.",
        text: "Mokomės saugiai vaikščioti, keisti padėtį ir atlikti leidžiamus pratimus. Klubo lenkimą, sukimą bei tiesimą ribojame tiek, kiek reikia po konkrečios procedūros. Skausmo sumažėjimas neatšaukia chirurgo nustatytų apribojimų.",
      },
      {
        title: "Eisenos ir kasdienės veiklos atkūrimas.",
        text: "Kai leidžiama didinti atramą, siekiame tolygaus žingsnio. Ramentų atsisakome palaipsniui, kai galite eiti saugiai ir ryškiai nešlubuodami. Pridedame tinkamą nedidelio smūginio krūvio veiklą, pavyzdžiui, individualiai pritaikytą darbą dviračiu treniruokliu.",
      },
      {
        title: "Jėga ir judesio kontrolė.",
        text: "Stipriname sėdmenų, klubo ir liemens raumenis. Nuo paprastesnių užduočių pereiname prie laiptų, pritūpimo ir pusiausvyros. Vertiname, ar atliekant pratimus išlaikote kontrolę ir ar po jų simptomai nepaūmėja.",
      },
      {
        title: "Grįžimas į sportą.",
        text: "Bėgimas, šuoliai ir krypties keitimas grąžinami atskirais žingsniais. Pasiruošimą vertiname pagal jėgą, judesių kokybę, ištvermę ir sporto reikalavimus. Vien praėjęs mėnesių skaičius ar galimybė neskausmingai vaikščioti dar neparodo pasirengimo rungtynėms.",
      },
    ],
    paragraphs: [
      "Atsistatymas paprastai trunka kelis mėnesius; grįžimas į intensyvų sportą gali užtrukti apie pusmetį ar ilgiau. Sudėtingesnės kremzlės procedūros keičia šį planą. Vizitų dažnį deriname prie etapo, savarankiškumo ir pažangos.",
    ],
  },
  beforeVisit: [
    "Pasiruoškite išrašą, vartojamų vaistų sąrašą ir klausimus chirurgui. Naudokite paskirtus ramentus, laikykitės leistinos atramos ir darykite ligoninėje parodytus pratimus. Nepradėkite gilių pritūpimų ar stipraus klubo tempimo, kol nėra aišku, kad tai leidžiama.",
    "Sėdėdami pasirinkite patogų aukštį ir keiskite padėtį pagal savijautą bei išrašo nurodymus. Pasirūpinkite pagalba buityje, kad nereikėtų nešti sunkių daiktų su ramentais. Jei paskirta trombozės profilaktika, jos nenutraukite savarankiškai.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei staiga trūksta oro, skauda krūtinę ar alpstate. Tai svarbu net tada, kai operuoto klubo skausmas nedidelis.",
      "Tą pačią dieną kreipkitės į chirurgą arba skubiosios pagalbos skyrių, jei naujai patino ir skauda vieną blauzdą, karščiuojate, žaizdos paraudimas ar išskyros didėja, skausmas ryškiai stiprėja arba atsirado naujas kojos silpnumas. Tokiems simptomams įvertinti nelaukite kineziterapijos vizito.",
    ],
  },
  team: {
    title: "Su atsistatymu po klubo operacijos dirba",
    specialists: [
      "kotryna-kairyte",
      "edmundas-zlatkus",
      "piotr-dubrovskij",
      "mangirdas-kazacenko",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kada galima atsisakyti ramentų?",
      a: "Kai tai leidžia operacijos planas ir galite eiti taisyklingai. Po lūpos susiuvimo, kaulo korekcijos ar kremzlės procedūros terminai gali skirtis, todėl kito paciento patirtis nėra jūsų krūvio planas.",
    },
    {
      q: "Kodėl negaliu remtis koja, nors beveik neskauda?",
      a: "Apribojimas gali būti skirtas saugoti gyjančią lūpą ar kremzlės gydymo vietą. Skausmo stiprumas ne visada parodo audinių pasirengimą apkrovai.",
    },
    {
      q: "Kada galima grįžti į sėdimą darbą?",
      a: "Kai galite pakankamai patogiai sėdėti, saugiai nuvykti į darbą ir reguliariai keisti padėtį. Darbo pradžią aptarkite su gydytoju; kartais padeda trumpesnė darbo diena ar laikinas darbas iš namų.",
    },
    {
      q: "Kada galima vairuoti?",
      a: "Kai saugiai valdote automobilį ir galite staigiai stabdyti, o vartojami vaistai netrikdo reakcijos. Sprendimą derinkite su gydytoju; svarbi operuota pusė, automobilio pavaros ir likę judesių apribojimai.",
    },
    {
      q: "Ar verta pradėti, jei po operacijos praėjo keli mėnesiai?",
      a: "Taip, galima įvertinti likusį silpnumą, eiseną ir nepasiektus tikslus. Jei skausmas blogėja ar atsirado naujų simptomų, pirmiausia gali reikėti chirurgo kontrolės.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai.",
    },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [
    {
      authors: "Takla A ir kt.",
      title:
        "The 2019 International Society of Hip Preservation (ISHA) physiotherapy agreement on assessment and treatment of femoroacetabular impingement syndrome: an international consensus statement",
      year: 2020,
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8349584/",
    },
    {
      authors: "Kemp JL ir kt.",
      title:
        "Physiotherapist-led treatment for young to middle-aged active adults with hip-related pain: consensus recommendations from the International Hip-related Pain Research Network, Zurich 2018",
      year: 2020,
      url: "https://bjsm.bmj.com/content/54/9/504",
    },
    {
      authors: "Royal Orthopaedic Hospital.",
      title: "Hip Arthroscopy",
      url: "https://roh.nhs.uk/services-information/hips/hip-arthroscopy",
    },
    {
      authors: "NHS.",
      title: "DVT (deep vein thrombosis)",
      url: "https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
  ],
  reviewed: null,
  related: [
    {
      href: "/ka-gydome/klubo-ir-kirksnies-skausmas",
      label: "Klubo ir kirkšnies skausmas",
    },
    {
      href: "/ka-gydome/atsistatymas-po-operaciju",
      label: "Reabilitacija po operacijų",
    },
    {
      href: "/paslaugos/pooperacine-reabilitacija",
      label: "Pooperacinė reabilitacija",
    },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
