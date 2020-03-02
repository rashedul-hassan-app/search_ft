const cacheName = 'v1';

const cacheAssets = [
    '/views/index.ejs',
    '/stylesheets/bootstrap.css',
    '/stylesheets/css',
    '/stylesheets/style.css',
    '/javascripts/polyfill.min.js',
    '/javascripts/ga.js',
];

self.addEventListener('install', e=>{
    console.log('Service worker: Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache=> {
                console.log('Service Worker: Caching files');
                cache.addAll(cacheAssets);
            })
            .catch(er=>console.log('Error while caching add all'))
            .then(()=>self.skipWaiting())
            .catch(err=>console.log('Error while waiting to cache'))
            
    );
});

// call activate event
self.addEventListener('activate', e=>{
    console.log('Service worker: Activated'); 
     // remove unwated caches
     e.waitUntil(
         caches.keys().then(cacheNames => {
             return Promise.all(
                 cacheNames.map(cache=> {
                     if (cache !== cacheName){
                         console.log('Service Worker: Clearing old cache');
                         return caches.delete(cache);
                     }
                 })
             )
         })
     )
});


// Call Fetch event
self.addEventListener('fetch', e=> {
    console.log('Service worker: Fetching');
    e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
});