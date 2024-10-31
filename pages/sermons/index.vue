<template>
    <div>
        <v-parallax height="350" src="/img/givingBg.jpg">
            <div style="background-color: rgba(7, 89, 195, 0.54);"
                class="d-flex flex-column fill-height justify-center align-center">
                <h1 class="text-center text-uppercase text-white">Sermons</h1>
            </div>
        </v-parallax>
        <v-spacer></v-spacer>
        <v-container>
            <v-card class="mx-auto" variant="plain" max-width="400">
                <v-card-text>
                    <v-text-field label="Search Sermon" variant="underlined" append-inner-icon="mdi-magnify"
                        hide-details single-line @click:append-inner="onClick"></v-text-field>
                </v-card-text>
            </v-card><br>

            <v-row>
                <v-col cols="12" v-for="sermon in sermons.data.reverse()" :key="sermon.id">
                    <NuxtLink class="text-decoration-none" :to="'/sermons/' + sermon.attributes.slug">
                        <v-row>
                            <v-col cols="2">
                                <v-img :src="config.public.strapi.url + sermon.attributes.Picture.data.attributes.url"
                                    max-height="150"></v-img>
                            </v-col>
                            <v-col cols="10">
                                <h3 class="">{{ sermon.attributes.Title }}</h3>
                                <p class="text-muted">{{ sermon.attributes }}</p>
                            </v-col>
                        </v-row>
                    </NuxtLink>

                    <v-divider></v-divider>
                </v-col>
            </v-row>
        </v-container>


    </div>
</template>
<script setup>
// import 
const route = useRoute();
const config = useRuntimeConfig()
const { data: sermons } = await useFetch(config.public.strapi.url + '/api/sermons?populate=*');
const search = ref('');
const model = ref('');

const searchSermon = computed(() => {
    return sermons.value.filter(sermons)
});
</script>
<style>
.sermonSlide {
    background-color: rgba(54, 55, 56, 0.459);
    height: 100%;
}
</style>
