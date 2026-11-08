# План доработки reamed.lt

Основа — ревизия от 31.10.2026 (Impeccable audit: 8 из 20, цель 14+) и сверка с кодом.
Каждый пункт — отдельная ветка и PR (см. `CLAUDE.md`). Сделанное отмечать `[x]` с номером PR.

## Сделано

- [x] Настоящие отзывы Google вместо заглушек, разметка по проблемам, услугам и специалистам — PR #1
- [x] **Заголовок на телефоне.** `src/components/sections/HeroSection.tsx`: до `md` текст теперь в обычном
  потоке под шапкой, фото под текстом; на десктопе — как было. Фото пришлось переместить ниже по DOM —
  это обнажило эффект стекинга от `blur`-фильтра на фото (создаёт свой stacking context), из-за чего
  фото на десктопе оказывалось поверх текста; поправлено явным `md:z-10` на тексте и градиенте.
  Смотрел `archive/old-local-copy-2026-05` — там текст тоже не в абсолютном позиционировании, но макет
  той версии (full-bleed фон на всех брейкпоинтах) не даёт «фото под текстом» на мобильном, так что
  взял только саму идею нормального потока, не код целиком — PR #4
- [x] **Лишний скрипт manodaktaras.** Убран из `src/app/layout.tsx` (CSS `<link>` в `<head>` и `<Script>`);
  разрешения в CSP (`next.config.ts`) оставлены нетронутыми, пока не решён п. 10. Lighthouse mobile на
  главной (production-сборка, `next start`, throttling: simulate): Performance 95 → 100,
  LCP 2.3 s → 0.9 s, FCP 2.3 s → 0.9 s, Speed Index 2.7 s → 0.9 s, TBT 90 ms → 30 ms, CLS 0 → 0 — PR #5
- [x] **Разметка schema.org.** В `layout.tsx` `geo` теперь на точке клиники `54.6900422, 25.2899553`
  (было — центр Вильнюса), в `address` добавлен `postalCode: "09200"`, добавлен `sameAs` со ссылкой
  на Google-карточку клиники — PR #5
- [x] **Логотип в векторе.** Надпись ReaMed построена геометрически, руки перерисованы, KLINIKA и девиз —
  Open Sans в кривых; все варианты в `public/brand/`. Фавиконки — буква R из надписи — PR #6
- [x] **7. Шрифт.** Onest (переменный, `latin` + `latin-ext`) вместо Poppins. Попутно найдено: Poppins
  фактически не применялся — `body` брал `var(--font-sans)`, а при `@theme inline` такой CSS-переменной нет — PR #7

## P0 — сразу

- [ ] **2. Контраст кнопок и ссылок.** Белый на `#7DB9B5` = 2,2:1.
  Добавить в `@theme` токен `--color-brand-strong: #437571` и перевести на него все кнопки с белым текстом
  («Registruotis», «Registruotis vizitui»), текстовые ссылки («Sužinoti daugiau»), должности специалистов,
  надпись над H1, полосу цифр `TrustBar`. `#7DB9B5` оставить для фонов и декора.
  Готово, когда все пары текст/фон на главной не ниже 4,5:1.
- [ ] **3. Главное фото.** В `HeroSection.tsx` стоит `filter: blur(1.5px)`, а низ кадра срезан, «чтобы спрятать
  водяной знак». Нужен оригинал без водяного знака шириной от 2880 px (или новое фото команды).
  Затем `next/image` с `priority` и `sizes="100vw"`, без blur. **Ждёт фото от Piotr.**

## P1 — ближайшие 2 недели

- [ ] **6. Дизайн-токены.** Цвета в `@theme`: surface, primary, primary-strong, border, ink.
  Заменить жёсткие hex в классах (~500 мест, из них ~290 — `#7DB9B5`). Шкала из 6–7 размеров шрифта,
  основной текст не меньше 16 px.
- [ ] **8. Английская версия по своим адресам.** `/en/...`, `hreflang`, правильный `<html lang>`,
  английские `title`/`description`. Затрагивает все `*Content.tsx` — делать вместе с п. 6,
  чтобы не переписывать компоненты дважды. Заодно перевести подписи `TrustBar` (сейчас только LT).
- [x] **9. Превью ссылок.** `og:image` 1200×630 и `canonical` на каждой странице — PR #23
- [ ] **10. Страница записи `/registracija`.** Нужны решения Piotr:
  а) возвращать ли виджет manodaktaras с выбором времени (убран в 0b68b66 — почему?);
  б) email обязателен намеренно (6cb8d87, чтобы отвечать из Gmail) — делать ли его необязательным при выборе звонка.
  В любом случае: после отправки показывать экран с понятным сроком ответа.
