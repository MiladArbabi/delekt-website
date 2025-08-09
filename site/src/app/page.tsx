import ContactForm from "./ContactForm";

const Nav = () => (
  <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b">
    <div className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-4 text-sm">
      <a href="#home" className="font-semibold">Delekt</a>
      <div className="hidden md:flex gap-4">
        <a href="#how">How</a>
        <a href="#machines">Machines</a>
        <a href="#revenue">Revenue</a>
        <a href="#requirements">Requirements</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

function Step({ n, title, text }: { n: number, title: string, text: string }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="h-8 w-8 rounded-full bg-indigoDeep text-white flex items-center justify-center font-bold">{n}</div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-stone">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <section id="home" className="mx-auto max-w-6xl px-6 pt-28 pb-12">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">A Delicious Selection</h1>
        <p className="mt-4 text-lg text-stone">Zero capex. Shared revenue.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#revenue" className="rounded-lg px-5 py-3 bg-indigoDeep text-white">Revenue model</a>
          <a href="#contact" className="rounded-lg px-5 py-3 border">Request machine</a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="rounded-2xl p-6 text-white bg-ink">ink</div>
        <div className="rounded-2xl p-6 border bg-paper">paper</div>
        <div className="rounded-2xl p-6 bg-lavender">lavender</div>
        <div className="rounded-2xl p-6 text-white bg-stone">stone</div>
        <div className="rounded-2xl p-6 text-white bg-indigoDeep">indigoDeep</div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid gap-6 md:grid-cols-3">
        <Step n={1} title="Site check" text="Placement & power." />
        <Step n={2} title="Install" text="Cashless setup." />
        <Step n={3} title="Restock" text="Remote monitoring." />
      </section>

      <section id="machines" className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Snacks</h3></div>
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Drinks</h3></div>
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Essentials</h3></div>
      </section>

      <section id="revenue" className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">You earn monthly</h2>
          <p className="mt-2 text-stone">Transparent share of sales.</p>
        </div>
      </section>

      <section id="requirements" className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Power</h3><p className="mt-2 text-stone">Standard outlet.</p></div>
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Footprint</h3><p className="mt-2 text-stone">Compact placement.</p></div>
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Noise</h3><p className="mt-2 text-stone">Low, lobby-ready.</p></div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div><h4 className="font-semibold">Costs?</h4><p className="text-stone">Zero capex.</p></div>
          <div><h4 className="font-semibold">Products?</h4><p className="text-stone">Tailored mixes.</p></div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-stone">Tell us about your building.</p>
        <ContactForm />
      </section>
    </main>
  );
}
