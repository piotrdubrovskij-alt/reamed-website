import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Alkūnė ir riešas». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoRiesoIrRankosLuzio: ConditionPage = {
  slug: "reabilitacija-po-rieso-ir-rankos-luzio",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po riešo ir rankos lūžio",
  meta: {
    title: "Reabilitacija po riešo ir plaštakos lūžio | ReaMed",
    description:
      "Riešo ir plaštakos judesių, suėmimo bei jėgos atkūrimas po lūžio. Planas pagal lūžio vietą, operaciją ir gydytojo nurodymus. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po riešo ar plaštakos lūžio",
  hero: {
    h1: "Reabilitacija po riešo ir plaštakos lūžio",
    lead: "Po riešo ar plaštakos lūžio net paprasti veiksmai gali tapti sunkūs: užsisegti sagą, laikyti puodelį, pasukti raktą. Reabilitacija priklauso nuo lūžusio kaulo, gydymo ir gijimo etapo. ReaMed Vilniuje padedame palaipsniui atkurti judesius, suėmimą ir rankos naudojimą kasdienybėje, laikydamiesi traumatologo nustatytų apribojimų po operacijos ar gydymo gipsu. Svarbu pradėti nuo to, kas jau leidžiama.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    title: "Kodėl skirtingiems lūžiams reikia skirtingo plano?",
    paragraphs: [
      "„Riešo lūžiu“ dažnai vadinamas stipinkaulio lūžis ties riešu. Svarbu, ar jis apima sąnarinį paviršių, ar kartu pažeisti kiti kaulai ir ar lūžis stabilus. Gydymas gali būti gipsu arba operacinis. Net po sutvirtinimo plokštele krūvis didinamas pagal gijimą ir gydytojo nurodymus.",
      "Laivelio lūžis yra atskira riešo kaulo trauma. Dėl kai kurių šio kaulo dalių kraujotakos ypatumų jis gali gyti lėčiau; kartais reikia ilgesnės apsaugos ir papildomų gijimo tyrimų. Mažas skausmas savaime nepatvirtina, kad jau galima remtis delnu.",
      "Delnakaulių ir pirštakaulių lūžiai veikia pirštų judesius ir suėmimą. Svarbi ne tik kaulo padėtis, bet ir sausgyslių bei sąnarių būklė. Kada galima judinti konkretų pirštą, priklauso nuo traumos ir sutvirtinimo, todėl bendras patarimas „kuo stipriau spausti kamuoliuką“ netinka visiems.",
    ],
  },
  when: {
    items: [
      "Dar nešiojate gipsą ar įtvarą ir neaišku, kuriuos judesius leidžiama atlikti.",
      "Nuėmus gipsą, riešas ar pirštai sustingę, ranka tinsta.",
      "Sunku suimti smulkius daiktus, rašyti, naudotis pele ar stalo įrankiais.",
      "Skausmas ir silpnumas trukdo grįžti prie darbo.",
      "Norite vėl sportuoti ar atlikti veiklą, kurioje tenka remtis plaštaka.",
    ],
    note: "Jei simptomai staiga stiprėja, atsiranda naujas tirpimas ar keičiasi pirštų spalva, pirmiausia reikalingas medicininis įvertinimas.",
  },
  assess: [
    {
      lead: "Peržiūrime išrašą,",
      text: "lūžio vietą, atliktą operaciją ir leistiną apkrovą. Svarbu žinoti, ar yra vielų, plokštelė, papildomas raiščių ar sausgyslių pažeidimas ir kada numatyta gydytojo kontrolė.",
    },
    {
      lead: "Vertiname",
      text: "tinimą, jutimą, leidžiamus pirštų, nykščio, riešo ir dilbio judesius. Suėmimo jėgą matuojame tik tada, kai tai saugu. Aptariame, kuriuos kasdienius veiksmus atlikti sunkiausia, ir vėliau juos palyginame.",
    },
    {
      lead: "Jei skausmas neproporcingai stiprus,",
      text: "oda itin jautri, keičiasi jos temperatūra ar spalva, vien intensyvesnės mankštos nepakanka. Gali reikėti gydytojo įvertinimo dėl kompleksinio regioninio skausmo sindromo ar kitų priežasčių.",
    },
  ],
  services: ["pooperacine-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      {
        title: "Apsauga ir tinimo kontrolė.",
        text: "Kol kaulas gyja, laikomės įtvaro režimo, mokomės saugiai naudoti ranką ir atliekame leistus judesius. Po stabilaus stipinkaulio lūžio kai kuriuos pratimus galima pradėti anksti, tačiau šios rekomendacijos negalima automatiškai taikyti laivelio ar pirštų lūžiui.",
      },
      {
        title: "Judesių atkūrimas.",
        text: "Gavus leidimą, nuosekliai laviname pirštų lenkimą bei tiesimą, nykščio judesius, riešo judrumą ir dilbio pasukimą. Programą pritaikome prie tų judesių, kurių trūksta konkrečiam žmogui. Nereikia bandyti per vieną užsiėmimą įveikti viso sustingimo.",
      },
      {
        title: "Suėmimas ir jėga.",
        text: "Pasipriešinimą pridedame tada, kai gydytojas leidžia apkrovą. Pradedame nuo kontroliuojamų užduočių ir palaipsniui pereiname prie kasdienių daiktų. Tvirtas suėmimas, nešimas ir rėmimasis delnu yra skirtingos apkrovos, todėl jų pradžia gali nesutapti.",
      },
      {
        title: "Darbas ir sportas.",
        text: "Tikriname tai, ko reikės grįžus: rašymą, įrankio laikymą, pasikartojančius judesius ar sporto veiksmus. Didesnio krūvio siekiame tik įvertinus gijimą ir rankos pasirengimą.",
      },
    ],
    paragraphs: [
      "Atsistatymas dažnai tęsiasi kelis mėnesius, o po sudėtingesnių traumų ilgiau. Gipso nuėmimas nereiškia, kad iš karto sugrįžo visa jėga. Vizitų skaičių parenkame pagal sunkumus, savarankiškumą ir pažangą, ne pagal vieną standartinį paketą.",
    ],
  },
  beforeVisit: [
    "Saugokite gipsą ir tvarsčius nuo drėgmės. Jei leista, patogiai laikykite plaštaką pakeltą tinimui mažinti, nepažeisdami paskirtos rankos padėties. Judinkite tik tuos sąnarius, kuriuos leido gydanti komanda.",
    "Nespauskite kamuoliuko visa jėga ir nepradėkite kabėti, daryti atsispaudimų ar kelti svarmenų be leidimo. Nesistenkite „išjudinti“ įtvare fiksuoto piršto. Laikinai rinkitės lengviau suimamus daiktus, užduotis skaidykite ir prašykite pagalbos ten, kur ranką reikėtų smarkiai apkrauti.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei staiga atsiranda dusulys, stiprus krūtinės skausmas, alpimas ar nesustabdomas kraujavimas.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei pirštai tampa šalti, balti ar mėlyni, sparčiai blogėja jutimas arba labai stiprėja skausmas ir tinimas. Jei negalite saugiai nuvykti, skambinkite 112.",
      "Tą pačią dieną kreipkitės į traumatologą ar operavusią komandą, jei karščiuojate, žaizda šlapiuoja, iš po gipso sklinda blogas kvapas, įtvaras labai spaudžia ar gipsas sulūžo.",
    ],
  },
  team: {
    title: "Su atsistatymu po riešo ir plaštakos lūžio dirba",
    specialists: [
      "mangirdas-kazacenko",
      "kotryna-kairyte",
      "erikas-jatkauskas",
      "piotr-dubrovskij",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Ar nuėmus gipsą galima iš karto remtis delnu?",
      a: "Nebūtinai. Gydytojo leidimas judinti riešą ir leidimas jį apkrauti kūno svoriu yra skirtingi dalykai. Ypač svarbu tai pasitikslinti po laivelio lūžio.",
    },
    {
      q: "Ar visiems reikia spaudyti kamuoliuką?",
      a: "Ne. Šis pratimas skiriamas pagal lūžį ir etapą. Pirmiausia gali būti svarbesni tikslūs, neapkrauti pirštų judesiai.",
    },
    {
      q: "Kodėl pirštai vis dar sustingę, nors lūžo riešas?",
      a: "Tinimas ir imobilizacija gali paveikti visos plaštakos judrumą. Jei pirštus sunku judinti arba būklė blogėja, apie tai praneškite gydančiai komandai.",
    },
    {
      q: "Kada galėsiu dirbti kompiuteriu ar fizinį darbą?",
      a: "Tai skirtingi krūviai. Pradžią deriname pagal leistinus judesius, simptomus ir darbo reikalavimus; prireikus numatome laikinas užduočių adaptacijas.",
    },
    {
      q: "Ar tirpimas ir deginantis skausmas yra normalus atsistatymas?",
      a: "Jų nereikėtų ignoruoti. Naują tirpimą ar užsitęsusį stiprų skausmą, ypač kartu su odos pokyčiais, turi įvertinti gydytojas.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai.",
    },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [
    {
      authors: "Mehta SP ir kt.",
      title: "Distal Radius Fracture Rehabilitation.",
      journal: "J Orthop Sports Phys Ther",
      year: 2024,
      doi: "10.2519/jospt.2024.0301",
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Distal Radius Fractures (Broken Wrist)",
      url: "https://www.orthoinfo.org/bodypart/hand-wrist/distal-radius-fractures-broken-wrist/",
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Scaphoid Fracture of the Wrist",
      url: "https://www.orthoinfo.org/bodypart/hand-wrist/scaphoid-fracture-of-the-wrist/",
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Hand Fractures",
      url: "https://www.orthoinfo.org/bodypart/hand-wrist/hand-fractures/",
    },
    {
      authors: "NHS.",
      title: "Broken arm or wrist",
      url: "https://www.nhs.uk/conditions/broken-arm-or-wrist/",
    },
    {
      authors: "NHS.",
      title: "Complex regional pain syndrome",
      url: "https://www.nhs.uk/conditions/complex-regional-pain-syndrome/",
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
      href: "/ka-gydome/alkunes-ir-rieso-skausmas",
      label: "Alkūnės ir riešo skausmas",
    },
    {
      href: "/ka-gydome/ankstyva-reabilitacija-po-operacijos",
      label: "Ankstyva reabilitacija po operacijos ir imobilizacijos",
    },
    {
      href: "/ka-gydome/atsistatymas-po-operaciju",
      label: "Reabilitacija po operacijų ir lūžių",
    },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
