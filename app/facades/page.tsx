const contacts = {
  phone: "+7 (925) 847-99-99",
  whatsapp: "https://wa.me/79258479999",
  telegram: "https://t.me/roomcomf",
  instagram: "https://instagram.com/roomcomf",
  email: "mailto:roomcomf@mail.ru",
};

const groups = [
  {
    title: "Металлокассеты",
    items: [
      "Platinum открытого типа",
      "Platinum закрытого типа",
      "0.5 / 0.7 / 1.0 / 1.2 мм",
      "Порошковая покраска RAL",
    ],
  },
  {
    title: "Подсистема",
    items: [
      "Г-, П-, Z-, T-, C-профили",
      "Кронштейны КР",
      "Кронштейны ККУ",
      "Кляммера",
    ],
  },
  {
    title: "Комплектующие",
    items: [
      "Аквилон",
      "Доборные элементы",
      "Короба кондиционеров",
      "Анкера и заклёпки",
    ],
  },
  {
    title: "Профильные системы",
    items: [
      "ПП / ППН",
      "ПН / ПС",
      "ПУ / ПМ",
      "Подвесы, крабы, тяги",
    ],
  },
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
            href={contacts.whatsapp}
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

          <h1 className="max-w-5xl text-4xl leading-tight sm:text-6xl">
            Фасадные материалы под заказ для объектов в Якутии.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/60">
            Металлокассеты, подсистема, крепёж, комплектующие и профильные
            системы. Подбор, расчёт, поставка и логистика под задачи объекта.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contacts.whatsapp}
              className="rounded-full bg-white px-6 py-4 text-center text-xs uppercase tracking-[0.18em] text-black"
            >
              Отправить спецификацию
            </a>

            <a
              href={contacts.email}
              className="rounded-full border border-white/20 px-6 py-4 text-center text-xs uppercase tracking-[0.18em]"
            >
              Написать на почту
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-4xl text-3xl leading-tight sm:text-5xl">
            Без лишних посредников. Без искусственных наценок.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/60">
            Если вы нашли фасадные материалы в Якутии дешевле — отправьте нам
            предложение. Мы постараемся сделать условия выгоднее.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/40">
            Материалы
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.title} className="border border-white/10 p-6">
                <h3 className="text-2xl">{group.title}</h3>

                <ul className="mt-6 space-y-3 text-white/60">
                  {group.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-white/35">
                  Поставка под заказ. Цена по запросу.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-4xl text-3xl leading-tight sm:text-5xl">
            Расчёт, подбор и логистику можно доверить нам.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/60">
            ROOMCOMF работает напрямую с транспортными компаниями и помогает
            организовать поставку без лишних нервов для клиента.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
            Ответственность
          </p>

          <p className="max-w-3xl text-base leading-7 text-white/60">
            Как генеральный директор компании, я лично заинтересован в качестве
            материалов, сохранности поставки, нормальном взаимодействии с
            заказчиком и честном подходе к объекту.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-5xl">Контакты</h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a className="border border-white/10 p-5" href={contacts.whatsapp}>
              WhatsApp: {contacts.phone}
            </a>

            <a className="border border-white/10 p-5" href={contacts.email}>
              Email: roomcomf@mail.ru
            </a>

            <div className="border border-white/10 p-5">
              MAX: {contacts.phone}
            </div>

            <a className="border border-white/10 p-5" href={contacts.telegram}>
              Telegram: @roomcomf
            </a>

            <a className="border border-white/10 p-5" href={contacts.instagram}>
              Instagram: @roomcomf
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}