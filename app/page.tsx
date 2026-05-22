export default function HomePage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.9)",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <h1
          style={{
            letterSpacing: "0.3em",
            fontSize: "28px",
          }}
        >
          ROOMCOMF
        </h1>

        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          <span>Услуги</span>
          <span>Материалы</span>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "90px",
              letterSpacing: "0.35em",
              marginBottom: "20px",
            }}
          >
            ROOMCOMF
          </h2>

          <p
            style={{
              color: "#888",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Надёжные фасадные решения
          </p>
        </div>
      </section>
    </main>
  );
}