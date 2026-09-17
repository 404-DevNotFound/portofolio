export const profile = {
  name: 'whotao',
  // Ganti teks perkenalan di bawah banner hello di sini.
  bio: [
    'Ai Enthusiastic.',
    'I like to explore the world of AI and its applications. Besides that, I also enjoy writing. You can visit my community secarikkertas if you want ^^',
  ],
  community: 'https://secarikkertas.my.id',
  linkedin: 'https://www.linkedin.com/in/richarddante18/',
  github: 'https://github.com/404-DevNotFound',
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
  {
    slug: 'monitoring-wifi',
    title: 'monitoring-wifi',
    description: 'Aplikasi untuk memonitoring wifi.',
    details: 'Setiap device yang masuk akan tercatat dalam sistem.',
    url: '',
    initials: 'AP',
    year: 2026,
    tags: ['Docker'],
    image: '/monitor-bot.jpeg',
    source: 'https://github.com/404-DevNotFound/monitoring-wifi'
  }
];
