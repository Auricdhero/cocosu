<template>
    <div>
        <h1 class="text-center text-uppercase mt-5">about us</h1>
        <div class="about">
            <v-container>
                <v-row>
                    <v-col cols="" sm="12" lg="6" md="6">
                        <v-img height="400"
                            :src="config.public.strapi.url + about.data.attributes.historyImg.data.attributes.url"
                            cover></v-img>
                    </v-col>
                    <v-col cols="" sm="12" lg="6" md="6">
                        <v-card height="400">
                            <v-container class="d-flex justify-center align-center flex-column">
                                <h3 class="text-uppercase">History</h3>
                                <p class="text-justify">
                                    {{ about.data.attributes.history }}
                                </p>
                                <div class="">
                                    <v-btn color="blue">Read More</v-btn>
                                </div>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="" sm="12" lg="6" md="6">
                        <v-card height="400">
                            <v-container class="d-flex justify-center align-center flex-column">
                                <h3 class="text-uppercase">values</h3>
                                <p class="text-justify">{{ about.data.attributes.values }}</p>
                            </v-container>
                        </v-card>
                    </v-col>
                    <v-col cols="" sm="12" lg="6" md="6">
                        <v-img height="400"
                            :src="config.public.strapi.url + about.data.attributes.valuesPic.data.attributes.url"
                            cover></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="" sm="12" lg="6" md="6">
                        <v-img height="400"
                            :src="config.public.strapi.url + about.data.attributes.visionPic.data.attributes.url"
                            cover></v-img>
                    </v-col>
                    <v-col cols="" sm="12" lg="6" md="6">
                        <v-card height="400">
                            <v-container class="d-flex justify-center align-center flex-column">
                                <h3 class="text-uppercase ">vision</h3>
                                <p class="text-justify">{{ about.data.attributes.vision }}</p>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const { data: about } = await useFetch(config.public.strapi.url + '/api/about-page?populate=*');
console.log(about)
</script>
<style>
.about {
    background-color: rgb(225, 225, 255);
}
</style>