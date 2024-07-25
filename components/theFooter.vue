<template>
    <div>
        <v-footer class="d-flex">
            <div class="d-flex justify-center align-center w-100">
                <v-btn v-for="icon in icons" :key="icon" :icon="icon" variant="text" class="mx-4"></v-btn>
            </div>
        </v-footer>
    </div>
</template>
<script setup>
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-youtube'];
</script>