import { createApp, ref, onMounted, onBeforeUnmount } from 'vue/dist/vue.esm-browser.prod.js';
import '@fontsource/vt323/latin-400.css';
import './style.css';
import { profile, projects, books } from './content';

const path = location.pathname.replace(/\/+$/, '');
const page = path === '/bookshelf' ? 'bookshelf' : path === '/projects/detail' ? 'detail' : path === '/projects' ? 'projects' : path === '/community' ? 'community' : 'home';
document.title = page === 'home' ? "hello. i'm whotao" : `${page} — ${profile.name || 'portfolio'}`;
createApp({
 setup() {
  const canvas = ref(null), light = ref(false), petHappy = ref(false);
  let petTimer;
  function pet() { petHappy.value = true; clearTimeout(petTimer); petTimer=setTimeout(()=>petHappy.value=false,1600); }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame, resizeObserver, width=0, height=0, tick=0, last=0;
  let pointer = { x:-1000, y:-1000 };
  const items = projects;
  const projectHref = project => '/projects/detail/?id=' + encodeURIComponent(project.slug);
  const selected = items.find(project=>project.slug===new URLSearchParams(location.search).get('id'));
  if(page==='detail') document.title = `${selected?.title || 'Proyek tidak ditemukan'} — ${profile.name || 'portfolio'}`;
  function theme() { light.value=!light.value; document.documentElement.classList.toggle('light',light.value); try {localStorage.setItem('portfolio-theme',light.value?'light':'dark')} catch {} }
  function move(e) { const r=canvas.value.getBoundingClientRect(); pointer={x:e.clientX-r.left,y:e.clientY-r.top}; }
  function draw(now) {
   frame=requestAnimationFrame(draw);
   if(document.hidden || now-last<80) return;
   last=now; if(!reduced.matches) tick+=0.014;
   const c=canvas.value.getContext('2d'); c.clearRect(0,0,width,height); c.font='11px monospace';
   const chars=' .:-=+*#';
   for(let y=0;y<height;y+=14) for(let x=0;x<width;x+=10) {
    const value=(Math.sin(x*.012+tick)*Math.cos(y*.018-tick*.7)+Math.sin(x*.007+y*.015+tick)*.6+1.6)/3.2;
    const hotspot=reduced.matches?0:Math.max(0,1-Math.hypot(x-pointer.x,y-pointer.y)/125);
    c.fillStyle=hotspot>.1?`rgba(221,104,91,${.12+hotspot*.45})`:light.value?`rgba(60,60,65,${.04+value*.18})`:`rgba(168,168,175,${.02+value*.16})`;
    c.fillText(chars[Math.min(7,Math.max(0,Math.floor(value*8)))],x,y);
   }
  }
  onMounted(()=>{
   window.dispatchEvent(new Event('portfolio:ready'));
   try {light.value=localStorage.getItem('portfolio-theme')==='light';document.documentElement.classList.toggle('light',light.value)} catch {}
   if(!canvas.value) return;
   resizeObserver=new ResizeObserver(()=>{const r=canvas.value.getBoundingClientRect();width=r.width;height=r.height;const d=Math.min(devicePixelRatio,2);canvas.value.width=width*d;canvas.value.height=height*d;canvas.value.getContext('2d').setTransform(d,0,0,d,0,0)});
   resizeObserver.observe(canvas.value);frame=requestAnimationFrame(draw);
  });
  onBeforeUnmount(()=>{cancelAnimationFrame(frame);resizeObserver?.disconnect();clearTimeout(petTimer)});
  return {page,profile,books,items,selected,projectHref,petHappy,pet,canvas,light,theme,move,leave:()=>pointer={x:-1000,y:-1000}};
 },
 template: `
 <a class="skip" href="#main">Lewati navigasi</a>
 <aside class="sidebar">
  <a class="wordmark" href="/">{{profile.name || 'portfolio'}}.</a>
  <nav aria-label="Navigasi utama">
   <a v-for="item in [{id:'home',url:'/',label:'Home'},{id:'projects',url:'/projects/',label:'Projects'},{id:'bookshelf',url:'/bookshelf/',label:'Bookshelf'},{id:'community',url:'/community/',label:'Komunitas'}]" :href="item.url" :class="{active:page===item.id || (page==='detail' && item.id==='projects')}" :aria-current="page===item.id?'page':undefined">{{item.label}}</a>
  </nav>
  <button class="theme" @click="theme" :aria-label="light?'Gunakan tema gelap':'Gunakan tema terang'"><span aria-hidden="true">{{light?'☼':'☾'}}</span></button>
 </aside>
 <main id="main">
  <section v-if="page==='home'" class="home-page" aria-label="Home">
   <div class="desktop-titlebar" aria-hidden="true"><span>whotao.exe</span><span>− □ ×</span></div>
   <div class="hero" @pointermove="move" @pointerleave="leave">
    <canvas ref="canvas" aria-hidden="true"></canvas>
    <h1 aria-label="hello. i&#39;m whotao"><span class="glitch" aria-hidden="true" data-text="hello. i&#39;m whotao">hello. i&#39;m whotao</span></h1>
   </div>
    <div class="home-bio">
     <p v-for="(paragraph,index) in profile.bio" :key="index">{{paragraph}}</p>
     <div v-if="profile.linkedin || profile.github || profile.kaggle || profile.huggingface" class="social-links" aria-label="Profil sosial">
      <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a v-if="profile.github" :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <a v-if="profile.kaggle" :href="profile.kaggle" target="_blank" rel="noopener noreferrer">Kaggle ↗</a>
      <a v-if="profile.huggingface" :href="profile.huggingface" target="_blank" rel="noopener noreferrer">Hugging Face ↗</a>
     </div>
    </div>
   <div class="sticker-shelf" aria-hidden="true"><span class="pixel-sticker sticker-computer"></span><span class="pixel-sticker sticker-dino"></span><span class="pixel-sticker sticker-arcade"></span><span class="shelf-dashes">+ · · · +</span></div>
  </section>
  <section v-else-if="page==='bookshelf'" class="bookshelf-page" aria-labelledby="page-title">
   <header class="page-header shelf-heading"><div><h1 id="page-title">bookshelf</h1><p>Buku yang kutulis.</p></div><span class="shelf-symbol" aria-hidden="true">[ {{String(books.length).padStart(2,'0')}} ]</span></header>
   <div class="book-grid">
    <article class="book-card" v-for="book in books" :key="book.slug">
     <div class="book-stage"><a class="book-object" :href="book.purchaseUrl" target="_blank" rel="noopener noreferrer" :aria-label="'Lihat '+book.title+' di '+book.publisher"><img :src="book.cover" :alt="'Sampul '+book.title" width="1086" height="1448"><span class="book-spine" aria-hidden="true"></span></a></div>
     <div class="book-copy"><span class="book-author">{{book.author}}</span><h2>{{book.title}}</h2><p>{{book.publisher}}</p><a class="pixel-button" :href="book.purchaseUrl" target="_blank" rel="noopener noreferrer">Beli di penerbit <span aria-hidden="true">↗</span></a></div>
    </article>
   </div>
  </section>
  <section v-else-if="page==='projects'" aria-labelledby="page-title">
   <header class="page-header"><h1 id="page-title">projects</h1></header>
   <div class="project-grid">
    <article class="project-card" v-for="project in items" :key="project.title">
     <a :href="projectHref(project)" class="project-cover" :aria-label="project.title">
      <img v-if="project.image" :src="project.image" :alt="project.title" loading="lazy" width="640" height="376">
      <span v-else class="initials" aria-hidden="true">{{project.initials || project.title.slice(0,2).toUpperCase()}}</span>
     </a>
     <div class="project-body">
      <div class="project-title"><h2><a :href="projectHref(project)">{{project.title}}</a></h2><a v-if="project.source" class="source" :href="project.source" target="_blank" rel="noopener noreferrer">source ↗</a></div>
      <p v-if="project.description">{{project.description}}</p>
      <ul v-if="project.tags?.length" class="tags" aria-label="Teknologi"><li v-for="tag in project.tags" :key="tag">{{tag}}</li></ul>
     </div>
    </article>
   </div>
  </section>
  <section v-else-if="page==='detail'" class="project-detail" aria-labelledby="page-title">
   <a class="back-link" href="/projects/">← projects</a>
   <template v-if="selected">
    <header class="page-header detail-header">
     <h1 id="page-title">{{selected.title}}</h1>
     <div class="detail-meta">
      <span class="year">Tahun produksi: <time v-if="selected.year" :datetime="String(selected.year)">{{selected.year}}</time><span v-else>Belum diisi</span></span>
      <ul v-if="selected.tags?.length" class="tags" aria-label="Teknologi yang dipakai"><li v-for="tag in selected.tags" :key="tag">{{tag}}</li></ul>
      <span v-else class="missing-tech">Teknologi: belum diisi</span>
      <a v-if="selected.source" class="source" :href="selected.source" target="_blank" rel="noopener noreferrer">source ↗</a>
      <a v-if="selected.url" class="source" :href="selected.url" target="_blank" rel="noopener noreferrer">website ↗</a>
     </div>
    </header>
    <img v-if="selected.image" class="detail-image" :src="selected.image" :alt="selected.title" width="1200" height="700">
    <div v-else class="detail-placeholder" aria-hidden="true">{{selected.initials || selected.title.slice(0,2).toUpperCase()}}</div>
    <div class="detail-description"><p v-for="(paragraph,index) in (selected.details || selected.description).split('\\n\\n')" :key="index">{{paragraph}}</p></div>
   </template>
   <h1 v-else id="page-title">Proyek tidak ditemukan.</h1>
  </section>
  <section v-else aria-labelledby="page-title">
   <header class="page-header"><h1 id="page-title">komunitas</h1></header>
   <div class="community"><h2>Secarik Kertas</h2><a :href="profile.community" target="_blank" rel="noopener noreferrer">secarikkertas.id ↗</a></div>
  </section>
 </main>
 <button class="pet" :class="{happy:petHappy}" @click="pet" aria-label="Sapa kucing" title="Sapa kucing">
  <span class="pet-greeting" aria-hidden="true">hi!</span>
  <img src="/pet-cat.png" alt="" width="250" height="435" draggable="false">
 </button>`
}).mount('#app');
