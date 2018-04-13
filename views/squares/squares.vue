<template>
    <section class="view home">
        <section class="ct:hori cs:fwh mb:ct:vert">
            <mobile-header class="cs:fw component"></mobile-header>
            <button class="cs:fw" v-on:click="shuffleArray">{{ shuffle }}</button>

                <transition-group name="square-list" tag="section" class="ct:hori cs:fwh mb:ct:vert component">
                    <square v-for="square in squares" :key="square.id" :square="square"></square>
                </transition-group>
        </section>
    </section>
</template>
<!-- <square v-for="square in squares" :key="square.id" :square="square"></square>
       <section class="ct:hori cs:fwh mb:ct:vert">
                   <section class="ct:hori cs:fwh mb:ct:vert component" id="squareWrapper">

-->