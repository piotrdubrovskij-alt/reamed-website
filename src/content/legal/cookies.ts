import type { LegalDoc } from "@/components/legal/LegalDocument";

// ReaMed slapukų politika, redakcija 2026-11-22: Piotr's text of 2026-11-21 without Meta Pixel (Piotr 2026-11-22:
// «Метапиксель давай пока что убираем отовсюду»). The names below must match src/lib/analytics.ts,
// src/contexts/LanguageContext.tsx and the reamed_patient cookie of the booking proxy.
export const cookiePolicy: Record<"lt" | "en", LegalDoc> = {
  lt: {
    title: "Slapukų politika",
    edition: "MB „Kineziterapija“ · Redakcija 2026-11-22",
    sections: [
      {
        h: "Ką saugome jūsų įrenginyje",
        blocks: [
          {
            p: "Slapukai – naršyklėje saugomi nedideli duomenų įrašai. Panašiai veikia ir vietinė naršyklės saugykla (localStorage), todėl čia aprašome abi technologijas. Informaciją pateikia MB „Kineziterapija“, juridinio asmens kodas 305136936, Olimpiečių g. 1A-7, Vilnius; info@reamed.lt, +370 601 34304. Ji taikoma svetainei reamed.lt.",
          },
        ],
      },
      {
        h: "Būtinosios technologijos",
        blocks: [
          { p: "Jos reikalingos svetainei veikti ir jūsų paprašytoms funkcijoms, todėl sutikimo joms neprašome." },
          {
            table: {
              head: ["Pavadinimas", "Paskirtis", "Trukmė"],
              rows: [
                [
                  "reamed-lang (localStorage)",
                  "Pasirinkta svetainės kalba",
                  "Iki pasirinkimo pakeitimo ar naršyklės duomenų išvalymo",
                ],
                ["reamed-consent (localStorage)", "Jūsų sprendimas dėl slapukų ir jo data", "12 mėnesių; vėliau klausiame iš naujo"],
                [
                  "reamed_patient (slapukas)",
                  "Prisijungimo prie „Mano vizitai“ sesija; nustatomas tik prisijungus el. paštu gautu kodu",
                  "Iki 90 dienų arba iki atsijungimo",
                ],
              ],
            },
          },
        ],
      },
      {
        h: "Statistika ir reklamos veiksmingumo matavimas",
        blocks: [
          {
            p: "Šios technologijos įjungiamos tik jums paspaudus „Sutinku“. Iki tol iš Google niekas neįkeliama ir joks jos slapukas neįrašomas.",
          },
          {
            table: {
              head: ["Pavadinimas ir teikėjas", "Paskirtis", "Trukmė"],
              rows: [
                ["_ga, _ga_* – Google Analytics 4, Google Ireland Limited", "Svetainės lankomumo statistika", "Iki 2 metų"],
                [
                  "_gcl_* – Google Ads, Google Ireland Limited",
                  "Parodo, kurie skelbimai atvedė skambučių, užklausų ir registracijų",
                  "Iki 90 dienų",
                ],
                [
                  "reamed-tracked-* (localStorage) – reamed.lt",
                  "Pažymi, kad apie apmokėtą užsakymą jau pranešta, kad jis nebūtų suskaičiuotas du kartus",
                  "Iki naršyklės duomenų išvalymo",
                ],
              ],
            },
          },
          {
            p: "Taip matome, kiek lankytojų ateina, iš kur, kuriuos puslapius atidaro ir kiek jų paskambina, užduoda klausimą ar užsiregistruoja. Teikėjas gauna atidaryto puslapio adresą (taip pat puslapių apie sveikatos sutrikimus), įrenginio ir naršyklės duomenis bei IP adresą, pagal kurį nustatoma apytikslė vietovė. Vardo, kontaktų, formų turinio ir sveikatos duomenų neperduodame; apie apmokėtą registraciją ar dovanų kuponą perduodamas tik užsakymo numeris ir suma. Reklamos personalizavimas, pakartotinė rinkodara ir Google signalai išjungti. Google Analytics statistika saugoma 14 mėnesių.",
          },
          {
            p: "Teisinis pagrindas – jūsų sutikimas (BDAR 6 straipsnio 1 dalies a punktas); sutikimo saugoti informaciją jūsų įrenginyje reikalauja ir Elektroninių ryšių įstatymas. Google gali tvarkyti duomenis ir JAV; Google LLC dalyvauja ES ir JAV duomenų privatumo sistemoje, kitiems perdavimams taikomos BDAR V skyriaus garantijos.",
          },
        ],
      },
      {
        h: "Kaip pakeisti pasirinkimą",
        blocks: [
          {
            p: "Sutikimą galite bet kada duoti arba atšaukti mygtuku „Slapukų nustatymai“ svetainės apačioje arba čia. Atšaukus sutikimą statistikos ir reklamos slapukai ištrinami ir nebenaudojami; atsisakymas neriboja naudojimosi svetaine. Svetainės kalbą keičiate kalbos valdikliu, o atsijungus nuo „Mano vizitai“ sesijos slapukas pašalinamas. Slapukus ir vietinę saugyklą taip pat galite ištrinti ar blokuoti naršyklės nustatymuose; užblokavus sesijos slapuką prisijungimas neveiks.",
          },
          { cookieButton: "Slapukų nustatymai" },
        ],
      },
      {
        h: "Išorinės paslaugos",
        blocks: [
          {
            p: "Mokėdami pereinate į Paysera aplinką, o paspaudę nuorodą į Google Maps ar socialinius tinklus – į tų teikėjų svetaines. Ten taikomi jų pačių slapukai ir privatumo informacija.",
          },
          {
            p: "Klausimus ir prašymus dėl duomenų pateikite info@reamed.lt. Apie savo teises ir skundą Valstybinei duomenų apsaugos inspekcijai skaitykite [ReaMed privatumo politikoje](/privatumas).",
          },
        ],
      },
    ],
  },
  en: {
    title: "Cookie policy",
    edition: "MB Kineziterapija · Version of 22 November 2026",
    sections: [
      {
        h: "What we store on your device",
        blocks: [
          {
            p: "Cookies are small data records stored by your browser. The browser's local storage (localStorage) works in a similar way, so this policy describes both. The information is provided by MB Kineziterapija, company code 305136936, Olimpiečių g. 1A-7, Vilnius; info@reamed.lt, +370 601 34304. It applies to the website reamed.lt.",
          },
        ],
      },
      {
        h: "Strictly necessary technologies",
        blocks: [
          { p: "They are needed for the website to work and for functions you ask for, so we do not ask for consent to them." },
          {
            table: {
              head: ["Name", "Purpose", "Duration"],
              rows: [
                ["reamed-lang (localStorage)", "The chosen website language", "Until you change the choice or clear browser data"],
                ["reamed-consent (localStorage)", "Your cookie decision and its date", "12 months; then we ask again"],
                [
                  "reamed_patient (cookie)",
                  "The “Mano vizitai” sign-in session; set only when you sign in with a code sent by e-mail",
                  "Up to 90 days or until you sign out",
                ],
              ],
            },
          },
        ],
      },
      {
        h: "Statistics and ad performance measurement",
        blocks: [
          {
            p: "These technologies are switched on only when you press “Accept”. Until then nothing is loaded from Google and none of its cookies is written.",
          },
          {
            table: {
              head: ["Name and provider", "Purpose", "Duration"],
              rows: [
                ["_ga, _ga_* – Google Analytics 4, Google Ireland Limited", "Website visit statistics", "Up to 2 years"],
                [
                  "_gcl_* – Google Ads, Google Ireland Limited",
                  "Shows which ads brought calls, enquiries and bookings",
                  "Up to 90 days",
                ],
                [
                  "reamed-tracked-* (localStorage) – reamed.lt",
                  "Marks that a paid order has already been reported, so that it is not counted twice",
                  "Until browser data are cleared",
                ],
              ],
            },
          },
          {
            p: "This shows us how many visitors come, from where, which pages they open and how many of them call, ask a question or book. The provider receives the address of the page opened (including pages about health conditions), device and browser data and the IP address, from which an approximate location is determined. We do not pass on names, contact details, form contents or health data; for a paid booking or gift voucher only the order number and amount are passed on. Ad personalisation, remarketing and Google signals are switched off. Google Analytics statistics are kept for 14 months.",
          },
          {
            p: "The legal basis is your consent (GDPR Article 6(1)(a)); Lithuania's Law on Electronic Communications also requires consent to store information on your device. Google may also process data in the United States; Google LLC participates in the EU-US Data Privacy Framework, and other transfers are covered by the safeguards of Chapter V of the GDPR.",
          },
        ],
      },
      {
        h: "How to change your choice",
        blocks: [
          {
            p: "You can give or withdraw consent at any time with the “Cookie settings” button at the bottom of the website or here. When consent is withdrawn, statistics and advertising cookies are deleted and no longer used; declining does not limit your use of the website. You change the website language with the language switch, and signing out of “Mano vizitai” removes the session cookie. You can also delete or block cookies and local storage in your browser settings; if the session cookie is blocked, signing in will not work.",
          },
          { cookieButton: "Cookie settings" },
        ],
      },
      {
        h: "External services",
        blocks: [
          {
            p: "When paying you move to Paysera, and by following a link to Google Maps or social networks you go to those providers' websites. Their own cookies and privacy information apply there.",
          },
          {
            p: "Send questions and data requests to info@reamed.lt. Your rights and how to complain to the State Data Protection Inspectorate are described in the [ReaMed privacy policy](/privatumas).",
          },
        ],
      },
    ],
  },
};
