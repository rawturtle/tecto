<template>
    <section class="view home">
        <section class="ct:hori cs:fwh mb:ct:vert">
            <mobile-header class="cs:fw component"></mobile-header>
            <section class="ct:hori cs:fwh mb:ct:vert component">
                <square v-for="square in squares" :key="square.id" :square="square"></square>
            </section>
        </section>
    </section>
</template>
<!-- <square v-for="square in squares" :key="square.id" :square="square"></square>
       <section class="ct:hori cs:fwh mb:ct:vert">
-->