<template>
    <div>
        <v-container class="mt-10">
            <v-row>
                <v-col>
                    <h1>{{ about.data.attributes.Purpose }}</h1>
                    <p>{{ about.data.attributes.purposeDescription }}</p>
                </v-col>
                <v-col>
                    <h1>{{ about.data.attributes.StrategyTitle }}</h1>
                    <p>{{ about.data.attributes.StrategyDescription }}</p>
                </v-col>
            </v-row>
        </v-container>
        <div class="value">
            <v-container>
                <v-row v-for="value in values.data" :key="value.id">
                    <v-col>
                        <h1>{{ value.id }}</h1>
                        <h1>{{ value.attributes.Title }}</h1>
                        <p>{{ value.attributes.Description }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-container>
            <h1 class="text-center">{{ about.data.attributes.VisionTitle }}</h1>
            <p class="text-center">{{ about.data.attributes.visionDescription }}</p>
        </v-container>
    </div>
</template>
<script setup>
const aboutPage = await useFetch('http://127.0.0.1:1337/api/about-page?populate=*');
const about = aboutPage.data.value;

const { data: values } = await useFetch('http://127.0.0.1:1337/api/values?populate=*');
</script>