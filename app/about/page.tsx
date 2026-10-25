import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Tentang Kami" };

const values = [
  { icon: "◎", title: "Berpusat pada pengguna", text: "Kami memulai setiap keputusan dari kebutuhan nyata pengguna dan pelanggan." },
  { icon: "✦", title: "Kreatif dan terukur", text: "Ide kreatif kami padukan dengan tujuan dan indikator keberhasilan yang jelas." },
  { icon: "↗", title: "Terus berkembang", text: "Kami belajar, menguji, dan meningkatkan solusi seiring bisnis Anda tumbuh." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-mist py-16 sm:py-20"><div className="container-width"><span className="eyebrow">Tentang Nusa Digital</span><h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl">Kami percaya teknologi yang baik membuat hal besar jadi mungkin.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Kami adalah partner kreatif dan teknologi yang membantu bisnis membangun kehadiran digital dengan tujuan yang jelas.</p></div></section>
      <section className="section-space"><div className="container-width grid gap-12 md:grid-cols-2 md:items-center">
        <div className="hero-orb relative min-h-[300px] overflow-hidden rounded-[2rem] p-8 sm:min-h-[380px] sm:p-10"><div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[28px] border-white/50" /><div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white p-6 shadow-soft"><p className="text-sm font-bold text-blue-600">Tujuan kami</p><p className="mt-2 text-2xl font-black leading-tight text-ink">Membuat digital terasa lebih sederhana.</p></div></div>
        <div><SectionHeading eyebrow="Cerita kami" title="Mitra yang tumbuh bersama Anda" description="Nusa Digital dibangun dari satu keyakinan: bisnis dari berbagai ukuran layak mendapatkan pengalaman digital yang bermutu. Kami menggabungkan strategi, desain, dan teknologi agar setiap solusi punya alasan dan dampak."/><div className="mt-7 grid grid-cols-2 gap-4"><div className="rounded-2xl bg-mist p-5"><p className="text-3xl font-black text-blue-600">50+</p><p className="mt-1 text-sm text-slate-600">Proyek kolaborasi</p></div><div className="rounded-2xl bg-mist p-5"><p className="text-3xl font-black text-blue-600">30+</p><p className="mt-1 text-sm text-slate-600">Partner bisnis</p></div></div></div>
      </div></section>
      <section className="section-space bg-mist"><div className="container-width"><SectionHeading eyebrow="Nilai kami" title="Prinsip di balik setiap pekerjaan" centered/><div className="mt-10 grid gap-5 md:grid-cols-3">{values.map((v) => <article key={v.title} className="rounded-3xl border border-slate-200 bg-white p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-600">{v.icon}</span><h2 className="mt-5 text-lg font-extrabold">{v.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{v.text}</p></article>)}</div></div></section>
    </>
  );
}
