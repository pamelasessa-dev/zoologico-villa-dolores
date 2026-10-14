
import { useState } from "react";
import { animales } from "./datos/animales";
import { CardAnimal } from "./componentes/CardAnimal";

type Seccion = "inicio" | "animales" | "guia";

const paradas = [
  {
    numero: "01",
    hora: "Inicio · 10:30",
    titulo: "Acceso histórico y jardines",
    descripcion:
      "Comenzá por el acceso de Av. General Rivera 3245. Recorré los espacios verdes y acercate a la fuente junto a la casona.",
    detalle: "Punto de partida para conocer el parque",
    icono: "🌳",
  },
  {
    numero: "02",
    hora: "Continuación · 11:00",
    titulo: "Sector de animales",
    descripcion:
      "Dedicá tiempo a observar los animales y conocer más sobre la conservación de la fauna. Respetá los recintos y seguí las indicaciones del personal.",
    detalle: "Consultá el horario del sector antes de visitar",
    icono: "🦜",
  },
  {
    numero: "03",
    hora: "Pausa sugerida · 14:00",
    titulo: "Planetario y descanso",
    descripcion:
      "Si hay funciones disponibles, podés complementar el paseo con una visita al Planetario de Montevideo. También podés descansar y disfrutar de las áreas verdes.",
    detalle: "Las funciones pueden requerir reserva previa",
    icono: "🪐",
  },
  {
    numero: "04",
    hora: "Final del paseo · 16:00",
    titulo: "Parque de la Amistad",
    descripcion:
      "Terminá la visita en este espacio inclusivo, con propuestas recreativas pensadas para que niñas y niños puedan jugar y compartir.",
    detalle: "Ideal para cerrar el paseo en familia",
    icono: "♿",
  },
];

