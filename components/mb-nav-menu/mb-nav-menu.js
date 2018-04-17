import template from './mb-nav-menu.vue';
import mbNavItem from '../mb-nav-item/mb-nav-item';
import mbHeader from '../mb-header/mb-header';
import anime from 'animejs'

const mbNavMenu = {
  name: 'mobile-view',
  title: 'Innov8HQ',
  metadata: [{
    name: 'mb-menu'
  }],
  components: {
    mbNavItem,
    mbHeader,
  },
  data() {
    return {
     navMenu: []
    }
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
      {id: 1, title: "Welcome", gradient: 'bg-color-1', link: ""},
      {id: 2, title: "Booking", gradient: 'bg-color-2', link: ""},
      {id: 3, title: "Packages", gradient: 'bg-color-3', link: ""},
      {id: 4, title: "Events", gradient: 'bg-color-4', link: ""})
  },
  ...template
}

// Export as default for lazy-loading
export default mbNavMenu;