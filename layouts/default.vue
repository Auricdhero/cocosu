<template>
    <div>
        <v-app>
            <theHeader />
            <slot />
            <theFooter />
            <!-- <VuePreloader background-color="#091a28" color="#ffffff" transition-type="fade-up" :loading-speed="25"
                :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
            </VuePreloader> -->
        </v-app>

    </div>
</template>
<script setup>
import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css';
</script>