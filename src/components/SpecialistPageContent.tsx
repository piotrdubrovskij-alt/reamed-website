"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists, type Specialist } from "@/lib/specialists";
import type { Language } from "@/lib/translations";
import { GOOGLE_REVIEWS, getReviews, type SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, firstSentences, specialistPhoto } from "@/components/reviews/format";

// Specialist page, mockup G: docs/design/redesign-g/specialistas.html and the
// «Страница специалиста» section of its README. One component for all five;
// a block without data (courses, languages) is left out.

const COURSES_PREVIEW = 6;

const LANGUAGES_EN: Record<string, string> = {
  Lietuvių: "Lithuanian",
  Rusų: "Russian",
  Anglų: "English",
};

// {name}: the first name, accusative in Lithuanian where the phrase needs it.
const copy = {
  lt: {
    facts: "Licencija ir kalbos",
    licence: "Licencija",
    book: "Registruotis pas {name}",
    help: "Kuo gali padėti",
    methods: "Metodai",
    education: "Išsilavinimas ir kvalifikacija",
    studies: "Studijos",
    courses: "Kvalifikacijos tobulinimas",
    showAll: "Rodyti visus ({n})",
    showLess: "Rodyti mažiau",
    reviewsAbout: "Atsiliepimai apie {name}",
    reviewsClinic: "Atsiliepimai apie kliniką",
    allReviews: "Visi atsiliepimai Google",
    others: "Kiti specialistai",
  },
  en: {
    facts: "Licence and languages",
    licence: "Licence",
    book: "Book with {name}",
    help: "How {name} can help",
    methods: "Methods",
    education: "Education and qualifications",
    studies: "Studies",
    courses: "Professional development",
    showAll: "Show all ({n})",
    showLess: "Show less",
    reviewsAbout: "Reviews about {name}",
    reviewsClinic: "Reviews about the clinic",
    allReviews: "All reviews on Google",
    others: "Other specialists",
  },
} as const;

const sectionY = "py-18 desk:py-30";
const h2Big = "text-[clamp(34px,3.9vw,56px)] font-medium leading-[1.02] tracking-[-0.025em] text-balance";
const groupTitle = "text-body font-medium leading-[1.4] text-graphite";
// Two columns from `desk:`; the gap grows to 96px from 1101px (in rem, so it sorts after `desk:`).
const twoCols = "flex flex-col gap-10 desk:grid desk:gap-x-14 min-[68.8125rem]:gap-x-24";
const dotItem =
  "relative pl-5 text-body leading-[1.4] before:absolute before:left-0 before:top-[0.6em] before:size-[7px] before:rounded-full before:bg-mint before:content-['']";

type DatedRow = { date: string; title: string; org?: string };

/** "2011–2013 · Text" → { date: "2011–2013", title: "Text" }. */
function educationRow(item: string): DatedRow {
  const i = item.indexOf(" · ");
  return i === -1 ? { date: "", title: item } : { date: item.slice(0, i), title: item.slice(i + 3) };
}

/** "date|title|organiser" → { date, title, org }. */
function courseRow(item: string): DatedRow {
  const [date = "", title = item, org] = item.split("|");
  return { date, title, org: org || undefined };
}

function languagesLine(languages: string[], lang: Language): string {
  if (lang === "en") return languages.map((l) => LANGUAGES_EN[l] ?? l).join(", ");
  // Lithuanian: only the first word is capitalised ("Lietuvių, rusų, anglų").
  return languages.map((l, i) => (i > 0 ? l.toLowerCase() : l)).join(", ");
}

