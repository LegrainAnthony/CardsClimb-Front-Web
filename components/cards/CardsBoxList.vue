<script lang="ts" setup>

</script>

<template>
  <UContainer class="mt-10">
    <div class="flex justify-between">
      <h1 class="lg:text-lg font-medium text-gray-500 dark:text-gray-400">Mes boites de révision</h1>
      <UButton
        class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
        size="2xs"
        icon="i-heroicons-pencil-square"
        to="/cards/boxes/create"
      >Ajouter un boite</UButton>
    </div>
    <div class="flex flex-nowrap  gap-x-3 mt-3 overflow-y-auto p-2">
      <NuxtLink to="/cards/boxes/1">
        <UCard
          class="h-28 w-24 flex flex-shrink-0 justify-center items-center"
          :ui="{ ring: 'ring-1 ring-primary-400 dark:ring-primary-400' }"
        >
          <h1>Box 1</h1>
        </UCard>
      </NuxtLink>
      <UCard
        class="h-28 w-24 flex flex-shrink-0 justify-center items-center"
        :ui="{ ring: 'ring-1 ring-primary-400 dark:ring-primary-400' }"
      >
        <h1>Box 2</h1>
      </UCard>
      <UCard
        class="h-28 w-24 flex flex-shrink-0 justify-center items-center"
        :ui="{ ring: 'ring-1 ring-primary-400 dark:ring-primary-400' }"
      >
        <h1>Box 3</h1>
      </UCard>
      <UCard
        class="h-28 w-24 flex flex-shrink-0 justify-center items-center"
        :ui="{ ring: 'ring-1 ring-primary-400 dark:ring-primary-400' }"
      >
        <h1>Box 3</h1>
      </UCard>
    </div>
  </UContainer>
</template>

<style></style>