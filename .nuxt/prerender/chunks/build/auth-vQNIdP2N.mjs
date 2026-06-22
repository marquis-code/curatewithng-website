import { d as defineNuxtRouteMiddleware, c as useCookie, n as navigateTo } from './server.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/scule/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marquis/curatewithng/website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ipx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/axios/index.js';

const auth = defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");
  if (!token.value && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-vQNIdP2N.mjs.map
