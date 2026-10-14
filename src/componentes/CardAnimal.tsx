
interface CardAnimalProps {
  nombre: string;
  especie: string;
  imagen: string;
  descripcion: string;
  habitat: string;
}

export function CardAnimal({
  nombre,
  especie,
  imagen,
  descripcion,
  habitat,
}: CardAnimalProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      
      <div className="p-3 pb-0">
        <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-stone-100">
          <img
            src={imagen}
            alt={`Fotografía de ${nombre}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

     
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {especie}
        </span>

        <h2 className="mt-2 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
          {nombre}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {descripcion}
        </p>

        
        <div className="mt-auto pt-5">
          <div className="border-t border-stone-100 pt-4">
            <p className="text-sm leading-relaxed text-stone-600">
              <span className="font-semibold text-emerald-800">
                Hábitat:{" "}
              </span>
              {habitat}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
