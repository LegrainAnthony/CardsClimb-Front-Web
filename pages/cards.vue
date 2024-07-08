<script lang="ts" setup>
  const { t } = useI18n()

  const { getCards } = useCard()
  const { data: cards } = await getCards();


  const columns = [
    {
      key: 'id',
      label: '#'
    },
    {
      key: 'reference',
      label: t('reference')
    },
    {
      key: 'box_id',
      label: t('box')
    },
    {
      key: 'box_step_id',
      label: t('step')
    },
    {
      key: 'tags',
      label: t('tag')
    },
  ]
</script>

<template>
  <div>
    <UContainer class="mt-10">
      <NuxtPage />
    </UContainer>
    <UContainer class="mt-20">
      <CardsList
        v-if="$route.name === 'cards___fr' || $route.name === 'cards-boxes-id___fr'"
        :items="cards"
        :columns="columns"
      />
    </UContainer>
  </div>
</template>

<style></style>
