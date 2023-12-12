<template>
    <div class="mt-16" height="600">
        <iframe class="w-100" height="515" src="https://www.youtube.com/embed/Ic0neGNQhUc?si=E_0I9Mviegay8sGD"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <v-container>
            <v-row>
                <v-col v-for="sermon in sermons.data" :key="sermon.id" cols="5">
                    <nuxt-link class="sermon" :to="'sermons/' + sermon.id" style="text-decoration: none;">
                        <v-container>
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card v-bind="props" :elevation="isHovering ? 24 : 2">
                                    <v-img
                                        :src="'http://127.0.0.1:1337' + sermon.attributes.Picture.data.attributes.url"></v-img>
                                    <h4 class="text-center">{{ sermon.attributes.Title }}</h4>
                                    <h5 class="text-center">By: {{ sermon.attributes.Sermonist }}</h5>
                                </v-card>
                            </v-hover>
                        </v-container>
                    </nuxt-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const { data: sermons } = await useFetch('http://127.0.0.1:1337/api/sermons?populate=*');
</script>       