- [ ] **11. Шаблонные приёмы.** Убрать надписи капсом над заголовками (`SL` / `SectionLabel`),
  плитки «Kaip dirbame» 01–04 → короткий рассказ о первом визите, 14 одинаковых карточек
  («Ką gydome» + «Paslaugos») → компактный список-навигатор, длинные тире в текстах.
- [ ] **12. Ссылки футера.** `src/components/Footer.tsx`: `#paslaugos`, `#ka-gydome`, `#kontaktai` → `/#...`;
  имена специалистов → `/specialistai/<slug>` вместо `#specialistai`.
- [ ] **13. Аналитика.** Сейчас никакой (CSP пускает только сам сайт и manodaktaras).
  Поставить аналитику без cookie (Plausible или Umami), цели: клик по телефону, отправка формы,
  переход на manodaktaras. Search Console; UTM-метка на ссылке сайта в Google-карточке.
  Сделать до редизайна, чтобы было с чем сравнивать.
- [ ] **14. Зависимости: Next.js 16.4, nodemailer 10.** `next`/`eslint-config-next` 16.1.6 → 16.4.3,
  `nodemailer` ^8.0.4 → ^10.3.1 (пакет теперь несёт свои типы — `@types/nodemailer` убран).
  `npm audit fix` закрыл 9 из 25 уязвимостей; оставшиеся — в dev-цепочке eslint
  (`@typescript-eslint` → `minimatch`), чинится только через `npm audit fix --force`
  с откатом `eslint` до 4.x — не делать, не трогать без отдельного решения.
  `tsc --noEmit`, `lint`, `build` — чисто. При проверке формы `/registracija` на деве
  SMTP-ветка (nodemailer) упала с `535 Username and Password not accepted` от Gmail —
  протухший/неверный пароль в `.env.local`, не связано с апгрейдом (транспорт дошёл до
  реального подключения и получил штатный отказ авторизации); учесть при следующей
  проверке формы.

## P2/P3 — полировка

- [ ] Зоны нажатия от 44 px: «Registruotis» в шапке (31 px), LT/EN (22 px), телефон в меню.
- [ ] `scroll-margin-top` для якорей под фиксированную шапку.
- [ ] Видимый фокус `:focus-visible` цвета `#437571`.
- [ ] Мобильное меню закрывается по Escape.
- [ ] Телефон везде в одном формате: `+370 601 34304`.
- [ ] © год в футере — автоматически.
- [x] Своя страница 404 на литовском, с кнопкой записи — PR #23
- [ ] `text-wrap: balance` для заголовков, `pretty` для абзацев.
- [ ] Мобильная главная 9 561 px: портреты специалистов — в горизонтальную ленту.
- [x] schema.org: `Person` на страницах специалистов, `FAQPage` на страницах проблем.
- [ ] CSP: убрать `'unsafe-eval'` из `script-src` (в продакшене Next.js он не нужен), проверить сборку.
- [ ] Обновить или удалить устаревший `.cursorrules`.

## Новое

- [ ] **Страница специалиста по макету G** — PR #20
- [ ] **Специалисты: новые фото, Edmundas Zlatkus, суббота** — PR #19
- [ ] **Kainos в виде чека** — макет G, PR #18
- [ ] **Онлайн-запись со свободным временем** — зависит от решения по п. 10а.
- [ ] **Доверие на карточках специалистов:** одна строка с главным фактом и номер лицензии
  (Kotryna — сборные по футболу и хоккею; Piotr — национальные сборные по хоккею, преподаватель VU).
- [ ] **Цена рядом с главной кнопкой:** «Pirminė konsultacija + ištyrimas + planas — 60 min, 80 €»
  (сверено с `/kainos`; при изменении цен менять в обоих местах).
- [x] **Индексные страницы** `/specialistai`, `/paslaugos`, `/ka-gydome` — PR #23 (были 404);
  кнопка «Visi specialistai →» должна вести на список специалистов, а не на `/registracija`.
- [x] **Первый экран страниц проблем и услуг без фото специалиста** (если вернётся — аркой) — PR #32
- [x] **Услуги на главной кнопками** на мятной полосе, kineziterapija крупнее — PR #34
- [x] **Меню «Ką gydome» и «Paslaugos» — на блоки главной**, туда же «← Ką gydome», «← Paslaugos» и ссылки 404;
  `/paslaugos` теми же кнопками, страницы-списки остаются для Google — PR #36, #37
- [x] **Главная: блок «Ką gydome»** (одно название с меню), «Pirmasis vizitas» одной строкой (всё в одном визите)
  и строка о пакетах (kineziterapija nuo 60 € vietoj 70 €, цифры из `prices.ts`) — PR #38
- [x] **«Ką gydome» на главной: ссылка на страницу раздела первой строкой** в раскрытом разделе (мятная строка
  с заголовком страницы, например «Klubo ir kirkšnies skausmas →»), вместо «Plačiau apie tai» в самом низу — PR #40
