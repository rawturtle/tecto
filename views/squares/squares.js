import template from './squares.vue';
import { mbNavMenu } from '../../components/';
import { mbHeader } from '../../components/';
import { homePage } from '../../components/';
import { welcomePage } from '../../components/';
import { header } from '../../components';
import { events } from '../../components'
import anime from 'animejs'


const squares = {
  name: 'squares',
  title: 'Innov8HQ',
  metadata: [{
    name: 'squares'
  }],
  components: {
    'mobile-entry': mbNavMenu,
    'home-page': homePage,
    'welcome-page': welcomePage,
    'events-page': events,
    'app-header': header,
  },
  ...template
}
// Export as default for lazy-loading
export default squares;