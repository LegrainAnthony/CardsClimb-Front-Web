<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: undefined
    }
  })

</script>

<template>
  <div class="flex justify-between mb-3">
    <div class="flex">
      <BackButton
        v-if="back"
        :back-to="to"
        @back="$emit('back')"
      />
      <h1 class="lg:text-lg font-medium text-gray-500 dark:text-gray-400">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<style></style>