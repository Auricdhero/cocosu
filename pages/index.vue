<template>
    <div class="mt-16">
        <v-parallax height="700" :src="config.public.strapi.url + home.data.attributes.WelcomeImg.data.attributes.url">
            <div style="background-color: rgba(7, 89, 195, 0.54);"
                class="d-flex flex-column fill-height justify-center align-center">
                <h1 class="text-center text-uppercase text-white">osu church of christ welcomes you!</h1>
                <h4 class="text-center text-uppercase text-white"><q>Greet one another with a Holy kiss. The Churches of
                        Christ
                        salutes
                        you.</q> <br>Rom 16:16</h4><br>

                <v-btn color="blue">Join Us</v-btn>
            </div>
        </v-parallax>
        <div class="ltSermons">
            <h1 class="d-flex flex-column fill-height justify-center align-center text-uppercase text-white">latest
                sermons</h1>
        </div>
        <v-window v-model="window" show-arrows>
            <v-window-item v-for="sermon in sermons.data" :key="sermon.id">
                <v-parallax height="350" :src="config.public.strapi.url + sermon.attributes.Picture.data.attributes.url">
                    <div style="background-color: rgba(0, 0, 0, 0.515);"
                        class="fill-height d-flex flex-column align-center justify-center">
                        <h1 class="text-white">{{ sermon.attributes.Title }}</h1>
                        <p class="text-muted text-white text-uppercase">{{ sermon.attributes.Sermonist }}</p>
                        <br>
                        <v-btn icon="mdi-play" color="white" variant="outlined"></v-btn>
                    </div>
                </v-parallax>
            </v-window-item>
        </v-window>
        <v-container>
            <v-row no-gutters>
                <v-col cols="" sm="12" lg="6">
                    <v-img height="500" src="/img/preach.jpeg" cover></v-img>
                </v-col>
                <v-col cols="" sm="12" lg="6" class="preach">
                    <v-container class="mt-12">
                        <h2 class="text-uppercase text-white">Evg John Tamakloe</h2><br>
                        <p class="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel
                            qui necessitatibus facere nesciunt at, nihil tenetur, aperiam nam quae pariatur culpa
                            voluptates sit unde atque consectetur. Debitis, autem numquam?</p><br>
                        <v-btn variant="tonal" color="white">Meet Our Leaders</v-btn>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
const config = useRuntimeConfig()
const { data: home } = await useFetch(
    config.public.strapi.url+"/api/home-page?populate=*"
);
// console.log(config)
const { data: sermons } = await useFetch(config.public.strapi.url+"/api/sermons?populate=*");
const window = ref(0);
// console.log(sermons)


</script>
<style>
.ltSermons {
    background-color: rgb(36, 36, 243);
    height: 8em;
}

.serm {
    background-color: rgba(0, 0, 0, 0.515);
    /* height: auto; */
}
.preach{
    background-color: rgb(40, 85, 125);
}
</style>
