import Vue from 'vue'
import main from './application.vue';
// import { createStore } from './store'
import { createRouter } from './modules/router'
// import { sync } from 'vuex-router-sync'
import { fetchMeta } from './modules/meta';

// mixin for handling title
Vue.mixin(fetchMeta);

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
const createApplication = () => {
  // create store and router instances
  // const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  // sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const application = new Vue({
    router,
    //store,
    render: h => h(main)
  });
  return { application, router };
  //return { app, router, store };
}

export {
  createApplication
}

    // <!-- <% for (var meta in metadata) { %>
    //   <link rel="<%= meta.name %>">
    // <% } %> -->