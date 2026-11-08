# reamed.lt — сайт клиники ReaMed

Клиника кинезитерапии и реабилитации в Вильнюсе (UAB Modernios manualinės terapijos klinika).
Сайт на литовском (основной) и английском. Владелец — Piotr Dubrovskij, общается по-русски.
Задачи и приоритеты — в `docs/plan.md`.

## Главное правило: `main` = боевой сайт

Каждый push в `main` через ~4 минуты оказывается на reamed.lt
(Cloud Build trigger `cloudrun-reamed-site-europe-west1-…` → Cloud Run `reamed-site`, europe-west1, проект `reamed-site`).

- Трафик Cloud Run должен идти на последнюю ревизию («Send all traffic to the latest revision»).
  7.11.2026 он оказался закреплён за одной ревизией, и влитые PR не выходили на сайт, хотя сборка проходила.
  Превью через `--no-traffic --tag` после проверки возвращать командой
  `gcloud run services update-traffic reamed-site --to-latest --region europe-west1`.
- Никогда не коммитить и не пушить прямо в `main`.
- Каждая задача — отдельная ветка и PR. Вливает Piotr (или по его явной просьбе).
- Перед PR: `npx tsc --noEmit`, `npm run lint`, `npm run build` и проверка страницы в браузере на 375 px и 1280 px.
- После вливания в `docs/plan.md` отметить пункт `[x]` с номером PR.

## Правило: контент делаем по плану от 07.11.2026

