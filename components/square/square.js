import template from './square.vue';
import anime from "animejs";

const square = {
  name: 'square-component',
  props: ['square'],
  methods: {
    move() {
      console.log("start: " + this.square.id + ": "+ Math.floor(Date.now() / 1000));

      var cssSelector = anime({
        targets: '#squareWrapper .square',
        translateY: this.square.animate,
        direction: 'reverse',
      });

      console.log("end: " + this.square.id + ": "+ Math.floor(Date.now() / 1000));
    },
  },
  mounted: function () {
    console.log("start timeout: " + this.square.id + ": "+ Math.floor(Date.now() / 1000));

    setTimeout( () => this.move(), this.square.delay);

    console.log("end timeout: " + this.square.id + ": "+ Math.floor(Date.now() / 1000));

  },
  // extend the template file
  ...template
};

// Export as default for lazy-loading
export default square;