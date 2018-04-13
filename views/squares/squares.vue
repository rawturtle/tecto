<template>
    <section class="view home">
        <section class="ct:hori cs:fwh mb:ct:vert" id="innov8-mobile">
            <mobile-header class="cs:fw component"></mobile-header>
                <transition-group
                        id="nav-menu"
                        name="mb-animation"
                        v-bind:css="false"
                        v-on:enter="enter"
                        tag="section"
                        class="ct:hori cs:fwh mb:ct:vert component">
                    <nav-item v-for="item in navMenu" :key="item.id" :navItem="item"></nav-item>
                </transition-group>
        </section>
    </section>
</template>
