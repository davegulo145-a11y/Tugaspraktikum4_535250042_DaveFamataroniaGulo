import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  return { title: service ? service.title : "Layanan tidak ditemukan" };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-mist py-16 sm:py-20"><div className="container-width"><Link href="/services" className="text-sm font-bold text-blue-600 hover:text-blue-700">← Kembali ke layanan</Link><div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><span className="eyebrow">Detail layanan</span><h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">{service.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{service.description}</p></div><div className="grid h-24 w-24 place-items-center rounded-3xl bg-blue-600 text-5xl text-white">{service.icon}</div></div></div></section>
      <section className="section-space"><div className="container-width grid gap-12 md:grid-cols-[1fr_.8fr]"><div><h2 className="text-2xl font-black text-ink">Apa yang Anda dapatkan?</h2><p className="mt-3 leading-7 text-slate-600">Kami bekerja secara kolaboratif agar solusi yang dibuat relevan dengan tujuan bisnis dan kebutuhan pengguna Anda.</p><ul className="mt-7 space-y-4">{service.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-slate-700"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">✓</span><span>{benefit}</span></li>)}</ul></div><aside className="rounded-3xl bg-mist p-7 sm:p-9"><h2 className="text-2xl font-black text-ink">Siap mulai?</h2><p className="mt-3 leading-7 text-slate-600">Diskusikan kebutuhan Anda dengan tim kami dan temukan langkah berikutnya.</p><Link href="/contact" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">Konsultasi gratis ↗</Link></aside></div></section>
    </>
  );
}
