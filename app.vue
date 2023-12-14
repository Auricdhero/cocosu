<template>
  <div>
    <title>Osu Church of Christ</title>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const router = useRouter();

router.afterEach(() => {
  window.scrollTo(0, 0);
})
</script>
