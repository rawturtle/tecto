<template>
    <section class="view home">
        <section class="ct:hori cs:fwh mb:ct:vert" id="innov8-mobile">
            <mobile-header class="cs:fw component"></mobile-header>
                <transition-group
                        id="square-container"
                        name="square-animation"
                        v-bind:css="false"
                        v-on:enter="enter"
                        tag="section"
                        class="ct:hori cs:fwh mb:ct:vert component">
                    <square v-for="square in squares" :key="square.id" :square="square"></square>
                </transition-group>
        </section>
    </section>
</template>
