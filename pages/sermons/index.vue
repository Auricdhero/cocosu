<template>
    <div height="600">
        <h1 class="text-center text-uppercase mt-5">sermons</h1>
        <!-- <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sunt quam ad sit! Incidunt
            iusto vel dolore vitae laborum libero eaque. Quaerat maxime pariatur sequi soluta consequuntur a, sit odio.
        </p> -->
        <v-text-field v-model="search" class="mx-auto" density="comfortable" placeholder="Search"
            prepend-inner-icon="mdi-magnify" style="max-width: 300px;" variant="solo" clearable
            hide-details></v-text-field><br>
        <span>{{ search }}</span>

        <div>
            <!-- <v-carousel hide-delimiters show-arrows>
                <v-carousel-item v-for="sermon in sermons.data" :key="sermon.id"
                    :src="config.public.strapi.url + sermon.attributes.Picture.data.attributes.url" cover>
                    <div class="sermonSlide d-flex flex-column fill-height align-center justify-center">
                        <h3 class="text-center text-uppercase text-white">{{ sermon.attributes.Title }}</h3>
                        <p class="text-muted text-white text-uppercase">{{ sermon.attributes.Sermonist }}</p>
                        <v-btn class="mb-16" icon="mdi-play" variant="outlined" color="white"></v-btn>

                        <v-btn icon="mdi-share-variant" variant="text" color="white"></v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel> -->

            <!-- <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="sermon in sermons.data" :key="sermon.id" v-slot="{ selectedClass }">
                    <v-card elevation="1" :class="['ma-4', selectedClass]" color="blue-lighten-2" height="350"
                        width="350">
                        <v-img :src="config.public.strapi.url + sermon.attributes.Picture.data.attributes.url"></v-img>
                        <v-card-item>
                            <v-card-title class="text-center text-white">{{ sermon.attributes.Title
                                }}</v-card-title><br>
                            <v-card-subtitle class="text-center text-white">{{ sermon.attributes.Sermonist
                                }}</v-card-subtitle>
                            <div class="mx-auto">
                                <v-btn :to="'/sermons/' + sermon.attributes.slug" variant="outlined" color="blue">Read
                                    More</v-btn>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group> -->
            <v-container>
                <v-row>
                    <v-col v-for="sermon in sermons.data.reverse()" :key="sermon.id" cols="auto" lg="4" md="4" sm="2">
                        <v-card height="370">
                            <v-img height="200" width="auto"
                                :src="config.public.strapi.url + sermon.attributes.Picture.data.attributes.url"></v-img>
                            <v-card-title class="text-center">{{ sermon.attributes.Title }}</v-card-title>
                            <p class="text-center text-muted">{{ sermon.attributes.Sermonist }}</p>
                            <div class="d-flex justify-center">
                                <v-btn style="width: 50%;" variant="outlined" color="blue"
                                    :to="'/sermons/' + sermon.attributes.slug">View Sermon</v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row><br>
                <div class="d-flex justify-center">
                    <v-btn variant="outlined" color="blue">More Sermons</v-btn>
                </div>
            </v-container>
        </div>
    </div>
</template>
<script setup>
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
