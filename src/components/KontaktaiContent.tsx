"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDetails from "@/components/ContactDetails";
import { Dots, twoCols } from "@/components/g/PageBlocks";

// /kontaktai in the G layout (Piotr, 14.11.2026): the page opens with the same graphite list as the footer, then how to
// find the door (two photos, map, parking, bus), four lines before the first visit and a question form that answers by
// e-mail, with nothing under its button. Nothing is repeated: the footer on this page is one graphite strip with the
// privacy policy link. Booking goes to /registracija like everywhere else.

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

// The clinic's point (schema.org geo in layout.tsx) and the places around it, from the plus codes of the old page.
const CLINIC = "54.6900422,25.2899553";
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC}`;
const place = (lat: number, lng: number) => `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`;
const PLACES = {
  museum: place(54.69006, 25.28819),
  up060: place(54.69094, 25.29331),
  up071: place(54.69356, 25.28919),
  stop: place(54.69006, 25.28869),
};

const content = {
  lt: {
    title: "Kontaktai",
    lead: "Kineziterapijos klinika Vilniuje, prie Sporto rūmų.",
    book: "Registruotis vizitui",

    findTitle: "Kaip mus rasti",
    buildingAlt: "ReaMed klinikos pastatas Olimpiečių g. 1A, tolumoje Gedimino pilies bokštas",
    building: "Pastatas Olimpiečių g. 1A, prie Sporto rūmų. Įėjimas iš šios pusės.",
    doorAlt: "ReaMed klinikos durys Nr. 7 su ReaMed iškaba",
    door: "Durys Nr. 7 su ReaMed iškaba. Pirmas aukštas, be laiptų.",
    directions: "Maršrutas",
    directionsLabel: "Maršrutas į kliniką Google Maps",
    carTitle: "Automobiliu",
    carNone: "Prie pačios klinikos vietų nėra.",
    carMuseum: "Artimiausia aikštelė prie Energetikos ir technikos muziejaus",
    carMuseumWalk: "(Rinktinės g. 2), apie 2 min. pėsčiomis.",
    carUnipark: "Mokamos UNIPARK aikštelės:",
    carUp060: "Olimpiečių g. 3",
    carUp060Walk: "(apie 4 min.) ir požeminė",
    carUp071: "Business Stadium, Rinktinės g. 3",
    carUp071Walk: "(apie 6 min.).",
    busTitle: "Viešuoju transportu",
    busStopBefore: "Artimiausia stotelė",
    busStop: "„Žvejų st.“",
    busStopAfter: ", 1 min. pėsčiomis. Autobusai 33 ir 89.",

    visitTitle: "Prieš pirmą vizitą",
    visitItems: [
      "Atvykite 5–10 min. anksčiau.",
      "Vilkėkite patogią aprangą, kurioje lengva judėti.",
      "Jei turite, pasiimkite tyrimų atsakymus ir gydytojų išvadas.",
      "Gydytojo siuntimo nereikia. Klinika privati: paslaugos mokamos, su ligonių kasomis nedirbame.",
    ],
    prices: "Kainos ir paketai",

    askTitle: "Turite klausimą?",
    askText: "Atsakysime el. paštu per 1 darbo dieną. Dėl vizito laiko patogiausia registruotis internetu arba paskambinti.",
    name: "Vardas",
    email: "El. paštas",
    question: "Klausimas",
    send: "Siųsti",
    sending: "Siunčiama…",
    needName: "Įrašykite vardą.",
    needEmail: "Įrašykite el. paštą, kuriuo atsakyti.",
    badEmail: "Patikrinkite el. pašto adresą.",
    needQuestion: "Parašykite klausimą.",
    failed: "Nepavyko išsiųsti. Parašykite info@reamed.lt arba paskambinkite +370 601 34304.",
    doneTitle: "Ačiū, gavome Jūsų klausimą.",
    doneText: "Atsakysime el. paštu per 1 darbo dieną.",
    again: "Rašyti dar kartą",
  },
  en: {
    title: "Contacts",
    lead: "Physiotherapy clinic in Vilnius, next to the Sports Palace.",
    book: "Book a visit",

    findTitle: "How to find us",
    buildingAlt: "The ReaMed clinic building at Olimpiečių g. 1A, Gediminas Tower in the distance",
    building: "The building at Olimpiečių g. 1A, next to the Sports Palace. The entrance is on this side.",
    doorAlt: "ReaMed clinic door No. 7 with the ReaMed sign",
    door: "Door No. 7 with the ReaMed sign. Ground floor, no steps.",
    directions: "Directions",
    directionsLabel: "Directions to the clinic in Google Maps",
    carTitle: "By car",
    carNone: "There is no parking at the clinic itself.",
    carMuseum: "The nearest car park is at the Energy and Technology Museum",
    carMuseumWalk: "(Rinktinės g. 2), about a 2-minute walk.",
    carUnipark: "Paid UNIPARK car parks:",
    carUp060: "Olimpiečių g. 3",
    carUp060Walk: "(about 4 minutes) and the underground",
    carUp071: "Business Stadium, Rinktinės g. 3",
    carUp071Walk: "(about 6 minutes).",
    busTitle: "By public transport",
    busStopBefore: "The nearest stop is",
    busStop: "“Žvejų st.”",
    busStopAfter: ", a 1-minute walk. Buses 33 and 89.",

    visitTitle: "Before your first visit",
    visitItems: [
      "Arrive 5–10 minutes early.",
      "Wear comfortable clothes you can move in.",
      "Bring any test results and doctors' reports you have.",
      "No referral is needed. We are a private clinic: services are paid, we do not work with the state health insurance fund.",
    ],
    prices: "Prices and packages",

    askTitle: "Have a question?",
    askText: "We reply by e-mail within one working day. For a visit time, booking online or calling is quickest.",
    name: "Name",
    email: "E-mail",
    question: "Question",
    send: "Send",
    sending: "Sending…",
    needName: "Enter your name.",
    needEmail: "Enter the e-mail address to reply to.",
    badEmail: "Check the e-mail address.",
    needQuestion: "Write your question.",
    failed: "Could not send. Write to info@reamed.lt or call +370 601 34304.",
    doneTitle: "Thank you, we have your question.",
    doneText: "We will reply by e-mail within one working day.",
    again: "Write again",
  },
} as const;

type Fields = { name: string; email: string; question: string };
type Errors = Partial<Record<keyof Fields, string>>;
type SendState = "idle" | "sending" | "success" | "error";

const empty: Fields = { name: "", email: "", question: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = (error: boolean) =>
  `w-full min-h-[52px] rounded-2xl bg-white px-4 text-body text-ink ring-1 ring-inset outline-none ${
    error ? "ring-2 ring-[#B3261E]" : "ring-ground-hover focus:ring-2 focus:ring-focus"
  }`;

const inline = "link-action font-normal";

export default function KontaktaiContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  const ids = useId();

  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<SendState>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof Fields]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!fields.name.trim()) next.name = c.needName;
    if (!fields.email.trim()) next.email = c.needEmail;
    else if (!EMAIL_RE.test(fields.email.trim())) next.email = c.badEmail;
    if (!fields.question.trim()) next.question = c.needQuestion;
    if (Object.keys(next).length) {
      setErrors(next);
      const first = (["name", "email", "question"] as const).find((k) => next[k]);
      if (first) e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setState("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const email = fields.email.trim();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          kind: "question",
          name: fields.name.trim(),
          email,
          contactDetail: email,
          contact: "email",
          message: fields.question.trim(),
          lang,
        }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    } finally {
      clearTimeout(timer);
    }
  };

  const field = (key: keyof Fields) => ({
    id: `${ids}-${key}`,
    name: key,
    value: fields[key],
    onChange,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${ids}-${key}-error` : undefined,
  });

  return (
    <>
      {/* 1. The contacts themselves: the footer's list, opened as the first screen. */}
      <section
        aria-labelledby="kontaktai-h"
        className="bg-graphite text-white pt-8 pb-12 desk:pt-14 desk:pb-18 [--focus-ring:var(--color-mint)]"
      >
        <div className="wrap grid gap-8 desk:grid-cols-2 desk:grid-rows-[auto_auto] desk:items-start desk:gap-x-14 min-[68.8125rem]:gap-x-24">
          <div className="flex flex-col gap-4 desk:gap-6">
            <h1 id="kontaktai-h" className="text-h1-m desk:text-h1 text-balance text-mint">
              {c.title}
            </h1>
            <p className="max-w-[36ch] text-lead-m desk:text-lead text-on-dark text-balance">{c.lead}</p>
          </div>
          <div className="desk:col-start-2 desk:row-start-1 desk:row-span-2">
            <ContactDetails />
          </div>
          <Link href="/registracija" className="btn btn-mint w-full sm:w-auto justify-self-start desk:col-start-1 desk:row-start-2">
            {c.book}
          </Link>
        </div>
      </section>

      {/* 2. Two photos (the building with the tower, the door), then the map with a route, parking and the bus stop:
          everything an arriving person needs, before any form. Piotr 14.11.2026: the door whole, not a tight crop. */}
      <section aria-labelledby="rasti-h" className="section-y">
        <div className="wrap">
          <h2 id="rasti-h" className="text-h2 text-balance">
            {c.findTitle}
          </h2>
          {/* 3:2 and 3:4 at one height: the row is 2fr + 1fr. Below the desktop switch the two stack. */}
          <div className="mt-8 desk:mt-12 grid gap-8 desk:grid-cols-[2fr_1fr] desk:gap-x-8 desk:items-start">
            <figure className="flex flex-col gap-3.5">
              <Image
                src="/photos/building.jpg"
                alt={c.buildingAlt}
                width={1500}
                height={1000}
                sizes="(min-width: 821px) 66vw, 100vw"
                className="w-full aspect-[3/2] object-cover rounded-[24px] desk:rounded-[28px]"
              />
              <figcaption className="text-body text-pretty">{c.building}</figcaption>
            </figure>
            <figure className="flex flex-col gap-3.5 max-w-[440px] desk:max-w-none">
              <Image
                src="/photos/entrance.jpg"
                alt={c.doorAlt}
                width={1200}
                height={1600}
                sizes="(min-width: 821px) 33vw, 100vw"
                className="w-full aspect-[3/4] object-cover rounded-[24px] desk:rounded-[28px]"
              />
              <figcaption className="text-body text-pretty">{c.door}</figcaption>
            </figure>
          </div>

          <div className={`mt-10 desk:mt-14 ${twoCols}`}>
            {/* The footer's static OSM map, here as the way to a route. Nothing loads from Google or OSM. */}
            <a
              href={DIRECTIONS}
              {...external}
              aria-label={c.directionsLabel}
              className="relative block h-[200px] desk:h-[260px] overflow-hidden rounded-[24px] desk:rounded-[28px] bg-paper"
            >
              <Image src="/map/reamed-map.svg" alt="" fill unoptimized sizes="(min-width: 821px) 40vw, 100vw" className="object-cover" />
              <span className="absolute left-3 bottom-3 max-[360px]:bottom-8 inline-flex items-center gap-1.5 min-h-10 px-4 rounded-full bg-graphite text-white text-small font-medium">
                {c.directions}
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
              {/* OSM attribution is required; 13px is the one exception to the type scale. */}
              <span className="absolute right-0 bottom-0 px-1.5 py-0.5 bg-white/75 text-ink text-[13px] leading-normal">
                © OpenStreetMap
              </span>
            </a>

            <dl className="grid gap-7 sm:grid-cols-2">
              <div>
                <dt className="text-lead font-medium">{c.carTitle}</dt>
                <dd className="mt-2 flex flex-col gap-2 text-body text-pretty">
                  <p>
                    {c.carNone}{" "}
                    <a href={PLACES.museum} {...external} className={inline}>
                      {c.carMuseum}
                    </a>{" "}
                    {c.carMuseumWalk}
                  </p>
                  <p>
                    {c.carUnipark}{" "}
                    <a href={PLACES.up060} {...external} className={inline}>
                      {c.carUp060}
                    </a>{" "}
                    {c.carUp060Walk}{" "}
                    <a href={PLACES.up071} {...external} className={inline}>
                      {c.carUp071}
                    </a>{" "}
                    {c.carUp071Walk}
                  </p>
                </dd>
              </div>
              <div>
                <dt className="text-lead font-medium">{c.busTitle}</dt>
                <dd className="mt-2 text-body text-pretty">
                  {c.busStopBefore}{" "}
                  <a href={PLACES.stop} {...external} className={inline}>
                    {c.busStop}
                  </a>
                  {c.busStopAfter}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3. Before the first visit: four lines, no more text on this page. */}
      <section aria-labelledby="vizitas-h" className="bg-paper section-y">
        <div className="wrap grid gap-8 desk:grid-cols-[5fr_7fr] desk:grid-rows-[auto_auto] desk:gap-x-[72px] desk:gap-y-4 desk:items-start">
          <h2 id="vizitas-h" className="text-h3-m desk:text-h3 text-balance">
            {c.visitTitle}
          </h2>
          <div className="desk:col-start-2 desk:row-start-1 desk:row-span-2">
            <Dots items={[...c.visitItems]} />
          </div>
          {/* On the phone the link follows the list; on a computer it sits under the heading. */}
          <Link href="/kainos" className="link-action justify-self-start inline-flex items-center min-h-11 text-body desk:col-start-1 desk:row-start-2">
            {c.prices}
          </Link>
        </div>
      </section>

      {/* 4. A question by e-mail: name, address, question. The answer comes by e-mail, so nothing else is asked. */}
      <section aria-labelledby="klausimas-h" className="section-y">
        <div className={`wrap ${twoCols}`}>
          <div className="flex flex-col gap-4">
            <h2 id="klausimas-h" className="text-h2 text-balance">
              {c.askTitle}
            </h2>
            <p className="max-w-[40ch] text-body text-pretty">{c.askText}</p>
          </div>

          <div className="rounded-[24px] desk:rounded-[28px] bg-paper p-5 md:p-8">
            {state === "success" ? (
              <div role="status" className="flex flex-col gap-3">
                <p className="text-lead font-medium">{c.doneTitle}</p>
                <p className="text-body">{c.doneText}</p>
                <button
                  type="button"
                  onClick={() => {
                    setFields(empty);
                    setErrors({});
                    setState("idle");
                  }}
                  className="link-action self-start inline-flex items-center min-h-11 text-body cursor-pointer"
                >
                  {c.again}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${ids}-name`} className="text-small font-medium">
                    {c.name}
                  </label>
                  <input type="text" autoComplete="name" maxLength={100} {...field("name")} className={inputClass(!!errors.name)} />
                  {errors.name && (
                    <p id={`${ids}-name-error`} className="text-small text-[#B3261E]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${ids}-email`} className="text-small font-medium">
                    {c.email}
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    maxLength={200}
                    {...field("email")}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p id={`${ids}-email-error`} className="text-small text-[#B3261E]">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${ids}-question`} className="text-small font-medium">
                    {c.question}
                  </label>
                  <textarea rows={4} maxLength={2000} {...field("question")} className={`${inputClass(!!errors.question)} py-3 resize-y`} />
                  {errors.question && (
                    <p id={`${ids}-question-error`} className="text-small text-[#B3261E]">
                      {errors.question}
                    </p>
                  )}
                </div>

                {state === "error" && (
                  <p role="alert" className="rounded-2xl bg-[#F6E3E1] px-4 py-3 text-small text-[#7A1F17]">
                    {c.failed}
                  </p>
                )}

                {/* No note under the button (Piotr 14.11.2026): the privacy policy link is in the strip at the bottom of the page. */}
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn btn-dark w-full sm:w-auto self-start cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-graphite"
                >
                  {state === "sending" ? c.sending : c.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
