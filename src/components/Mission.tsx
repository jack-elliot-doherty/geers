import Image from "next/image";

export function Mission() {
  return (
    <section id="mission" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll grid items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="font-ashborn text-4xl tracking-wider sm:text-5xl md:text-6xl">
              Your Signal.
              <br />
              Your Rules.
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-gray-400">
              Hören ist kein Hilfsmittel. Es ist ein Statement. GEERS macht aus
              Hörtechnologie ein Lifestyle-Produkt — für eine Generation, die
              sich nicht versteckt, sondern auffällt.
            </p>
            <p className="max-w-lg leading-relaxed text-gray-500">
              Wir glauben, dass Hörgeräte nicht leise und unsichtbar sein
              müssen. Mit GEERS XEEX definieren wir Hören neu — als Ausdruck
              von Stil, Selbstbewusstsein und Haltung.
            </p>
          </div>

          {/* Lifestyle image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/mission-lifestyle.png"
              alt="GEERS lifestyle editorial"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
