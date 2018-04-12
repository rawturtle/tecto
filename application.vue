<template>
  <section class="application">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </section>
</template>

<style lang="less">
  @import './stylesheets/main.less';
</style>