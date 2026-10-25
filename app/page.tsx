import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const stats = [
  { value: "50+", label: "Proyek selesai" },
  { value: "30+", label: "Klien bertumbuh" },
  { value: "5 tahun", label: "Pengalaman digital" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid overflow-hidden">
        <div className="container-width grid min-h-[610px] items-center gap-12 py-16 md:grid-cols-[1.08fr_.92fr] md:py-20">
          <div className="relative z-10">
            <span className="eyebrow">Partner digital bisnis anda</span>
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Ide hebat, kami ubah menjadi <span className="text-blue-600">pengalaman digital.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Nusa Digital membantu bisnis tampil lebih kuat di dunia digital melalui website, desain, dan strategi yang tepat sasaran.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="rounded-full bg-blue-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">Jelajahi layanan <span aria-hidden="true">→</span></Link>
              <Link href="/about" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-bold text-ink transition hover:border-blue-300 hover:text-blue-600">Kenali kami</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="hero-orb absolute inset-4 rounded-[3rem] rotate-3" />
            <div className="relative rounded-[2.5rem] border border-white bg-white/90 p-5 shadow-soft sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Project overview</p><p className="mt-1 font-extrabold text-ink">Digital Growth</p></div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">● On track</span>
              </div>
              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Performa pertumbuhan</p>
                <p className="mt-2 text-4xl font-black text-ink">+68.4%</p>
                <div className="mt-5 flex h-28 items-end gap-2">
                  {[36, 52, 43, 68, 57, 78, 65, 94, 76, 100, 84, 112].map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-blue-500/80" style={{ height: `${height}px`, maxHeight: "100%" }} />)}
                </div>
                <div className="mt-3 flex justify-between text-xs text-slate-400"><span>Jan</span><span>Jun</span><span>Des</span></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 p-4"><p className="text-xs text-slate-500">Pengunjung</p><p className="mt-1 text-xl font-extrabold">24.8k</p><p className="mt-1 text-xs font-semibold text-emerald-600">↑ 18.2%</p></div>
                <div className="rounded-2xl border border-slate-100 p-4"><p className="text-xs text-slate-500">Konversi</p><p className="mt-1 text-xl font-extrabold">8.6%</p><p className="mt-1 text-xs font-semibold text-emerald-600">↑ 12.5%</p></div>
              </div>
            </div>
            <div className="absolute -left-5 top-16 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-soft sm:block"><span className="text-xl">✦</span><p className="mt-1 text-xs font-bold text-ink">Desain bermakna</p></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="container-width grid grid-cols-1 gap-6 py-8 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, index) => <div key={stat.label} className={`text-center ${index ? "sm:border-l sm:border-slate-200" : ""}`}>
            <p className="text-3xl font-black text-ink">{stat.value}</p><p className="mt-1 text-sm text-slate-500">{stat.label}</p></div>)}
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-width">
          <SectionHeading eyebrow="Apa yang kami kerjakan" title="Solusi digital untuk setiap langkah" description="Dari membangun fondasi digital hingga menjangkau lebih banyak pelanggan, kami siap tumbuh bersama Anda." centered />
          <div className="mt-12 grid gap-5 md:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
          <div className="mt-9 text-center"><Link href="/services" className="font-bold text-blue-600 hover:text-blue-700">Lihat semua layanan <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </>
  );
}
