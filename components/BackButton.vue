<script lang="ts" setup>
  defineProps({
    backTo: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <UButton
    class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
    size="xs"
    variant="ghost"
    icon="i-heroicons-arrow-left"
    :to="backTo"
  ></UButton>
</template>

<style></style>