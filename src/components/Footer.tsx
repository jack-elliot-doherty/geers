export function Footer() {
  return (
    <footer className="bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="animate-on-scroll flex flex-col items-center gap-8 text-center">
          <h2 className="font-ashborn text-5xl tracking-wider sm:text-6xl md:text-7xl">
            Hear Different
          </h2>
          <p className="max-w-md text-lg text-gray-400">
            Bereit, anders zu hören? Entdecke GEERS XEEX und werde Teil einer
            neuen Ära.
          </p>
          <a
            href="#hero"
            className="border border-white px-10 py-4 text-sm uppercase tracking-widest transition-all hover:bg-white hover:text-black"
          >
            Jetzt entdecken
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 flex flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <span className="font-ashborn text-xl tracking-wider">Geers</span>
          <div className="flex gap-6">
            {["Instagram", "TikTok", "YouTube", "Spotify"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-white"
              >
                {platform}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} GEERS. Ein Rebrand-Konzept.
          </p>
        </div>
      </div>
    </footer>
  );
}
