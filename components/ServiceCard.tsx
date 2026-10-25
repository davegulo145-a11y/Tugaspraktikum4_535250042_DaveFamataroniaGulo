import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft sm:p-7">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl" aria-hidden="true">{service.icon}</div>
      <h3 className="mt-5 text-xl font-extrabold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3">
        Pelajari layanan <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
