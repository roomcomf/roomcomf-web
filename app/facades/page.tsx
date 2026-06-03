const services = [
  "Вентилируемые фасады",
  "Фасадные панели",
  "Фасадная подсистема",
  "Утепление фасадов",
  "Поставка материалов",
  "Монтаж и сопровождение",
];

const advantages = [
  "Для климата Якутии",
  "Быстрая загрузка",
  "Адаптивность",
  "Прямой контакт",
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

      <section className="relative flex min-h-screen items-end px-5 pb-24 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.13),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/35">
            ROOMCOMF FACADES
          </p>

          <h1 className="max-w-6xl text-4xl font-light leading-tight sm:text-6xl md:text-7xl">
            Фасадные решения для объектов в Республике Саха Якутия.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Вентилируемые фасады, материалы, подсистемы и сопровождение объектов.
            Акцент — надежность, климат, внешний вид и понятная работа.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/70000000000"
              className="rounded-full bg-white px-7 py-4 text-center text-xs uppercase tracking-[0.25em] text-black"
            >
              Обсудить фасад
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/15 px-7 py-4 text-center text-xs uppercase tracking-[0.25em] text-white/70"
            >
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/35">
          Направления
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={item}
              className="min-h-56 border border-white/10 bg-white/[0.03] p-7 transition hover:bg-white/[0.06]"
            >
              <p className="mb-14 text-xs text-white/30">
                0{index + 1}
              </p>
              <h2 className="text-xl font-light">{item}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2">
          <h2 className="text-3xl font-light leading-tight sm:text-5xl">
            Сайт должен быстро открываться и сразу объяснять, чем занимается ROOMCOMF.
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="border-t border-white/15 pt-5">
                <p className="text-xl font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
            Контакт
          </p>

          <h2 className="max-w-4xl text-3xl font-light leading-tight sm:text-5xl">
            Нужен фасад, материал или консультация по объекту?
          </h2>

          <a
            href="https://wa.me/70000000000"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-xs uppercase tracking-[0.25em] text-black"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}