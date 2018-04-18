import template from './home-page.vue';
import header from '../header/header'


const homePage = {
  name: 'home-page',
  components: {
    'app-header': header
  },
  // extend the template file
  ...template
};

export default homePage