Решение Piotr (07.11.2026): весь контент и структура сайта — строго по плану из Claude Doc
[«reamed.lt: план захвата поиска по кинезитерапии»](https://claude.ai/artifact/Jmpt7pwX639tzaqCFvR4fC)
с его уточнениями ниже. Не делать отрывками и не придумывать свою структуру: каждая новая страница
встаёт на своё место в дереве плана. Хочется отойти от плана — сначала спросить Piotr.

**«Ką gydome» = 11 разделов по зонам тела, внутри — страницы болезней и операций.**
- Страница болезни принадлежит одному разделу и показывается внутри него: на `/ka-gydome` под своим разделом,
  на странице раздела, в «хлебных крошках» «Ką gydome › раздел › страница». Отдельным списком рядом с разделами — нельзя.
- Страница операции живёт в «Po operacijų» и показывается ещё и в своей зоне (мениск — и в «Kelias»,
  позвоночник — и в «Nugara»).
- Адреса плоские: `/ka-gydome/<slug>` для разделов и болезней, `/straipsniai/<slug>` для статей.
  Нынешние адреса не меняем.
- Восемь нынешних страниц проблем становятся страницами-разделами и переписываются по шаблону G.

Порядок строк — порядок разделов на сайте (главная, `/ka-gydome`), ревизия Piotr 07.11.2026.
Операции стоят в «Po operacijų» и ещё раз в своей зоне. В коде дерево — `src/content/sections.ts`.

| Раздел (адрес) | Страницы внутри | Приоритет |
|---|---|---|
| Po operacijų (`atsistatymas-po-operaciju`) | Ankstyva reabilitacija po operacijos ir imobilizacijos (gipsas, įtvaras); Po kryžminio raiščio rekonstrukcijos; Po menisko operacijos; Po kelio artroskopijos; Po kelio lūžio operacijos; Po peties artroskopijos ir rotatorių manžetės siūlės; Po peties stabilizacijos; Po žastikaulio lūžio; Po riešo ir rankos lūžio; Po klubo artroskopijos; Po čiurnos lūžio ar operacijos; Po Achilo sausgyslės plyšimo; Po disko išvaržos operacijos; Po stuburo stabilizacijos | 1 |
| Nugara (`nugaros-skausmas`) | Ūmus nugaros skausmas („užstrigo nugara“); Nugaros skausmas ir raumenų įtampa; Stuburo išvarža; Išialgija ir radikulopatija; Skausmas nugaros apačioje; Osteochondrozė; Stuburo kanalo stenozė; Spondilolistezė; Kryžkaulio ir klubo sąnario skausmas; Skausmas tarp menčių; Nugaros skausmas sėdint; Laikysenos problemos; Po disko išvaržos operacijos; Po stuburo stabilizacijos | 1 |
| Kaklas (`kaklo-skausmas`) | Kaklo skausmas ir įtampa (cervikalgija); Užstrigęs kaklas; Ribotas kaklo judrumas; Kaklo osteochondrozė; Kaklo radikulopatija: skausmas plinta į ranką; Kaklo trauma po avarijos; Įtampos galvos skausmas; Galvos skausmas dėl kaklo | 1 |
| Petys (`peties-problemos`) | Peties skausmas keliant ranką; Subakromialinis skausmo sindromas; Rotatorių manžetės pažeidimas; Dvigalvio raumens sausgyslės uždegimas; Kalcifikuojantis tendinitas; Sustingęs petys (adhezinis kapsulitas); Peties nestabilumas ir išnirimai; AC sąnario trauma; Peties sąnario artrozė; Po peties artroskopijos ir rotatorių manžetės siūlės; Po peties stabilizacijos; Po žastikaulio lūžio | 1 |
| Alkūnė ir riešas (`alkunes-ir-rieso-skausmas`) | Teniso alkūnė; Golfo alkūnė; Alkūnės sustingimas po traumos; De Quervain sindromas; Riešo kanalo sindromas; Riešo skausmas ir patempimai; Po riešo ir rankos lūžio | 2 |
| Kelias (`kelio-skausmas`) | Priekinio kryžminio raiščio plyšimas; Užpakalinio kryžminio raiščio plyšimas; Vidinio šoninio raiščio pažeidimas; Menisko plyšimas; Kelio lūžiai; Ribotas kelio judrumas; Patelofemoralinis skausmas (bėgiko kelis); Šokėjo kelis (girnelės sausgyslės tendinopatija); Iliotibialinio trakto sindromas; Kelio artrozė; Po kryžminio raiščio rekonstrukcijos; Po menisko operacijos; Po kelio artroskopijos; Po kelio lūžio operacijos | 1 |
| Klubas ir kirkšnis (`klubo-ir-kirksnies-skausmas`) | Klubo sąnario artrozė; Skausmas ir sustingimas po klubo endoprotezavimo; Šoninis klubo skausmas (trochanterinis bursitas); Kirkšnies skausmas sportininkams; Klubo FAI ir sąnario lūpos plyšimas; Piriformio sindromas; Po klubo artroskopijos | 2 |
| Čiurna, pėda ir kulnas (`ciurnos-ir-pedos-skausmas`) | Plantarinis fascitas; Kulno atauga; Čiurnos patempimas; Čiurnos nestabilumas; Achilo tendinopatija; Stresiniai pėdos lūžiai; Čiurnos sąnario artrozė; Blauzdos skausmas bėgikams; Po čiurnos lūžio ar operacijos; Po Achilo sausgyslės plyšimo | 2 |
| Sporto traumos (`sporto-traumos`) | Raumenų patempimai ir plyšimai; Šlaunies dvigalvio raumens patempimas; Pritraukiamųjų raumenų patempimas; Blauzdos raumens plyšimas; Raumens sumušimas; Raiščių patempimai ir plyšimai; Lūžiai ir grįžimas į sportą po lūžio; Stresiniai lūžiai; Peties išnirimas sportuojant; Bėgimo traumos; Grįžimas į sportą po traumos; Traumų prevencija | 1 |
| Plintantis skausmas (`plintantis-skausmas`) | Skausmas plinta į koją (išialgija); Skausmas plinta į ranką iš kaklo; Tirpsta ranka ar pirštai; Riešo kanalo sindromas; Piriformio sindromas | 3 |
| Sausgyslės (`tendinopatijos`) | Teniso alkūnė; Golfo alkūnė; Šokėjo kelis; Achilo tendinopatija; Peties sausgyslių tendinopatija; Dvigalvio raumens sausgyslės uždegimas; Sėdmenų sausgyslių tendinopatija; De Quervain sindromas | 2 |

**Остальное по плану.**
- Услуги: kineziterapija; manualinė terapija (по методу Мейтланда, Mangirdas); osteopatija (структуральная,
  без «чудес»); gydomasis masažas (развиваем); sporto reabilitacija; pooperacinė reabilitacija; добавить
  kinezioteipavimas, Redcord terapija, elektroterapija, ultragarso terapija. Dry needling нет. Smūginė banga
  и TECAR — когда появятся в клинике.
- Отдельные страницы: «Privati reabilitacija be siuntimo», «Chiropraktikas Vilniuje?» (остаётся), «Apie mus», DUK.
- Статьи: 5–10 на раздел, заголовок — вопрос из поиска, формат вопрос-ответ. Видео — позже.
- Страница болезни — по шаблону из плана (прямой ответ, симптомы, красные флаги, оценка, лечение и сроки, цена,
  вопросы, литература с DOI, «Peržiūrėjo»), вид — макет G. Старый вид страниц проблем и услуг не используем.
- Порядок работ: пачками по 5–8 страниц. Текст пачки сначала в Claude Doc, правит Piotr, после его «ок» — код и PR.
- Языки: сейчас литовский; английский и русский потом, адресами `/en`, `/ru` с hreflang.

**Уточнения Piotr (07.11.2026).**
- Не берём: реабилитацию после замены суставов как направление «Po operacijų», сколиоз и детей (это FitKid,
  старые детские адреса ведут на fitkid.lt), челюсть, тазовое дно, беременных. Но в «Klubas ir kirkšnis» есть тема
  «sunkumai po klubo endoprotezavimo» и artrozė (уточнение Piotr, 07.11.2026).
- Пост-операционный фокус: передняя крестообразная, плечо, мениск и другие суставные операции. Почти после каждой
  ортопедической операции есть гипс или ортез — отдельная тема о ранней мягкой (пассивной) кинезитерапии.
- «Reabilitacija» пишем открыто, но всегда рядом «privati, be siuntimo, be eilių».
- Сколько визитов: острое состояние — несколько визитов; затянувшаяся радикулопатия — 10 и больше, по стадии;
  для коррекции — обычно не меньше 5.
- После мениска и передней крестообразной реабилитацию начинаем рано: примерно через неделю после операции
  или когда разрешит хирург; сначала советы и пассивная работа, месяцами не ждём.
- Кто чем занимается: после операций спортивных травм — чаще Kotryna; пожилые пациенты после операций — Mangirdas;
  Piotr — острые периоды, ишиалгия, болевые синдромы плеча и спины.
- Тексты пока проверяет Piotr; кто из специалистов какие разделы — решим позже. Дату и автора проверки не выдумывать.
- Аналитику ставим позже, сначала контент.
- Слова в литовских текстах: не «įdėklas / įdėklai» (решение Piotr, 07.11.2026) — пишем «įtvaras». Если источник
  говорит о стельках, не приписывать ему «įtvaras»: такую фразу переформулировать без этого слова.

## Стек

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, lucide-react.
- `output: "standalone"`, `Dockerfile` (node:20-alpine). Деплой только через GitHub → Cloud Build.
- Шрифт Onest через `next/font/google` (`src/app/layout.tsx`), переменный, наборы `latin` + `latin-ext`;
  на сборке нужен доступ к Google Fonts. Для русской версии добавить `cyrillic`.
  В CSS не писать `var(--font-sans)`: при `@theme inline` такой переменной нет — брать `var(--font-onest)` или класс `font-sans`.
- Форма записи: `src/app/api/contact/route.ts` — Resend, запасной вариант SMTP (nodemailer).
  Переменные — в `.env.local` (не в git), образец — `.env.example`.

## Структура

- `src/app/**/page.tsx` — маршруты и `metadata`. Тело страниц — в `src/components/*Content.tsx`.
  `metadata` каждой страницы — через `pageMetadata({ path, title, description })` из `src/lib/seo.ts`:
  он ставит canonical, og:url и og:image. Без него страница остаётся без canonical.
- Старые адреса прежнего WordPress-сайта → `src/data/legacy-redirects.ts` (подключён в `next.config.ts`).
  Появилась более точная страница (например, disko išvarža) — перенаправить старый адрес на неё.
- Разделы `/ka-gydome`, `/paslaugos`, `/specialistai` — `HubPageContent`; списки берутся из
  `src/content/sections.ts`, `translations.services` и `specialists.ts`, sitemap — из тех же списков.
  В меню «Ką gydome» и «Paslaugos» ведут на блоки главной (`/#ka-gydome`, `/#paslaugos`), а не на эти страницы
  (решение Piotr 07.11.2026: страницы-списки повторяют главную). Туда же ведут «← Ką gydome», «← Paslaugos» и ссылки 404.
  Сами страницы `/ka-gydome` и `/paslaugos` остаются для Google: «хлебные крошки» в JSON-LD и sitemap.
- Картинка для превью ссылок: `public/og/reamed-og.png`, пересобрать — `node scripts/build-og.mjs`.
- Новые страницы проблем — только из данных: файл в `src/content/conditions/<slug>.ts` (тип `ConditionPage`),
  строка в `index.ts`; маршрут `src/app/ka-gydome/[slug]`, вид — `ConditionPageContent` (макет G), JSON-LD —
  `src/lib/condition-schema.ts`, источники с DOI — `sources.ts`. В sitemap попадают сами.
  `reviewed: null`, пока текст не проверил специалист; дату и автора проверки не выдумывать.
  Источник — исследование с `doi` или, если DOI нет, страница с `url` (памятки больниц, 112.lt): так решил Piotr
  для своих текстов «Po operacijų» (пачка 9, 08.11.2026). Сборка падает, если у источника нет ни того, ни другого.
  Необязательный блок `beforeVisit` — «Ką galite daryti iki vizito» (страницы операций).
- Дерево «Ką gydome» — `src/content/sections.ts`: 11 разделов в порядке таблицы из плана, у каждого `topics`
  (болезни и операции из таблицы). Тема с `page` — ссылка на готовую страницу, без `page` — текст, пока страницы нет.
  Из этого файла строятся блок «Ką gydome» на главной (компьютер и телефон; до 07.11.2026 назывался «Kada galime padėti?»), `/ka-gydome`, sitemap
  и «хлебные крошки». Новая страница: файл в `src/content/conditions/`, поле `section` (свой раздел) и `page`
  у её темы в `sections.ts` (операция — в «Po operacijų» и в своей зоне). Сборка падает, если они расходятся.
  В раскрытом разделе блока «Ką gydome» (телефон и компьютер) первой строкой под текстом — мятная ссылка на страницу
  раздела с её заголовком H1 (`pageTitle` в `sections.ts`, сборка сверяет с `hero.h1`), потом темы, внизу «Registruotis».
  Решение Piotr 07.11.2026: ссылка «Plačiau apie tai» в самом низу на телефоне не находилась.
- Все страницы проблем на шаблоне G: разделы Po operacijų, Nugara, Kaklas, Petys, Kelias, Sporto traumos (пачки 1–4,
  PR #25, #27–#29), Sausgyslės и Plintantis skausmas (пачка 5, PR #30), Klubas ir kirkšnis, Čiurna pėda ir kulnas,
  Alkūnė ir riešas (пачка 7). С пачки 7 страницы есть у всех 11 разделов (`hasPage: true`).
- Страницы услуг — тоже из данных (пачка 6): файл `src/content/services/<slug>.ts` (тип `ServicePage`), строка в `index.ts`;
  маршрут `src/app/paslaugos/[slug]`, вид — `ServicePageContent` (макет G), JSON-LD — `src/lib/service-schema.ts`.
  Цены в блоке «Kaina» и в текстах берутся из `src/data/prices.ts` по `id` (`price-text.ts`), руками не набирать.
  `helps.pages` — страницы болезней из `src/content/conditions`. Сборка падает, если ссылка ведёт в пустоту или у услуги
  из `translations.services` нет страницы. Общие блоки обоих шаблонов — `src/components/g/PageBlocks.tsx`,
  строки чека цен — `src/components/prices/PriceLines.tsx` (их же использует `/kainos`). Старый вид услуг удалён.
- Тексты пачек — в Claude Docs «reamed.lt: пачка N», код страницы и документ должны совпадать дословно.
- Готовые тексты Piotr переносятся скриптами `scripts/import-condition-texts.mjs` и `scripts/verify-condition-texts.mjs`
  (настройки пачки — `scripts/condition-texts/batch-N.json`), без перепечатки и без Claude Doc; меняется только перечисленное
  в правиле: номера ссылок, призывы и навигация, строка цены, тире между словами. Сверка должна показать 0 расхождений.
- `src/components/sections/` — блоки главной.
  Услуги на главной (`ServicesSection`) — мятная полоса с графитовыми кнопками (название, строка текста, мятная стрелка),
  между «Pirmasis vizitas» и командой: просьба Piotr 07.11.2026, главная смотрят в основном с телефона.
  Сами кнопки — `src/components/ServiceButtons.tsx`; те же кнопки на `/paslaugos` (пункт меню «Paslaugos»).
  Список услуг везде выглядит одинаково: простым списком ссылок услуги не выводить.
- `src/lib/translations.ts` — тексты главной и общих блоков (lt/en).
- `src/lib/specialists.ts` — специалисты (slug, био, лицензия, курсы).
- `src/contexts/LanguageContext.tsx` — язык переключается на клиенте и хранится в localStorage;
  URL не меняется, `<html lang>` всегда `lt`. Переход на `/en/...` — пункт плана.
  На телефоне (до lg) язык переключается в шапке: кнопка «LT ▾» со списком; в мобильном меню и футере переключателя нет.

## Отзывы

- `src/data/reviews.ts` — настоящие отзывы из Google-карточки ReaMed, отобраны вручную.
  Метки: `conditions` (страницы проблем), `services` (страницы услуг), `specialists`.
- Вывод: `getReviews({ condition, service, specialist })`; компоненты в `src/components/reviews/`.
  `<ReviewsBlock condition="…" />` скрывается сам, пока по метке меньше 2 отзывов.
- Правила: текст дословный; автор как «Vardas P.»; никаких придуманных или «примерных» отзывов;
  не брать отзывы сотрудников; при обновлении менять `GOOGLE_REVIEWS.count`.
  Решения владельца о том, что не показываем, записаны в шапке файла.

## Дизайн: текущее состояние и решённое направление

- Цвета и шкала шрифта — токены в `@theme` (`src/app/globals.css`): `ground`, `paper`, `ink`, `graphite`, `mint`,
  `mint-light`, `on-dark`, `focus`; размеры `text-h1`…`text-small`; кнопки `btn btn-dark` / `btn btn-mint`, ссылка `link-action`.
  Новые компоненты — только на токенах. В страницах проблем и услуг пока жёсткие hex (`bg-[#EEF5F4]` и т.п.), их переводим следующей задачей.
- Бирюза `#7DB9B5` — только фон и декор. Белый текст на ней даёт контраст 2,2:1, это не проходит.
  Для кнопок с белым текстом и текстовых ссылок — `#437571` (5,2:1 на белом). Новые компоненты уже на нём.
- Основной текст не меньше 16 px, зоны нажатия не меньше 44 px.
- Первый экран страниц проблем и услуг — без фото специалиста (решение Piotr, 07.11.2026: круглое фото читалось
  как паспортное). Если фото вернётся — аркой (`rounded-t-full`), как у специалистов на главной, не кругом.
- Не добавлять надписи капсом над заголовками, нумерованные плитки 01–04, эмодзи вместо иконок,
  длинные тире в литовских текстах.
- Шрифт сайта — Onest (решение Piotr, 01.11.2026). Литовские и русские буквы в нём полные.
  Название клиники как знак — не шрифтом, а файлом логотипа.
- Цвета редизайна (решено 01.11.2026): графит `#5F605F`, мята `#9DD0CB`, светло-серый `#ECEDEB`;
  пары — мята на графите и графит на светло-сером (см. «Знак ReaMed»). Утверждён макет G: `docs/design/redesign-g/`.

## Знак ReaMed

- Логотип перерисован в вектор целиком (ноябрь 2026), файлы — `public/brand/`:
  `reamed-logo-*` (полный: руки, ReaMed, KLINIKA, девиз), `reamed-lockup-*` (горизонтальный: руки + ReaMed),
  `reamed-icon-*` (квадратный знак; `-small-` — для 48 px и меньше), `reamed-hands-teal.svg`,
  `reamed-wordmark.svg` (только ReaMed, `currentColor`). Суффикс: `for-light` — на светлом фоне,
  `for-dark` — на тёмном, `white`/`graphite-mono` — в один цвет.
- Название клиники как знак (шапка, футер, первый экран, документы) — только `<Wordmark />`
  из `src/components/brand/Wordmark.tsx` или файлы выше. Не набирать шрифтом:
  «e» с наклонной перекладиной есть только в логотипе. Буквы построены геометрически
  (одна толщина линии, круглые окончания) — не трассировать заново и не «улучшать» шрифтом.
- В обычном тексте («ReaMed klinikoje…») название пишется основным шрифтом.
- Подписи в полном логотипе — Open Sans (KLINIKA — 300, девиз — 400), переведены в кривые.
- Основные сочетания (решение Piotr, 01.11.2026):
  1) мята `#9DD0CB` на графите `#5F605F` — главное, как в логотипе (3,7:1);
  2) графит `#5F605F` на светло-сером `#ECEDEB` (или белом) — второе (5,4:1). Руки на светлом — `#7DB9B5`.
  Остальное (тёмный `#2B2C2B` на мяте, белый на тёмном, в один цвет) — по случаю, для печати.
  Не мятой на белом (1,6:1). Надпись ReaMed — не уже 96 px, вокруг — свободное поле не меньше высоты «e».
- На сайте: шапка (светлая) — `reamed-wordmark-graphite.svg`; в футере логотипа нет: запись, контакты, карта (статичный SVG из OSM, `scripts/build-map.*`), ссылки Privatumo politika · Instagram · Facebook.
  Фавиконки — буква R из той же надписи. `public/logo.svg` больше нигде не используется.

## Ограничения

- CSP в `next.config.ts` не ослаблять ради сторонних скриптов.
- Секреты, токены, PIN сотрудников — никогда в репозиторий.
- Медицинский контент: без обещаний результата и без выдуманных фактов о пациентах.
  Форма записи предупреждает не присылать медицинские данные — сохранять это.
- `.cursorrules` устарел (там синий фирменный цвет и несуществующие папки) — ориентироваться на этот файл.
