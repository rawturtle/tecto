import Vue from 'vue';
import Router from 'vue-router';
import { views } from '../views';
import { routes } from '../routes';

Vue.use(Router);

const routesList = [];
for (const name in routes) {
  let route = routes[name];
  route.path = routes[name].route;
  route.component = views[routes[name].view];
  // Delete unused variables
  delete routes[name].route;
  delete routes[name].view;
  routesList.push(route);
}

const createRouter = () => {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: routesList
  });
};

export {
  createRouter
}

