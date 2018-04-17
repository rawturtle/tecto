import template from './squares.vue';
import { mbNavMenu } from '../../components/';
import { mbHeader } from '../../components/';
import { homePage } from '../../components/'
import anime from 'animejs'

const squares = {
  name: 'squares',
  title: 'Innov8HQ',
  metadata: [{
    name: 'squares'
  }],
  data() {
    return {
    }
  },
  components: {
    'mobile-entry': mbNavMenu,
    'home-page': homePage
  },
  ...template
}
// Export as default for lazy-loading
export default squares;