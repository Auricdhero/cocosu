<template>
    <div>
        <v-parallax class="mt-15" :src="'http://127.0.0.1:1337' + sermon.data.attributes.Picture.data.attributes.url"
            height="330">
            <div style="background: rgba(52, 67, 238, 0.555); height: 100%;">
                <v-container>
                    <h1 class="d-flex justify-center mt-16 text-white">{{ sermon.data.attributes.Title }}</h1>
                </v-container>
            </div>
        </v-parallax>
        <v-container>

        </v-container>
    </div>
</template>
<script setup>
const route = useRoute();
const { data: sermon } = await useFetch('http://127.0.0.1:1337/api/sermons/' + route.params.id + '?populate=*');

</script>