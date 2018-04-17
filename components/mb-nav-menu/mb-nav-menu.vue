<template>
    <section class="cs:fwh mb:ct:vert cv:hide mb:cv:show">
        <mb-header class="cs:fw component"></mb-header>
        <transition-group
                id="nav-menu"
                name="mb-animation"
                v-bind:css="false"
                v-on:enter="enter"
                tag="section"
                class="mb:cs:fwh mb:ct:vert component">
            <mb-nav-item v-for="item in navMenu" :key="item.id" :navItem="item"></mb-nav-item>
        </transition-group>
    </section>
</template>