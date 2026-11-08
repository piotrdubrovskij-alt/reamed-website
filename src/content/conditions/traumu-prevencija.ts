import type { ConditionPage } from "./types";

// Batch 14 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const traumuPrevencija: ConditionPage = {
  slug: "traumu-prevencija",
  section: "sporto-traumos",
  navTitle: "Traumų prevencija",
  meta: {
    title: "Sporto traumų prevencija Vilniuje | ReaMed",
    description: "Sporto traumų prevencija: jėga, pusiausvyra, apšilimas ir tinkamai parinktas krūvis. Praktinis planas pagal jūsų sportą ir galimybes ReaMed Vilniuje."
  },
  conditionName: "Traumų prevencija",
  hero: {
    h1: "Traumų prevencija",
    lead: "Norite pradėti sezoną pasiruošę, grįžti į sportą po pertraukos ar lengviau atlaikyti fiziškai aktyvią darbo dieną? Traumų prevencija prasideda nuo to, kokio krūvio jums iš tikrųjų reikia. ReaMed Vilniuje įvertiname dabartines galimybes ir padedame sudaryti įgyvendinamą pasirengimo planą. Jis gali sumažinti dalį rizikos, tačiau joks testas ar pratimų rinkinys negali garantuoti, kad traumos nepatirsite.",
    specialist: "kotryna-kairyte"
  },
  about: {
    title: "Kam skirta traumų prevencija",
    paragraphs: [
      "Prevencijos tikslas: geriau pasiruošti judesiams, kuriuos tenka kartoti sporte ar kasdienybėje. Krepšininkui svarbūs stabdymas ir nusileidimas po šuolio, žygeiviui kojų ištvermė, o fiziškai dirbančiam žmogui gali rūpėti kėlimas ir nešimas. Pratimai turi atitikti šias užduotis, o ne tik atrodyti sudėtingi.",
      "Sporto tyrimuose jėgos ir judesių valdymo programos mažino tam tikrų traumų dažnį. Tačiau rezultatai priklauso nuo sporto, dalyvių ir pačios programos. Viename tyrime gauto rizikos sumažėjimo negalima pažadėti kiekvienam bėgikui, sporto salės lankytojui ar darbuotojui."
    ]
  },
  when: {
    items: [],
    paragraphs: [
      "Pasitarti naudinga prieš grįžtant po ilgesnės pertraukos, keičiant sporto šaką ar planuojant gerokai didesnį krūvį. Konsultacija gali padėti, jei ta pati vieta susižeidžia pakartotinai, po ankstesnės traumos liko nepasitikėjimas judesiu arba nežinote, kuo papildyti treniruotes.",
      "Jei jau skauda, sąnarys tinsta ar judesys ryškiai ribotas, pirmiausia aiškinamės simptomų priežastį. Tokiu atveju gali reikėti gydymo ar reabilitacijos, o ne įprastos profilaktinės programos. Prieš didinant krūvį svarbu išsiaiškinti stiprėjančių simptomų priežastį."
    ]
  },
  assess: [
    {
      lead: "Prašome papasakoti apie įprastą savaitę,",
      text: "ankstesnes traumas ir artimiausius planus. Kiek kartų sportuojate, ar tenka kelti svorius darbe, kas pasikeis prasidėjus sezonui? Aptariame ir poilsį: bendrą krūvį sudaro ne vien treniruotės."
    },
    {
      lead: "Pagal poreikį vertiname jėgą,",
      text: "judrumą, pusiausvyrą ir konkrečius veiksmus. Pasirenkame užduotis, kurias vėliau galėsime palyginti: kaip valdote nusileidimą, ar išlaikote atramą, kaip toleruojate pakartojimus. Tai padeda parinkti pratimų sunkumą."
    },
    {
      lead: "Šie testai nėra traumos prognozė.",
      text: "Prastesnis vienos užduoties rezultatas dar nereiškia, kad būtinai susižeisite, o geras, kad esate apsaugoti. Apžiūros vertė yra konkretus tolesnis planas ir galimybė sekti pokyčius."
    }
  ],
  services: [
    "sporto-reabilitacija",
    "kineziterapija",
    "pooperacine-reabilitacija",
    "gydomasis-masazas"
  ],
  treatment: {
    title: "Kaip dirbame ir kiek tai trunka",
    items: [],
    paragraphs: [
      "Pradedame nuo kelių užduočių, kurioms randate vietos savo savaitėje. Jėgos darbą didiname palaipsniui: pasirenkame tinkamą pasipriešinimą, pakartojimų skaičių ir judesio sudėtingumą. Tyrimai pagrindžia jėgos treniruočių naudą tam tikrų sporto traumų prevencijai, tačiau tai nereiškia, kad kuo sunkesnė treniruotė, tuo geresnė apsauga.",
      "Apšilimą pritaikome būsimai veiklai. Jame gali būti lengvas judėjimas, pusiausvyra, jėgos užduotys ir palaipsniui greitėjantys sporto veiksmai. Pavyzdžiui, moterų grindų riedulio tyrime reguliari judesių valdymo programa sumažino nekontaktinių kojų traumų dažnį. Tai konkrečios sportininkių grupės rezultatas, ne pažadas, kad toks apšilimas apsaugos nuo visų traumų.",
      "Krūvio planą deriname prie treniruočių ir darbo grafiko. Po pertraukos ar intensyvesniu laikotarpiu gali reikėti mažesnio pradinio krūvio, daugiau atsistatymo arba kitokio užduočių išdėstymo. Svarbu stebėti nuovargį, simptomus ir tai, ar pavyksta laikytis plano.",
      "Programa nėra baigta po iš anksto nustatyto vizitų skaičiaus. Per kelias savaites galima išmokti pratimus ir pradėti keisti jų sunkumą, o pasirengimą reikia palaikyti tęsiant veiklą. Susitariame, kada verta peržiūrėti planą, pavyzdžiui, keičiantis sezonui, tikslams ar savijautai. Reguliarumą deriname su realiomis galimybėmis."
    ]
  },
  beforeVisit: [
    "Prieš intensyvią veiklą skirkite laiko lengvesnei jos pradžiai. Nebandykite per vieną savaitgalį kompensuoti kelių neaktyvių savaičių. Naują krūvį didinkite palaipsniui ir palikite laiko atsistatymui.",
    "Jei nieko neskauda ir nėra gydytojo nustatytų apribojimų, galite pradėti nuo jums pažįstamų, nesudėtingų jėgos pratimų. Bendrosiose suaugusiųjų fizinio aktyvumo rekomendacijose raumenų stiprinimui skiriamos bent dvi dienos per savaitę; konkrečią apimtį reikia pritaikyti.",
    "Užsirašykite, kuriuos judesius norėtumėte atlikti užtikrinčiau. Jei turite trenerio programą ar ankstesnės reabilitacijos rekomendacijas, atsineškite jas. Naujo skausmo nereikėtų „pratreniruoti“: pirmiau sustabdykite jį sukeliančią užduotį ir pasitarkite."
  ],
  urgent: {
    note: "",
    items: [
      "Po traumos negalint remtis koja ar naudoti rankos, esant stipriam skausmui, deformacijai ar naujam tirpimui, vykite į traumatologijos ar skubios pagalbos skyrių. Jei sąnarys staiga tapo karštas, patino ir labai skauda, ten kreipkitės tą pačią dieną, net jei nekarščiuojate.",
      "Jei galūnė šąla ir blykšta, atsiranda stiprus krūtinės skausmas, dusulys ar alpimas, skambinkite 112. Profilaktinio vizito tokiais atvejais nelaukite."
    ]
  },
  team: {
    title: "Su sporto traumomis dirba",
    specialists: [
      "kotryna-kairyte",
      "erikas-jatkauskas",
      "edmundas-zlatkus",
      "piotr-dubrovskij"
    ]
  },
  faq: [
    {
      q: "Ar prevencija reikalinga, jei nieko neskauda?",
      a: "Gali būti naudinga, ypač keičiant krūvį ar grįžtant po pertraukos. Tačiau kiekvienam sveikam žmogui prieš įprastą fizinę veiklą atskiros kineziterapeuto patikros nereikia."
    },
    {
      q: "Ar vien tempimo pakanka?",
      a: "Tempimas gali padėti, kai reikia daugiau judrumo. Tačiau pasirengimas apima ir jėgą, pusiausvyrą bei veiklai reikalingus judesius: vien lankstumas jų nepakeičia."
    },
    {
      q: "Ar testas parodys, kurią vietą susižeisiu?",
      a: "Ne. Testai padeda įvertinti dabartinę funkciją ir parinkti užduotis, tačiau patikimai numatyti konkretaus žmogaus būsimos traumos negali."
    },
    {
      q: "Ar programa turi būti sunki nuo pirmos dienos?",
      a: "Ne. Pradinis krūvis turi atitikti jūsų galimybes. Jis didinamas, kai užduotis atliekate užtikrintai ir gerai atsistatote."
    }
  ],
  reviews: "sporto-traumos",
  sources: [
    {
      authors: "Lauersen JB ir kt.",
      title: "Strength training as superior, dose-dependent and safe prevention of acute and overuse sports injuries: a systematic review, qualitative analysis and meta-analysis",
      journal: "British Journal of Sports Medicine",
      year: 2018,
      url: "https://pubmed.ncbi.nlm.nih.gov/30131332/"
    },
    {
      authors: "Pasanen K ir kt.",
      title: "Neuromuscular training and the risk of leg injuries in female floorball players: cluster randomised controlled study",
      journal: "BMJ",
      year: 2008,
      url: "https://pubmed.ncbi.nlm.nih.gov/18595903/"
    },
    {
      authors: "Bahr R.",
      title: "Why screening tests to predict injury do not work—and probably never will…: a critical review",
      journal: "British Journal of Sports Medicine",
      year: 2016,
      url: "https://pubmed.ncbi.nlm.nih.gov/27095747/"
    },
    {
      authors: "Soligard T ir kt.",
      title: "How much is too much? (Part 1) International Olympic Committee consensus statement on load in sport and risk of injury",
      journal: "British Journal of Sports Medicine",
      year: 2016,
      url: "https://pubmed.ncbi.nlm.nih.gov/27535989/"
    },
    {
      authors: "NHS.",
      title: "How to improve your strength and flexibility",
      url: "https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/"
    },
    {
      authors: "NHS.",
      title: "Joint pain",
      url: "https://www.nhs.uk/symptoms/joint-pain/"
    },
    {
      authors: "NHS.",
      title: "Sprains and strains",
      url: "https://www.nhs.uk/conditions/sprains-and-strains/"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba. Kada skambinti?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    }
  ],
  reviewed: null,
  related: [
    {
      href: "/ka-gydome/sporto-traumos",
      label: "Sporto traumos"
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos"
    },
    {
      href: "/ka-gydome/raumenu-patempimas",
      label: "Raumenų patempimas"
    },
    {
      href: "/ka-gydome/ciurnos-patempimas",
      label: "Čiurnos patempimas"
    }
  ]
};
