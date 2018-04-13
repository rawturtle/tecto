import template from './squares.vue';
import { components } from '../../components/';
import anime from 'animejs'

const navMenu = {
  name: 'mobile-view',
  title: 'mobile',
  metadata: [{
    name: 'mb-menu'
  }],
  data() {
    return {
      navMenu: []
    }
  },
  components: {
    'nav-item': components.mbNavItem,
    'mobile-header': components.mobileHeader,
  },
  methods: {
    enter: function(el) {
      var animateIntro = anime({
        targets: '#nav-menu .item',
        translateY: [100, 0],
        duration: '1000',
        opacity: [0, 1],
        elasticity: 0,
        delay: function(el, i, l) {
          return i * 100;
        }
      });
    }
  },
  mounted() {
    this.navMenu.push(
      {id: 1, title: "Welcome", gradient: 'bg-color-1'},
      {id: 2, title: "Booking", gradient: 'bg-color-2'},
      {id: 3, title: "Packages", gradient: 'bg-color-3'},
      {id: 4, title: "Events", gradient: 'bg-color-4'})
  },
  ...template
}
// Export as default for lazy-loading
export default navMenu;