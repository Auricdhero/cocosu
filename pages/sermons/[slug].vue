<template>
    <div>
        <v-parallax class="mt-15" :src="config.public.strapi.url + sermon.data.attributes.Picture.data.attributes.url"
            height="290">
            <div style="background: rgba(52, 67, 238, 0.555); height: 100%;">
                <v-container>
                    <h1 class="d-flex justify-center mt-16 text-white">{{ sermon.data.attributes.Title }}</h1>
                </v-container>
            </div>
        </v-parallax>
        <v-container>
            <v-row>
                <v-col>
                    <audio controls>
                        <source :src="config.public.strapi.url + sermon.data.attributes.Audio.data.attributes.url">
                    </audio>
                </v-col>
                <v-col>
                    <v-btn @click="openFile()" icon="mdi-download"></v-btn>
                </v-col>
            </v-row><br>
            <Markdown :source="sermon.data.attributes.Notes" />
        </v-container>
    </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
import Markdown from 'vue3-markdown-it';

const { data: sermon } = await useFetch(config.public.strapi.url + '/api/sermons/' + route.params.slug + '?populate=*');
console.log(sermon)

function openFile() {
    open(config.public.strapi.url + sermon.data.attributes.Slides.data.attributes.url)
}
</script>