export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">24/7 vending for your building</h1>
        <p className="mt-4 text-lg text-gray-600">Snacks, drinks, essentials. We install, stock, service. You earn.</p>
        <div className="mt-8 flex gap-3">
          <a href="/contact" className="rounded-lg px-5 py-3 bg-black text-white">Request a machine</a>
          <a href="/for-property-managers" className="rounded-lg px-5 py-3 border">See revenue model</a>
        </div>
      </section>
    </main>
  )
}
