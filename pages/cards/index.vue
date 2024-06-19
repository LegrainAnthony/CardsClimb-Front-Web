<script lang="ts" setup>
  defineProps({
    boxes: {
      type: null as unknown as PropType<Array<Box> | null>,
      default: [],
    },
  })
</script>

<template>
  <div>
    <CardsBoxList :boxes="boxes" />
  </div>
</template>

<style></style>
