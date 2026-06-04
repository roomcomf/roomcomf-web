export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          letterSpacing: "12px",
          marginBottom: "20px",
        }}
      >
        ROOMCOMF
      </h1>

      <p
        style={{
          fontSize: "20px",
          opacity: 0.7,
        }}
      >
        Фасадные системы и строительные материалы
      </p>
    </main>
  );
}