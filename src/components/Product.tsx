import Image from "next/image";

const PRODUCTS = [
  { label: "XEEX On Ear", src: "/product-on-ear.png", aspect: "aspect-square" },
  { label: "Charging Case", src: "/product-case.png", aspect: "aspect-square" },
  { label: "XEEX Ecosystem", src: "/product-ecosystem.png", aspect: "aspect-square" },
  { label: "Product Line", src: "/product-flatlay.png", aspect: "aspect-[4/3] sm:col-span-2" },
  { label: "Editorial", src: "/editorial-collage.png", aspect: "aspect-[4/3]" },
];

export function Product() {
  return (
    <section id="product" className="bg-gray-900 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Meet Our Product
          </p>
          <h2 className="font-ashborn text-4xl tracking-wider sm:text-5xl md:text-6xl">
            Geers Xeex
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Kein Kompromiss. Kein Verstecken. XEEX verbindet modernste
            Hörtechnologie mit kompromisslosem Design — für alle, die mehr
            wollen als nur zuhören.
          </p>
        </div>

        {/* Product grid */}
        <div className="animate-on-scroll grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((item) => (
            <div
              key={item.label}
              className={`${item.aspect} relative overflow-hidden bg-gray-800`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
