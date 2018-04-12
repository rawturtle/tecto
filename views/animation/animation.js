import anime from 'animejs'
import template from './animation.vue';


const animation = {
  name: 'animation-view',
  title: 'animation',
  metadata: [{
    name: 'animation'
  }],
  data() {
    return {
      message: "I am the message",
      value: 0,

      }
    },
    methods: {
      doStuff: function() {
        var timeline = anime.timeline({
          autoplay: true,
          direction: 'alternate',
          loop: true
        })
        timeline.add({
          targets: '.checkmark',
          scale: [
            { value: [0, 1], duration: 600, easing: 'easeOutQuad' }
          ]
        });
        timeline.add({
          targets: '.check',
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 700,
            delay: 200,
            easing: 'easeOutQuart'
          }
        });
      },

      animate: function() {
        anime({
          targets: '#animateMe input',
          value: 100000,
          round: 1,
          easing: 'easeInOutExpo'
        })
      },
      svg: function() {
        anime({
          targets: '#svgAttributes polygon',
          points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
          easing: 'easeInOutExpo',
        });
      },
      moveBox: function() {
        const DOM ={};
        DOM.intro = document.querySelector('.content--intro')
        DOM.shape = DOM.intro.querySelector('svg.shape');
        DOM.path = DOM.shape.querySelector('path');
        DOM.shape.style.transformOrigin = '50% 0%';

        anime({
          targets: DOM.intro,
          duration: 1100,
          easing: 'easeInOutSine',
          translateY: '-200vh'
        });

        anime({
          targets: DOM.shape,
          scaleY: [
            {value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
            {value:1,duration: 550,easing: 'easeOutQuad'}
          ]
        });
        anime({
          targets: DOM.path,
          duration: 1100,
          easing: 'easeOutQuad',
          d: path.getAttribute('pathdata:id')
        });
      },

      go: function () {
        this.value = 0;
        this.animate()
        this.svg()
        //this.moveBox()
        this.doStuff()
      }
  },
  // extend the template file
  ...template
}


// Export as default for lazy-loading
export default animation;