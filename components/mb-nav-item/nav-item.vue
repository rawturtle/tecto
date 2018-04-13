<template>
<!-- :style="{ backgroundColor: mb-nav-item.colour }" -  mb-nav-item.primaryColour -->
  <section :class="navItem.gradient" class="component item mb:sp:0 mb:sp:bottom:1 ct:hori">
    <section class="cs:fw mb:cs:3/5 mb:cs:fh"></section>
    <section class="ct:vert cs:fw mb:cs:2/5 mb:cs:fwh mb:pd:right:4 ca:right mb-nav-item-text">
      <h3>{{ navItem.title }}</h3>
    </section>
  </section>
</template>