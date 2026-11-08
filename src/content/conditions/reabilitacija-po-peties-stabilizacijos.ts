import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Petys». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoPetiesStabilizacijos: ConditionPage = {
  slug: "reabilitacija-po-peties-stabilizacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po peties stabilizacijos",
  meta: {
    title: "Reabilitacija po peties stabilizacijos Vilniuje | ReaMed",
    description:
      "Atsistatymas po Bankart, Latarjet ar kitos peties stabilizacijos. Kaip saugiai atkurti judesį, jėgą ir grįžti prie darbo ar sporto. Vilniuje, be siuntimo.",
  },
  conditionName: "Būklė po peties stabilizacijos operacijos",
  hero: {
    h1: "Reabilitacija po peties stabilizacijos",
    lead: "Po peties stabilizacijos svarbu ne tik atgauti judesį, bet ir leisti sugyti sutvirtintiems audiniams. Reabilitacija po Bankart operacijos, Latarjet procedūros ar kitos stabilizacijos gali skirtis. ReaMed Vilniuje planą sudarome pagal operacijos išrašą, chirurgo nurodymus ir jūsų savijautą: nuo saugios kasdienės veiklos su įtvaru iki darbo, treniruočių ir pasitikėjimo petimi.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl po stabilizacijos reikia reabilitacijos?",
    paragraphs: [
      "Peties stabilizacija atliekama siekiant sumažinti pasikartojančio išnirimo ar nestabilumo riziką. Po traumos gali būti pažeista sąnario lūpa, kapsulė arba kaulas; peties stabilumui taip pat svarbus raumenų darbas. Operacija sutvarko pažeistas struktūras, o reabilitacija padeda palaipsniui susigrąžinti rankos funkciją.",
      "Bankart operacijos metu atstatomas sąnario lūpos ir susijusių audinių prisitvirtinimas. Latarjet procedūros metu į priekinę sąnarinės duobės dalį perkeliamas kaulo fragmentas su prie jo prisitvirtinusiomis struktūromis. Gali būti atliekamos ir papildomos procedūros, pavyzdžiui, remplissage. Todėl vienodo pratimų plano visiems neužtenka: svarbu žinoti, kas tiksliai atlikta.",
    ],
  },
  when: {
    items: [
      "Operacija suplanuota ir norite pasiruošti pirmosioms savaitėms namuose.",
      "Grįžote iš ligoninės, tačiau neaišku, kuriuos judesius jau leidžiama atlikti.",
      "Sunku apsirengti, pasirūpinti higiena ar patogiai įsitaisyti miegui.",
      "Leidus daugiau judėti, ranka vis dar silpna arba judesiai netvirti.",
      "Norite grįžti prie fizinio darbo, plaukimo, metimų ar kontaktinio sporto.",
    ],
    note: "Konsultacijos nereikia atidėti iki įtvaro nuėmimo. Ankstyvo vizito užduotis gali būti kasdienės veiklos pritaikymas ir chirurgo nurodymų išaiškinimas.",
  },
  assess: [
    {
      lead: "Pradžioje peržiūrime operacijos išrašą:",
      text: "operacijos tipą, papildomus pažeidimus, įtvaro nešiojimo ir judesių apribojimus. Jei nurodymai neaiškūs, juos būtina patikslinti su operavusia komanda.",
    },
    {
      lead: "Įvertiname",
      text: "skausmą, miegą, rankos tinimą ir tai, kaip sekasi kasdienės užduotys. Judesius tikriname tik tiek, kiek leidžia gijimo etapas. Vėliau vertiname mentės ir peties judesių kontrolę, raumenų jėgą, ištvermę ir jūsų veiklai reikalingus judesius.",
    },
    {
      lead: "Kartu pasirenkame konkrečius tikslus:",
      text: "savarankiškai apsirengti, pasiekti lentyną ar atlikti darbo užduotį. Pažangą vertiname pagal šiuos veiksmus, o ne vien pagal praėjusių vizitų skaičių.",
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
        title: "Audinių apsauga.",
        text: "Pirmiausia mokomės saugiai naudoti įtvarą, keisti padėtį ir atlikti paskirtus judesius. Peties kėlimo, sukimo ir rėmimosi ranka galimybes nustato operacijos protokolas. Skausmo sumažėjimas dar nereiškia, kad audiniai jau atlaikys didesnę apkrovą.",
      },
      {
        title: "Judesio atkūrimas.",
        text: "Leidus chirurgui, judesių apimtį didiname palaipsniui. Siekiame, kad ranką valdytumėte be ryškaus pečių kėlimo ar liemens pasvyrimo. Po stabilizacijos nereikia skubėti bet kokia kaina „ištempti“ peties iki ankstesnio lankstumo.",
      },
      {
        title: "Jėga ir ištvermė.",
        text: "Kai gijimas ir judesių kontrolė leidžia, įtraukiame pasipriešinimą. Krūvį deriname prie atliekamos užduoties ir peties reakcijos. Po Latarjet procedūros atskirai svarbus leidimas apkrauti alkūnės lenkiamuosius raumenis.",
      },
      {
        title: "Grįžimas prie veiklos.",
        text: "Kasdieniai darbai, darbas virš galvos ir kontaktinis sportas kelia skirtingus reikalavimus. Prieš sportą vertiname jėgą, judesį, stabilumo pojūtį, konkrečios sporto šakos užduotis ir pasitikėjimą ranka. Vien kalendoriaus datos nepakanka.",
      },
    ],
    paragraphs: [
      "Atsistatymui paprastai reikia kelių mėnesių. Tiksli eiga priklauso nuo operacijos, audinių gijimo ir jūsų tikslų. Vizitų dažnį bei namų programą peržiūrime pagal pažangą.",
    ],
  },
  beforeVisit: [
    "Laikykitės išraše nurodyto įtvaro režimo. Atlikite tik jau parodytus ir leistus pratimus; savarankiškai nepradėkite tempimų, gumų pratimų ar atsispaudimų.",
    "Pasidėkite dažnai naudojamus daiktus lengvai pasiekiamoje vietoje, rinkitės patogiai apsivelkamus drabužius, paprašykite pagalbos nešant pirkinius. Miegoti gali būti patogiau pusiau sėdint, dilbį parėmus pagalve ir išlaikant paskirtą rankos bei įtvaro padėtį. Į vizitą atsineškite operacijos išrašą ir užsirašykite neaiškias kasdienes situacijas.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei staiga atsiranda stiprus dusulys, krūtinės skausmas, alpimas ar nesustabdomas kraujavimas.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei plaštaka šąla, pabąla ar pamėlsta, greitai prarandate jutimą arba po naujos traumos petys deformuojasi ir nebegalite pajudinti rankos. Jei negalite saugiai nuvykti, kvieskite pagalbą numeriu 112. Peties patys neatstatinėkite.",
      "Tą pačią dieną susisiekite su operavusia komanda, jei žaizda vis labiau parausta, šlapiuoja, atsiranda karščiavimas ar skausmas ryškiai stiprėja. Nelaukite suplanuoto kineziterapijos vizito.",
    ],
  },
  team: {
    title: "Su atsistatymu po peties operacijos dirba",
    specialists: [
      "kotryna-kairyte",
      "piotr-dubrovskij",
      "mangirdas-kazacenko",
      "erikas-jatkauskas",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Ar po Bankart ir Latarjet operacijų tinka tie patys pratimai?",
      a: "Ne visada. Skiriasi gyjančios struktūros ir leistinas krūvis. Kito žmogaus programa nepakeičia jūsų operacijos nurodymų.",
    },
    {
      q: "Kada galima nuimti įtvarą?",
      a: "Pagal chirurgo nustatytą režimą. Leidimas nuimti įtvarą higienai ar pratimams nebūtinai reiškia leidimą jo visai atsisakyti.",
    },
    {
      q: "Ar sustingusį petį reikia stipriai tempti?",
      a: "Ne. Judesį atkuriame palaipsniui, saugodami operuotas struktūras. Skausmingas tempimas per jėgą nėra pažangos kriterijus.",
    },
    {
      q: "Kada galima vairuoti?",
      a: "Kai tai leidžia gydanti komanda, nebereikia vairavimui trukdančio įtvaro ir galite patikimai valdyti automobilį bei atlikti staigų manevrą. Vaistai neturi slopinti reakcijos.",
    },
    {
      q: "Kada grįšiu į sportą?",
      a: "Sprendžiame pagal operacijos tipą, gydytojo leidimą ir funkcijos vertinimą. Neskaudantis petys dar nebūtinai pasiruošęs metimams ar kontaktui.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai.",
    },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Chronic Shoulder Instability",
      url: "https://www.orthoinfo.org/bodypart/shoulder/chronic-shoulder-instability/",
    },
    {
      authors:
        "The Robert Jones and Agnes Hunt Orthopaedic Hospital NHS Foundation Trust.",
      title:
        "Rehabilitation Guide Following Bankart Repair / Latarjet Procedure",
      year: 2024,
      url: "https://www.rjah.nhs.uk/media/qgjjzaf0/arthroscopic-bankart-repair-guideline-2024.pdf",
    },
    {
      authors: "Alentorn-Geli E ir kt.",
      title:
        "Age- and time-specific management of traumatic anterior shoulder instability: The 2024 ESSKA-ESA Formal Consensus. Part 2: Treatment and return to sports.",
      journal: "Knee Surg Sports Traumatol Arthrosc",
      year: 2026,
      doi: "10.1002/ksa.70497",
    },
    {
      authors: "South Tees Hospitals NHS Foundation Trust.",
      title: "Shoulder stabilisation surgery",
      year: 2024,
      url: "https://www.southtees.nhs.uk/resources/shoulder-stabilisation-surgery/",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
  ],
  reviewed: { by: "kotryna-kairyte", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/peties-problemos", label: "Peties problemos" },
    {
      href: "/ka-gydome/ankstyva-reabilitacija-po-operacijos",
      label: "Ankstyva reabilitacija po operacijos",
    },
    {
      href: "/paslaugos/pooperacine-reabilitacija",
      label: "Pooperacinė reabilitacija",
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos",
    },
  ],
};
