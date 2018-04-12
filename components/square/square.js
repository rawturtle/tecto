import template from './square.vue';

const square = {
  name: 'square-component',
  props: ['square'],
  // extend the template file
  ...template
};

// Export as default for lazy-loading
export default square;