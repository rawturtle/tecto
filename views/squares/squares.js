import template from './squares.vue';
import { components } from '../../components/';

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
        {id: 1, title: "Welcome", info: "blah blaaa", backgroundColour: '#e2ebf0', gradient: 'bg-color-1'},
        {id: 2, title: "Booking", info: "some text to explain something", backgroundColour: '#764ba2', gradient: 'bg-color-2'},
        {id: 3, title: "Packages", info: "Make cards great again", backgroundColour: '#13547a', gradient: 'bg-color-3'},
        {id: 4, title: "Events", info: "long sentence to see what the container looks like", backgroundColour: '#09203f', gradient: 'bg-color-4'},
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