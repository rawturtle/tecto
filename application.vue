<template>
  <section class="application">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {

    methods: {
      // handleScroll(event) {
      //   /// create a throttle method or just add a boolean to stop the "else" statement so frequently.
      //
      //   /// Changes the underline on the menu as the user scrolls the page.
      //   /// Add section ID to navSections array in the order they appear on the page.
      //   let navSections = ['home-section', 'welcome-section', 'bookings-section'];
      //   // current place we have scroll to
      //   let windowScroll = document.getElementsByClassName('application')[0].scrollTop;
      //   // size of users window to calculate when to change the section
      //   let windowHeight = document.getElementById(navSections[1]).scrollHeight;
      //   console.log(windowScroll);
      //   console.log(windowHeight);
      //   if (windowScroll >= windowHeight) {
      //     for (let i = 0; i < navSections.length; i++) {
      //       if (document.getElementById(navSections[i]).scrollHeight <= windowScroll) {
      //         document.getElementsByClassName('active')[0].classList.remove('active');
      //         document.getElementById('navLinks').children[i].classList.add('active');
      //       }
      //     }
      //   } else {
      //     // remove active class from menu
      //     document.getElementsByClassName('active')[0].classList.remove('active');
      //     // add active class to first section
      //     document.getElementById('navLinks').children[0].classList.add('active');
      //   }
      // },
    },
  }
</script>

<style lang="less">
  @import './stylesheets/main.less';
</style>