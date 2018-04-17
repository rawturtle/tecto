import template from './home.vue';

const home = {
  name: 'home-view',
  title: 'hello',
  metadata: [{
    name: 'hello'
  }],
  data() {
    return {
      haikuOptions: {
        loop: false,
        contextMenu: 'disabled'
      }
    }
  },
  // extend the template file
  ...template
};

// Export as default for lazy-loading
export default home;