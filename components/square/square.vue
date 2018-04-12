<template>
<!-- :style="{ backgroundColor: square.colour }" -  square.primaryColour -->
  <section :class="square.gradient" class="component square sp:2 mb:sp:0 mb:sp:bottom:1 ct:hori">
    <section class="cs:1/4 cs:fw mb:cs:3/5 mb:cs:fh"></section>
    <section class="ct:vert cs:1/2 cs:fw mb:cs:2/5 mb:cs:fwh mb:pd:right:4 ca:right card-text">
      <h3>{{ square.title }}</h3>
    </section>
    <section class="cs:1/4 cs:fw mb:cv:hide" ></section>
  </section>
</template>