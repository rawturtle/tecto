let routes = {};

// Bind routes to the routes
routes = {
    home: {
        route: '/',
        view: 'home'
    },
    message: {
        route: '/message/:message',
        view: 'message'
    },
    squares: {
        route: '/squares',
        view: 'squares'
    },
    animation: {
      route: '/animation',
      view: 'animation'
    }
};

// Define active routes
// const active = (() => {
//   console.log(process.env, routes);
//   if (process.env.application_routes) {
//     return routes[process.env.application_routes]
//   } else {
//     return routes.main;
//   }
// })();

    // console.log(active);

// Must use es6 (as used by older syntax)
module.exports = {
  routes
};

