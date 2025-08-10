export default function MachinesMixes() {
  const lineup = [
    {
      name: "Compact Snack",
      desc: "Slim snack vendor for tighter spaces.",
      bullets: ["~24–30 selections", "Cashless only", "Great for offices"],
    },
    {
      name: "Chilled Drinks",
      desc: "Cold cans & bottles.",
      bullets: ["Single-temp", "Card + mobile pay", "Lobbies, gyms"],
    },
    {
      name: "Combo 32",
      desc: "Snacks + drinks in one unit.",
      bullets: ["Dual-temp", "Mixed shelves", "Apartments, schools"],
    },
  ];

  return (
    <section id="machines" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-3xl font-bold">Machines & mixes</h2>
      <p className="mt-2 text-stone">Neutral lineup. Example products only.</p>

      {/* Lineup */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {lineup.map((m) => (
          <div key={m.name} className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">{m.name}</h3>
            <p className="mt-2 text-stone">{m.desc}</p>
            <ul className="mt-4 list-disc pl-5 text-stone">
              {m.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}