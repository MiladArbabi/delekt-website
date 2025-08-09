import MachinesCarousel from "./MachinesCarousel";
import ContactForm from "./ContactForm";

const Nav = () => (
  <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b">
    <div className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-4 text-sm">
      <a href="#home" className="font-semibold">Delekt</a>
      <div className="hidden md:flex gap-4">
        <a href="#how">How</a>
        <a href="#revenue">Revenue</a>
        <a href="#requirements">Requirements</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />

      <section id="home" className="mx-auto max-w-6xl px-6 pt-28 pb-12">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          A Delicious Selection
        </h1>

        {/* 👉 Carousel right under the headline */}
        <div className="mt-6 rounded-2xl overflow-hidden border">
          <MachinesCarousel
            images={["01.jpeg", "02.jpeg", "05.jpeg", "07.jpeg", "08.jpeg"]}
            intervalMs={5000}
          />
        </div>

        {/* Subheadline now comes after the carousel */}
        <p className="mt-4 text-lg text-stone">Zero capex. Shared revenue.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#revenue" className="rounded-lg px-5 py-3 bg-indigoDeep text-white">Revenue model</a>
          <a href="#contact" className="rounded-lg px-5 py-3 border">Request machine</a>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigoDeep text-white text-sm font-bold">1</span>
            <div>
              <h3 className="text-xl font-bold">Site check</h3>
              <p className="mt-1 text-stone">Placement & power.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigoDeep text-white text-sm font-bold">2</span>
            <div>
              <h3 className="text-xl font-bold">Install</h3>
              <p className="mt-1 text-stone">Cashless setup.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigoDeep text-white text-sm font-bold">3</span>
            <div>
              <h3 className="text-xl font-bold">Restock</h3>
              <p className="mt-1 text-stone">Remote monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue */}
      <section id="revenue" className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">You earn monthly</h2>
          <p className="mt-2 text-stone">Transparent share of sales.</p>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Power</h3><p className="mt-2 text-stone">Standard outlet.</p></div>
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Footprint</h3><p className="mt-2 text-stone">Compact placement.</p></div>
        <div className="rounded-2xl border p-6"><h3 className="text-xl font-bold">Noise</h3><p className="mt-2 text-stone">Low, lobby-ready.</p></div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div><h4 className="font-semibold">Costs?</h4><p className="text-stone">Zero capex.</p></div>
          <div><h4 className="font-semibold">Products?</h4><p className="text-stone">Tailored mixes.</p></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-stone">Tell us about your building.</p>
        <ContactForm />
      </section>
    </main>
  );
}
