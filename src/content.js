export const profile = {
  name: 'whotao',
  // Ganti teks perkenalan di bawah banner hello di sini.
  bio: [
    'Ai Enthusiastic.',
    'I like to explore the world of AI and its applications. Besides that, I also enjoy writing. You can visit my community secarikkertas if you want ^^',
  ],
  community: 'https://secarikkertas.id',
  linkedin: 'https://www.linkedin.com/in/richarddante18/',
  github: 'https://github.com/404-DevNotFound',
  kaggle:'https://www.kaggle.com/dantegunawan'
};
// Isi year dan tags dengan data sebenarnya. image dan source opsional.
// Setiap proyek harus memiliki slug unik, title, description, dan details.
export const projects = [
  {
    slug: 'secarik-kertas',
    title: 'Secarik Kertas',
    description: 'Secarik Kertas.',
    details: 'Secarik Kertas adalah website komunitasku yang terhubung dengan portofolio ini.',
    url: profile.community,
    initials: 'SK',
    year: 2026,
    tags: ['React', 'NeonDB'],
    image: '/secarikkertas.png',
    source: 'https://github.com/404-DevNotFound/secarikkertas',
  },
];

// Buku terbitan. Tambahkan buku baru ke daftar ini.
export const books = [{
  slug: 'mengakhiri-hidup-hanya-dalam-3-babak',
  title: 'Mengakhiri Hidup Hanya Dalam 3 Babak',
  author: 'Dante',
  cover: '/book-three-acts.png',
  publisher: 'Penerbit Kolofon',
  purchaseUrl: 'https://penerbitkolofon.com/katalog-buku/mengakhiri-hidup-hanya-dalam-3-babak/',
}];
