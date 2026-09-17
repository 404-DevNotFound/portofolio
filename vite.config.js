export default {
  resolve: { preserveSymlinks: true },
  esbuild: false,
  build: {
    minify: false,
    rollupOptions: { input: { home: 'index.html', detail: 'projects/detail/index.html', projects: 'projects/index.html', community: 'community/index.html' } }
  }
};
