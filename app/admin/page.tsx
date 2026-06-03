export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center px-6">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
            OFFICIAL WEBSITE
          </p>

          <h1 className="text-[clamp(3rem,12vw,10rem)] font-extralight leading-none">
            ROOMCOMF
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            ООО «Румкомф» — официальный цифровой фасад компании.
          </p>

          <div className="mt-12">
            <a
              href="/facades"
              className="inline-block rounded-full bg-white px-8 py-4 text-xs uppercase tracking-[0.25em] text-black"
            >
              Перейти к фасадному направлению
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}