const services = [
  "Вентилируемые фасады",
  "Фасадные панели",
  "Подсистема",
  "Утепление фасадов",
  "Фасадные материалы",
  "Монтаж и сопровождение",
];

export default function FacadesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="/" className="text-sm font-light tracking-[0.35em]">
            ROOMCOMF
          </a>

          <a
            href="https://wa.me/70000000000"
            className="rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.2em] text-black"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="flex min-h-screen items-end px-5 pb-24 pt-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/35">
            ROOMCOMF FACADES
          </p>

          <h1 className="max-w-5xl text-4xl font-light leading-tight sm:text-6xl">
            Фасадные решения для объектов в Республике Саха Якутия.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Современные фасады, материалы, подсистемы и сопровождение объектов.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/35">
          Направления
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item}
              className="min-h-52 border border-white/10 bg-white/[0.03] p-7"
            >
              <h2 className="text-xl font-light">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}