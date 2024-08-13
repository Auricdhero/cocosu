<template>
    <div>
        <v-parallax class="mt-15" :src="config.public.strapi.url + sermon.data.attributes.Picture.data.attributes.url"
            height="290">
            <div style="background: rgba(52, 67, 238, 0.555); height: 100%;">
                <v-container>
                    <h1 class="d-flex justify-center mt-16 text-white">{{ sermon.data.attributes.Title }}</h1>
                    <p class="text-muted text-center text-white">{{ sermon.data.attributes.Sermonist }}</p>
                </v-container>
                <audio ref="sound">
                    <source :src="config.public.strapi.url + sermon.data.attributes.Audio.data.attributes.url">
                </audio>
                <v-btn icon="mdi-play" variant="text" @click="play" color="white"></v-btn>
            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="sermon.data.attributes.Notes" />
        </v-container>
    </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
import Markdown from 'vue3-markdown-it';
// const audio = this.sound;


const { data: sermon } = await useFetch(config.public.strapi.url + '/api/sermons/' + route.params.slug + '?populate=*');
// console.log(sermon)

const play = function(){
    audio.play();
};
function openFile() {
    open(config.public.strapi.url + sermon.data.attributes.Slides.data.attributes.url)
}
</script>