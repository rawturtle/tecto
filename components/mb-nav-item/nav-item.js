import template from './nav-item.vue';

const mbNavItem = {
  name: 'mb-nav-item',
  props: ['navItem'],
  // extend the template file
  ...template
};

// Export as default for lazy-loading
export default mbNavItem;