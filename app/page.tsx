export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white overflow-hidden">

      {/* HEADER */}

      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl tracking-[0.45em] font-light">
            ROOMCOMF
          </h1>

          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[0.3em] text-white/70">
            <a href="#">Услуги</a>
            <a href="#">Материалы</a>
            <a href="#">Проекты</a>
            <a href="#">Контакты</a>
          </nav>

        </div>
      </header>




      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]"></div>
        <div className="relative z-10">

          <p className="uppercase tracking-[0.4em] text-white/40 text-sm mb-6">
            Якутия • Москва • Россия
          </p>

<h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-[0.02em] sm:tracking-[0.15em] md:tracking-[0.3em] drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">          </h2>

          <p className="mt-6 text-white/50 uppercase tracking-[0.45em] text-sm">
            Надежные фасадные решения
          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className="border-t border-white/10">

        <div className="grid md:grid-cols-3">

          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-3xl mb-6">Фасадные системы</h3>

            <p className="text-white/50 leading-8">
              Современные фасадные решения для коммерческих
              и жилых объектов любой сложности.
            </p>
          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-3xl mb-6">Проектирование</h3>

            <p className="text-white/50 leading-8">
              Комплексный подход к архитектурным
              и фасадным проектам.
            </p>
          </div>

          <div className="p-10">
            <h3 className="text-3xl mb-6">Монтаж</h3>

            <p className="text-white/50 leading-8">
              Опыт работы на крупных объектах
              по всей России.
            </p>
          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-40 px-6 border-t border-white/10">

        <div className="max-w-5xl mx-auto">

          <p className="text-white/30 uppercase tracking-[0.4em] text-sm mb-10">
            О компании
          </p>

          <h3 className="text-text-[4rem] md:text-6xl leading-tight font-light">
            ROOMCOMF —
            это инженерный подход,
            строгая система и работа
            на долгий результат.
          </h3>

          <p className="mt-10 text-white/50 text-lg leading-9 max-w-3xl">
            Компания специализируется на фасадных системах,
            проектировании и комплексной реализации объектов
            в сложных климатических условиях.
          </p>

        </div>

      </section>

    </main>
  );
}