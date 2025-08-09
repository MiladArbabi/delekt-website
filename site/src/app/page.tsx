export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">Sweden-wide vending</h1>
        <p className="mt-4 text-lg text-stone">Zero capex. Shared revenue.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/for-property-managers" className="rounded-lg px-5 py-3 bg-indigoDeep text-white">Revenue model</a>
          <a href="/contact" className="rounded-lg px-5 py-3 border">Request machine</a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="rounded-2xl p-6 text-white bg-ink">ink</div>
        <div className="rounded-2xl p-6 border bg-paper">paper</div>
        <div className="rounded-2xl p-6 bg-lavender">lavender</div>
        <div className="rounded-2xl p-6 text-white bg-stone">stone</div>
        <div className="rounded-2xl p-6 text-white bg-indigoDeep">indigoDeep</div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-bold">Convenience</h3>
          <p className="mt-2 text-stone">24/7 snacks, drinks, essentials.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-bold">Trust</h3>
          <p className="mt-2 text-stone">Cashless, monitored, serviced.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-bold">Revenue</h3>
          <p className="mt-2 text-stone">Transparent monthly share.</p>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Ready to pilot?</h2>
            <p className="mt-2 text-stone">We handle install, stock, support.</p>
          </div>
          <a href="/contact" className="rounded-lg px-5 py-3 bg-indigoDeep text-white">Get a quote</a>
        </div>
      </section>
    </main>
  )
}
