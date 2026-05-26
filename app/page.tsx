import { adminTools, company, directions, values } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="text-sm font-light tracking-[0.4em]">
            {company.brand}
          </a>

          <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-white/50 md:flex">
            <a href="#directions">Направления</a>
            <a href="#control">Управление</a>
            <a href="#company">ООО</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <a
            href={company.whatsapp}
            className="rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.2em] text-black"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end px-5 pb-24 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/35">
            One company. One system. One future.
          </p>

          <h1 className="text-[clamp(3rem,13vw,12rem)] font-extralight leading-[0.85] tracking-[0.01em]">
            ROOMCOMF
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h2 className="max-w-5xl text-3xl font-light leading-tight sm:text-5xl md:text-6xl">
              Цифровой центр управления одним сильным ООО.
            </h2>

            <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              {company.legal} — сайт, который должен не просто показывать компанию,
              а помогать управлять направлениями, заявками, объектами, материалами и репутацией.
            </p>
          </div>
        </div>
      </section>

      <section id="directions" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
          Направления
        </p>

        <h2 className="mb-14 max-w-4xl text-3xl font-light leading-tight sm:text-5xl">
          Всё выгодное — в одной компании. Без хаоса из разных ИП и ООО.
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((item, index) => (
            <div key={item} className="min-h-52 border border-white/10 bg-white/[0.03] p-7">
              <p className="mb-14 text-xs text-white/30">0{index + 1}</p>
              <h3 className="text-xl font-light">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="control" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Панель будущего
            </p>

            <h2 className="text-3xl font-light leading-tight sm:text-5xl">
              Сайт должен выручать администратора, а не быть мертвой страницей.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {adminTools.map((item) => (
              <div key={item} className="border border-white/10 bg-black p-5">
                <p className="text-lg font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
          Фундамент
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div key={item} className="border-t border-white/15 pt-6">
              <p className="text-2xl font-light">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="company" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:py-32 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Официальная информация
            </p>

            <h2 className="text-3xl font-light leading-tight sm:text-5xl">
              {company.legal}
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-white/55">
            <p>{company.inn}</p>
            <p>{company.ogrn}</p>
            <p>{company.address}</p>
            <p>Email: {company.email}</p>
            <p>Телефон: {company.phone}</p>
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 md:p-16">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
            Контакты
          </p>

          <h2 className="max-w-5xl text-3xl font-light leading-tight sm:text-5xl">
            ROOMCOMF — не просто сайт. Это начало системы управления компанией.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a href={company.whatsapp} className="rounded-full bg-white px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-black">
              WhatsApp
            </a>

            <a href={`mailto:${company.email}`} className="rounded-full border border-white/15 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-white/70">
              Email
            </a>

            <a href={`tel:${company.phone}`} className="rounded-full border border-white/15 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-white/70">
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}