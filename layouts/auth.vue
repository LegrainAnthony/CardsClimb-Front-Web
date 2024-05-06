<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "dark:bg-gray-950",
  },
});
</script>

<template>
  <UContainer class="h-screen flex items-center justify-center">
    <UButton
      icon="i-heroicons-home"
      label="Home"
      to="/"
      color="black"
      class="absolute top-4"
    />

    <slot />
  </UContainer>
</template>

<style scoped></style>
