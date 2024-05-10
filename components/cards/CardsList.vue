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

  const { t } = useI18n()
</script>

<template>
  <CardsSectionTitle :title="t('cardTitle')">
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
  />
</template>

<style></style>