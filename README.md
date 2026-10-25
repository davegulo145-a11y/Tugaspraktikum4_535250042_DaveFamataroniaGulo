# Nusa Digital — Company Profile

Website company profile sederhana menggunakan Next.js App Router, TypeScript, dan Tailwind CSS.

## Menjalankan proyek

Pastikan Node.js versi 18 atau lebih baru sudah terpasang.

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Halaman

- `/` — Beranda
- `/about` — Tentang Kami
- `/services` — Daftar layanan
- `/services/web-development` — Detail layanan dinamis
- `/services/ui-ux-design` — Detail layanan dinamis
- `/services/digital-marketing` — Detail layanan dinamis
- `/contact` — Kontak

## Struktur folder

```text
company-profile-nextjs/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SectionHeading.tsx
│   └── ServiceCard.tsx
├── data/
│   └── services.ts
├── package.json
└── ...
```

## Implementasi ketentuan tugas

1. **Multi-page:** halaman beranda, tentang, layanan, detail layanan, dan kontak.
2. **Dynamic routing:** `app/services/[slug]/page.tsx` menangani slug layanan. `generateStaticParams()` menyiapkan halaman untuk slug yang tersedia.
3. **Reusable components:** `Navbar`, `Footer`, `SectionHeading`, dan `ServiceCard`.
4. **Navigasi dengan `Link`:** digunakan untuk tautan internal agar navigasi ditangani Next.js.
5. **Active link styling:** `usePathname()` di `Navbar` mendeteksi rute aktif dan menerapkan kelas `nav-link-active`. Subhalaman `/services/...` juga menandai menu Layanan sebagai aktif.
6. **Responsif:** memakai utility breakpoint Tailwind seperti `sm:` dan `md:`, grid responsif, serta menu mobile pada Navbar.
7. **Struktur rapi:** route disimpan di `app`, komponen bersama di `components`, dan data layanan di `data`.

## Catatan

Nama, statistik, email, dan informasi perusahaan adalah contoh/dummy. Form kontak saat ini belum mengirim data ke backend.
