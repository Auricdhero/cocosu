<template>
    <div class="mt-16">
        <h1 class="text-center text-uppercase mt-5">about us</h1>
        <div class="about">
            <v-container>
                <v-row>
                    <v-col>
                        <v-img height="400"
                            :src="'http://127.0.0.1:1337' + about.data.attributes.historyImg.data.attributes.url"
                            cover></v-img>
                    </v-col>
                    <v-col>
                        <v-card height="400">
                            <v-container>
                                <h3 class="text-center text-uppercase">History</h3>
                                <p class="text-justify">
                                    {{ about.data.attributes.history }}
                                </p>
                                <div class="d-flex justify-center">
                                    <v-btn color="blue">Read More</v-btn>
                                </div>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card height="400">
                            <v-container>
                                <h3 class="text-center text-uppercase">values</h3>
                                <p class="text-justify">{{ about.data.attributes.values }}</p>
                            </v-container>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-img height="400"
                            :src="'http://127.0.0.1:1337' + about.data.attributes.valuesPic.data.attributes.url"
                            cover></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-img height="400"
                            :src="'http://127.0.0.1:1337' + about.data.attributes.visionPic.data.attributes.url"
                            cover></v-img>
                    </v-col>
                    <v-col>
                        <v-card height="400">
                            <v-container>
                                <h3 class="text-uppercase text-center">vision</h3>
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
const { data: about } = await useFetch('http://127.0.0.1:1337/api/about-page?populate=*');
console.log(about)
</script>
<style>
.about {
    background-color: rgb(63, 63, 145);
}
</style>