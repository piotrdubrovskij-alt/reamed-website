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
- [ ] **7. Шрифт.** Решено: Onest (переменный, `latin` + `latin-ext`) вместо Poppins — PR #7.
  Было: Poppins, 6 начертаний, только `latin`, и фактически он не применялся: `body` брал `var(--font-sans)`,
  а при `@theme inline` такой CSS-переменной нет, поэтому весь сайт шёл системным шрифтом.
- [ ] **8. Английская версия по своим адресам.** `/en/...`, `hreflang`, правильный `<html lang>`,
  английские `title`/`description`. Затрагивает все `*Content.tsx` — делать вместе с п. 6,
  чтобы не переписывать компоненты дважды. Заодно перевести подписи `TrustBar` (сейчас только LT).
- [ ] **9. Превью ссылок.** `og:image` 1200×630 и `canonical` на каждой странице.
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
- [ ] Своя страница 404 на литовском, с кнопкой записи.
- [ ] `text-wrap: balance` для заголовков, `pretty` для абзацев.
- [ ] Мобильная главная 9 561 px: портреты специалистов — в горизонтальную ленту.
- [ ] schema.org: `Person` на страницах специалистов, `FAQPage` на страницах проблем.
- [ ] CSP: убрать `'unsafe-eval'` из `script-src` (в продакшене Next.js он не нужен), проверить сборку.
- [ ] Обновить или удалить устаревший `.cursorrules`.

## Поиск, Google-карточка и реклама (07.11.2026)

Что выяснилось. Запрос «reabilitacija vilniuje su siuntimu» приводил людей по направлению врача.
Дело не в тексте сайта: Search Console относит 4 216 показов к `http://www.reamed.lt/`, то есть к
Google-карточке (категория была «Reabilitacijos centras»), плюс реклама на широком соответствии.
ReaMed — частная клиника: все услуги платные, с ТЛК (ligonių kasos) не работаем, siuntimas не нужен.
Сколиоз и детские запросы — не ReaMed (FitKid, fitkid.lt).

Сделано вне репозитория (07.11.2026):

- [x] **Google Business Profile.** Основная категория — «Kineziterapeutas»; убраны «Reabilitacijos centras» и
  «Vaikų sveikatos priežiūros centras»; сайт — `https://reamed.lt/`; описание переписано (кинезитерапия,
  мануальная терапия, остеопатия, сборные, «paslaugos mokamos, su ligonių kasomis nedirbame», без слова
  «siuntimas» и без ссылок — Google их не принимает). Правки на модерации у Google.
- [x] **Google Ads, кампания «ReaMed 2025»** (аккаунт 564-428-8303, MB Kineziterapija). Данные 01.08–07.11:
  982 €, 15 053 показа, 1 038 кликов, CTR 6,9 %, конверсий 0 (отслеживание не настроено).
  Мусор приходил с ключа «kineziterapija vilniuje» на широком соответствии: «reabilitacija vilniuje su siuntimu»,
  «nieko baisaus», «osteomedika savanoriu», «hila», «abromiškių reabilitacija», «kineziterapija vandenyje»,
  детские и «kūdikių» запросы.
  Теперь: тот же ключ — фразовое соответствие; добавлены `[kineziterapija vilniuje]`, `[kineziterapijos klinika vilniuje]`,
  `[kineziterapeutas vilniuje]` и их фразовые версии; 43 минус-слова на уровне кампании
  (siuntimu/siuntimas/siuntimą/siuntimo, nemokamai/nemokama/nemokamas, tlk, ligonių kasa/kasos, kompensuojama,
  valstybinė, ligoninė, poliklinika, savanoriai, darbas, sanatorija, kursai, mokymai, studijos, vandenyje,
  vertikali vonia, названия чужих клиник, vaikų/vaikams/kūdikių, dubens dugno).
  Цель: первые позиции по «kineziterapija vilniuje».
