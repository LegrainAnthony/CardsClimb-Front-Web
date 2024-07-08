<script lang="ts" setup>
  defineProps<{
    backTo: string | undefined,
  }>()
</script>

<template>
  <UButton
    class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
    size="2xs"
    variant="ghost"
    icon="i-heroicons-arrow-left"
    :to="backTo"
    @click="!backTo ? $emit('back') : undefined"
  ></UButton>
</template>

<style></style>