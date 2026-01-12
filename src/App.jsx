export default function App() {
  return (
    <div className="bg-[#F5F1EB] min-h-screen text-[#111]">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-6">
        <div className="text-2xl font-bold tracking-tight uppercase">
          METTLE
        </div>
        <div className="text-xs tracking-[0.4em] uppercase opacity-60">
          Hospitality Consulting
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-12">
        <div className="max-w-7xl w-full">
          
          <p className="text-xs tracking-[0.4em] uppercase mb-8 opacity-60">
            Hospitality Engineering
          </p>

          <h1 className="text-[12vw] leading-[0.9] font-black uppercase tracking-tight">
            Systems <br />
            <span className="italic text-transparent stroke-text">
              Before
            </span> <br />
            Service
          </h1>

          <div className="mt-12 max-w-xl text-lg text-gray-600">
            We design the operational architecture that allows boutique
            hospitality brands to scale, survive, and generate predictable
            returns.
          </div>

        </div>
      </section>

    </div>
  )
}
