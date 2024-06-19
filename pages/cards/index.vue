<script lang="ts" setup>
  const people = [
    {
      "id": 3,
      "reference": "Culture G #3",
      "box_id": 1,
      "box_step_id": 1,
      "card_type_id": 1
    },
    {
      "id": 4,
      "reference": "Culture G #4",
      "box_id": 2,
      "box_step_id": 1,
      "card_type_id": 1
    },
    {
      "id": 5,
      "reference": "Culture G #5",
      "box_id": 2,
      "box_step_id": 1,
      "card_type_id": 1
    },
  ]
  const column = [
    {
      key: 'id',
      label: '#'
    },
    {
      key: 'reference',
      label: 'Reference'
    },
    {
      key: 'box_id',
      label: 'Box'
    },
    {
      key: 'box_step_id',
      label: 'Step'
    },
    {
      key: 'card_type_id',
      label: 'Type'
    },
  ]
</script>

<template>
  <div>
    <CardsBoxList />
    <UContainer class="mt-20">
      <div class="flex justify-between">
        <h1 class="lg:text-lg font-medium text-gray-500 dark:text-gray-400">Gérer mes cartes</h1>
        <UButton
          class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
          size="2xs"
          icon="i-heroicons-pencil-square"
          to="/cards/boxes/create"
        >Ajouter un carte</UButton>
      </div>
      <UTable
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"
        class="mt-3"
        :rows="people"
        :columns="column"
        @select="navigateTo(`/cards/${$event.id}`)"
      />
    </UContainer>
  </div>
</template>

<style></style>
