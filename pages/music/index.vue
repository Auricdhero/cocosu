<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="6" v-for="event in events.data" :key="event.id">
                    <nuxt-link style="text-decoration: none;" :to="'/music/' + event.id">
                        <v-container>
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card v-bind="props" :elevation="isHovering ? 24 : 2">
                                    <v-img height="300"
                                        :src="config.public.strapi.url + event.attributes.Image.data.attributes.url"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                                        <h3 class="text-white mt-5 ml-5">{{ event.attributes.Title }}</h3>
                                        <v-divider color="white"></v-divider>
                                        <!-- <h5 class="text-white mt-5 ml-5">{{ event.attributes.Location }}</h5> -->
                                        <h5 class="text-white mt-5 ml-5"
                                            v-text="useDateFormat(event.attributes.Date, 'MMMM D, YYYY')"></h5>
                                    </v-img>
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
import { useDateFormat } from '@vueuse/core';

const config = useRuntimeConfig();

const { data: events } = await useFetch(config.public.strapi.url+'/api/events?populate=*');
</script>