import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center"
    >
      {/* Hero background image */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo image with the designed big-G style */}
        <Image
          src="/logo-white.png"
          alt="Geers"
          width={500}
          height={200}
          className="w-[280px] sm:w-[400px] md:w-[500px]"
          priority
        />
        <p className="text-lg uppercase tracking-[0.3em] text-gray-400 sm:text-xl md:text-2xl">
          Hear Different
        </p>
        <a
          href="#mission"
          className="mt-4 border border-white/30 px-8 py-3 text-sm uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-black"
        >
          Entdecken
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-white/30">
          <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
