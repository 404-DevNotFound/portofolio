export const profile = {
  name: 'whotao',
  // Ganti teks perkenalan di bawah banner hello di sini.
  bio: [
    'Tulis perkenalan singkatmu di sini.',
    'Ceritakan apa yang kamu kerjakan, hal yang kamu sukai, atau proyek yang sedang kamu bangun.',
  ],
  community: 'https://secarikkertas.my.id',
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
