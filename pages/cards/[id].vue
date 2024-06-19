<script lang="ts" setup>
</script>

<template>
  <div>
    <UButton
      class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
      size="2xs"
      to="/cards"
    >Back</UButton>
    Card {{ $route.params.id }}
  </div>
</template>

<style></style>