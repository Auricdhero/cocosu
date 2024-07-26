<template>
    <div class="mt-16" height="600">
        <h1 class="text-center text-uppercase mt-5">sermons</h1>
        <!-- <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sunt quam ad sit! Incidunt
            iusto vel dolore vitae laborum libero eaque. Quaerat maxime pariatur sequi soluta consequuntur a, sit odio.
        </p> -->
        <v-text-field v-model="search" class="mx-auto" density="comfortable" placeholder="Search"
            prepend-inner-icon="mdi-magnify" style="max-width: 300px;" variant="solo" clearable
            hide-details></v-text-field><br>

        <div>
            <v-carousel hide-delimiters show-arrows>
                <v-carousel-item v-for="sermon in sermons.data" :key="sermon.id"
                    :src="'http://127.0.0.1:1337' + sermon.attributes.Picture.data.attributes.url" cover>
                    <div class="sermonSlide d-flex flex-column fill-height align-center justify-center">
                        <h3 class="text-center text-uppercase text-white">{{ sermon.attributes.Title }}</h3>
                        <!-- <p class="text-capitalize text-white">{{ sermon.attributes.Notes }}</p><br> -->
                        <p class="text-muted text-white text-uppercase">{{ sermon.attributes.Sermonist }}</p>
                        <v-btn class="mb-16" icon="mdi-play" variant="outlined" color="white"></v-btn>

                        <v-btn icon="mdi-share-variant" variant="text" color="white"></v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>

            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="sermon in sermons" :key="sermon" v-slot="{ selectedClass }">
                    <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="400" width="400">
                        <v-img :src="'http://127.0.0.1:1337'+ sermon.attri"></v-img>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
const { data: sermons } = await useFetch('http://127.0.0.1:1337/api/sermons?populate=*');
const search = ref('');
const model = ref('');
</script>
<style>
.sermonSlide {
    background-color: rgba(54, 55, 56, 0.459);
    height: 100%;
}
</style>
