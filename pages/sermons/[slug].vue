<template>
    <div>
        <v-parallax :src="config.public.strapi.url + sermon.data.attributes.Picture.data.attributes.url" height="290">
            <div style="background-color: rgba(52, 67, 238, 0.555); height: 100%;">
                <v-container>
                    <h1 class="d-flex justify-center mt-10 text-white">{{ sermon.data.attributes.Title }}</h1>
                    <p class="text-muted text-center text-white">{{ sermon.data.attributes.Sermonist }}</p>
                </v-container>
                <audio ref="audio">
                    <!-- <source :src="config.public.strapi.url + sermon.data.attributes.Audio.data.attributes.url"> -->
                </audio>
                <v-container>
                    <!-- <span>{{ currentTime }}/{{ duration }}</span> -->
                    <v-slider v-model="currentTime" :value="useDateFormat(duration, timeFormat)"
                        :min="useDateFormat(currentTime, timeFormat)" :max="useDateFormat(duration, timeFormat)"
                        :step="stepper" thumb-label color="white"></v-slider>
                    <div class="d-flex justify-center mx-auto">
                        <v-row>
                            <v-col cols="5"></v-col>
                            <v-col cols="1">
                                <v-btn v-if="!playing" icon="mdi-play-circle-outline" variant="text"
                                    @click="playing = !playing" color="white"></v-btn>
                                <v-btn @click="playing = !playing" variant="text" color="white"
                                    icon="mdi-pause-circle-outline" v-else></v-btn>
                            </v-col>
                            <v-col cols="1">
                                <v-btn class="d-flex justify-right" icon="mdi-download" @click="openFile" variant="text"
                                    color="white"></v-btn>
                            </v-col>
                            <v-col cols="3"></v-col>
                            <br>
                        </v-row>
                    </div>
                </v-container>

            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="sermon.data.attributes.Notes" />
        </v-container>
    </div>
</template>
<script setup>
import { useMediaControls, useDateFormat, useNow } from '@vueuse/core';
import Markdown from 'vue3-markdown-it';
const route = useRoute();
const config = useRuntimeConfig();
const audio = ref()


const { data: sermon } = await useFetch(config.public.strapi.url + '/api/sermons/' + route.params.slug + '?populate=*');

const { playing, duration, currentTime, buffered} = useMediaControls(audio, { src: config.public.strapi.url + sermon.value.data.attributes.Audio.data.attributes.url })
// console.log(sermon)
const timeFormat = ref('mm:ss');

// const stepper = useDateFormat(duration, timeFormat)

function formatDuration(seconds) {
    return new Date(1000 * seconds).toISOString().slice(14, 19)
}
function openFile() {
    open(config.public.strapi.url + sermon.value.data.attributes.Slides.data.attributes.url)
}
</script>