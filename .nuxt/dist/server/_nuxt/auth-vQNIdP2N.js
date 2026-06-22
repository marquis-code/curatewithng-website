import { d as defineNuxtRouteMiddleware, c as useCookie, n as navigateTo } from "../server.mjs";
import "vue";
import "/Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs";
import "vue/server-renderer";
import "/Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs";
import "axios";
import "vue-toastification";
const auth = defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");
  if (!token.value && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-vQNIdP2N.js.map
