import Image from "next/image";

const AMBASSADORS = [
  {
    name: "Levi Penell",
    role: "Musician & Creator",
    tagline: `„Sound ist meine Sprache."`,
    src: "/ambassador-levi.jpg",
  },
  {
    name: "Domiziana",
    role: "Artist & Performer",
    tagline: `„Ich höre, was andere übersehen."`,
    src: "/ambassador-domiziana.jpg",
  },
  {
    name: "2hollis",
    role: "Producer & Visionary",
    tagline: `„Jeder Beat erzählt eine Geschichte."`,
    src: "/ambassador-2hollis.webp",
  },
];

export function Ambassadors() {
  return (
    <section id="ambassadors" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Our Stars
          </p>
          <h2 className="font-ashborn text-4xl tracking-wider sm:text-5xl md:text-6xl">
            Listen Bold
          </h2>
        </div>

        <div className="animate-on-scroll grid gap-6 sm:grid-cols-3">
          {AMBASSADORS.map((person) => (
            <div key={person.name} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                <Image
                  src={person.src}
                  alt={person.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-widest text-gray-400">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm italic text-gray-500 transition-opacity group-hover:text-gray-300">
                    {person.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
