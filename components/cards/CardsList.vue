<script lang="ts" setup>
  defineProps({
    items: {
      type: null as unknown as PropType<Array<Card> | null>,
      default: []
    },
    columns: {
      type: Array<{ key: string, label: string }>,
      required: true
    }
  })
</script>

<template>
  <div class="flex justify-between">
    <h1 class="lg:text-lg font-medium text-gray-500 dark:text-gray-400">Gérer mes cartes</h1>
    <UButton
      class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
      size="2xs"
      icon="i-heroicons-pencil-square"
      to="/cards/create"
    >Ajouter un carte</UButton>
  </div>
  <UTable
    :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"
    class="mt-3"
    :rows="items ?? []"
    :columns="columns"
    @select="navigateTo(`/cards/${$event.id}`)"
  />
</template>

<style></style>