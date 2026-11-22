import type { LegalDoc } from "@/components/legal/LegalDocument";

// ReaMed privatumo politika, redakcija 2026-11-22: Piotr's text of 2026-11-21 with the corrections he approved
// on 2026-11-22 (Claude Doc «ReaMed: privatumo politika, slapukai ir taisyklės — patikra»; Meta removed,
// no package/voucher expiry e-mails). Decisions: klinika-system docs/DECISIONS.md, 2026-11-22.
export const privacyPolicy: Record<"lt" | "en", LegalDoc> = {
  lt: {
    title: "Privatumo politika",
    edition: "MB „Kineziterapija“ · Redakcija 2026-11-22",
    sections: [
      {
        h: "Kam skirta ši politika",
        blocks: [
          {
            p: "Ši politika paaiškina, kaip MB „Kineziterapija“, veikianti ReaMed vardu, tvarko pacientų, jų atstovų, paslaugų ir dovanų kuponų pirkėjų bei svetainės lankytojų asmens duomenis. Ji apima kreipimąsi į Kliniką, registraciją, paslaugų ir dovanų kuponų pirkimą internetu, Klinikoje įsigyjamus vizitų paketus, pacientų dokumentus, mokėjimų administravimą ir registratūros vaizdo stebėjimą.",
          },
          {
            p: "Politika yra informacija apie duomenų tvarkymą. Susipažinimas su ja nėra bendras sutikimas su visais tvarkymo tikslais. [Paslaugų pirkimo taisyklės](/rezervacija/salygos), [dovanų kuponų taisyklės](/dovanu-kuponas/salygos) ir informuotas paciento sutikimas sveikatos priežiūrai pateikiami atskirai. Ši redakcija skirta ReaMed veiklai ir jos internetinei registracijai; ji nenustato atskiros FitKid registracijos ar kitų juridinių asmenų paslaugų sąlygų.",
          },
        ],
      },
      {
        h: "Kas atsako už duomenis",
        blocks: [
          {
            p: "Duomenų valdytojas – MB „Kineziterapija“, juridinio asmens kodas 305136936, buveinė ir ReaMed paslaugų vieta Olimpiečių g. 1A-7, LT-09235 Vilnius, Lietuva. Svetainė reamed.lt. Duomenų apsaugos klausimais kreipkitės į Klinikos administraciją el. paštu info@reamed.lt, telefonu +370 601 34304 arba nurodytu adresu.",
          },
        ],
      },
      {
        h: "Kokius duomenis gauname",
        blocks: [
          {
            p: "Registruojantis internetu prašome vardo, pavardės, telefono numerio ir el. pašto, o sąskaitai faktūrai – pasirinktinai adreso arba įmonės pavadinimo, kodo, PVM kodo ir adreso. Taip pat gauname pasirinktą paslaugą, specialistą, laiką, informaciją apie pirmą ar pakartotinį vizitą, užsakymo ir mokėjimo būseną. Įsigijus vizitų paketą Klinikoje, tvarkomi jo likučio ir galiojimo duomenys. Registracijos forma neskirta diagnozėms, tyrimų rezultatams ar išsamiai sveikatos istorijai pateikti.",
          },
          {
            p: "Perkant dovanų kuponą prašome pirkėjo vardo, pavardės ir el. pašto; pirkėjo pasirinkimu įrašomas gavėjo vardas ir palinkėjimas, o gavėjo el. paštas naudojamas tik kuponui išsiųsti. Kupono kodas, suma, likutis, galiojimo data ir panaudojimo įrašai tvarkomi kuponui vykdyti ir apskaitai.",
          },
          {
            p: "Teikdami sveikatos priežiūrą tvarkome paciento tapatybės ir kontaktinius duomenis, gimimo datą, asmens kodą (užsieniečio – asmens dokumento numerį), atstovavimo duomenis, sveikatos istoriją, įvertinimus, atliktų procedūrų, rekomendacijų ir paciento pasirinkimų įrašus. Elektroniniuose dokumentuose gali būti parašo vaizdas, dokumento redakcija, pasirašymo laikas, specialistas ir dokumento vientisumą patvirtinantys techniniai duomenys. Parašo vaizdo nenaudojame automatiniam biometriniam atpažinimui.",
          },
          {
            p: "Duomenis gauname iš paties asmens ar teisėto atstovo, juos sukuria paslaugas teikiantis specialistas. Kai yra teisėtas pagrindas ir tai būtina priežiūrai, informaciją galime gauti iš e. sveikatos, kitų sveikatos priežiūros įstaigų ar registracijos paslaugos teikėjo. Apmokėjimo duomenis pateikia mokėjimo paslaugų teikėjas. Jei informaciją pateikia kitas asmuo, jis turi turėti teisę tai daryti; mokėtojas ar dovanų kupono pirkėjas savaime neįgyja teisės gauti kito paciento medicinos dokumentų ar informacijos apie jo vizitus.",
          },
          {
            p: "Svetainės ir prisijungimo veikimui tvarkomi IP adresas, kreipimosi laikas, užklausos ir saugumo įvykių duomenys, prisijungiant el. paštu – kodo ir sesijos techniniai duomenys. Jums sutikus su slapukais, renkami svetainės statistikos ir reklamos veiksmingumo duomenys. Skambinant į Kliniką tvarkomas telefono numeris ir pokalbio turinys. Vaizdo stebėjimas ir skambučiai aprašyti atskiruose skyriuose.",
          },
        ],
      },
      {
        h: "Tikslai ir teisiniai pagrindai",
        blocks: [
          {
            p: "BDAR – Bendrasis duomenų apsaugos reglamentas. Jei paslaugos pasirinkimas, registracijos informacija ar kiti duomenys atskleidžia sveikatos būklę, kartu su bendruoju pagrindu taikomas ir specialių kategorijų duomenų tvarkymo pagrindas. Medicinos dokumentų tvarkymas negrindžiamas priverstiniu bendru sutikimu.",
          },
          {
            table: {
              head: ["Tikslas", "Duomenys", "Teisinis pagrindas"],
              rows: [
                [
                  "Registracija ir sutarties vykdymas",
                  "Kontaktai, paslauga ar paketas, specialistas, laikas, užsakymo ir apmokėjimo būsena, paketo ir nepanaudotos sumos likučiai",
                  "BDAR 6 straipsnio 1 dalies b punktas; sveikatos duomenims – 9 straipsnio 2 dalies h punktas ir profesinio konfidencialumo reikalavimai",
                ],
                [
                  "Dovanų kuponų išdavimas ir vykdymas",
                  "Pirkėjo vardas, pavardė ir el. paštas, pasirinktinai gavėjo vardas, palinkėjimas ir el. paštas, kupono kodas, suma, likutis, panaudojimo įrašai",
                  "Sutarčiai su pirkėju – 6 straipsnio 1 dalies b punktas; apskaitai – c punktas",
                ],
                [
                  "Sveikatos priežiūra ir privalomi įrašai",
                  "Tapatybės, atstovavimo, sveikatos, procedūrų ir informuoto pasirinkimo duomenys",
                  "Sutarties vykdymui – 6 straipsnio 1 dalies b punktas; teisės aktuose nustatytoms pareigoms – c punktas; sveikatos duomenims – 9 straipsnio 2 dalies h punktas",
                ],
                [
                  "Mokėjimai ir apskaita",
                  "Užsakymo numeris, suma, mokėjimo ir sąskaitos duomenys",
                  "Sutarčiai – 6 straipsnio 1 dalies b punktas; finansinės apskaitos ir dokumentų saugojimo pareigoms – c punktas",
                ],
                [
                  "Atsakymai ir paslaugų pranešimai",
                  "Kontaktai, užklausos turinys, patvirtinimai, pakeitimai, priminimai apie vizitą",
                  "6 straipsnio 1 dalies b punktas, kai kreipiamasi dėl sutarties; kitoms užklausoms – f punktas, teisėtas interesas atsakyti į kreipimąsi",
                ],
                [
                  "Saugumas ir piktnaudžiavimo prevencija",
                  "Būtini techniniai, prisijungimo ir veiksmų įrašai",
                  "6 straipsnio 1 dalies f punktas – teisėtas interesas apsaugoti asmenis, informaciją ir sistemas",
                ],
                [
                  "Svetainės statistika ir reklamos veiksmingumo matavimas",
                  "Atidaryto puslapio adresas, įrenginio ir naršyklės duomenys, IP adresas, veiksmai svetainėje; apie apmokėtą užsakymą – tik jo numeris ir suma",
                  "6 straipsnio 1 dalies a punktas – jūsų sutikimas, kurį galite bet kada atšaukti",
                ],
                [
                  "Skambučių aptarnavimas",
                  "Telefono numeris, pokalbio turinys, pokalbio įrašas, jei jis daromas",
                  "6 straipsnio 1 dalies b punktas, kai skambinama dėl registracijos; f punktas – teisėtas interesas užtikrinti aptarnavimą ir išspręsti ginčus; sveikatos duomenims – 9 straipsnio 2 dalies h punktas",
                ],
                [
                  "Skundai ir teisiniai reikalavimai",
                  "Prašymo ir ginčo aplinkybės, būtini įrodymai",
                  "Įstatymų nustatytoms pareigoms – 6 straipsnio 1 dalies c punktas; teisių gynimui – f punktas; kai būtina, 9 straipsnio 2 dalies f arba h punktas",
                ],
              ],
            },
          },
        ],
      },
      {
        h: "Registracija ir mokėjimas internetu",
        blocks: [
          {
            p: "Registruotis galima svečio teisėmis arba prisijungus el. paštu gautu kodu. Prisijungimas ar užsakymo valdymo nuoroda patvirtina prieigą prie el. pašto ir konkrečių užsakymų; tai nepakeičia paciento tapatybės ir atstovavimo patikrinimo Klinikoje. Saugokite kodus, valdymo nuorodas ir dovanų kuponų kodus ir jų neperduokite kitiems.",
          },
          {
            p: "Mokėjimui nukreipiame į Paysera aplinką. Perduodame mokėjimui susieti reikalingą užsakymo identifikatorių, sumą, valiutą ir techninius grįžimo duomenis, taip pat registracijoje nurodytą vardą, pavardę ir el. pašto adresą, kad mokėjimo lange jų nereikėtų įvesti dar kartą. Diagnozių ir išsamios sveikatos istorijos mokėjimo paskirtyje neteikiame. Kortelės duomenys ar banko prisijungimo duomenys įvedami mokėjimo teikėjo aplinkoje; Klinika jų neprašo ir savo registracijos formoje nesaugo.",
          },
          {
            p: "Paysera LT, UAB savo mokėjimo, teisės aktų vykdymo ir sukčiavimo prevencijos tikslais veikia kaip savarankiškas duomenų valdytojas. Jos atliekamą tvarkymą paaiškina [Paysera privatumo politika](https://www.paysera.com/v2/lt/sutartys/privatumo-politika). Klinika lieka atsakinga už savo registracijos ir paslaugų duomenų tvarkymą.",
          },
          {
            p: "Vizitų patvirtinimai, prisijungimo kodai, pakeitimai, priminimai, sąskaitos ir dovanų kuponai siunčiami el. paštu arba SMS. Tai su paslauga susiję pranešimai, jiems reklamos sutikimo nereikia. Jautrių medicinos dokumentų į bendrą kontaktinę formą ar paprastu el. laišku nesiųskite; dėl pateikimo būdo susitarkite su specialistu.",
          },
        ],
      },
      {
        h: "Kas gali gauti duomenis",
        blocks: [
          {
            p: "Klinikos darbuotojai ir pasitelkti specialistai gauna tik jų darbo funkcijoms būtiną informaciją, laikydamiesi konfidencialumo. Techninių paslaugų teikėjams perduodame tik jų paslaugoms reikalingus duomenis ir nustatome atitinkamas sutartines pareigas. Duomenų neparduodame.",
          },
          {
            p: "Google Cloud infrastruktūra naudojama svetainei ir klinikos sistemai, įskaitant registracijos duomenų bazę bei naujus elektroninius klinikos dokumentus. Ankstesnių dokumentų archyvui naudojama ir Google Workspace. Vizitų organizavimui Google Calendar gali būti pateikiami kontaktai, paslauga, laikas ir būtina apmokėjimo informacija; viešai rodomi laisvi laikai neatskleidžia kitų pacientų vardų.",
          },
          {
            p: "Laiškams pristatyti naudojama Resend paslauga ir Klinikos el. pašto infrastruktūra; teikėjas gauna gavėjo adresą, pranešimo turinį ir pristatymo techninius duomenis. Jei medicinos įrašams rengti naudojamas kalbos atpažinimas, jo teikėjas tvarko tik įrašui parengti būtiną garso ir teksto informaciją pagal duomenų tvarkymo sutartį. Mokėjimo teikėjas ir bankai gauna atsiskaitymui reikalingą informaciją, buhalterinės apskaitos ir IT priežiūros teikėjai – tik jų užduočiai būtiną apimtį. Jums sutikus su slapukais, svetainės statistikos ir reklamos matavimo duomenis gauna Google Ireland Limited. Skambučius aptarnauja telefono ryšio operatorius ir Klinikos pasitelkti paslaugų teikėjai.",
          },
          {
            p: "Registruojantis per ManoDaktaras, vizito ir kontaktinius duomenis tvarko ir šios paslaugos teikėjas pagal savo privatumo informaciją; per ją gali būti siunčiami SMS priminimai.",
          },
          {
            p: "E. sveikatai, priežiūros institucijoms, teismams ir kitiems teisę turintiems gavėjams duomenys teikiami tik įstatymų nustatyta ar teisėtam prašymui būtina apimtimi. Įprastai Klinika tiesiogiai nesiunčia paciento dokumentų draudikui: išrašytą sąskaitą draudikui pateikia pats pacientas. Kitu atveju atskirai patikriname teisinį pagrindą ir prašymo apimtį. Jei už paslaugas moka trečiasis asmuo (pvz., darbdavys ar sporto klubas), jam pateikiama tik sąskaitai būtina informacija – paciento vardas, pavardė, paslaugos ir jų datos; sveikatos informacija jam neteikiama.",
          },
        ],
      },
      {
        h: "Tarptautinis duomenų tvarkymas",
        blocks: [
          {
            p: "Pagrindinė klinikos sistemos duomenų bazė laikoma Google Cloud Europos regione. Dalis infrastruktūros, el. pašto, statistikos, telefonijos, vaizdo stebėjimo programėlės ar mokėjimų teikėjų gali tvarkyti duomenis ir už Europos ekonominės erdvės ribų, įskaitant JAV.",
          },
          {
            p: "Toks perdavimas galimas tik taikant BDAR V skyriaus pagrindą: Europos Komisijos sprendimą dėl tinkamumo (Google LLC dalyvauja ES ir JAV duomenų privatumo sistemoje) arba tinkamas garantijas, pavyzdžiui, standartines sutarčių sąlygas. Informacijos apie konkrečiam teikėjui taikomą pagrindą ir garantijų kopijos galite prašyti info@reamed.lt.",
          },
        ],
      },
      {
        h: "Duomenų saugojimo terminai",
        blocks: [
          { p: "Saugojimo trukmę lemia duomenų paskirtis, dokumento rūšis ir teisinė prievolė." },
          {
            table: {
              head: ["Duomenys ar dokumentai", "Terminas arba nustatymo kriterijus"],
              rows: [
                [
                  "Ambulatorinė asmens sveikatos istorija 025/a",
                  "15 metų pacientui nustojus lankytis, jei nėra specialaus ilgesnio teisės aktuose nustatyto pagrindo",
                ],
                [
                  "Kiti medicinos dokumentai",
                  "Konkrečiai dokumento formai teisės aktuose nustatytas terminas; įrašui, kuris yra sveikatos istorijos dalis, taikomas jos terminas",
                ],
                ["Apskaitos dokumentai", "10 metų"],
                [
                  "Paketų, dovanų kuponų ir nepanaudotų likučių įrašai",
                  "Kol paketas, kuponas ar likutis galioja arba yra nepanaudotas, o vėliau – tiek, kiek būtina apskaitai ir galimiems reikalavimams pagrįsti",
                ],
                [
                  "Registracijos ir bendravimo duomenys",
                  "Iki užsakymo ar užklausos užbaigimo ir susijusių įsipareigojimų įvykdymo; vėliau paliekama tik medicinos dokumentams, apskaitai ar konkrečiam teisėtam reikalavimui būtina dalis",
                ],
                [
                  "Prisijungimo ir saugumo įrašai",
                  "Tik tiek, kiek būtina prieigai apsaugoti, piktnaudžiavimui nustatyti ir incidentui ištirti; būtinybė tikrinama pagal atskirą saugojimo tvarką",
                ],
                [
                  "Registratūros vaizdo įrašai",
                  "Ne ilgiau kaip 72 valandas, išskyrus konkrečiam incidentui atskirtą būtiną įrašo dalį",
                ],
                ["Skambučių įrašai, jei jie daromi", "Ne ilgiau kaip 30 dienų"],
                ["Svetainės statistika (Google Analytics)", "14 mėnesių"],
              ],
            },
          },
          {
            p: "Pasibaigus terminui duomenys ištrinami, saugiai sunaikinami arba negrįžtamai nuasmeninami; tas pats taikoma kopijoms ir atsarginėms kopijoms. Konkrečiam ginčui reikalingi įrodymai gali būti saugomi iki jo pabaigos. Privalomi medicinos įrašai neištrinami vien atšaukus sutikimą gydytis ar uždarius internetinę paskyrą.",
          },
        ],
      },
      {
        h: "Vaizdo stebėjimas ir įrašai",
        blocks: [
          {
            p: "Asmenų ir turto saugumui bei incidentams ištirti stebima tik registratūros zona, be garso. Gydymo, persirengimo ir sanitarinės patalpos nestebimos. Teisinis pagrindas – BDAR 6 straipsnio 1 dalies f punktas, teisėtas interesas užtikrinti asmenų ir turto saugumą. Apie stebėjimą informuojama prieš patenkant į stebimą zoną.",
          },
          {
            p: "Įrašai saugomi vietinėje laikmenoje ne ilgiau kaip 72 valandas ir perrašomi. Juos gali peržiūrėti tik įgalioti Klinikos asmenys, taip pat per kameros gamintojo (Xiaomi) nuotolinės prieigos programėlę; jos teikėjas gali tvarkyti ryšio ir paskyros duomenis. Konkrečiam incidentui reikalinga ištrauka gali būti saugoma tyrimo laikotarpiu ir pateikta teisę ją gauti turinčiai institucijai.",
          },
          { p: "Vaizdo įrašai nenaudojami reklamai, paciento gydymui viešinti ar darbuotojų darbo našumui vertinti." },
        ],
      },
      {
        h: "Skambučiai ir dirbtinio intelekto asistentas",
        blocks: [
          {
            p: "Į skambučius gali atsakyti dirbtinio intelekto asistentas; apie tai pranešama pokalbio pradžioje. Bet kada galite paprašyti sujungti su administracija arba parašyti info@reamed.lt.",
          },
          {
            p: "Jei pokalbis įrašomas, apie tai pranešama pokalbio pradžioje, o įrašas saugomas ne ilgiau kaip 30 dienų.",
          },
        ],
      },
      {
        h: "Reklama ir paciento atvaizdas",
        blocks: [
          {
            p: "Klinika nesiunčia reklaminių naujienlaiškių ar kitų reklaminių pranešimų: el. paštu ir SMS siunčiama tik su jūsų registracija, paketu, dovanų kuponu ir paslauga susijusi informacija. Svetainėje reklamos veiksmingumą matuojame tik gavę jūsų sutikimą; vardų, kontaktų ir sveikatos duomenų reklamos platformoms neperduodame.",
          },
          {
            p: "Paciento fotografavimas ar filmavimas viešinimui, atsiliepimo skelbimas ir su paslauga susijusios informacijos naudojimas reklamai nėra šios politikos ar pirkimo sąlygų dalis. Jei toks naudojimas siūlomas, prieš jį pateikiamas atskiras konkretus sutikimas, apibrėžiantis medžiagą, tikslą, kanalus, trukmę ir atšaukimo tvarką.",
          },
        ],
      },
      {
        h: "Jūsų teisės",
        blocks: [
          {
            p: "Galite prašyti susipažinti su savo duomenimis ir gauti kopiją, ištaisyti netikslius duomenis, o teisės aktuose nustatytais atvejais – ištrinti, apriboti tvarkymą ar perkelti duomenis. Dėl su jūsų konkrečia situacija susijusių priežasčių galite nesutikti su teisėtu interesu grindžiamu tvarkymu. Sutikimu grindžiamą tvarkymą galite atšaukti bet kada; atšaukimas nekeičia iki tol atlikto teisėto tvarkymo.",
          },
          {
            p: "Prašymą pateikite info@reamed.lt arba Klinikoje. Tapatybę ir atstovavimo teisę tikriname proporcingai prašymui; be reikalo neprašome visos tapatybės dokumento kopijos. Atsakome per vieną mėnesį nuo prašymo gavimo. Jei dėl sudėtingumo ar prašymų skaičiaus būtina, terminą galime pratęsti dar iki dviejų mėnesių, apie tai ir priežastis pranešę per pirmą mėnesį. Pagrindžiame atsisakymą ir paaiškiname apskundimo galimybę. Susipažinimui su medicinos dokumentais ir jų kopijų pateikimui taip pat taikoma Pacientų teisių ir žalos sveikatai atlyginimo įstatymo speciali tvarka; trumpesni taikomi terminai dėl šio bendro BDAR termino nepailginami.",
          },
          {
            p: "Teisės į duomenų ištrynimą ar perkėlimą nėra besąlyginės: medicinos, apskaitos ir teisiniams reikalavimams gali būti taikomos įstatymų numatytos išimtys. Skundą dėl asmens duomenų tvarkymo galite pateikti Valstybinei duomenų apsaugos inspekcijai, [vdai.lrv.lt](https://vdai.lrv.lt), taip pat kreiptis į teismą.",
          },
        ],
      },
      {
        h: "Duomenų būtinybė ir pasirinkimai",
        blocks: [
          {
            p: "Registracijai internetu būtini joje nurodyti kontaktai, kad galėtume sudaryti užsakymą, patvirtinti apmokėjimą ir susisiekti dėl vizito. Jų nepateikus galima kreiptis į administraciją dėl kito registracijos būdo. Sveikatos priežiūrai būtini tapatybės, atstovavimo ir saugai reikalingi sveikatos duomenys; be jų konkrečios paslaugos gali būti neįmanoma teisėtai ir saugiai suteikti.",
          },
          {
            p: "Ši savarankiška internetinės registracijos forma skirta pilnamečiams, registruojantiems save. Dėl nepilnamečio ar registracijos kito asmens vardu kreipkitės į administraciją. Paciento teisė gauti sveikatos priežiūrą ir jo teisėtas atstovavimas vertinami pagal pacientų teisių reikalavimus, o ne vien pagal tai, kas apmokėjo vizitą ar įsigijo dovanų kuponą.",
          },
          {
            p: "Diagnozės ir gydymo sprendimai nepriimami vien automatizuotai. Svetainėje ir Klinikos sistemoje automatiškai tikrinami laisvi laikai, paketo ir dovanų kupono galiojimas bei likutis, užsakymo ir mokėjimo būsena bei prisijungimo saugumas. Jei techninis sprendimas atrodo neteisingas, kreipkitės į administraciją; tokia klaida nesprendžia, ar mediciniškai jums reikalinga paslauga.",
          },
        ],
      },
      {
        h: "Svetainės technologijos ir pakeitimai",
        id: "slapukai",
        blocks: [
          {
            p: "Naršyklėje saugoma pasirinkta svetainės kalba, jūsų sprendimas dėl slapukų, o prisijungus – sesijos slapukas. Statistikos ir reklamos matavimo slapukai naudojami tik gavus jūsų sutikimą. Išsamus sąrašas pateiktas [ReaMed slapukų politikoje](/slapukai).",
          },
          {
            p: "Aktuali privatumo informacija skelbiama reamed.lt/privatumas. Esminius tvarkymo pakeitimus paaiškiname prieš juos taikydami. Ankstesnių redakcijų archyvą ir informaciją apie konkrečiam dokumentui taikytą redakciją galima gauti info@reamed.lt. Nauja politika nekeičia anksčiau pasirašytų dokumentų ar pirkimo sąlygų atgaline data.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    edition: "MB Kineziterapija · Version of 22 November 2026",
    sections: [
      {
        h: "Who this policy is for",
        blocks: [
          {
            p: "This policy explains how MB Kineziterapija, trading as ReaMed, processes the personal data of patients, their representatives, buyers of services and gift vouchers, and website visitors. It covers contacting the Clinic, booking, buying services and gift vouchers online, visit packages bought at the Clinic, patient documents, payment administration and video surveillance of the reception area.",
          },
          {
            p: "The policy is information about data processing. Reading it is not blanket consent to all processing purposes. The [rules for buying services](/rezervacija/salygos), the [gift voucher rules](/dovanu-kuponas/salygos) and the patient's informed consent to healthcare are provided separately. This version covers ReaMed and its online booking; it does not set the terms of FitKid booking or of services of other legal entities.",
          },
        ],
      },
      {
        h: "Who is responsible for the data",
        blocks: [
          {
            p: "The controller is MB Kineziterapija, company code 305136936, registered office and ReaMed place of service Olimpiečių g. 1A-7, LT-09235 Vilnius, Lithuania. Website reamed.lt. For data protection questions contact the Clinic administration at info@reamed.lt, by phone on +370 601 34304 or at that address.",
          },
        ],
      },
      {
        h: "What data we receive",
        blocks: [
          {
            p: "When you book online we ask for your first name, last name, phone number and e-mail and, for the invoice, optionally an address or a company's name, code, VAT code and address. We also receive the chosen service, specialist and time, whether it is a first or a returning visit, and the order and payment status. When a visit package is bought at the Clinic, its balance and validity are recorded. The booking form is not meant for diagnoses, test results or a detailed medical history.",
          },
          {
            p: "When you buy a gift voucher we ask for the buyer's first name, last name and e-mail; at the buyer's choice the recipient's name and a wish are added, and the recipient's e-mail is used only to send the voucher. The voucher code, amount, balance, expiry date and redemption records are processed to honour the voucher and for accounting.",
          },
          {
            p: "When providing healthcare we process the patient's identity and contact details, date of birth, personal code (for a foreigner, an identity document number), representation details, medical history, assessments, and records of procedures performed, recommendations and the patient's choices. Electronic documents may contain an image of the signature, the document version, the time of signing, the specialist and technical data confirming the document's integrity. We do not use the signature image for automated biometric recognition.",
          },
          {
            p: "We receive data from the person or a legal representative, and the specialist providing the services creates it. Where there is a legal basis and it is necessary for care, we may receive information from e. sveikata, other healthcare providers or the booking service provider. Payment data is supplied by the payment service provider. If another person provides information, they must be entitled to do so; a payer or a gift voucher buyer does not by that fact become entitled to another patient's medical documents or information about their visits.",
          },
          {
            p: "For the website and signing in we process the IP address, time of access, request and security event data and, when you sign in by e-mail, technical data of the code and session. If you accept cookies, website statistics and ad performance data are collected. When you call the Clinic, the phone number and the content of the call are processed. Video surveillance and calls are described in separate sections.",
          },
        ],
      },
      {
        h: "Purposes and legal bases",
        blocks: [
          {
            p: "GDPR means the General Data Protection Regulation. If the choice of service, booking information or other data reveals a health condition, a legal basis for special categories of data applies together with the general basis. Processing of medical records is not based on forced blanket consent.",
          },
          {
            table: {
              head: ["Purpose", "Data", "Legal basis"],
              rows: [
                [
                  "Booking and performing the contract",
                  "Contact details, service or package, specialist, time, order and payment status, package and unused balances",
                  "GDPR Article 6(1)(b); for health data, Article 9(2)(h) and professional confidentiality",
                ],
                [
                  "Issuing and honouring gift vouchers",
                  "Buyer's first name, last name and e-mail; optionally the recipient's name, wish and e-mail; voucher code, amount, balance, redemption records",
                  "Contract with the buyer – Article 6(1)(b); accounting – Article 6(1)(c)",
                ],
                [
                  "Healthcare and mandatory records",
                  "Identity, representation, health, procedure and informed choice data",
                  "Performing the contract – Article 6(1)(b); legal obligations – Article 6(1)(c); health data – Article 9(2)(h)",
                ],
                [
                  "Payments and accounting",
                  "Order number, amount, payment and invoice data",
                  "Contract – Article 6(1)(b); financial accounting and document retention obligations – Article 6(1)(c)",
                ],
                [
                  "Replies and service messages",
                  "Contact details, the content of the enquiry, confirmations, changes, visit reminders",
                  "Article 6(1)(b) when the enquiry concerns the contract; other enquiries – Article 6(1)(f), the legitimate interest in replying",
                ],
                [
                  "Security and abuse prevention",
                  "Necessary technical, sign-in and activity logs",
                  "Article 6(1)(f) – the legitimate interest in protecting people, information and systems",
                ],
                [
                  "Website statistics and ad performance measurement",
                  "Address of the page opened, device and browser data, IP address, actions on the website; for a paid order only its number and amount",
                  "Article 6(1)(a) – your consent, which you can withdraw at any time",
                ],
                [
                  "Handling calls",
                  "Phone number, content of the call, call recording if one is made",
                  "Article 6(1)(b) when calling about a booking; Article 6(1)(f) – the legitimate interest in ensuring service and resolving disputes; health data – Article 9(2)(h)",
                ],
                [
                  "Complaints and legal claims",
                  "Circumstances of the request and dispute, necessary evidence",
                  "Legal obligations – Article 6(1)(c); defending rights – Article 6(1)(f); where necessary, Article 9(2)(f) or (h)",
                ],
              ],
            },
          },
        ],
      },
      {
        h: "Online booking and payment",
        blocks: [
          {
            p: "You can book as a guest or after signing in with a code sent to your e-mail. Signing in or the order management link confirms access to the e-mail and to specific orders; it does not replace the check of the patient's identity and representation at the Clinic. Keep codes, management links and gift voucher codes safe and do not share them.",
          },
          {
            p: "For payment you are redirected to Paysera. We pass on the order identifier, amount, currency and technical return data needed to match the payment, as well as the first name, last name and e-mail address given in the booking, so that you do not have to enter them again in the payment window. We do not include diagnoses or a detailed medical history in the payment description. Card or online banking details are entered in the payment provider's environment; the Clinic does not ask for them and does not store them in its booking form.",
          },
          {
            p: "Paysera LT, UAB acts as an independent controller for its payment, legal compliance and fraud prevention purposes. Its processing is explained in [Paysera's privacy policy](https://www.paysera.com/v2/lt/sutartys/privatumo-politika). The Clinic remains responsible for processing its own booking and service data.",
          },
          {
            p: "Visit confirmations, sign-in codes, changes, reminders, invoices and gift vouchers are sent by e-mail or SMS. These are service messages and need no marketing consent. Do not send sensitive medical documents through the general contact form or by plain e-mail; agree the method with the specialist.",
          },
        ],
      },
      {
        h: "Who may receive data",
        blocks: [
          {
            p: "Clinic staff and engaged specialists receive only the information their work requires, under confidentiality. We pass technical service providers only the data their services need and set corresponding contractual obligations. We do not sell data.",
          },
          {
            p: "Google Cloud infrastructure is used for the website and the clinic system, including the booking database and new electronic clinic documents. Google Workspace is also used for the archive of earlier documents. To organise visits, Google Calendar may receive contact details, the service, the time and necessary payment information; publicly shown free times do not reveal other patients' names.",
          },
          {
            p: "E-mails are delivered by the Resend service and the Clinic's e-mail infrastructure; the provider receives the recipient's address, the message content and technical delivery data. If speech recognition is used to prepare medical records, its provider processes only the audio and text needed to prepare the record, under a data processing agreement. The payment provider and banks receive the information needed for settlement; accounting and IT support providers receive only what their task requires. If you accept cookies, website statistics and ad measurement data are received by Google Ireland Limited. Calls are handled by the telephone operator and service providers engaged by the Clinic.",
          },
          {
            p: "When you book through ManoDaktaras, the visit and contact data are also processed by that service's provider under its own privacy information; it may send SMS reminders.",
          },
          {
            p: "Data are provided to e. sveikata, supervisory authorities, courts and other entitled recipients only as required by law or to the extent needed for a lawful request. The Clinic does not usually send patient documents directly to an insurer: the patient submits the issued invoice to the insurer. Otherwise we check the legal basis and the scope of the request separately. If a third party pays for the services (for example, an employer or a sports club), it receives only the information the invoice needs – the patient's name, the services and their dates; no health information is given to it.",
          },
        ],
      },
      {
        h: "International processing",
        blocks: [
          {
            p: "The main database of the clinic system is kept in a Google Cloud European region. Some infrastructure, e-mail, statistics, telephony, video surveillance app or payment providers may also process data outside the European Economic Area, including in the United States.",
          },
          {
            p: "Such transfers are possible only on a basis under Chapter V of the GDPR: a European Commission adequacy decision (Google LLC participates in the EU-US Data Privacy Framework) or appropriate safeguards such as standard contractual clauses. You can ask info@reamed.lt for information about the basis applying to a specific provider and for copies of the safeguards.",
          },
        ],
      },
      {
        h: "Retention periods",
        blocks: [
          { p: "How long data are kept depends on their purpose, the type of document and the legal obligation." },
          {
            table: {
              head: ["Data or documents", "Period or criterion"],
              rows: [
                [
                  "Outpatient medical history 025/a",
                  "15 years after the patient stops attending, unless legislation sets a longer specific period",
                ],
                [
                  "Other medical documents",
                  "The period set in legislation for the specific form; a record forming part of the medical history follows its period",
                ],
                ["Accounting documents", "10 years"],
                [
                  "Records of packages, gift vouchers and unused balances",
                  "While the package, voucher or balance is valid or unused, and afterwards as long as needed for accounting and to substantiate possible claims",
                ],
                [
                  "Booking and communication data",
                  "Until the order or enquiry is completed and related obligations are fulfilled; afterwards only the part needed for medical records, accounting or a specific legal claim is kept",
                ],
                [
                  "Sign-in and security logs",
                  "Only as long as needed to protect access, detect abuse and investigate an incident; necessity is reviewed under a separate retention procedure",
                ],
                [
                  "Reception video recordings",
                  "No longer than 72 hours, except the necessary part separated for a specific incident",
                ],
                ["Call recordings, if made", "No longer than 30 days"],
                ["Website statistics (Google Analytics)", "14 months"],
              ],
            },
          },
          {
            p: "When the period ends, data are deleted, securely destroyed or irreversibly anonymised; the same applies to copies and backups. Evidence needed for a specific dispute may be kept until it ends. Mandatory medical records are not deleted merely because consent to treatment is withdrawn or an online account is closed.",
          },
        ],
      },
      {
        h: "Video surveillance and recordings",
        blocks: [
          {
            p: "For the safety of people and property and to investigate incidents, only the reception area is monitored, without sound. Treatment rooms, changing rooms and sanitary facilities are not monitored. The legal basis is GDPR Article 6(1)(f), the legitimate interest in ensuring the safety of people and property. You are informed about the surveillance before entering the monitored area.",
          },
          {
            p: "Recordings are kept on local storage for no longer than 72 hours and are overwritten. They can be viewed only by authorised Clinic persons, including through the camera manufacturer's (Xiaomi) remote access app; its provider may process connection and account data. An excerpt needed for a specific incident may be kept for the duration of the investigation and provided to an authority entitled to receive it.",
          },
          {
            p: "Video recordings are not used for advertising, to publicise a patient's treatment or to assess staff performance.",
          },
        ],
      },
      {
        h: "Calls and the artificial intelligence assistant",
        blocks: [
          {
            p: "Calls may be answered by an artificial intelligence assistant; you are told so at the start of the call. You can ask at any time to be put through to the administration or write to info@reamed.lt.",
          },
          {
            p: "If a call is recorded, you are told so at the start of the call, and the recording is kept for no longer than 30 days.",
          },
        ],
      },
      {
        h: "Advertising and the patient's image",
        blocks: [
          {
            p: "The Clinic does not send marketing newsletters or other marketing messages: only information related to your booking, package, gift voucher and service is sent by e-mail and SMS. On the website we measure ad performance only with your consent; we do not pass names, contact details or health data to advertising platforms.",
          },
          {
            p: "Photographing or filming a patient for publicity, publishing a review and using service-related information for advertising are not part of this policy or of the purchase terms. If such use is proposed, a separate specific consent is requested first, defining the material, purpose, channels, duration and how to withdraw it.",
          },
        ],
      },
      {
        h: "Your rights",
        blocks: [
          {
            p: "You may ask to access your data and receive a copy, to correct inaccurate data and, where the law provides, to erase data, restrict processing or port data. For reasons relating to your particular situation, you may object to processing based on legitimate interest. You may withdraw consent-based processing at any time; withdrawal does not affect lawful processing before it.",
          },
          {
            p: "Submit a request to info@reamed.lt or at the Clinic. We check identity and the right to represent in proportion to the request; we do not ask for a copy of a whole identity document without need. We reply within one month of receiving the request. If necessary because of complexity or the number of requests, we may extend the period by up to two further months, informing you of this and the reasons within the first month. We justify any refusal and explain how to appeal. Access to medical documents and copies of them are also governed by the special procedure of the Law on the Rights of Patients and Compensation for Damage to Health; shorter applicable periods are not extended by this general GDPR period.",
          },
          {
            p: "The rights to erasure and portability are not unconditional: exceptions provided by law may apply to medical, accounting and legal claims. You can lodge a complaint about personal data processing with the State Data Protection Inspectorate, [vdai.lrv.lt](https://vdai.lrv.lt), and you can also go to court.",
          },
        ],
      },
      {
        h: "Required data and your choices",
        blocks: [
          {
            p: "Online booking requires the contact details it asks for, so that we can create the order, confirm payment and contact you about the visit. If you do not provide them, you can ask the administration for another way to book. Healthcare requires identity, representation and safety-relevant health data; without them a particular service may not be possible lawfully and safely.",
          },
          {
            p: "This self-service online booking form is for adults booking for themselves. For a minor or booking on behalf of another person, contact the administration. A patient's right to receive healthcare and their lawful representation are assessed under patients' rights requirements, not merely by who paid for the visit or bought the gift voucher.",
          },
          {
            p: "Diagnoses and treatment decisions are not made solely automatically. The website and the clinic system automatically check free times, package and gift voucher validity and balance, order and payment status, and sign-in security. If a technical decision seems wrong, contact the administration; such an error does not decide whether a service is medically needed for you.",
          },
        ],
      },
      {
        h: "Website technologies and changes",
        id: "slapukai",
        blocks: [
          {
            p: "Your browser stores the chosen website language, your cookie decision and, after you sign in, a session cookie. Statistics and ad measurement cookies are used only with your consent. The full list is in the [ReaMed cookie policy](/slapukai).",
          },
          {
            p: "The current privacy information is published at reamed.lt/privatumas. We explain material processing changes before applying them. An archive of earlier versions and information on the version applied to a specific document are available from info@reamed.lt. A new policy does not retroactively change previously signed documents or purchase terms.",
          },
        ],
      },
    ],
  },
};