function App() {
  const [seccion, setSeccion] = useState<Seccion>("inicio");

  return (
    <main className="min-h-screen bg-[#F4F6F0]">
      
      <header className="border-b border-stone-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => setSeccion("inicio")}
            className="text-left text-lg font-bold text-[#1B4332] sm:text-xl"
          >
            🌿 Villa Dolores
          </button>

          <div className="flex flex-wrap items-center justify-end gap-1 sm:gap-3">
            {(
              [
                ["inicio", "Inicio"],
                ["animales", "Animales"],
                ["guia", "Guía turística"],
              ] as [Seccion, string][]
            ).map(([valor, texto]) => (
              <button
                key={valor}
                type="button"
                onClick={() => setSeccion(valor)}
                aria-current={seccion === valor ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                  seccion === valor
                    ? "bg-[#1B4332] text-white"
                    : "text-stone-600 hover:bg-green-50"
                }`}
              >
                {texto}
              </button>
            ))}
          </div>
        </nav>
      </header>

      
      {seccion === "inicio" && (
        <>
          <section className="relative isolate flex min-h-[480px] items-center overflow-hidden sm:min-h-[560px]">
            <img
              src="https://ciemsa.com.uy/wp-content/uploads/2023/07/20fa7604-8e9c-47a6-9ab3-8b42f2fc537b.jpg"
              alt="Entrada del Parque Villa Dolores"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102C20]/90 via-[#102C20]/65 to-[#102C20]/20" />

            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
                Naturaleza · Descubrimiento · Aprendizaje
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Descubrí el Parque Villa Dolores
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                Conocé la fauna, explorá los espacios verdes y planificá
                una visita para disfrutar de la naturaleza en Montevideo.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSeccion("animales")}
                  className="rounded-full bg-[#DCE9D6] px-6 py-3 font-semibold text-[#1B4332] transition hover:bg-white"
                >
                  Explorar animales →
                </button>

                <button
                  type="button"
                  onClick={() => setSeccion("guia")}
                  className="rounded-full border border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Ver recorrido
                </button>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-14 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Tu próxima visita
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1B4332] sm:text-4xl">
              Un paseo para descubrir
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-stone-600">
              Prepará tu recorrido, conocé los espacios del parque y
              descubrí por qué es importante cuidar la naturaleza.
            </p>

            <button
              type="button"
              onClick={() => setSeccion("guia")}
              className="mt-7 rounded-full bg-[#1B4332] px-6 py-3 font-semibold text-white transition hover:bg-[#2D6A4F]"
            >
              Conocer la guía turística
            </button>
          </section>
        </>
      )}

     
      {seccion === "animales" && (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Conocé la fauna
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1B4332] sm:text-4xl">
            Animales
          </h1>

          <p className="mt-3 mb-8 max-w-2xl leading-relaxed text-stone-600">
            Explorá las fichas informativas y descubrí las características
            de cada animal.
          </p>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {animales.map((animal) => (
              <CardAnimal key={animal.nombre} {...animal} />
            ))}
          </div>
        </section>
      )}

  
      {seccion === "guia" && (
        <>
          <section className="bg-[#1B4332] px-5 py-12 text-white sm:py-16">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
                Planificá tu visita
              </p>

              <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">
                Una ruta para disfrutar Villa Dolores
              </h1>

              <p className="mt-5 max-w-2xl leading-relaxed text-white/85">
                Un recorrido orientativo por los espacios verdes, el sector
                de animales y otros lugares de interés. Adaptá los tiempos
                según tus preferencias y las actividades disponibles.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-white/10 px-4 py-2">
                  📍 Av. Rivera 3245
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  🌿 Paseo al aire libre
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  👨‍👩‍👧 Para disfrutar en familia
                </span>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
            <div className="mb-9">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Tu itinerario
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#1B4332] sm:text-3xl">
                Cuatro paradas para descubrir
              </h2>
              <p className="mt-3 text-stone-600">
                Los horarios son sugeridos, no corresponden a una visita
                guiada oficial.
              </p>
            </div>

            <div className="space-y-5">
              {paradas.map((parada) => (
                <article
                  key={parada.numero}
                  className="flex flex-col gap-4 rounded-3xl border border-stone-200/70 bg-white p-5 shadow-sm sm:flex-row sm:gap-6 sm:p-7"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E5EDE0] text-2xl">
                    {parada.icono}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-emerald-700">
                        PARADA {parada.numero}
                      </span>
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                        {parada.hora}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-[#1B4332]">
                      {parada.titulo}
                    </h3>

                    <p className="mt-2 leading-relaxed text-stone-600">
                      {parada.descripcion}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-emerald-800">
                      {parada.detalle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Antes de salir
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#1B4332] sm:text-3xl">
                Información práctica
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl bg-[#F4F6F0] p-5">
                  <h3 className="font-bold text-[#1B4332]">
                    📍 Cómo llegar
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    Avenida General Rivera 3245, Montevideo.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Parque+Villa+Dolores+Montevideo"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-emerald-800 underline underline-offset-4"
                  >
                    Ver ubicación en el mapa ↗
                  </a>
                </article>

                <article className="rounded-2xl bg-[#F4F6F0] p-5">
                  <h3 className="font-bold text-[#1B4332]">
                    🕒 Horarios del sector animal
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    La información institucional consultada indica apertura
                    de miércoles a domingo, de 10:30 a 18:30. Verificá
                    posibles cambios antes de salir.
                  </p>
                  <a
                    href="https://montevideo.gub.uy/parques-de-montevideo/parque-villa-dolores"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-emerald-800 underline underline-offset-4"
                  >
                    Consultar sitio oficial ↗
                  </a>
                </article>

                <article className="rounded-2xl bg-[#F4F6F0] p-5">
                  <h3 className="font-bold text-[#1B4332]">
                    🪐 Planetario
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    Las funciones tienen horarios propios y requieren
                    reserva previa. Consultá la cartelera antes de incluir
                    una función en tu itinerario.
                  </p>
                  <a
                    href="https://montevideo.gub.uy/planetario"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-emerald-800 underline underline-offset-4"
                  >
                    Ver información del Planetario ↗
                  </a>
                </article>

                <article className="rounded-2xl bg-[#F4F6F0] p-5">
                  <h3 className="font-bold text-[#1B4332]">
                    ♿ Accesibilidad y cuidados
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    Respetá las indicaciones del parque, no alimentes a los
                    animales y consultá al personal si necesitás información
                    sobre accesibilidad o servicios.
                  </p>
                </article>
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-sm leading-relaxed text-emerald-950">
                  <strong>Consejo:</strong> los horarios, las actividades
                  y el acceso a cada sector pueden variar. Confirmá la
                  información en los sitios oficiales antes de organizar
                  tu visita.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSeccion("animales")}
                className="mt-8 rounded-full bg-[#1B4332] px-6 py-3 font-semibold text-white transition hover:bg-[#2D6A4F]"
              >
                Explorar los animales →
              </button>
            </div>
          </section>
        </>
      )}

      <footer className="border-t border-stone-200 bg-white px-4 py-6 text-center">
        <p className="text-sm text-stone-600">
          Guía del Parque Villa Dolores · Montevideo, Uruguay
        </p>
        <p className="mt-1 text-xs text-stone-400">
          Un espacio para descubrir y aprender sobre la naturaleza.
        </p>
      </footer>
    </main>
  );
}

export default App;
