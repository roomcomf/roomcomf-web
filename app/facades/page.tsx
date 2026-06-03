const services = [
  "Вентилируемые фасады",
  "Фасадные панели",
  "Подсистема",
  "Утепление",
  "Материалы",
  "Монтаж",
];

export default function FacadesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="text-sm tracking-[0.28em]">
            ROOMCOMF
          </a>

          <a
            href="https://wa.me/70000000000"
            className="rounded-full bg-white px-4 py-3 text-xs text-black"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
            ROOMCOMF FACADES
          </p>

          <h1 className="max-w-4xl text-4xl leading-tight sm:text-6xl">
            Фасадные решения для объектов в Республике Саха Якутия.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Вентилируемые фасады, фасадные материалы, подсистемы и утепление.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/70000000000"
              className="rounded-full bg-white px-6 py-4 text-center text-xs uppercase tracking-[0.18em] text-black"
            >
              Написать
            </a>

            <a
              href="tel:+70000000000"
              className="rounded-full border border-white/20 px-6 py-4 text-center text-xs uppercase tracking-[0.18em]"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl">
            Направления
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item}
                className="border border-white/10 p-5 text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}