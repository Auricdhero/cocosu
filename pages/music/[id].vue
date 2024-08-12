<template>
    <div>
        <v-parallax class="mt-15" :src="config.public.strapi.url + event.data.attributes.Image.data.attributes.url"
            height="290">
            <div style="background: rgba(52, 67, 238, 0.555); height: 100%;">
                <v-container>
                    <h1 class="text-white d-flex justify-center mt-16">{{ event.data.attributes.Title }}</h1>
                </v-container>
            </div>
        </v-parallax>
        <v-container>
            <audio controls>
                <source :src="config.public.strapi.url + event.data.attributes.Music.data.attributes.url">
            </audio>
            <br>
            <Markdown :source="event.data.attributes.AboutSong" />
        </v-container>
    </div>
</template>
<script setup>
import Markdown from 'vue3-markdown-it'
import { useDateFormat } from '@vueuse/core'
const route = useRoute();
const { data: event } = await useFetch(config.public.strapi.url+'/api/events/' + route.params.id + '?populate=*');
</script>