// Add all the views here for lazy loading

const views = {
  home: () => import('./home/home'),
  message: () => import('./message/message'),
  squares: () => import('./squares/squares'),
  animation: () => import('./animation/animation')
};

export {
  views
};