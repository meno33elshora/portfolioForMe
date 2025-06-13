'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7dd474badb29b2a67e8a1a895ddef494",
".git/config": "8b2d84a0dba4fd8ad34048efd385fc2c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45a3c920f624fe9a98d91197e11034c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51009c4926814df430b8960c91477967",
".git/logs/refs/heads/main": "09eeb42e9c53008e38ec7cba79db5264",
".git/logs/refs/remotes/origin/main": "a764cb2e8fe5d0cfc919880735a28c93",
".git/objects/00/d2a1111c9f8daf8199d4f13530bddcd4d92024": "cb2f9c355140a7d4ae30c17bad54a5f6",
".git/objects/02/5585caf6771a0e0afd06dd1ad1d258289e68b3": "c63ac07267dea320a8bf481dd55687ea",
".git/objects/05/9cd372e4d6c206c8eeceb304b8b518e162da77": "961e176e32f8f5dc159ee1b5e0aab152",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/b013996bad69a57cef39cd2cd0ee5ad21d97b8": "31b83aef78116318efd8b4871c95fabd",
".git/objects/09/55775082b7b7ba2d59a640b4b0e4cddaef6336": "c743a0caed01bc23695e3e8a550e3c05",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/8bcce54895bc76f4b049ebfb58c639515b3e45": "9fbe64fb825365bf5ebc40cd105d4a7b",
".git/objects/1d/f9cbd09c1ccdb5438cd9262bb0f1ea727bd32f": "17e190a4442e06a5493fd2ec4bee0440",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/450ebfa29382548257e236cac236f9743be8eb": "d9a2f4c28f138d9863441585bab611b5",
".git/objects/22/eac2d1573194726cc714e7f563b32c8b736285": "36615f0c1c0a27c20c16182dc6d34dc9",
".git/objects/23/558abe44090c109266b69257346d30586ffb36": "f95133053266ddc0bf4ae756795f172f",
".git/objects/26/7fe19141241777422de690c7ec2ca758c607de": "07f0e50fa4140675d91183c7437ef279",
".git/objects/27/a7dcbee5b49927c473ef0d1ef5bf3440c18834": "7b1780a05c621b76e3bba556b86f16f1",
".git/objects/28/c93d3a34ead65e2975021f01fc1e4b4e6bb99b": "196032303f489ab724cef013931f2086",
".git/objects/32/a59aaf998048b5057e48bca0211627e2f8c80d": "268e2bf1b4fcad0526a4de8a0f30b944",
".git/objects/32/b20bde2f68ed3be0d2d1dccc5c6f52ca1be6ea": "7308c83833d39a383f1c3e62aa3b7bf8",
".git/objects/33/ee7dae3f6f2a26f27742ed610b06a35eedf89a": "99c9f0429384fb8d0b818c97e3503634",
".git/objects/3d/bd4e4b88a6ac68844302fb6de6f4bf15f0adfc": "892bb65e0a663274a12d64142d5d9565",
".git/objects/46/404f399df2c4f06bc8309623928cec1d554385": "acaabc6cbd2aaf2c662ec4d26a3e9251",
".git/objects/46/76897c0c231e7a7d545655e9ff0b97ac9f4a0a": "1642a8166112dd40270d6c5f16dbfcb6",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/bcef9540349d3d7b634a42d9dae91372d74263": "eb7013539048535b96084aaadedeb7c1",
".git/objects/4d/716d5d0136516febce476973add4ca8b03f335": "0b6c120e67185b150bcd59ae2f6368f5",
".git/objects/52/05d0bb51994387cd1a5646e64e3b3a6fc3bb92": "92e3531dbcdc178e8026fdf955e4ce06",
".git/objects/55/130ceda751e2e66e1bdaff2d401d5ad4a6627f": "b03bbd2f4f38e0267093aa8c93c2d031",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/fee566a8a09ab97f63ff32898bd131adadcffc": "921137d44b036afca0a6197bae849dd2",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/6328963ab03c1ebc3facc2c1fd1a733c980fa5": "8071b6ad7df17803d9b7be01894c056e",
".git/objects/5c/6dab4e241840b7b316dfd626a99753fce02aac": "57d13276f654612f4028ccb650a95bf0",
".git/objects/5d/10adaf7c4f1e80587e3d4128b4334c912bd37f": "d55385470e63a7bcb15e28ec9f593244",
".git/objects/5f/4fd46be87e9a2b115cb11cccbf8a160f782876": "79c3f9cca4b70a95b5852d9501726dd4",
".git/objects/61/51af448d26ecd62ea1ee6274b82b039345d3b9": "464d72642e171690e71c79199833fdfd",
".git/objects/61/b18450740d8d4a1849eef8cc711f94ad00a5b9": "1edafd8ca48ac0e12bcbcedcaa1ae85a",
".git/objects/62/444385d9bd472d429cb28d543ee66321d8c2c4": "2b74e652623d8c8dfad357dab2ef7f49",
".git/objects/62/788a38a78c8a92242408b1c6721168b646f446": "f3203eb698ddc1aefa07971bc7c2963e",
".git/objects/64/554a87631d8a05d1ff3f53086f3842cb8628a2": "af499f52d8ac696b2211cda13c7f7944",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/fd73e4c2091ff6399a59756d899bc938a4b8a1": "214e248a11a3a59041b6c16bcc8fad1a",
".git/objects/79/075a47ac1ea96bab97c9c9d3fde64ec43aa259": "546c97448a899091192a8221192f5737",
".git/objects/7a/5a0ebaed9f50d099b67e7492d0f077ed6a148d": "ede9da975a00fe4516554d1b5418ac73",
".git/objects/7d/be2ac6ba53eb0712c4d1985f0ab6570f20be49": "044540de073f4d4a4bd0398314f50583",
".git/objects/88/3d78e72bd759e36f4810d98a00e7de4744100a": "264dc8256c3d36a1f593eebebb598985",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/93043de6454ad2d5575f0751150c6551d9c588": "bf3afe66e29a980f2954376899c58ca8",
".git/objects/94/1bad3b6dcc6624f13b3252890e255358727633": "8bfb539004a5167898be0e1a9163051b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/671156df256e850498054fdebcd41d74a65d6b": "5ab261197004d5117b31d01c2b480ff0",
".git/objects/9d/2cf7f29b14e02cf54159d4fa9f9df788d6a417": "4289ab3e07cd078f1fa9b21fb990f2fa",
".git/objects/a1/12e2bc9676d560004362e0ebbc31c4d9a65c04": "7bcc09d58281bceaa3e9b01476391e95",
".git/objects/a6/c994ae564a80362b0c10f5b63af1b34eb3e2c2": "f45e54ae9449357d289b691581ee0a5b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/09651c627b8edd5e6fa7aa6638c97800e53b72": "e1ad532676b91d522c512e11810c3ee3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1e88da6efd0af1b0aa1234c92bfde35d4b8a15": "a45a1189f3ce402d2855c71c3c9461d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/59d367f2bf60152f33c46c0a47af2bb08c01f1": "802ee15d814a65c397d069a7b5c0cfc4",
".git/objects/bc/3df974d33893fde887785cce083169350e465c": "4787b040810fa470f42f6d7724942e45",
".git/objects/bd/84bee09afaba178adc88ea7f7603465aa40549": "a00ccaa2350efcc749408b7be2c59977",
".git/objects/c1/79b79edacf5048fab25fc88c036b359c69cf7a": "b29fa72bb9bce87fa6f65b4d4e2b0dd4",
".git/objects/c1/92f7965eb51e49ca05656f00658d7b93f03e22": "32887a8f68305f834f041c0a766d1854",
".git/objects/c3/9d9d014d68f55a71dba203d9ece3b72ff5e5e7": "e5b04a1cd465c601e64bbdb821705b7b",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/cb/16c909e93c780db212c1a1b745a02debeafd09": "dd40b8631c3f876ce850bf3fb90a21c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/1d8c07ea2fa40dc20d97de8d8123ef945890ee": "111c776a2af3d4720234ca9c011bbc37",
".git/objects/d8/a857136de67e9ee6eb637d73688f49c476dbfc": "7b45cb9ce7dc23c5d4aeffcf0cd44e31",
".git/objects/db/7bfbccf687d881a6e620a389a183bbae0180ba": "e92485eb7be334e529bd79e9b1fad0a7",
".git/objects/df/f66cc50702c75abd025dcf49f62a4dcc2d72de": "8e5c10eeabaf439bd0a6db2e130bba07",
".git/objects/e5/01ed836036b96eb7d292f28d03f580c44e5b57": "67d061d2c6c64dfb12aac058e743238e",
".git/objects/e7/9daef51ff9d89d014fcf69eecd89caa5f48c98": "2636eef6f6ba008aa50770d9afc286b8",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7a1301adf5980174754564c05971f43bd623e4": "b76a040e6ed26c34463c0cc51a32c85d",
".git/refs/heads/main": "2137771a6847d4b64a3ec784b0bc8490",
".git/refs/remotes/origin/main": "2137771a6847d4b64a3ec784b0bc8490",
"assets/AssetManifest.bin": "1676f72b6a0fabc9f1e522e4d4ca9025",
"assets/AssetManifest.bin.json": "e2601178c2ade4ba2ddc99aab96426c2",
"assets/AssetManifest.json": "adbb95a0683480ae655feb54c1236bb3",
"assets/assets/font/JetBrainsMono-Bold.ttf": "8658ffe39dbfa1c12436789a50212180",
"assets/assets/font/JetBrainsMono-Medium.ttf": "b41d61d1b5a063fdcb6a7cdeacac57b0",
"assets/assets/font/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/assets/font/JetBrainsMono-Thin.ttf": "4abec0295db416a000ea0d1dcec54964",
"assets/assets/image/1.png": "7539153d2eb358d145c52b66ef614a5b",
"assets/assets/image/10.jpg": "2800ff92eb4716c66f5e5c81c7c09da4",
"assets/assets/image/11.png": "b14c7679ff5104c8abc7a8c3c2ed693d",
"assets/assets/image/2.png": "53076e4706d7d3682308d02763ee4033",
"assets/assets/image/3.png": "22dab9727253defcd0827e15f0bb02b8",
"assets/assets/image/4.png": "168c8c631747586bebd0083ba0c842d4",
"assets/assets/image/5.png": "bfe294a4d69290612c4e24c628fd95c5",
"assets/assets/image/6.png": "f85111f579669dcf13631895c2e953d2",
"assets/assets/image/7.png": "6f86062428fdd61636d8e91eec383ec4",
"assets/assets/image/8.png": "6329fe1681f26910643a60165747d62f",
"assets/assets/image/9.png": "ac7bffcc8781b7af3b34b387a4739849",
"assets/assets/image/Apple.png": "ec8519d504f276a791892f4c6b0d1176",
"assets/assets/image/Download.png": "4a1102b9e7a854ad4ea39b1127dfc44f",
"assets/assets/image/Facebook_white.png": "75313190414ff5a62afbed2c92532708",
"assets/assets/image/Github_white.png": "6f065974869794f5d836b44925eac8c4",
"assets/assets/image/global.png": "168c8c631747586bebd0083ba0c842d4",
"assets/assets/image/Gmail_white.png": "b3c59a2e06c3d81e69322be79752d6e5",
"assets/assets/image/Group%25202.png": "b34f8ccd227640b8b6db10483a3c214c",
"assets/assets/image/LinkedIN_white.png": "9b540fed0782d4ac5c1876dbf0ea9183",
"assets/assets/image/logo.png": "caceb8d0e49d9986a869fe0fa8718617",
"assets/assets/image/Photo.png": "eae792f39becb19c2851839e889d30df",
"assets/assets/image/Playstore%2520.png": "46fcba8988b386d59c8ed59a4ccd8c92",
"assets/assets/image/WhatsApp_white.png": "b5fe24dc0f0a0a61070d45787f90d217",
"assets/FontManifest.json": "1d106edbc3bb2799c9205842b6a09beb",
"assets/fonts/MaterialIcons-Regular.otf": "5349d2da84220fc03d156c377da3dc59",
"assets/NOTICES": "083003fec8be280ae54727d4a3e983c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cb27b53097ba96d8bcbc375c94a745cb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "caceb8d0e49d9986a869fe0fa8718617",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e6b4d67498fdfc6a74aea24ca6cb2f0",
"/": "9e6b4d67498fdfc6a74aea24ca6cb2f0",
"main.dart.js": "c7b53f1470d0a0c96c6658210b8430e8",
"manifest.json": "3874632fcf54c63487d5654e2326fd21",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
