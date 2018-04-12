import template from './squares.vue';
import { components } from '../../components/';
import anime from 'animejs'


const squares = {
  name: 'square-view',
  title: 'squares',
  metadata: [{
    name: 'squares'
  }],
  data() {
    return {
      message: "I am the message",
      show: false,
      squares: [
        {id: 1, title: "Welcome", info: "blah blaaa", backgroundColour: '#e2ebf0', gradient: 'bg-color-1', animate: 10, delay: 1000, elasticity: 500},
        {id: 2, title: "Booking", info: "some text to explain something", backgroundColour: '#764ba2', gradient: 'bg-color-2', animate: 1600, delay: 2000, elasticity: 500},
        {id: 3, title: "Packages", info: "Make cards great again", backgroundColour: '#13547a', gradient: 'bg-color-3', animate: 200, delay: 3000, elasticity: 500},
        {id: 4, title: "Events", info: "long sentence to see what the container looks like", backgroundColour: '#09203f', gradient: 'bg-color-4', animate: 250, delay: 4000, elasticity: 500},
      ]
    }
  },
  components: {
    'square': components.square,
    'mobile-header': components.mobileHeader,
  },
  ...template
}
// Export as default for lazy-loading
export default squares;