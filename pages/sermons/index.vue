<template>
    <div class="mt-16" height="600">
        <h1 class="text-center text-uppercase mt-5">sermons</h1>
        <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sunt quam ad sit! Incidunt
            iusto vel dolore vitae laborum libero eaque. Quaerat maxime pariatur sequi soluta consequuntur a, sit odio.
        </p>
        
    </div>
</template>
<script setup>
const route = useRoute();
const { data: sermons } = await useFetch('http://127.0.0.1:1337/api/sermons?populate=*');
</script>
