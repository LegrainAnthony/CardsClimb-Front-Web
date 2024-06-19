<script lang="ts" setup>
  const { t } = useI18n()

  const { getBoxes } = useBox();
  const { data: boxes, execute: executeBoxes } = await getBoxes()

  const { getCards } = useCard()
  const { data: cards, execute: executeCards } = await getCards();

  executeBoxes();
  executeCards()

  const column = [
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
      key: 'card_type_id',
      label: t('type')
    },
  ]
</script>

<template>
  <div>
    <UContainer class="mt-10">
      <NuxtPage :boxes="boxes" />
    </UContainer>
    <UContainer class="mt-20">
      <CardsList
        v-if="$route.name === 'cards___fr' || $route.name === 'cards-boxes-id___fr'"
        :items="cards"
        :columns="column"
      />
    </UContainer>
  </div>
</template>

<style></style>
