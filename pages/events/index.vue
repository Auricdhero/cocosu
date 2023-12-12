<template>
    <div>
        
    </div>
</template>
<script setup>
const { data: events } = await useFetch('http://127.0.0.1:1337/api/events?populate=*');
</script>