import type { LegalDoc } from "@/components/legal/LegalDocument";

// ReaMed paslaugų pirkimo, registracijos ir atšaukimo taisyklės, redakcija 2026-11-22: Piotr's text of 2026-11-21
// with the corrections he approved on 2026-11-22 so that they say what the patient document of the same redakcija
// says (20 € waived with a doctor's certificate, 30 days from the original date, half price after assessment,
// 15 minutes late). Package extension 5.4 stays as Piotr wrote it. Website orders store this redakcija
// (klinika-system WEBSITE_TERMS_VERSION) and the confirmation e-mail names it. Change only by a new redakcija.
export const purchaseTerms: Record<"lt" | "en", LegalDoc> = {
  lt: {
    title: "Paslaugų pirkimo, registracijos ir atšaukimo taisyklės",
    edition: "MB „Kineziterapija“ · Redakcija 2026-11-22",
    sections: [
      {
        h: "1. Paslaugų teikėjas ir taikymo sritis",
        blocks: [
          {
            p: "Paslaugų teikėjas ir sutarties šalis – MB „Kineziterapija“, juridinio asmens kodas 305136936, buveinė ir ReaMed paslaugų teikimo vieta Olimpiečių g. 1A-7, LT-09235 Vilnius; asmens sveikatos priežiūros veiklos licencija Nr. 4098. Svetainė reamed.lt, el. paštas info@reamed.lt, telefonas +370 601 34304. Toliau – Klinika.",
          },
          {
            p: "Šios taisyklės taikomos ReaMed vardu parduodamoms asmens sveikatos priežiūros paslaugoms: pavieniams vizitams, perkamiems svetainėje reamed.lt, telefonu ar Klinikoje, ir vizitų paketams, perkamiems Klinikoje. Dovanų kuponams taikomos atskiros [ReaMed dovanų kuponų taisyklės](/dovanu-kuponas/salygos); kuponu apmokėtiems vizitams ir paketams – šios taisyklės.",
          },
          {
            p: "Savarankiška registracija internetu skirta pilnamečiams asmenims, registruojantiems save. Dėl nepilnamečio, atstovavimo ar apmokėjimo už kitą pacientą kreipkitės į administraciją. FitKid ir kitų juridinių asmenų paslaugoms šios taisyklės netaikomos.",
          },
          {
            p: "Internetu pasirenkamos kataloge ([reamed.lt/kainos](/kainos)) nurodytos paslaugos. Jos teikiamos Klinikos licencijos ir jas teikiančio specialisto kompetencijos ribose. Konkretus metodas, tinkamumas ir rizikos aptariami su specialistu.",
          },
        ],
      },
      {
        h: "2. Kaina ir užsakymo sudarymas",
        blocks: [
          {
            p: "Prieš mokėdami matote paslaugą, specialistą, datą, pradžios laiką, numatytą trukmę, kiekvieno vizito kainą ir visą mokėtiną sumą eurais. Rodoma suma galutinė; MB „Kineziterapija“ nėra PVM mokėtoja. Papildomų mokėjimų be jūsų aiškaus pasirinkimo nėra. Kaina fiksuojama užsakymo metu; vėlesnis kainoraščio pakeitimas apmokėto užsakymo nekeičia. Jei kaina ar paslaugos aprašymas neaiškūs, kreipkitės prieš pateikdami užsakymą.",
          },
          {
            p: "Pasirinkimas „iki“ nurodo numatytą didžiausią paslaugos trukmę; faktinis laikas priklauso nuo klinikinio poreikio ir iš anksto aptarto paslaugos turinio. Vidinis specialisto kalendoriuje laikomas intervalas gali būti ilgesnis, kad liktų laiko pasiruošti ir sutvarkyti darbo vietą. Tai nėra atskirai perkama papildoma procedūra.",
          },
          {
            p: "Pirmą kartą besikreipiančiam pacientui internetinė forma siūlo pirminę konsultaciją. Pakartotiniam vizitui pasirenkamos kataloge leidžiamos procedūros. Žyma „jau lankiausi“ yra jūsų pateikta informacija, o ne automatinis paciento medicininės istorijos patvirtinimas. Jei reikia kito pasirinkimo ar klinikinio įvertinimo, kreipkitės į administraciją.",
          },
          {
            p: "Viename užsakyme galima pasirinkti kelis vizitus. Pavieniai vizitai kainuoja po vienkartinę kainą ir paketo nesudaro, net jei jų užsakoma penki ar dešimt. Vizitų paketai internetu neparduodami: jie įsigyjami Klinikoje (5 skyrius).",
          },
          {
            p: "Pasirinktas laikas mokėjimui laikomas 20 minučių; likęs laikas rodomas ekrane. Nepabaigus mokėjimo laikas atlaisvinamas. Įdėjimas į krepšelį ar mokėjimo puslapio atidarymas nėra vizito patvirtinimas.",
          },
        ],
      },
      {
        h: "3. Mokėjimas ir patvirtinimas",
        blocks: [
          {
            p: "Visa užsakymo suma apmokama iš anksto vienu mokėjimu per Paysera; galimi mokėjimo būdai rodomi mokėjimo lange. Dovanų kuponu atsiskaitoma ReaMed dovanų kuponų taisyklėse nurodyta tvarka. Kortelės ar banko saugumo duomenys įvedami tik mokėjimo paslaugos teikėjo aplinkoje.",
          },
          {
            p: "Paspausdami „Užsakyti ir sumokėti“ pateikiate užsakymą su mokėjimo pareiga ir patvirtinate, kad susipažinote su prieš mokėjimą pateiktomis taisyklėmis ir su jomis sutinkate. Užsakymas ir sutartis dėl pasirinktų vizitų patvirtinami, kai sistema patikrina visos sumos apmokėjimą ir galimybę patvirtinti pasirinktus laikus. Patvirtinimą, vizitų informaciją, užsakymo valdymo būdą ir jums taikomą taisyklių redakciją siunčiame nurodytu el. paštu. Išsaugokite šią informaciją.",
          },
          {
            p: "Vien grįžimas iš Paysera į svetainę neįrodo sėkmingo apmokėjimo. Jei patvirtinimo negavote, patikrinkite užsakymo būseną ar susisiekite su administracija. Nekartokite mokėjimo vien todėl, kad neatsidarė patvirtinimo puslapis.",
          },
          {
            p: "Jeigu pinigai gauti pasibaigus laikino laikymo terminui arba pasirinkto laiko dėl techninio konflikto patvirtinti nebegalima, paslauga nelaikoma automatiškai rezervuota. Administracija susisiekia ir pasiūlo jūsų laisvai pasirenkamą kitą laiką arba atitinkamos sumos grąžinimą. Klinika negali vienašališkai pakeisti paslaugos ar specialisto jums nepriimtinu variantu.",
          },
        ],
      },
      {
        h: "4. Pasirengimas vizitui ir klinikinis sutikimas",
        blocks: [
          {
            p: "Pateikite teisingus kontaktus ir prieš vizitą informuokite specialistą apie paslaugos saugai reikšmingas aplinkybes. Medicinos dokumentus pateikite specialistui suderintu saugiu būdu. Pirkimas internetu nėra medicininė konsultacija, diagnozė ar garantija, kad konkretus metodas jums tiks.",
          },
          {
            p: "Prieš paslaugą patikrinama tapatybė, aptariamas įvertinimas, siūlomi metodai, reikšmingos rizikos ir alternatyvos. Kai būtina, gaunamas atskiras informuotas sutikimas. Pirkimo taisyklių priėmimas nepakeičia šio sutikimo. Galite atsisakyti siūlomo metodo ar nutraukti sveikatos priežiūros sutartį teisės aktų nustatyta tvarka; atsiskaitymas už suteiktą paslaugos dalį vertinamas pagal šias taisykles ir taikomą teisę.",
          },
          {
            p: "Gydymo rezultato negalime garantuoti. Tai neriboja Klinikos pareigos suteikti tinkamos kokybės paslaugą ar jos atsakomybės pagal įstatymus. Jei specialistas nustato, kad paslauga negali būti saugiai ar teisėtai teikiama, ji neatliekama ir paaiškiname priežastį. Jei tai paaiškėja po įvertinimo, mokama pusė vizito kainos, o likusi dalis jūsų pasirinkimu grąžinama arba įskaitoma į kitą vizitą; taikant paketą vizitas nenurašomas, o mokama pusė vienkartinės vizito kainos. Jei tai paaiškėja iki įvertinimo, visa įmoka grąžinama arba įskaitoma.",
          },
          {
            p: "Vėluodami susisiekite kuo greičiau. Pavėlavus vizitas trumpinamas, nes turi būti laikomasi kitų pacientų grafiko ir saugos, o kaina nemažinama. Pavėlavus daugiau kaip 15 minučių, vizitas gali būti laikomas neatvykimu (6 skyrius).",
          },
        ],
      },
      {
        h: "5. Vizitų paketai",
        blocks: [
          { h3: "Kas yra paketas" },
          {
            p: "Paketas – iš anksto apmokėtas 5 arba 10 tos pačios paslaugos vizitų kursas už kainoraštyje nurodytą paketo kainą. Paketo kaina yra nuolaida už kursą, atliktą per nustatytą laiką. Paketai sudaromi šioms paslaugoms: kineziterapijai, kompleksinei reabilitacijai, kompleksinei išplėstinei reabilitacijai, masažui ir fizioterapijai. Pirminei konsultacijai ir individualiam vizitui pas Piotr Dubrovskij paketų nėra.",
          },
          { h3: "Kaip paketas veikia" },
          {
            ol: [
              "Paketą įsigyjate Klinikoje – paprastai po pirmojo vizito, kai su specialistu aptartas gydymo planas. Internetu paketai neparduodami.",
              "Paketas galioja 45 dienas (5 vizitai) arba 90 dienų (10 vizitų) nuo pirkimo dienos. Paskutinė galiojimo diena nurodoma perkant.",
              "Vizitus registruojate per administraciją arba pas specialistą – tik galiojimo laikotarpiu ir ne daugiau, nei paketo liko.",
              "Jei per galiojimo laiką visų vizitų nepanaudojate, paketas užbaigiamas: suteikti vizitai perskaičiuojami pagal vienkartinę kainą, o likutis eurais lieka jums kitoms ReaMed paslaugoms (5.6 punktas).",
              "Jei nutraukiate paketą ir paprašote grąžinti pinigus už nepanaudotus vizitus, suteikti vizitai taip pat perskaičiuojami pagal vienkartinę kainą ir grąžinamas tik likutis (5.8 punktas).",
            ],
          },
          { h3: "5.1 Asmeniškumas ir specialistas" },
          {
            p: "Paketas asmeninis: juo naudojasi tik jį įsigijęs pacientas, jis neperleidžiamas kitam asmeniui ir nedalijamas su kitu asmeniu. Norint padovanoti paslaugas kitam, įsigyjamas dovanų kuponas. Paketas susietas su paslauga, ne su specialistu: vizitai registruojami pas bet kurį šią paslaugą ReaMed teikiantį specialistą pagal laisvus laikus.",
          },
          { h3: "5.2 Kaina" },
          {
            p: "Paketo kaina fiksuojama pirkimo metu ir vėliau nesikeičia. Papildomas modulis (15 min) į paketą neįskaičiuotas ir apmokamas atskirai vizito metu pagal tuo metu galiojančią kainą.",
          },
          { h3: "5.3 Galiojimo terminas" },
          {
            p: "5 vizitų paketas galioja 45 kalendorines dienas, 10 vizitų paketas – 90 kalendorinių dienų nuo pirkimo dienos. Paskutinė galiojimo diena – pirkimo data plius atitinkamai 45 arba 90 dienų; pavyzdžiui, pirkus sausio 1 d., 5 vizitų paketo vizitai gali vykti iki vasario 15 d. imtinai. Vizitas turi įvykti ne vėliau kaip paskutinę galiojimo dieną; registracija ir perkėlimas už šio laikotarpio ribų negalimi. Terminai skaičiuojami pagal Lietuvos laiką, Europe/Vilnius.",
          },
          {
            p: "Įsigijus antrą tos pačios paslaugos paketą, kol pirmasis dar galioja, antrojo galiojimas pradedamas skaičiuoti nuo dienos, kai pirmasis panaudojamas arba baigia galioti. Vizitai pirmiausia priskiriami ankstesniam paketui.",
          },
          { h3: "5.4 Galiojimo pratęsimas" },
          {
            p: "Terminas pratęsiamas automatiškai tiek dienų, kiek vizitų nebuvo galima suteikti dėl Klinikos: Klinika atšaukė vizitą arba galiojimo laikotarpiu nebuvo laisvų laikų pas nė vieną paslaugą teikiantį specialistą. Dėl paciento ligos terminas pratęsiamas vieną kartą iki 14 dienų, paprašius administracijos iki galiojimo pabaigos arba per 7 dienas po jos. Kitais atvejais terminas nepratęsiamas.",
          },
          { h3: "5.5 Paketo vizito perkėlimas ir atšaukimas" },
          {
            p: "Perkelti ar atšaukti paketo vizitą nemokamai galima per administraciją, kai iki jo pradžios liko ne mažiau kaip 12 valandų; lygiai 12 valandų laikoma pranešimu laiku. Laiku atšauktas vizitas grįžta į paketo likutį.",
          },
          {
            p: "Likus mažiau kaip 12 valandų vizitą iki jo pradžios galima perkelti per administraciją telefonu arba el. paštu už 20 € mokestį; mokestis netaikomas, jei susirgote ir pateikiate gydytojo pažymą arba nedarbingumo pažymėjimą. Vizitas lieka paketo likutyje ir turi įvykti per 30 dienų nuo pirminės vizito datos, bet ne vėliau kaip paskutinę paketo galiojimo dieną. Jei vizito atsisakote jo neperkeldami arba neatvykstate, vizitas nurašomas iš paketo kaip panaudotas. Neatvykimas neįrašomas kaip suteikta sveikatos priežiūros paslauga.",
          },
          { h3: "5.6 Galiojimo pabaiga ir likutis" },
          {
            p: "Pasibaigus galiojimui paketas užbaigiamas, ir nepanaudoti vizitai nebegali būti registruojami. Suteikti vizitai perskaičiuojami pagal paketo pirkimo dieną galiojusią vienkartinę tos paslaugos kainą. Jei sumokėta paketo kaina viršija perskaičiuotą sumą, skirtumas eurais lieka jums kaip nepanaudotas likutis; jei neviršija, likučio nėra, o papildomai mokėti nereikia. Paketo likutį pasakome Klinikoje arba paprašius el. paštu.",
          },
          {
            p: "Likutis skaičiuojamas eurais, ne vizitais. Juo galite apmokėti bet kurias ReaMed paslaugas pagal paslaugos dieną galiojančias kainas; grįžus po ilgesnio laiko taikomos tuo metu galiojančios kainos. Likučio galiojimas neribojamas. Likutį galite paprašyti grąžinti pinigais (5.8 punktas). Likutis, susidaręs iš dovanų kuponu apmokėtos dalies, pinigais negrąžinamas: jis lieka kaip likutis kitoms paslaugoms.",
          },
          {
            p: "Pavyzdys: 5 kineziterapijos vizitų paketas kainuoja 325 €, vienkartinė kaina pirkimo dieną – 70 €. Per 45 dienas įvyko 2 vizitai. Perskaičiavimas: 2 × 70 € = 140 €; likutis 325 € − 140 € = 185 €. Grįžus po metų, kai kineziterapijos vizitas kainuoja 75 €, likučio užtenka dviem vizitams (150 €), lieka 35 €.",
          },
          { h3: "5.7 Paslaugos ar paketo keitimas" },
          {
            p: "Pakeisti paketą į kitos paslaugos vizitus ar paketą galima per administraciją: suteikti vizitai perskaičiuojami pagal ankstesnės paslaugos pirkimo dieną galiojusią vienkartinę kainą, likutis panaudojamas naujam pirkiniui pagal tuo metu galiojančias kainas, trūkstama suma sumokama iki kito vizito. Grąža grynaisiais neišmokama.",
          },
          { h3: "5.8 Paketo nutraukimas ir pinigų grąžinimas" },
          {
            p: "Galite bet kada nutraukti paketą ir paprašyti grąžinti pinigus už nepanaudotus vizitus. Tokiu atveju paketo nuolaida nebetaikoma: visi jau suteikti vizitai perskaičiuojami pagal paketo pirkimo dieną galiojusią vienkartinę kainą, o grąžinamas tik likutis – sumokėta paketo kaina, atėmus perskaičiuotą suteiktų vizitų kainą. Jei perskaičiuota suma lygi sumokėtai kainai arba ją viršija, grąžintinos sumos nėra, o papildomai mokėti nereikia. Pavyzdys: 10 kineziterapijos vizitų paketas kainuoja 600 €, vienkartinė kaina pirkimo dieną – 70 €. Panaudojus 8 vizitus grąžinama 600 € − 8 × 70 € = 40 €; panaudojus 9 vizitus (9 × 70 € = 630 €) grąžintinos sumos nėra. Grąžinimas atliekamas 7 skyriuje nustatyta tvarka.",
          },
          {
            p: "Jei Klinika nebegali teikti paketo paslaugos (specialistas nebedirba, paslauga nutraukta), siūlome kitą specialistą ar paslaugą. Jei jie jums nepriimtini, nepanaudoti vizitai grąžinami pagal paketo kainą – sumokėta suma, padalyta iš paketo vizitų skaičiaus ir padauginta iš nepanaudotų vizitų skaičiaus – be perskaičiavimo pagal vienkartinę kainą.",
          },
          { h3: "5.9 Ankstesni paketai" },
          {
            p: "Pirkimo diena – paketo apmokėjimo diena. Paketams, įsigytiems iki šios redakcijos įsigaliojimo, taikomos jų pirkimo metu galiojusios sąlygos.",
          },
        ],
      },
      {
        h: "6. Pavienio vizito perkėlimas, atšaukimas ir neatvykimas",
        id: "atsaukimas",
        blocks: [
          {
            p: "Vizitą galite perkelti arba atšaukti per užsakymo nuorodą iš patvirtinimo laiško (internetu užregistruotą vizitą), telefonu +370 601 34304 arba el. paštu info@reamed.lt, kai iki jo pradžios liko ne mažiau kaip 12 valandų. Lygiai 12 valandų laikoma pranešimu laiku. Laikas skaičiuojamas nuo pokalbio, praleisto skambučio ar el. laiško gavimo momento pagal Lietuvos laiką (Europe/Vilnius). Jei vizitas užregistruotas likus mažiau kaip 12 valandų, nemokamo atšaukimo laikotarpis netaikomas.",
          },
          {
            p: "Perkeliant laiku įmoka išsaugoma suderintam tos pačios kainos vizitui; kitos kainos paslaugai skirtumas derinamas prieš pakeitimą. Atšaukus laiku už nesuteiktą vizitą sumokėta suma jūsų pasirinkimu grąžinama arba įskaitoma kitam vizitui. Papildomo mokesčio netaikome. Vieno užsakymo vizito atšaukimas savaime neatšaukia kitų patvirtintų vizitų; grąžinama ar perkeliama konkrečiam vizitui priskirta suma.",
          },
          {
            p: "Likus mažiau kaip 12 valandų iki vizito pradžios, laikas rezervuotas tik jums ir Klinika paprastai nebegali jo pasiūlyti kitam pacientui. Todėl nemokamai atšaukti ar perkelti vizito nebegalima.",
          },
          {
            p: "Iki vizito pradžios vizitą galite perkelti per administraciją telefonu arba el. paštu. Vėlyvo perkėlimo mokestis – 20 €, priežasties nurodyti nereikia; jis sumokamas iki perkelto vizito. Mokestis netaikomas, jei susirgote ir pateikiate gydytojo pažymą arba nedarbingumo pažymėjimą. Sumokėta kaina išsaugoma naujam laikui: perkeltas vizitas turi įvykti per 30 dienų nuo pirminės vizito datos, per šį laiką jį galima perkelti dar kartą tomis pačiomis sąlygomis. Per 30 dienų neįvykęs vizitas laikomas neatvykimu.",
          },
          {
            p: "Jei likus mažiau kaip 12 valandų vizito atsisakote jo neperkeldami arba į vizitą neatvykstate, sumokėta kaina negrąžinama: ja padengiamos Klinikos išlaidos jums rezervuotam specialisto laikui ir kabinetui, kurių Klinika nebegali išvengti. Neatvykimas neįrašomas kaip suteikta sveikatos priežiūros paslauga. Jei toks vizitas nebuvo apmokėtas iš anksto, Klinika gali pareikalauti sumokėti jo kainą, o vėlesnius vizitus registruoti tik su išankstiniu apmokėjimu.",
          },
          {
            p: "Šios sąlygos neriboja jūsų teisės bet kada nutraukti sveikatos priežiūros paslaugų sutartį ir kitų įstatymuose nustatytų paciento bei vartotojo teisių.",
          },
        ],
      },
      {
        h: "7. Klinikos atšaukimas ir pinigų grąžinimas",
        blocks: [
          {
            p: "Jei vizitą atšaukia Klinika ir paslauga nesuteikiama, pasiūlome kitą laiką ar tinkamą specialistą, su kuriuo galite laisvai sutikti, arba grąžiname už atšauktą vizitą sumokėtą sumą. Klinika nepalieka sau įmokos vien todėl, kad negalėjo įvykdyti sutarties. Jūsų įstatymų numatytos teisės dėl papildomų nuostolių ar netinkamos paslaugos išlieka.",
          },
          {
            p: "Dėl grąžinimo kreipkitės info@reamed.lt, nurodydami vardą, užsakymo numerį ir konkretų vizitą, paketą ar likutį. Jei prašymas pateiktas savitarnoje ir apima šią informaciją, jo nereikia kartoti. Tapatybę ar teisę gauti grąžinimą tikriname tik tiek, kiek būtina. Kortelės saugumo kodų ar banko prisijungimo duomenų neprašome.",
          },
          {
            p: "Grąžintiną sumą ir bet kokią šiose taisyklėse numatytą išskaitą paaiškiname raštu. Grąžinimą inicijuojame ne vėliau kaip per 14 kalendorinių dienų nuo prašymo gavimo. Jei objektyviai trūksta grąžinimui būtinos informacijos, apie ją nedelsdami konkrečiai pranešame; vidinis sprendimo patvirtinimas termino nepradeda iš naujo. Kai vizitą atšaukia Klinika arba apmokėto laiko patvirtinti negalima, grąžinimą inicijuojame patys, nebent aiškiai pasirenkate kitą laiką ar įskaitymą.",
          },
          {
            p: "Grąžiname tuo pačiu mokėjimo būdu: Paysera mokėjimą – per Paysera, Klinikoje sumokėtą sumą – į jūsų nurodytą banko sąskaitą. Dovanų kuponu apmokėta dalis pinigais negrąžinama: ji grįžta į kuponą arba lieka kaip likutis kitoms paslaugoms. Banko ar mokėjimo teikėjo apdorojimo laikas gali skirtis. Šis Klinikos nustatytas vykdymo terminas neriboja įstatymų numatytų teisių ir terminų.",
          },
        ],
      },
      {
        h: "8. Sutarties atsisakymas ir privalomos teisės",
        blocks: [
          {
            p: "Sveikatos priežiūros paslaugų sutartims Civilinio kodekso nuostatos dėl nuotolinių sutarčių, įskaitant 14 dienų teisę atsisakyti sutarties be priežasties, netaikomos (Civilinio kodekso 6.228³ straipsnio 2 dalies 3 punktas). Atsiskaitymo tvarką atsisakius vizito ar paketo nustato šių taisyklių 5–7 skyriai.",
          },
          {
            p: "Pacientas turi teisę bet kada nutraukti sveikatos priežiūros paslaugų sutartį. Šios taisyklės neriboja privalomų paciento ir vartotojo teisių, teisės ginčyti sąlygą, reikalauti žalos atlyginimo ar kreiptis į kompetentingą instituciją.",
          },
        ],
      },
      {
        h: "9. Kreipimaisi ir skundai",
        blocks: [
          {
            p: "Dėl registracijos, mokėjimo, paketo ar paslaugos pirmiausia galite kreiptis info@reamed.lt, telefonu +370 601 34304 arba Klinikoje. Nurodykite užsakymo ar vizito duomenis, aplinkybes ir pageidaujamą sprendimą. Medicinos informaciją pateikite tik tiek, kiek būtina kreipimuisi išnagrinėti.",
          },
          {
            p: "Skundą dėl paciento teisių pažeidimo galima pateikti per vienus metus nuo sužinojimo apie pažeidimą, bet ne vėliau kaip per trejus metus nuo pažeidimo. Apie skundo trūkumus pranešame per 3 darbo dienas, jiems pašalinti skiriama 30 dienų. Skundą išnagrinėjame ir raštu atsakome per 20 darbo dienų nuo gavimo (Pacientų teisių ir žalos sveikatai atlyginimo įstatymo 23 straipsnis).",
          },
          {
            p: "Jei atsakymas netenkina, dėl paslaugų kokybės ir prieinamumo galima kreiptis į Valstybinę akreditavimo sveikatos priežiūros veiklai tarnybą, dėl pirkimo sąlygų – į Valstybinę vartotojų teisių apsaugos tarnybą, dėl asmens duomenų – į Valstybinę duomenų apsaugos inspekciją. Teisė kreiptis į teismą išlieka.",
          },
          {
            p: "Prašymas atlyginti paciento sveikatai padarytą žalą teikiamas Pacientų sveikatai padarytos žalos nustatymo komisijai prie Sveikatos apsaugos ministerijos per trejus metus nuo sužinojimo apie žalą (to paties įstatymo 24 straipsnis).",
          },
        ],
      },
      {
        h: "10. Asmens duomenys ir taisyklių redakcijos",
        blocks: [
          {
            p: "Užsakymo duomenų tvarkymą paaiškina [ReaMed privatumo politika](/privatumas). Reklamos sutikimas nėra pirkimo sąlyga. Medicininis sutikimas duodamas atskirai aptarus konkrečią sveikatos priežiūrą.",
          },
          {
            p: "Konkrečiam užsakymui taikoma prieš jo pateikimą parodyta ir priimta taisyklių redakcija. Išsaugoma jos versija ir patvirtinimo duomenys; kopija pateikiama su užsakymo patvirtinimu arba paprašius. Vėlesnės redakcijos ankstesnės sutarties vienašališkai nekeičia. Atskirai suderintas pakeitimas dokumentuojamas.",
          },
          {
            p: "Ankstesnių užsakymų ir paketų sąlygos šia redakcija automatiškai nekeičiamos. Nesutarimai sprendžiami pagal sutarčiai taikomą teisę ir privalomas paciento bei vartotojo apsaugos taisykles.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Rules for buying services, booking and cancellation",
    edition: "MB Kineziterapija · Version of 22 November 2026",
    sections: [
      {
        h: "1. Service provider and scope",
        blocks: [
          {
            p: "The service provider and party to the contract is MB Kineziterapija, company code 305136936, registered office and ReaMed place of service Olimpiečių g. 1A-7, LT-09235 Vilnius; personal healthcare licence No. 4098. Website reamed.lt, e-mail info@reamed.lt, phone +370 601 34304. Hereinafter, the Clinic.",
          },
          {
            p: "These rules apply to personal healthcare services sold under the ReaMed name: single visits bought on reamed.lt, by phone or at the Clinic, and visit packages bought at the Clinic. Gift vouchers are covered by the separate [ReaMed gift voucher rules](/dovanu-kuponas/salygos); visits and packages paid with a voucher are covered by these rules.",
          },
          {
            p: "Self-service online booking is for adults booking for themselves. For a minor, representation or paying for another patient, contact the administration. These rules do not apply to FitKid or to services of other legal entities.",
          },
          {
            p: "The services listed in the catalogue ([reamed.lt/kainos](/kainos)) can be chosen online. They are provided within the Clinic's licence and the competence of the specialist providing them. The specific method, its suitability and risks are discussed with the specialist.",
          },
        ],
      },
      {
        h: "2. Price and making an order",
        blocks: [
          {
            p: "Before paying you see the service, specialist, date, start time, planned duration, the price of each visit and the full amount payable in euros. The amount shown is final; MB Kineziterapija is not a VAT payer. There are no extra charges without your explicit choice. The price is fixed when you order; a later change to the price list does not change a paid order. If the price or the description of the service is unclear, contact us before submitting the order.",
          },
          {
            p: "The choice “up to” states the planned maximum duration of the service; the actual time depends on clinical need and the content of the service agreed in advance. The interval kept in the specialist's calendar may be longer, to leave time to prepare and tidy the workplace. This is not a separately purchased additional procedure.",
          },
          {
            p: "For a patient coming for the first time, the online form offers an initial consultation. For a returning visit, the procedures allowed in the catalogue are chosen. The answer “I have been before” is information you provide, not an automatic confirmation of the patient's medical history. If you need another choice or a clinical assessment, contact the administration.",
          },
          {
            p: "Several visits can be chosen in one order. Single visits each cost the single-visit price and do not form a package, even if five or ten of them are ordered. Visit packages are not sold online: they are bought at the Clinic (section 5).",
          },
          {
            p: "The chosen time is held for payment for 20 minutes; the remaining time is shown on the screen. If payment is not completed, the time is released. Adding to the cart or opening the payment page does not confirm a visit.",
          },
        ],
      },
      {
        h: "3. Payment and confirmation",
        blocks: [
          {
            p: "The full order amount is paid in advance in one payment through Paysera; the available payment methods are shown in the payment window. Gift vouchers are used as set out in the ReaMed gift voucher rules. Card or bank security details are entered only in the payment service provider's environment.",
          },
          {
            p: "By pressing “Order and pay” you submit an order with an obligation to pay and confirm that you have read and accept the rules shown before payment. The order and the contract for the chosen visits are confirmed when the system verifies payment of the full amount and that the chosen times can be confirmed. We send the confirmation, the visit details, how to manage the order and the version of the rules that applies to you to the e-mail you gave. Keep this information.",
          },
          {
            p: "Returning from Paysera to the website does not by itself prove successful payment. If you have not received a confirmation, check the order status or contact the administration. Do not repeat the payment merely because the confirmation page did not open.",
          },
          {
            p: "If the money arrives after the temporary hold has expired, or the chosen time can no longer be confirmed because of a technical conflict, the service is not automatically booked. The administration will contact you and offer another time of your free choice or a refund of the corresponding amount. The Clinic cannot unilaterally change the service or the specialist to an option you do not accept.",
          },
        ],
      },
      {
        h: "4. Preparing for the visit and clinical consent",
        blocks: [
          {
            p: "Give correct contact details and, before the visit, tell the specialist about circumstances relevant to the safety of the service. Provide medical documents to the specialist by an agreed secure method. Buying online is not a medical consultation, a diagnosis or a guarantee that a particular method will suit you.",
          },
          {
            p: "Before the service, identity is checked and the assessment, proposed methods, significant risks and alternatives are discussed. Where necessary, separate informed consent is obtained. Accepting the purchase rules does not replace this consent. You may refuse a proposed method or terminate the healthcare contract as provided by law; payment for the part of the service provided is assessed under these rules and the applicable law.",
          },
          {
            p: "We cannot guarantee the outcome of treatment. This does not limit the Clinic's duty to provide a service of proper quality or its liability under the law. If the specialist finds that the service cannot be provided safely or lawfully, it is not performed and we explain the reason. If this becomes clear after the assessment, half of the visit price is paid and the rest is refunded or credited to another visit, as you choose; with a package the visit is not deducted and half of the single-visit price is paid. If it becomes clear before the assessment, the whole payment is refunded or credited.",
          },
          {
            p: "If you are running late, contact us as soon as possible. If you are late, the visit is shortened, because other patients' schedules and safety must be respected, and the price is not reduced. If you are more than 15 minutes late, the visit may count as a missed visit (section 6).",
          },
        ],
      },
      {
        h: "5. Visit packages",
        blocks: [
          { h3: "What a package is" },
          {
            p: "A package is a prepaid course of 5 or 10 visits of the same service at the package price in the price list. The package price is a discount for a course completed within a set time. Packages are offered for these services: physiotherapy (kineziterapija), complex rehabilitation, extended complex rehabilitation, massage and physical therapy (fizioterapija). There are no packages for the initial consultation or the individual visit with Piotr Dubrovskij.",
          },
          { h3: "How a package works" },
          {
            ol: [
              "You buy the package at the Clinic – usually after the first visit, once the treatment plan has been discussed with the specialist. Packages are not sold online.",
              "The package is valid for 45 days (5 visits) or 90 days (10 visits) from the day of purchase. The last valid day is stated at purchase.",
              "You book visits through the administration or with the specialist – only within the validity period and no more than the package has left.",
              "If you do not use all visits within the validity period, the package is closed: the visits provided are recalculated at the single-visit price, and the remainder in euros stays with you for other ReaMed services (point 5.6).",
              "If you end the package and ask for a refund for unused visits, the visits provided are also recalculated at the single-visit price and only the remainder is refunded (point 5.8).",
            ],
          },
          { h3: "5.1 Personal use and specialist" },
          {
            p: "The package is personal: only the patient who bought it uses it; it cannot be transferred to or shared with another person. To give services to someone else, buy a gift voucher. The package is linked to the service, not to the specialist: visits are booked with any specialist providing this service at ReaMed, subject to free times.",
          },
          { h3: "5.2 Price" },
          {
            p: "The package price is fixed at purchase and does not change later. The additional module (15 min) is not included in the package and is paid separately during the visit at the price valid at that time.",
          },
          { h3: "5.3 Validity" },
          {
            p: "A 5-visit package is valid for 45 calendar days and a 10-visit package for 90 calendar days from the day of purchase. The last valid day is the purchase date plus 45 or 90 days respectively; for example, if bought on 1 January, the visits of a 5-visit package may take place up to and including 15 February. A visit must take place no later than the last valid day; booking and rescheduling outside this period are not possible. Periods are counted in Lithuanian time, Europe/Vilnius.",
          },
          {
            p: "If a second package of the same service is bought while the first is still valid, the second one's validity starts on the day the first is used up or expires. Visits are assigned to the earlier package first.",
          },
          { h3: "5.4 Extension" },
          {
            p: "The validity is extended automatically by as many days as visits could not be provided because of the Clinic: the Clinic cancelled a visit or, during the validity period, there were no free times with any specialist providing the service. Because of the patient's illness, the validity is extended once by up to 14 days if you ask the administration before the end of validity or within 7 days after it. In other cases the validity is not extended.",
          },
          { h3: "5.5 Rescheduling and cancelling a package visit" },
          {
            p: "A package visit can be rescheduled or cancelled free of charge through the administration while at least 12 hours remain before it starts; exactly 12 hours counts as notice in time. A visit cancelled in time returns to the package balance.",
          },
          {
            p: "With less than 12 hours left, the visit can be rescheduled through the administration by phone or e-mail before it starts for a €20 fee; no fee applies if you are ill and present a doctor's certificate or a certificate of incapacity for work. The visit stays in the package balance and must take place within 30 days of the original visit date, but no later than the last valid day of the package. If you cancel the visit without rescheduling it or do not attend, the visit is deducted from the package as used. A missed visit is not recorded as a healthcare service provided.",
          },
          { h3: "5.6 End of validity and balance" },
          {
            p: "When the validity ends, the package is closed and unused visits can no longer be booked. The visits provided are recalculated at the single-visit price of that service valid on the day the package was bought. If the package price paid exceeds the recalculated amount, the difference in euros stays with you as an unused balance; if it does not, there is no balance and nothing more is payable. We tell you the package balance at the Clinic, or by e-mail on request.",
          },
          {
            p: "The balance is counted in euros, not visits. You can use it for any ReaMed services at the prices valid on the day of the service; if you come back after a longer time, the prices valid then apply. The balance does not expire. You can ask for the balance to be refunded in money (point 5.8). A balance arising from a part paid with a gift voucher is not refunded in money: it stays as a balance for other services.",
          },
          {
            p: "Example: a package of 5 physiotherapy visits costs €325, and the single-visit price on the day of purchase is €70. Two visits took place within 45 days. Recalculation: 2 × €70 = €140; balance €325 − €140 = €185. If you come back a year later, when a physiotherapy visit costs €75, the balance covers two visits (€150), and €35 remains.",
          },
          { h3: "5.7 Changing the service or package" },
          {
            p: "A package can be changed into visits or a package of another service through the administration: the visits provided are recalculated at the single-visit price of the earlier service valid on the day of purchase, the balance is used for the new purchase at the prices valid then, and any shortfall is paid before the next visit. No change is paid out in cash.",
          },
          { h3: "5.8 Ending a package and refunds" },
          {
            p: "You can end the package at any time and ask for a refund for unused visits. In that case the package discount no longer applies: all visits already provided are recalculated at the single-visit price valid on the day the package was bought, and only the remainder is refunded – the package price paid minus the recalculated price of the visits provided. If the recalculated amount equals or exceeds the price paid, nothing is refunded and nothing more is payable. Example: a package of 10 physiotherapy visits costs €600, and the single-visit price on the day of purchase is €70. After 8 visits, €600 − 8 × €70 = €40 is refunded; after 9 visits (9 × €70 = €630) nothing is refunded. Refunds are made as set out in section 7.",
          },
          {
            p: "If the Clinic can no longer provide the package service (the specialist no longer works, the service is discontinued), we offer another specialist or service. If these do not suit you, unused visits are refunded at the package rate – the amount paid divided by the number of package visits and multiplied by the number of unused visits – without recalculation at the single-visit price.",
          },
          { h3: "5.9 Earlier packages" },
          {
            p: "The day of purchase is the day the package is paid. Packages bought before this version came into force are governed by the terms valid when they were bought.",
          },
        ],
      },
      {
        h: "6. Rescheduling, cancelling and missing a single visit",
        id: "atsaukimas",
        blocks: [
          {
            p: "You can reschedule or cancel a visit through the order link in the confirmation e-mail (for a visit booked online), by phone on +370 601 34304 or by e-mail to info@reamed.lt while at least 12 hours remain before it starts. Exactly 12 hours counts as notice in time. The time counts from the call, the missed call or the receipt of the e-mail, in Lithuanian time (Europe/Vilnius). If a visit is booked with less than 12 hours left, there is no free cancellation period.",
          },
          {
            p: "When a visit is rescheduled in time, the payment is kept for an agreed visit of the same price; for a service at another price the difference is agreed before the change. When a visit is cancelled in time, the amount paid for the visit not provided is refunded or credited to another visit, as you choose. No additional fee applies. Cancelling one visit of an order does not by itself cancel other confirmed visits; the amount assigned to that visit is refunded or moved.",
          },
          {
            p: "With less than 12 hours left before the visit starts, the time is reserved for you alone and the Clinic usually can no longer offer it to another patient. Therefore the visit can no longer be cancelled or rescheduled free of charge.",
          },
          {
            p: "Before the visit starts, you can reschedule it through the administration by phone or e-mail. The late rescheduling fee is €20, and no reason needs to be given; it is paid before the rescheduled visit. No fee applies if you are ill and present a doctor's certificate or a certificate of incapacity for work. The price paid is kept for the new time: the rescheduled visit must take place within 30 days of the original visit date, and within that time it can be rescheduled again on the same terms. A visit that does not take place within 30 days counts as a missed visit.",
          },
          {
            p: "If, with less than 12 hours left, you cancel the visit without rescheduling it or do not attend, the price paid is not refunded: it covers the Clinic's costs for the specialist's time and the room reserved for you, which the Clinic can no longer avoid. A missed visit is not recorded as a healthcare service provided. If such a visit was not paid in advance, the Clinic may require payment of its price and book later visits only with prepayment.",
          },
          {
            p: "These terms do not limit your right to terminate the healthcare services contract at any time or other patient and consumer rights provided by law.",
          },
        ],
      },
      {
        h: "7. Cancellation by the Clinic and refunds",
        blocks: [
          {
            p: "If the Clinic cancels a visit and the service is not provided, we offer another time or a suitable specialist, which you are free to accept, or refund the amount paid for the cancelled visit. The Clinic does not keep the payment merely because it could not perform the contract. Your statutory rights regarding additional losses or an improper service remain.",
          },
          {
            p: "For a refund, write to info@reamed.lt giving your name, the order number and the specific visit, package or balance. If the request was submitted in self-service and contains this information, it does not need to be repeated. We check identity or entitlement to a refund only as far as necessary. We do not ask for card security codes or online banking credentials.",
          },
          {
            p: "We explain in writing the amount to be refunded and any deduction provided for in these rules. We initiate the refund no later than 14 calendar days after receiving the request. If information needed for the refund is objectively missing, we tell you promptly and specifically; internal approval of the decision does not restart the period. When the Clinic cancels a visit or a paid time cannot be confirmed, we initiate the refund ourselves unless you clearly choose another time or a credit.",
          },
          {
            p: "We refund by the same payment method: a Paysera payment through Paysera, an amount paid at the Clinic to the bank account you give. The part paid with a gift voucher is not refunded in money: it returns to the voucher or stays as a balance for other services. Bank or payment provider processing times may vary. This period set by the Clinic does not limit statutory rights and periods.",
          },
        ],
      },
      {
        h: "8. Withdrawal from the contract and mandatory rights",
        blocks: [
          {
            p: "For healthcare service contracts, the Civil Code provisions on distance contracts, including the 14-day right to withdraw without giving a reason, do not apply (Civil Code Article 6.228³(2)(3)). Settlement after cancelling a visit or a package is set out in sections 5–7 of these rules.",
          },
          {
            p: "The patient has the right to terminate the healthcare services contract at any time. These rules do not limit mandatory patient and consumer rights, the right to challenge a term, to claim damages or to apply to a competent authority.",
          },
        ],
      },
      {
        h: "9. Enquiries and complaints",
        blocks: [
          {
            p: "About booking, payment, a package or a service you can first contact info@reamed.lt, call +370 601 34304 or come to the Clinic. Give the order or visit details, the circumstances and the solution you would like. Provide medical information only to the extent needed to examine the enquiry.",
          },
          {
            p: "A complaint about a violation of patient rights can be submitted within one year of learning of the violation, but no later than three years after it. We tell you about shortcomings of the complaint within 3 working days, and 30 days are given to correct them. We examine the complaint and reply in writing within 20 working days of receiving it (Article 23 of the Law on the Rights of Patients and Compensation for Damage to Health).",
          },
          {
            p: "If the reply does not satisfy you, you can apply about the quality and availability of services to the State Accreditation Service for Health Care Activities, about the purchase terms to the State Consumer Rights Protection Authority, and about personal data to the State Data Protection Inspectorate. The right to go to court remains.",
          },
          {
            p: "A claim for compensation for damage to a patient's health is submitted to the Commission for Determining Damage to Patients' Health under the Ministry of Health within three years of learning of the damage (Article 24 of the same law).",
          },
        ],
      },
      {
        h: "10. Personal data and versions of the rules",
        blocks: [
          {
            p: "Processing of order data is explained in the [ReaMed privacy policy](/privatumas). Consent to advertising is not a condition of purchase. Medical consent is given separately after discussing the specific healthcare.",
          },
          {
            p: "A specific order is governed by the version of the rules shown and accepted before it was submitted. That version and the confirmation data are kept; a copy is provided with the order confirmation or on request. Later versions do not unilaterally change an earlier contract. A separately agreed change is documented.",
          },
          {
            p: "The terms of earlier orders and packages are not automatically changed by this version. Disagreements are resolved under the law applicable to the contract and mandatory patient and consumer protection rules.",
          },
        ],
      },
    ],
  },
};