- [ ] **Подарочные ваучеры:** ссылка в шапке и футере до декабря. Уточнить у Piotr, где живёт система ваучеров.
- [ ] **Живая фотосъёмка:** кабинеты, работа с пациентом, оборудование, команда.
- [ ] **Русская версия** — после п. 8.
- [x] **«Peržiūrėjo: <специалист>, data»** на страницах проблем — 08.11.2026, `docs/reviewers.md`.
- [ ] **Отзывы:** просить у пациентов там, где их нет или мало — шея, мануальная терапия, остеопатия,
  тендинопатии, Kotryna. Обновлять `src/data/reviews.ts` раз в квартал.

## SEO и контент — план от 07.11.2026

Цель: первые места Google по кинезитерапии в Вильнюсе и по каждой болезни и операции, с которой работаем;
источник для ИИ-ответов. Полный план, структура и решения Piotr — в Claude Doc
[«reamed.lt: план захвата поиска по кинезитерапии»](https://claude.ai/artifact/Jmpt7pwX639tzaqCFvR4fC).
Search Console — в аккаунте info@reamed.lt (`sc-domain:reamed.lt`), к Claude подключён через Windsor.ai.

- [x] **Техника.** 301 со старых адресов WordPress (`src/data/legacy-redirects.ts`, 96 адресов из отчёта 404),
  canonical и og:image на каждой странице (`pageMetadata()` в `src/lib/seo.ts`), страницы-разделы
  `/ka-gydome`, `/paslaugos`, `/specialistai` (меню и «хлебные крошки» ведут туда), sitemap без поддельных дат
  и с Edmundas, литовская 404 — PR #23
- [ ] **Исследование запросов** (Keyword Planner в Google Ads) → таблица «запрос → страница», LT/EN/RU
- [x] **Тексты в файлы данных** и один шаблон страницы болезни: прямой ответ, симптомы, красные флаги,
  оценка, лечение, цена, вопросы (`FAQPage`), литература, «Peržiūrėjo» — PR #25 (дерево разделов `sections.ts`,
  блок «Kada galime padėti?» на главной, макет G); «Peržiūrėjo» появится после проверки текстов специалистом. Шаблон по макету G
  (`ConditionPageContent`, данные в `src/content/conditions/`) и первые шесть страниц (пачка 1: stuburo išvarža,
  išialgija, skausmas nugaros apačioje, osteochondrozė, plantarinis fascitas, po menisko operacijos) — ветка
  `feat/condition-template`, ждёт «ок» по текстам. Следом перевести на шаблон 8 старых страниц проблем и 6 услуг
- [ ] **Ядро LT, приоритет 1:** po operacijų (+ po stuburo operacijų), kelias, petys, nugara, kaklas
  (+ įtampos galvos skausmas), sporto traumos; услуги заново (+ elektroterapija и ultragarsas;
  остеопатия — структуральная; мануальная — Мейтланд); «Privati reabilitacija be siuntimo»,
  «Chiropraktikas Vilniuje?», «Apie mus», DUK
  - [x] Страницы проблем, пачки 1–4 (26 страниц: 6 разделов на шаблоне G и 20 тем) — PR #25, #27, #28, #29
  - [x] Услуги заново, пачка 6: семь услуг на шаблоне G (kineziterapija, osteopatija, manualinė terapija,
    pooperacinė и sporto reabilitacija, gydomasis masažas, fizioterapija = elektroterapija + ultragarsas),
    список «Mūsų paslaugos» — PR #33
  - Kinezioteipavimas и Redcord отдельными страницами не делаем (решение Piotr 07.11.2026): Redcord — методика
    внутри кинезитерапии, тейпирование — дополнение к визиту. Пачка 7 по услугам отменена.
  - [ ] «Privati reabilitacija be siuntimo», «Chiropraktikas Vilniuje?», «Apie mus», DUK
- [ ] **Статьи LT:** 100–150 статей-ответов, 5–10 на раздел и статьи о методах, заголовок — вопрос из поиска, по 10–15 за PR
  - Обязательно: статьи о хиропрактике, Redcord и kineziologinis teipavimas со ссылками на страницы болезней и услуг
    (решение Piotr 07.11.2026). Отдельная страница «Chiropraktikas Vilniuje?» остаётся.
  - [ ] План статей (список заголовков по разделам, спрос, куда ведёт каждая) — Claude Doc на правку Piotr
  - [ ] Шаблон статьи в коде: `/straipsniai/<slug>`, `Article` в JSON-LD, статьи раздела на его странице
