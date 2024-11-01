<template>
    <div>
        <v-parallax :src="config.public.strapi.url + sermon.data.attributes.Picture.data.attributes.url" height="290">
            <div style="background-color: rgba(52, 67, 238, 0.555); height: 100%;">
                <v-container>
                    <h1 class="d-flex justify-center mt-10 text-white">{{ sermon.data.attributes.Title }}</h1>
                    <p class="text-muted text-center text-white">{{ sermon.data.attributes.Sermonist }}</p>
                </v-container>
                <audio ref="audio">
                    <source :src="config.public.strapi.url + sermon.data.attributes.Audio.data.attributes.url">
                </audio>
                <v-container>
                    <!-- <span>{{ currentTime }}/{{ duration }}</span> -->
                    <v-slider :min="currentTime" :max="duration" thumb-label color="white"></v-slider>
                    <v-row>
                        <v-col>
                            <v-btn icon="mdi-play-circle-outline" variant="text" @click="playing =! playing" color="white"></v-btn>
                        </v-col>
                        <v-col>
                            <v-btn class="d-flex justify-right" icon="mdi-download" @click="openFile" variant="text"
                                color="white"></v-btn>
                        </v-col>
                        <br>
                    </v-row>
                </v-container>

            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="sermon.data.attributes.Notes" />
        </v-container>
    </div>
</template>
<script setup>
import { useMediaControls } from '@vueuse/core';
const route = useRoute();
const config = useRuntimeConfig();
import Markdown from 'vue3-markdown-it';
const audio = ref()


const { data: sermon } = await useFetch(config.public.strapi.url + '/api/sermons/' + route.params.slug + '?populate=*');

const {playing, duration, currentTime, buffered} = useMediaControls(audio,{src: config.public.strapi.url + sermon.value.data.attributes.Audio.data.attributes.url})
// console.log(sermon)

const play = function () {
    audio.value.play();
};
const pause = function () {
    audio.value.pause();
};
function openFile() {
    open(config.public.strapi.url + sermon.attributes.Slides.data.attributes.url)
}
</script>