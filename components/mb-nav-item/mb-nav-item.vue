<template>
<!-- :style="{ backgroundColor: mb-nav-item.colour }" -  mb-nav-item.primaryColour -->
  <section :class="navItem.gradient" class="component item mb:sp:bottom:1 ct:hori">
    <section class="mb:cs:3/5 mb:cs:fh"></section>
    <section class="ct:vert mb:cs:2/5 mb:cs:fwh mb:pd:right:4 ca:right mb-nav-item-text">
      <h3>{{ navItem.title }}</h3>
    </section>
  </section>
</template>