<script lang="ts" setup>
  defineProps({
    card: {
      type: null as unknown as PropType<Card>,
      required: true
    }
  })
</script>

<template>
  <UCard class="h-28 w-24 flex flex-shrink-0 justify-center items-center text-center">
    <span class="text-xs">{{ card.reference }}</span>
  </UCard>
</template>

<style></style>