const stats = [
  { value: "12+", label: "metų patirties" },
  { value: "5000+", label: "pacientų" },
  { value: "⭐ 5.0", label: "Google įvertinimas" },
];

export default function TrustBar() {
  return (
    <div style={{ background: "#7DB9B5" }}>
      <div className="container-xl">
        <div className="grid grid-cols-3 divide-x divide-white/20 py-5 md:py-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-4 md:px-8">
              <span className="text-[1.625rem] md:text-[2rem] font-bold text-white leading-none">
                {value}
              </span>
              <span className="text-[0.75rem] md:text-[0.875rem] text-white/75 text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
