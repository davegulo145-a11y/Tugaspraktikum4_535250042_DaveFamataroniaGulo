export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "⌘",
    summary: "Website cepat, responsif, dan mudah digunakan untuk mendukung pertumbuhan bisnis.",
    description: "Kami merancang dan membangun website yang menggabungkan performa, pengalaman pengguna, dan tujuan bisnis. Mulai dari company profile hingga website dengan fitur khusus.",
    benefits: ["Tampilan responsif di berbagai perangkat", "Struktur yang mudah dikembangkan", "Fokus pada performa dan pengalaman pengguna"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "✳",
    summary: "Desain digital yang intuitif, konsisten, dan membantu pengguna mencapai tujuannya.",
    description: "Proses desain kami dimulai dari memahami kebutuhan pengguna, menyusun alur, membuat wireframe, lalu mengembangkan antarmuka yang jelas dan konsisten.",
    benefits: ["Alur pengguna yang lebih sederhana", "Desain konsisten dengan identitas brand", "Prototipe untuk validasi lebih awal"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "↗",
    summary: "Strategi pemasaran digital berbasis data untuk menjangkau audiens yang tepat.",
    description: "Kami membantu bisnis merencanakan kampanye digital dengan tujuan yang terukur, pesan yang relevan, dan evaluasi berkala agar strategi terus membaik.",
    benefits: ["Perencanaan kampanye yang terarah", "Konten sesuai target audiens", "Evaluasi kinerja dan rekomendasi"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