- [x] **Сайт:** старые адреса WordPress ведут на новые страницы, «privati klinika» на `/kontaktai`, `/kainos`
  и в FAQ, главная без слова «reabilitacija» в `title` — PR #22.

Дальше:

- [ ] Через 1–2 недели открыть «Paieškos terminai» в Ads и Search Console (`http://www.reamed.lt/`, запросы со словом
  «siuntimu»): мусор должен уйти. Если остался — дополнить минус-слова.
- [ ] **Конверсии в Ads** (клик по телефону, отправка формы `/registracija`) — вместе с п. 13. Без них кампания
  оптимизируется вслепую и «0 конверсий» ничего не значит.
- [ ] Решить с Piotr: радиус показа сейчас 2 км вокруг центра Вильнюса (кампания «ограничена бюджетом», 10 €/день,
  ручной MUP до 1 €); «Paieškos partneriai» включены. Для топ-позиций по «kineziterapija vilniuje»
  может понадобиться весь город и другая ставка.
- [ ] **Страницы проблем по языку пациентов** (порядок по спросу, акцент на спине и шее): Nugaros skausmas,
  Kaklo skausmas, Peties skausmas, Klubo skausmas, Kelio skausmas, Riešo ir alkūnės skausmas,
  Kulno ir pėdos skausmas, Tirpsta rankos ar kojos, Sporto traumos ir perkrovos (сюда же тендинопатии,
  адрес `/ka-gydome/tendinopatijos` остаётся и ведёт на неё), Atsistatymas po operacijos.
  Сколиоз — убран (FitKid). Заменить типовые тексты ~900 слов; новые: Klubo, Riešo ir alkūnės, Kulno ir pėdos.
  «Plintantis» → «Tirpsta rankos ar kojos», «Peties problemos» → «Peties skausmas». Список на главной
  («Kada galime padėti?») — те же 10 пунктов.
- [ ] После вливания PR: трафик Cloud Run закреплён на ревизии (Paysera-превью деплоится с `--no-traffic`),
  новую ревизию переключать вручную: `gcloud run services update-traffic reamed-site --region europe-west1
  --project reamed-site --to-revisions <rev>=100`. Не на «latest».

## Новое

- [ ] **Страница специалиста по макету G** — PR #20
- [ ] **Специалисты: новые фото, Edmundas Zlatkus, суббота** — PR #19
- [ ] **Kainos в виде чека** — макет G, PR #18
- [ ] **Онлайн-запись со свободным временем** — зависит от решения по п. 10а.
- [ ] **Доверие на карточках специалистов:** одна строка с главным фактом и номер лицензии
  (Kotryna — сборные по футболу и хоккею; Piotr — национальные сборные по хоккею, преподаватель VU).
- [ ] **Цена рядом с главной кнопкой:** «Pirminė konsultacija + ištyrimas + planas — 60 min, 80 €»
  (сверено с `/kainos`; при изменении цен менять в обоих местах).
- [ ] **Индексные страницы** `/specialistai`, `/paslaugos`, `/ka-gydome` (сейчас 404);
  кнопка «Visi specialistai →» должна вести на список специалистов, а не на `/registracija`.
- [ ] **Подарочные ваучеры:** ссылка в шапке и футере до декабря. Уточнить у Piotr, где живёт система ваучеров.
- [ ] **Живая фотосъёмка:** кабинеты, работа с пациентом, оборудование, команда.
- [ ] **Русская версия** — после п. 8.
- [ ] **«Peržiūrėjo: <специалист>, data»** на страницах проблем.
- [ ] **Отзывы:** просить у пациентов там, где их нет или мало — шея, мануальная терапия, остеопатия,
  тендинопатии, Kotryna. Обновлять `src/data/reviews.ts` раз в квартал.

## Открытые вопросы к Piotr

1. Почему убрали виджет manodaktaras с `/registracija`? (п. 10а)
2. Оставляем ли обязательный email в форме? (п. 10б)
3. Есть ли оригинал главного фото без водяного знака или будет новая съёмка? (п. 3)
4. Где работает система подарочных ваучеров?
