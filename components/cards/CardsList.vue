<script lang="ts" setup>
  defineProps<{
    items: Card[] | null,
    columns: Array<{ key: string, label: string }>
  }>()

  const { t } = useI18n()
</script>

<template>
  <CardsSectionTitle
    :title="t('cardTitle')"
    :back="false"
    :to="undefined"
  >
    <UButton
      class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
      size="2xs"
      icon="i-heroicons-plus"
      to="/cards/create"
    >{{ t('addCard') }}</UButton>
  </CardsSectionTitle>
  <UTable
    :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }"
    class="mt-3"
    :rows="items ?? []"
    :columns="columns"
    @select="navigateTo(`/cards/${$event.id}`)"
  >
    <template #tags-data="{ row }">
      <div
        v-if="row.tags.length"
        class="flex items-center"
      >
        <UBadge
          v-for="tag in row.tags"
          :key="tag.id"
          :label="tag.name"
        />
      </div>
      <div v-else>-</div>
    </template>
  </UTable>
</template>

<style></style>