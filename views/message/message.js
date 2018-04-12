import template from './message.vue';

const message = {
  name: 'message-view',
  computed: {
    message() {
      return this.$route.params.message;
    }
  },
  // extend the template file
  ...template,
};

// Export as default for lazy-loading
export default message;