- [ ] **Приоритет 2:** alkūnė ir riešas, klubas ir kirkšnis, čiurna ir pėda, sausgyslės
  - [x] Пачка 5: разделы Sausgyslės и Plintantis skausmas заново на шаблоне G; темы teniso alkūnė, riešo kanalo
    sindromas, Achilo tendinopatija, šoninis klubo skausmas, tirpsta ranka (итого 33 страницы) — PR #30
  - [x] Пачка 7: страницы разделов Alkūnė ir riešas, Klubas ir kirkšnis, Čiurna, pėda ir kulnas; po peties artroskopijos,
    po kelio artroskopijos, vidinio šoninio raiščio pažeidimas, galvos skausmas dėl kaklo, ūmus nugaros skausmas
    (итого 41 страница, все 11 разделов) — PR #39
  - [x] Пачка 8: kaklo osteochondrozė, čiurnos patempimas, kulno atauga, spondilolistezė, stuburo kanalo stenozė,
    kelio artrozė, kryžkaulio ir klubo sąnario skausmas — PR #41
  - [x] Пачка 9: тексты Piotr «Po operacijų» (po kelio lūžio operacijos, peties stabilizacijos, žastikaulio lūžio,
    riešo ir rankos lūžio, klubo artroskopijos, čiurnos lūžio ar operacijos, Achilo sausgyslės plyšimo,
    disko išvaržos operacijos, stuburo stabilizacijos); источники-ссылки без DOI, блок «Ką galite daryti iki vizito»;
    у всех 14 тем «Po operacijų» есть страницы — PR #42
  - [x] Пачка 10: тексты Piotr Nugara и Kaklas (nugaros skausmas ir raumenų įtampa, skausmas tarp menčių, nugaros
    skausmas sėdint, laikysenos problemos, užstrigęs kaklas, ribotas kaklo judrumas, kaklo trauma po avarijos); перенесены
    скриптами `scripts/import-condition-texts.mjs` и `verify-condition-texts.mjs` (Claude Code); темы Nugara и Kaklas
    все со страницами — PR #43
  - [x] Пачка 11: тексты Piotr Petys (7 тем: rotatorių manžetės pažeidimas, dvigalvio raumens sausgyslės uždegimas,
    kalcifikuojantis tendinitas, sustingęs petys, peties nestabilumas ir išnirimai, AC sąnario trauma, peties sąnario
    artrozė); перенесены теми же скриптами; темы Petys все со страницами — PR #44
  - [x] Пачка 12: тексты Piotr Kelias и Alkūnė ir riešas (9 тем: užpakalinio kryžminio raiščio plyšimas, kelio lūžiai,
    ribotas kelio judrumas, šokėjo kelis, iliotibialinio trakto sindromas, golfo alkūnė, alkūnės sustingimas po traumos,
    De Quervain sindromas, riešo skausmas ir patempimai); перенесены теми же скриптами; темы обоих разделов и
    Sausgyslės все со страницами — PR #45
  - [x] Пачка 13: тексты Piotr Klubas ir kirkšnis и Čiurna, pėda ir kulnas (9 тем: klubo sąnario artrozė, skausmas ir
    sustingimas po klubo endoprotezavimo, kirkšnies skausmas sportininkams, klubo FAI ir sąnario lūpos plyšimas, piriformio
    sindromas, čiurnos nestabilumas, stresiniai pėdos lūžiai, čiurnos sąnario artrozė, blauzdos skausmas bėgikams);
    перенесены теми же скриптами; темы обоих разделов и Plintantis skausmas все со страницами — PR #46
  - [x] Пачка 14: тексты Piotr Sporto traumos (6 тем: raumens sumušimas, raiščių patempimai ir plyšimai, lūžiai ir grįžimas
    į sportą po lūžio, stresiniai lūžiai, bėgimo traumos, traumų prevencija); перенесены теми же скриптами; у всех тем дерева
    «Ką gydome» есть страницы — PR #47
  - [x] Остальные темы всех разделов (решение Piotr 07.11: сначала закончить «Ką gydome», потом статьи) — пачки 8–14, PR #41–#47
- [ ] **EN и RU** по адресам `/en`, `/ru` с hreflang (см. п. 8)
- [x] **`llms.txt`** (`src/app/llms.txt/route.ts`) и **IndexNow** (ключ в `public/`, после вливания: `node scripts/indexnow.mjs`), «Peržiūrėjo» на 95 страницах, `Person`, соседние темы, title и description до 60 и 160 знаков, настоящие даты в sitemap — PR этой ветки
- [ ] **Bing Webmaster**, Google Business, manodaktaras.lt, ссылки VU и федерации

Не берём: замены суставов, сколиоз и детей (FitKid; старые детские адреса ведут на fitkid.lt), dry needling,
челюсть, тазовое дно, беременных.

## Открытые вопросы к Piotr

1. Почему убрали виджет manodaktaras с `/registracija`? (п. 10а)
2. Оставляем ли обязательный email в форме? (п. 10б)
3. Есть ли оригинал главного фото без водяного знака или будет новая съёмка? (п. 3)
4. Где работает система подарочных ваучеров?
