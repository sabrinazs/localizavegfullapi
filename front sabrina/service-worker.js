var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './assets/js/main.js',
        './contact.html',

        './images/LOCALIZAVEGHEADER1.png',
        './images/LOCALIZAVEGHEADER2.png',
        './images/LOCALIZAVEGHEADERPEDITAR3.png',
        './images/Vegan-PNG-Image.png',
        
        './images/29.png',
        './images/40.png',
        './images/57.png',
        './images/58.png',
        './images/60.png',
        './images/80.png',
        './images/87.png',
        './images/114.png',
        './images/120.png',
        './images/180.png',
        './images/1024.png'
        

        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});

