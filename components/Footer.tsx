import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-width grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-xl font-extrabold tracking-tight">nusa<span className="text-blue-300">digital.</span></Link>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">Membantu bisnis melangkah lebih jauh melalui strategi, desain, dan teknologi digital.</p>
        </div>
        <div>
          <h2 className="font-bold">Jelajahi</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link className="hover:text-white" href="/about">Tentang Kami</Link></li>
            <li><Link className="hover:text-white" href="/services">Layanan</Link></li>
            <li><Link className="hover:text-white" href="/contact">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Hubungi Kami</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">halo@nusadigital.example<br />Jakarta, Indonesia</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-width flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nusa Digital. Semua hak dilindungi.</p>
          <p>Dibuat dengan Next.js dan Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
