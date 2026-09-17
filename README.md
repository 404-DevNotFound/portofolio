# Portofolio pixel

Portofolio Vue 3 + Vite, dengan font VT323 lokal, tekstur ASCII animasi interaktif, glitch halus, tema gelap/terang, halaman Home (/), Projects (/projects/), dan Komunitas (/community/), dan tautan komunitas Secarik Kertas. Judul hanya menampilkan hello. Animasi mengikuti preferensi reduced motion perangkat; tombol jeda telah dihapus.

## Menjalankan

Gunakan Node.js 22.12+ dan jalankan `npm ci`, kemudian `npm run dev`.

`npm run build` membuat hasil produksi dalam `dist`. `npm run preview` menampilkan hasil produksi.

## Mengisi portofolio

Ubah `src/content.js`: isi `profile.name` dan tambahkan proyek ke array `projects`, masing-masing memiliki `title`, `description`, dan `url` lengkap dengan https, serta opsional `image`, `source`, dan `tags` (array teknologi). Nama sementara adalah “portfolio”. Hanya Secarik Kertas yang dimasukkan karena daftar proyek pribadi belum diberikan.

Judul tab dan deskripsi mesin pencari ada di `index.html`. Tulisan lain dan struktur halaman ada di `src/main.js`; desain di `src/style.css`.

Integrasi komunitas berupa tautan eksternal ke https://secarikkertas.my.id, bukan sinkronisasi konten atau akun.

## Hosting di Vercel

Konfigurasi sudah tersedia di `vercel.json`. Pilih proyek ini sebagai root, framework Vite, build command `npm run build`, dan output directory `dist`.

Cara langsung dari folder proyek setelah login akun sendiri:

```sh
npx vercel login
npx vercel --prod
```

Atau unggah source ke repository GitHub milikmu dan import repository itu di Vercel. Dokumentasi: https://vercel.com/docs/frameworks/frontend/vite

Status: build produksi berhasil. Publikasi belum dilakukan karena sesi Vercel belum login. Jangan memasukkan token atau password ke source.

Font pixel VT323 disertakan melalui @fontsource. Font teks DM Sans dimuat dari Google Fonts dengan fallback Arial. Efek ASCII digambar secara prosedural, tanpa menyalin aset video.

## Detail proyek dan pet

Kartu proyek membuka `/projects/detail/?id=slug`. Isi data di `src/content.js`: `slug` unik, `title`, `description`, `details`, `year`, `tags`, `url`, serta opsional `image` dan `source`. Tahun dan teknologi Secarik Kertas belum diberikan, sehingga ditandai belum diisi. Link website tetap tersedia di halaman detail.

Pet memakai gambar kucing pemberian pengguna di `public/pet-cat.png`, ukuran lebar 78 px desktop dan 60 px mobile, tetap di kanan bawah. Klik pet untuk sapaan pixel “hi!”; animasi mengikuti reduced motion.
