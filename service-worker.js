"use strict";var precacheConfig=[["/react-portfolio/index.html","5435962a29392f42210859193eb3947a"],["/react-portfolio/static/css/main.a1cd2691.css","873947594ac6767a68f84e34cd5f975d"],["/react-portfolio/static/js/main.03d180ae.js","a9e2af38d55a8479dbad87cf9f86330e"],["/react-portfolio/static/media/bugtracker.59966afc.png","59966afc7bc15473988b399bd41380e6"],["/react-portfolio/static/media/githubcard.3a34acd4.png","3a34acd452071a87c2ba0f7260ca8edc"],["/react-portfolio/static/media/logo.60ca8a7b.png","60ca8a7b355f442241f621bccd464604"],["/react-portfolio/static/media/responsivephoto.8e7cbfd7.png","8e7cbfd7e277568e14c61daf66c0a02d"],["/react-portfolio/static/media/shoestore.861f53e8.jpg","861f53e8e46bbcf942cacf7cda56145c"],["/react-portfolio/static/media/sokoban.00470aab.png","00470aabdaba921cdf6e5a26a6aec97b"],["/react-portfolio/static/media/subtracker.08bfc0d0.png","08bfc0d0d0677762ef6505ec883bcd3b"],["/react-portfolio/static/media/todo.2ed1d441.png","2ed1d441f15ffd9f81ff5fb92bedffe4"],["/react-portfolio/static/media/twitterclone.59d5fcc2.png","59d5fcc290466a7d58b6d3d90a26df88"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var a=new Request(r,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),t=urlsToCacheKeys.has(r));var n="/react-portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});