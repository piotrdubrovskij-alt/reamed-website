export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4A90D9]">
          Kineziтerapijos klinika · Vilnius
        </p>
        <h1 className="mb-6 text-5xl font-bold text-[#1a1a2e] sm:text-6xl">
          Rea<span className="text-[#2B6CB0]">Med</span>
        </h1>
        <p className="mb-10 text-lg text-gray-500">
          Svetainė kuriama. Greitai atidarome duris.
        </p>
        <a
          href="mailto:info@reamed.lt"
          className="inline-block rounded-full bg-[#2B6CB0] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1A4F8A]"
        >
          Susisiekti
        </a>
      </div>
    </main>
  );
}
