import tech  from "../assets/tech.jpg"
export default function Home() {
  return (
    <div className="min-h-screen relative">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
          `url(${tech})`,
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido encima del fondo */}
      <div className="relative z-10 text-white">
        
        {/* HERO SECTION */}
        <section className="hero min-h-[70vh]">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold">
                Construí tu próximo proyecto Fullstack 🚀
              </h1>
              <p className="py-6 text-lg opacity-80">
                Aplicación modelo creada con React, Node, Express y MongoDB.
                Diseño moderno con Tailwind y DaisyUI.
              </p>
              <a href="/contact" className="btn btn-ghost border-b-mist-500">
                Empezar ahora
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">⚡ Backend sólido</h2>
                <p>API REST con Express, conexión a base de datos y manejo de errores profesional.</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">🎨 Diseño moderno</h2>
                <p>Interfaz responsive usando TailwindCSS y DaisyUI con soporte para temas.</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">🔐 Arquitectura escalable</h2>
                <p>Estructura modular lista para crecer hacia un proyecto real de producción.</p>
              </div>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION FINAL */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </h2>
          <a href="/contact" className="btn btn-secondary btn-lg">
            Contactanos
          </a>
        </section>

      </div>
    </div>
  );
}