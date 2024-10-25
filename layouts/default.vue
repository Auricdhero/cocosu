<template>
    <div>
        <v-app>
            <theHeader />
            <slot />
            <theFooter />
        </v-app>
        <VuePreloader background-color="#FFFFFF" color="#000000" transition-type="fade-up" :loading-speed="25"
            :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
        </VuePreloader>
    </div>
</template>
<script setup>
import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css';
</script>