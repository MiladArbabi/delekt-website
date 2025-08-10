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

  const mixes = [
    {
      title: "Snacks",
      items: ["Lay’s", "Doritos", "Pringles", "KitKat", "Snickers", "Twix"],
    },
    {
      title: "Drinks",
      items: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "Red Bull", "Water"],
    },
    {
      title: "Essentials",
      items: ["Gum", "Mints", "Protein bar", "Trail mix"],
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

      {/* Example mixes */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {mixes.map((group) => (
          <div key={group.title} className="rounded-2xl border p-6">
            <h4 className="font-semibold">{group.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border px-3 py-1 text-sm text-stone"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}