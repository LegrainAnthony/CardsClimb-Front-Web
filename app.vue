<script setup>
  // ajoute les classes au tag body pour appliquer la couleur au background
  useHead({
    bodyAttrs: { class: 'bg-white dark:bg-gray-900' }
  })
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
