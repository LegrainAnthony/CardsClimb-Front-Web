<script lang="ts" setup>
  defineProps<{
    boxes: Box[] | null
  }>()

  const { t } = useI18n()
</script>

<template>
  <CardsSectionTitle
    :title="t('boxTitle')"
    :back="false"
    :to="undefined"
  >
    <UButton
      class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
      size="2xs"
      icon="i-heroicons-plus"
      to="/cards/boxes/create"
    >{{ t('addBox') }}</UButton>
  </CardsSectionTitle>
  <div class="flex flex-nowrap  gap-x-3 mt-3 overflow-y-auto p-2">
    <NuxtLink
      v-for="box in boxes"
      :key="box.id"
      :to="`/cards/boxes/${box.id}`"
    >
      <UCard
        class="h-28 w-24 flex flex-shrink-0 justify-center items-center"
        :ui="{ ring: 'ring-1 ring-primary-400 dark:ring-primary-400' }"
      >
        <h1 class="text-center">{{ box.name }}</h1>
      </UCard>
    </NuxtLink>
  </div>
</template>

<style></style>