import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Layanan" };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-width"><span className="eyebrow">Layanan kami</span>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-5xl">Semua yang Anda butuhkan untuk berkembang secara digital.
        </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Pilih solusi yang sesuai dengan kebutuhan bisnis Anda. Setiap layanan dirancang untuk bekerja lebih baik bersama strategi yang tepat.
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="container-width">
          <SectionHeading eyebrow="Apa yang bisa kami bantu" title="Layanan yang kami tawarkan" description="Klik salah satu layanan untuk melihat penjelasan dan manfaatnya."/>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        </div>
      </section>
    </>
  );
}
