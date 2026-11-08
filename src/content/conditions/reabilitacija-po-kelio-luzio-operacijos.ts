import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Kelias». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoKelioLuzioOperacijos: ConditionPage = {
  slug: "reabilitacija-po-kelio-luzio-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po kelio lūžio operacijos",
  meta: {
    title: "Reabilitacija po kelio lūžio operacijos Vilniuje | ReaMed",
    description:
      "Reabilitacija po girnelės, blauzdikaulio ar šlaunikaulio lūžio operacijos. Judesiai, atrama ir jėgos atkūrimas pagal chirurgo nurodymus. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po kelio lūžio operacijos",
  hero: {
    h1: "Reabilitacija po kelio lūžio operacijos",
    lead: "Po girnelės, blauzdikaulio sąnarinio paviršiaus ar apatinės šlaunikaulio dalies lūžio operacijos reikia atkurti kelio judesius, kojos jėgą ir eiseną. Kada galima lenkti kelį ir remtis koja, priklauso nuo lūžio, jo sutvirtinimo ir gijimo. ReaMed klinikoje Vilniuje reabilitacijos planą deriname prie chirurgo nurodymų ir jūsų kasdienės veiklos: nuo saugaus atsistojimo iki grįžimo į darbą ar sportą.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl po skirtingų lūžių reabilitacija skiriasi",
    paragraphs: [
      "Žodžiais „kelio lūžis“ gali būti vadinamos kelios skirtingos traumos. Lūžus girnelei nukenčia priekinė kelio dalis ir kelio tiesimo mechanizmas. Lūžus blauzdikaulio plokštumai pažeidžiamas sąnarinis paviršius, ant kurio remiasi šlaunikaulis. Distalinio šlaunikaulio lūžis apima apatinę šlaunies kaulo dalį, kartais ir patį sąnarį.",
      "Operacija sutvirtina kaulo dalis, tačiau kaului ir aplinkiniams audiniams vis tiek reikia sugyti. Po girnelės operacijos kartais leidžiama remtis koja, laikant kelį ištiestą įtvare, bet ribojamas lenkimas. Po kitų lūžių atramą gali tekti riboti ilgiau. Vieno žmogaus programa netinka visiems, net jei operacijų pavadinimai panašūs.",
    ],
  },
  when: {
    items: [
      "Po išrašymo neaišku, kaip vaikščioti su ramentais ir saugiai lipti laiptais.",
      "Leidžiama pradėti judesius, bet bijote sulenkti kelį ar įtempti raumenis.",
      "Nuėmus įtvarą kelis sustingęs, koja nusilpusi.",
      "Gydytojas leido didinti atramą, tačiau vis dar šlubuojate.",
      "Norite suplanuoti grįžimą į darbą, ilgesnius pasivaikščiojimus ar sportą.",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia peržiūrime operacijos išrašą ir chirurgo nurodymus:",
      text: "kuris kaulas lūžo, kaip sutvirtintas, kokia atrama ir kelio lenkimo amplitudė leidžiama. Atsineškite paskutinės kontrolės išvadą, jei ją turite. Kaulo suaugimą vertina operavęs gydytojas, prireikus pagal rentgeno tyrimus.",
    },
    {
      lead: "Tada įvertiname",
      text: "tinimą, leidžiamus kelio judesius, šlaunies raumenų aktyvumą, atsistojimą ir eiseną. Aptariame namų aplinką bei veiklą, prie kurios norite grįžti.",
    },
  ],
  services: [
    "pooperacine-reabilitacija",
    "kineziterapija",
    "sporto-reabilitacija",
  ],
  treatment: {
    items: [
      {
        title:
          "Pirmasis etapas: apsaugoti gyjančius audinius ir saugiai judėti.",
        text: "Mokomės naudotis ramentais, atsisėsti, atsistoti ir laikytis leistinos atramos. Atliekame leidžiamus raumenų aktyvinimo bei judesių pratimus. Kelio lenkimo ar įtvaro nustatymų savavališkai nekeičiame.",
      },
      {
        title: "Antrasis etapas: atkurti judesį ir atramą.",
        text: "Chirurgui leidus, palaipsniui didiname kelio judesius ir kojos apkrovą. Svarbu, kad po veiklos tinimas bei skausmas ryškiai nedidėtų, o žingsnis taptų tolygesnis. Jei simptomai blogėja, peržiūrime krūvį ir, kai reikia, kreipiamės į chirurgą.",
      },
      {
        title: "Trečiasis etapas: jėga ir kasdienė veikla.",
        text: "Stipriname šlaunies ir klubo raumenis, laviname pusiausvyrą, laiptų įveikimą ir ėjimo ištvermę. Pratimus siejame su jūsų tikslais: vienam svarbiausia savarankiškai apsipirkti, kitam grįžti į fizinį darbą.",
      },
      {
        title: "Grįžimas į sportą",
        text: "svarstomas įvertinus kaulo gijimą, judesius, jėgą ir konkrečios veiklos reikalavimus. Po girnelės lūžio prie įprastos veiklos dažnai grįžtama per 3–6 mėnesius. Po sudėtingo apatinės šlaunikaulio dalies lūžio atsistatymas gali trukti metus ar ilgiau. Šie laikai nėra leidimas pradėti bėgioti: eigą nustato jūsų būklė ir chirurgas.",
      },
    ],
    paragraphs: [
      "Vizitų dažnį ir namų programą pritaikome individualiai; vienodo privalomo kurso nėra.",
    ],
  },
  beforeVisit: [
    "Laikykitės išraše nurodytos atramos ir įtvaro režimo. Darykite ligoninėje parodytus, jums leistus pratimus. Pasirūpinkite laisvu praėjimu namuose ir pagalba nešant daiktus, kai naudojate ramentus. Užsirašykite, kada didėja skausmas ar tinimas ir kokie judesiai kelia sunkumų.",
    "Jei paskirti vaistai trombozės profilaktikai, vartokite juos pagal gydytojo nurodymus. Nei ramentų, nei įtvaro neatsisakykite vien todėl, kad kelį skauda mažiau.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei staiga trūksta oro, skauda krūtinę ar alpstate. Nedelsdami vykite į skubiosios pagalbos skyrių, jei pėda staiga atšąla, pabąla ar pamėlsta arba staiga sutrinka jos jutimas ar judesiai.",
      "Tą pačią dieną kreipkitės į operavusį gydytoją arba skubiosios pagalbos skyrių, jei naujai patino ir skauda vieną blauzdą, žaizda vis labiau parausta ar šlapiuoja, karščiuojate, ryškiai stiprėja skausmas arba po naujo kritimo pablogėjo kojos funkcija. Nelaukite suplanuoto kineziterapijos vizito.",
    ],
  },
  team: {
    title: "Su atsistatymu po kelio lūžio dirba",
    specialists: [
      "kotryna-kairyte",
      "mangirdas-kazacenko",
      "piotr-dubrovskij",
      "erikas-jatkauskas",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kada galėsiu vaikščioti be ramentų?",
      a: "Kai chirurgas leidžia reikiamą atramą ir galite saugiai eiti nešlubuodami. Sumažėjęs skausmas pats savaime neparodo, kad lūžis jau suaugęs.",
    },
    {
      q: "Ar galima pradėti, kol dar neleidžiama remtis koja?",
      a: "Taip, jei tai suderinta su chirurgu. Galima mokytis saugiai judėti ir atlikti konkrečiai jums leidžiamus pratimus, neapkraunant lūžio vietos.",
    },
    {
      q: "Ar sustingusį kelį reikia lenkti per jėgą?",
      a: "Ne. Judesius didiname pagal operacijos apribojimus ir audinių reakciją. Jei amplitudė negerėja arba mažėja, vertiname priežastį ir aptariame tolesnius veiksmus.",
    },
    {
      q: "Ar prieš reabilitaciją būtina išimti plokšteles ar varžtus?",
      a: "Ne. Pratimus galima pradėti ir esant plokštelėms ar varžtams, laikantis chirurgo nurodymų. Dėl metalo pašalinimo sprendžia chirurgas; tai nėra įprasta sąlyga pradėti pratimus.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai.",
    },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [
    {
      authors: "American Academy of Orthopaedic Surgeons (AAOS).",
      title: "Patellar Fractures (Broken Kneecap)",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/patellar-kneecap-fractures/",
    },
    {
      authors: "AAOS.",
      title: "Fractures of the Proximal Tibia (Shinbone)",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/fractures-of-the-proximal-tibia-shinbone/",
    },
    {
      authors: "AAOS.",
      title: "Distal Femur (Thighbone) Fractures of the Knee",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/distal-femur-thighbone-fractures-of-the-knee/",
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
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
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
