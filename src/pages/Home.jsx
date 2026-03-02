import tech from "../assets/tech.jpg";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${tech})`,
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
                <p>
                  API REST con Express, conexión a base de datos y manejo de
                  errores profesional.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg ">
              <div className="card-body">
                <h2 className="card-title">🎨 Diseño moderno</h2>
                <p>
                  Interfaz responsive usando TailwindCSS y DaisyUI con soporte
                  para temas.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">🔐 Arquitectura escalable</h2>
                <p>
                  Estructura modular lista para crecer hacia un proyecto real de
                  producción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*SKILLS  */}

        <section>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full relative">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full"
              />

              {/* Overlay para legibilidad */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Texto encima */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Cristo Vive</h3>
                <p className="text-sm md:text-base opacity-90">
                  Nuestro Señor y Salvador.
                </p>
              </div>
            </div>

            <div id="item2" className="carousel-item w-full relative">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
              {/* Overlay para legibilidad */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Texto encima */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Reinara por siempre</h3>
                <p className="text-sm md:text-base opacity-90">
                  Por los siglos de los siglos.
                </p>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full relative">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />

              {/* Overlay para legibilidad */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Texto encima */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">Unico y verdadero Dios</h3>
                <p className="text-sm md:text-base opacity-90">
                  Cristo Jesus mi plenitud.
                </p>
              </div>
            </div>
            <div id="item4" className="carousel-item w-full relative">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />

              {/* Overlay para legibilidad */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Texto encima */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">TE AMO DIOS</h3>
                <p className="text-sm md:text-base opacity-90">En vos confio</p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </section>

        {/*3d   SECTION*/}
        <section className="py-16">
          <div className="w-full flex justify-center">
            <div className="hover-3d mx-auto">
              <figure className="w-[320px] md:w-[420px] rounded-2xl overflow-hidden">
                <img
                  src="https://img.daisyui.com/images/stock/creditcard.webp"
                  alt="3D card"
                  className="w-full h-auto block"
                />
              </figure>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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