function DotList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className={dotItem}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// "Date | text" rows. The date column is 96 / 104px, or as wide as the longest date
// (subgrid), so "2022.10.27–11.02" stays on one line.
function DatedList({ rows, ruled = false, id }: { rows: DatedRow[]; ruled?: boolean; id?: string }) {
  return (
    <ul
      id={id}
      className={`mt-4 grid grid-cols-[minmax(96px,max-content)_1fr] gap-x-3.5 desk:grid-cols-[minmax(104px,max-content)_1fr] desk:gap-x-5 ${
        ruled ? "" : "gap-y-5.5"
      }`}
    >
      {rows.map((row, i) => (
        <li
          key={`${row.date}-${row.title}`}
          className={`col-span-2 grid grid-cols-subgrid text-[17px] desk:text-body ${
            ruled ? `leading-[1.4] ${i === 0 ? "pb-3" : "border-t border-rule py-3"}` : "leading-[1.45]"
          }`}
        >
          <span className="font-medium text-graphite tabular-nums whitespace-nowrap">{row.date}</span>
          <span>
            {row.title}
            {row.org && <span className="block mt-0.5 text-small text-graphite">{row.org}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function SpecialistPageContent({ specialist: s }: { specialist: Specialist }) {
  const { lang, t } = useLanguage();
  const c = copy[lang];
  const isLt = lang === "lt";
  const slug = s.slug as SpecialistSlug;
  const firstName = s.name.split(" ")[0];
  const nameIn = (phrase: string) => phrase.replace("{name}", isLt ? (s.nameAccusative ?? firstName) : firstName);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesId = useId();

  const [aboutLead, ...aboutRest] = isLt ? s.about : s.aboutEn;
  const conditions = (isLt ? s.conditions : s.conditionsEn) ?? [];
  const expertise = isLt ? s.expertise : s.expertiseEn;
  const education = (isLt ? s.education : s.educationEn).map(educationRow);
  const courses = ((isLt ? s.courses : s.coursesEn) ?? []).map(courseRow);
  const visibleCourses = coursesOpen ? courses : courses.slice(0, COURSES_PREVIEW);

  // Two reviews about this specialist; with fewer, two about the clinic as a whole.
  const own = getReviews({ specialist: slug, limit: 2 });
  const aboutClinic = own.length < 2;
  const quotes = aboutClinic ? getReviews({ noSpecialist: true, limit: 2 }) : own;

  const others = specialists.filter((o) => o.slug !== s.slug);
  const hasFacts = !!s.license || !!s.languages?.length;

  return (
    <>
      {/* 1. Header: graphite, name in mint, the photo arch on the right (on the phone above the text, everything centred). */}
      <section
        aria-labelledby="specialist-h"
        className="bg-graphite text-white pt-8 pb-14 desk:pt-14 desk:pb-18 [--focus-ring:var(--color-mint)]"
      >
        <div className="wrap">
          <div className="flex flex-col-reverse items-center gap-6 text-center desk:grid desk:grid-cols-[minmax(0,1fr)_256px] desk:items-center desk:gap-x-14 desk:text-left min-[68.8125rem]:gap-x-24">
            <div className="w-full">
              <h1
                id="specialist-h"
                className="mx-auto max-w-[288px] text-[30px] leading-[1.1] tracking-[-0.02em] font-medium desk:mx-0 desk:max-w-none desk:text-[clamp(46px,5.4vw,78px)] desk:leading-[1.02] desk:tracking-[-0.025em] text-balance text-mint"
              >
                {s.name}
              </h1>
              <p className="mx-auto mt-4 desk:mx-0 desk:mt-6 max-w-[30ch] text-lead desk:text-lead-l leading-[1.35] desk:leading-[1.35] font-medium">
                {isLt ? s.role : s.roleEn}
              </p>
              <p className="mx-auto mt-3 desk:mx-0 max-w-[40ch] text-lead-m desk:text-lead leading-[1.45] desk:leading-[1.45] text-on-dark">
                {isLt ? s.tagline : s.taglineEn}
              </p>
              {hasFacts && (
                <ul aria-label={c.facts} className="mt-7 flex flex-wrap justify-center desk:justify-start gap-x-6 gap-y-2 text-small text-on-dark">
                  {s.license && (
                    <li className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-mint" />
                      {c.licence} {s.license}
                    </li>
                  )}
                  {s.languages?.length ? (
                    <li className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-mint" />
                      {languagesLine(s.languages, lang)}
                    </li>
                  ) : null}
                </ul>
              )}
              <div className="mt-7 desk:mt-10 flex flex-wrap items-center justify-center desk:justify-start gap-x-7 gap-y-4">
                <Link href="/registracija" className="btn btn-mint w-full desk:w-auto">
                  {nameIn(c.book)}
                </Link>
                <a
                  href={t.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[52px] text-body font-medium text-white no-underline"
                >
                  <Phone size={22} aria-hidden="true" className="text-mint" />
                  {t.contact.phone}
                </a>
              </div>
            </div>
            <Image
              src={specialistPhoto(slug)}
              alt=""
              width={640}
              height={800}
              sizes="(min-width: 821px) 256px, 288px"
              preload
              className="w-[min(100%,288px)] desk:w-full h-auto aspect-[4/5] object-cover rounded-t-full"
            />
          </div>
        </div>
      </section>

      {/* 2. About: the first paragraph as a lead phrase, then a paper panel with conditions and methods. */}
      <section className={sectionY}>
        <div className="wrap">
          <p className="max-w-[34ch] text-[24px] desk:text-h3 leading-[1.22] desk:leading-[1.22] tracking-[-0.015em] font-medium text-pretty">
            {aboutLead}
          </p>
          {aboutRest.length > 0 && (
            <div className="mt-6 desk:mt-8 max-w-[62ch] flex flex-col gap-5.5 text-body">
              {aboutRest.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          )}
          <div
            className={`mt-10 desk:mt-16 rounded-[24px] desk:rounded-[28px] bg-paper px-5 pt-7 pb-8 desk:px-10 desk:pt-10 desk:pb-11 flex flex-col gap-8 ${
              conditions.length ? "desk:grid desk:grid-cols-2 desk:gap-x-16" : ""
            }`}
          >
            {conditions.length > 0 && (
              <div>
                <h2 className="text-lead font-medium leading-[1.4]">{nameIn(c.help)}</h2>
                <DotList items={conditions} />
              </div>
            )}
            <div>
              <h2 className="text-lead font-medium leading-[1.4]">{c.methods}</h2>
              <DotList items={expertise} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Education on the left, courses on the right; with no courses, education takes the full width. */}
      <section aria-labelledby="education-h" className={`bg-paper ${sectionY}`}>
        <div className="wrap">
          <h2 id="education-h" className={h2Big}>
            {c.education}
          </h2>
          <div
            className={`mt-9 desk:mt-14 ${twoCols} ${
              courses.length ? "desk:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]" : "desk:grid-cols-1"
            }`}
          >
            <div>
              <h3 className={groupTitle}>{c.studies}</h3>
              <DatedList rows={education} />
            </div>
            {courses.length > 0 && (
              <div>
                <h3 className={groupTitle}>{c.courses}</h3>
                <DatedList rows={visibleCourses} ruled id={coursesId} />
                {courses.length > COURSES_PREVIEW && (
                  <button
                    type="button"
                    aria-expanded={coursesOpen}
                    aria-controls={coursesId}
                    onClick={() => setCoursesOpen((v) => !v)}
                    className="link-action mt-6 inline-flex items-center gap-2 min-h-11 text-body cursor-pointer"
                  >
                    {coursesOpen ? c.showLess : c.showAll.replace("{n}", String(courses.length))}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`motion-safe:transition-transform motion-safe:duration-200 ${coursesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Two reviews, verbatim, cut only at whole sentences. */}
      {quotes.length > 0 && (
        <section aria-labelledby="reviews-h" className={sectionY}>
          <div className="wrap">
            <h2 id="reviews-h" className={h2Big}>
              {aboutClinic ? c.reviewsClinic : nameIn(c.reviewsAbout)}
            </h2>
            <div className={`mt-9 desk:mt-14 ${twoCols} desk:grid-cols-2`}>
              {quotes.map((r) => (
                <figure key={r.id}>
                  <blockquote>
                    <p className="text-[22px] desk:text-[clamp(22px,1.9vw,26px)] leading-[1.35] tracking-[-0.01em] font-medium text-pretty">
                      {r.lang === "lt" ? "„" : "“"}
                      {firstSentences(r.text, 3)}
                      {r.lang === "lt" ? "“" : "”"}
                    </p>
                  </blockquote>
                  <figcaption className="mt-5 text-small text-graphite">
                    <span className="font-medium text-ink">{r.author}</span> · Google
                  </figcaption>
                </figure>
              ))}
            </div>
            <a
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-action mt-10 inline-flex items-center min-h-11 text-body"
            >
              {c.allReviews}
            </a>
          </div>
        </section>
      )}

      {/* 5. The other four: small arch, name and role. Two per row until 1101px, where four fit. */}
      <section aria-labelledby="others-h" className={`bg-paper ${sectionY}`}>
        <div className="wrap">
          <h2 id="others-h" className="text-h3 font-medium text-balance">
            {c.others}
          </h2>
          <ul className="mt-6 desk:mt-10 flex flex-col gap-2 desk:grid desk:grid-cols-2 desk:gap-8 min-[68.8125rem]:grid-cols-4">
            {others.map((o) => {
              const oSlug = o.slug as SpecialistSlug;
              return (
                <li key={oSlug}>
                  <Link
                    href={`/specialistai/${oSlug}`}
                    className="group grid grid-cols-[72px_1fr] items-center gap-x-4 min-h-[88px] desk:grid-cols-[96px_1fr] desk:gap-x-5 desk:min-h-[120px] no-underline"
                  >
                    <Image
                      src={specialistPhoto(oSlug)}
                      alt=""
                      width={640}
                      height={800}
                      sizes="(min-width: 821px) 96px, 72px"
                      className="w-full h-auto aspect-[4/5] object-cover rounded-t-full"
                    />
                    <span>
                      <span className="block text-body font-medium leading-[1.3] group-hover:underline group-hover:decoration-mint group-hover:decoration-2 group-hover:underline-offset-[5px]">
                        {SPECIALIST_NAMES[oSlug]}
                      </span>
                      <span className="block mt-1 text-small text-graphite">{isLt ? o.role : o.roleEn}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
