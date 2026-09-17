export const profile = {
  name: 'whotao',
  // Ganti teks perkenalan di bawah banner hello di sini.
  bio: [
    "Hello! I am deeply passionate about exploring the ever-evolving world of Artificial Intelligence and its limitless applications. I enjoy analyzing how this technology shapes our future. Alongside my journey in tech, I have a profound love for the art of writing, which serves as my primary creative outlet. I believe that technology and storytelling can go hand in hand. If you share these interests, I would be thrilled to welcome you to my community, secarikkertas. Please feel free to visit, connect, and let's explore these fascinating worlds together"
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
