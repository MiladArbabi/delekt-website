import ContactForm from "./ContactForm";
import MachinesCarousel from "./MachinesCarousel";
import MachinesMixes from "./MachinesMixes";

// Images live in /site/public/machines
const machineImages = ["01.jpeg", "02.jpeg", "05.jpeg", "07.jpeg", "08.jpeg"];

const Nav = () => (
  <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b">
    <div className="mx-auto max-w-6xl px-6 h-14 flex items-center gap-4 text-sm">
      <a href="#home" className="font-semibold">Delekt</a>
      <div className="hidden md:flex gap-4">
        <a href="#how">How</a>
        <a href="#revenue">Revenue</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#home" className="ml-auto shrink-0" aria-label="Delekt home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"logo/delekt-logo-v02.png"} 
          alt="Delekt"
          className="block h-6 md:h-7 lg:h-8 w-auto"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-lavender border-t">
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center gap-5 text-sm text-ink">
      <a href="#home" aria-label="Delekt home" className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"logo/delekt-logo-v02.png"}
          alt="Delekt"
          className="h-8 md:h-9 w-auto"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </a>
      <nav className="flex flex-wrap items-center justify-center gap-4">
        <a href="#how">How</a>
        <a href="#revenue">Revenue</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="text-center opacity-80 space-y-1">
        <p>© {new Date().getFullYear()} Delekt</p>
        <p>Rosstigen 3, 16 952, Solna</p>
        <a href="mailto:info@delekt.com" className="underline decoration-dotted underline-offset-4">
          info@delekt.com
        </a>
      </div>
    </div>
  </footer>
);

function Step({ n, title, text }: { n: number; title: string; text: string }) {
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

        {/* Carousel under headline */}
        <div className="mt-6">
          <MachinesCarousel images={machineImages} intervalMs={5000} />
        </div>

        {/* Subheadline */}
        <p className="mt-6 text-lg text-stone">Zero capex. Shared revenue.</p>

        {/* CTAs (kept compact) */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#revenue" className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-indigoDeep text-white">
            Revenue model
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-5 py-3 border">
            Request machine
          </a>
        </div>
      </section>

      <section id="how" className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid gap-6 md:grid-cols-3">
          <Step n={1} title="Site check" text="Placement & power." />
          <Step n={2} title="Install" text="Cashless setup." />
          <Step n={3} title="Restock" text="Remote monitoring." />
        </div>
      </section>

      <MachinesMixes />

      <section id="revenue" className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">You earn monthly</h2>
          <p className="mt-2 text-stone">Transparent share of sales.</p>
        </div>
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
      <Footer />
    </main>
  );
}