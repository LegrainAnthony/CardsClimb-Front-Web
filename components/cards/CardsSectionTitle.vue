<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    backTo: {
      type: String,
      default: ''
    }
  })

</script>

<template>
  <div class="flex justify-between mb-3">
    <div class="flex">
      <BackButton
        v-if="backTo.length"
        :back-to="backTo"
      />
      <h1 class="lg:text-lg font-medium text-gray-500 dark:text-gray-400">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<style></style>