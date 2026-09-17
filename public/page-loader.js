(() => {
 const loader = document.getElementById('page-loader');
 if (!loader) return;
 const video = loader.querySelector('video');
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 const began = performance.now();
 let ready = false, finished = false;
 const applyMotion = () => { if(reduced.matches) video.pause(); else video.play().catch(()=>{}); };
 applyMotion(); reduced.addEventListener('change', applyMotion);
 function dismiss() {
  if (finished) return;
  finished=true; clearTimeout(safety);
  loader.classList.add('complete');
  setTimeout(()=>{video.pause();loader.remove();reduced.removeEventListener('change',applyMotion);},reduced.matches?0:260);
 }
 function finish() {
  if(!ready) return;
  setTimeout(dismiss,Math.max(0,(reduced.matches?0:3250)-(performance.now()-began)));
 }
 const safety = setTimeout(dismiss,7000);
 window.addEventListener('portfolio:ready',()=>{ready=true;finish();},{once:true});
 // Covers a cached module mounting before this deferred script.
 if(document.querySelector('#app main')) {ready=true;finish();}
 window.addEventListener('pageshow',event=>{if(event.persisted)dismiss();});
})();
