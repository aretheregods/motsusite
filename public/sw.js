importScripts('workbox-sw.prod.v1.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/about.html",
    "revision": "6e559a845acb26f3310f6f93328f69ce"
  },
  {
    "url": "/dist/highlight.pack.js",
    "revision": "459776285185d5e7447f4002a494716f"
  },
  {
    "url": "/dist/motsucode.min.js",
    "revision": "fd35a192cf2e2dfd9947a8d5c2d68263"
  },
  {
    "url": "/examples.html",
    "revision": "109443bc4df6ea842178cb810b961ecb"
  },
  {
    "url": "/help.html",
    "revision": "38a025313a3cfe2bb7473e8335b9626a"
  },
  {
    "url": "/images/about-header.jpg",
    "revision": "023398c3052122d33d2ecdcfca2dd47b"
  },
  {
    "url": "/images/contact-image.jpg",
    "revision": "29c04db700c908199df321a097f7e354"
  },
  {
    "url": "/images/example-blog03.jpg",
    "revision": "f1d6fe994512cfa5e46ef1143572984b"
  },
  {
    "url": "/images/example-blog04.jpg",
    "revision": "616388dc159252fbceb930b7296cbded"
  },
  {
    "url": "/images/example-blog06.jpg",
    "revision": "51d2c24dfb9b2ef9abd2be56c9fa420e"
  },
  {
    "url": "/images/example-blog07.jpg",
    "revision": "e07931560dbc043518134fcefe63ea1a"
  },
  {
    "url": "/images/example-work08.jpg",
    "revision": "799e168fa2b00785e230861f4c6e00ed"
  },
  {
    "url": "/images/favicon-16x16.png",
    "revision": "726e2faead4d7eb79e00656443201090"
  },
  {
    "url": "/images/favicon-32x32.png",
    "revision": "05f0d9541e449423757698d8d8bd5641"
  },
  {
    "url": "/images/footer-background.png",
    "revision": "8baa656efb23ae4e9274a6deb88a2de2"
  },
  {
    "url": "/images/logo.png",
    "revision": "fb2f2b47da54b65c4400681f90914092"
  },
  {
    "url": "/images/motsubrain.png",
    "revision": "6e3848c723ca425d8bf6d901dc9a1d00"
  },
  {
    "url": "/images/motsuflowergirl.png",
    "revision": "067406e56e46ace12e172e3735b3ce52"
  },
  {
    "url": "/images/motsuforestgirl.jpg",
    "revision": "0e3ffbc4f63485f5ced9b7cb203c4122"
  },
  {
    "url": "/images/motsusnow.jpg",
    "revision": "769aac20bd23a7bb4904f096fc2cfa41"
  },
  {
    "url": "/images/originalhouse.jpg",
    "revision": "45bbc9b81ab8eb9469cd5e8e514caf81"
  },
  {
    "url": "/images/waterfall-min.jpg",
    "revision": "f85e40df90c3a3b0975587bfa0b6ae6f"
  },
  {
    "url": "/index.html",
    "revision": "d9221caf27ec21e5b660831bf5555efb"
  },
  {
    "url": "/info.html",
    "revision": "25b0be078616a3e0f48892b2532ca474"
  },
  {
    "url": "/motsucode.js",
    "revision": "3fe3553cb63946cb7769ae03f38a1f6f"
  },
  {
    "url": "/privacy.html",
    "revision": "576bd0b7656c0c80f6c9243d44a3e33d"
  },
  {
    "url": "/styles.css",
    "revision": "21849f8005ba857a6c425f0be8dbc455"
  },
  {
    "url": "/styles/atom-one-light.css",
    "revision": "3f9c7dcab0b31d9be9a2a2f3b83b8012"
  },
  {
    "url": "/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
