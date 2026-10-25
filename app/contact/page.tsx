import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Kontak" };

const contactItems = [
  { icon: "✉", title: "Email", detail: "halo@nusadigital.example" },
  { icon: "⌖", title: "Lokasi", detail: "Jakarta, Indonesia" },
  { icon: "◷", title: "Jam kerja", detail: "Senin–Jumat, 09.00–17.00 WIB" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-width">
        <span className="eyebrow">Hubungi kami</span>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl">Mari bicarakan ide Anda.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Punya proyek, pertanyaan, atau ingin berkolaborasi? Kami senang mendengar cerita Anda.</p>
        </div>
       </section>
      <section className="section-space"><div className="container-width grid gap-10 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-black text-ink">Informasi kontak</h2>
          <p className="mt-3 leading-7 text-slate-600">Hubungi kami melalui informasi berikut. Kami akan berusaha membalas pesan Anda secepat mungkin.</p>
          <div className="mt-7 space-y-4">{contactItems.map((item) => <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-xl text-blue-600">{item.icon}</span>
            <div>
              <h3 className="font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
            </div>)}
          </div>
      </div>
        <div className="rounded-3xl border border-slate-200 p-6 shadow-soft sm:p-9">
          <h2 className="text-2xl font-black text-ink">Mulai percakapan</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2"><div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold">Nama</label>
            <input id="name" placeholder="Nama Anda" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">Email</label>
              <input id="email" type="email" placeholder="nama@email.com" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-bold">Pesan</label>
              <textarea id="message" rows={5} placeholder="Ceritakan kebutuhan Anda..." className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
            </div>
              <Link href="mailto:halo@nusadigital.example" className="mt-5 inline-flex rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700">Kirim melalui email</Link>
            </div>
      </div></section>
    </>
  );
}
