const CACHE='numberfall-v1.0.2';
const FILES=['./','./index.html','./style.css','./game.js','./engine.mjs','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
// Activate on the next clean launch so an update cannot interrupt a running game.
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('numberfall-')&&key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>response.ok?response:caches.match('./index.html')).catch(()=>caches.match('./index.html')));
  }else event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
