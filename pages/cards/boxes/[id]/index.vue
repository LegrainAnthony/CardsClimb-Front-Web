<script lang="ts" setup>
  const route = useRoute()
  const { t } = useI18n()

  const { getBoxWithSteps } = useBox()
  const { data, execute: executeBoxes } = await getBoxWithSteps(parseInt(route.params.id as string))
  executeBoxes()

  const { getCards } = useCard()
  const { data: cards, execute: executeCards } = await getCards();
  executeCards()

  // TODO : remplacer quand l'API retournera les cards avec les box_steps
  const items = computed(() => data.value?.box_steps?.map((el: Step) => {
    const random = useTrunc(useMath('random').value * 10).value
    let boxCards: Array<Card> = []
    if (cards.value) {
      const floor = useMath('floor', random / cards.value.length).value
      if (floor) {

        for (let i = 0; i < floor; i++) {
          boxCards = [...boxCards, ...cards.value]
        }
      } else {
        for (let i = 0; i < random; i++) {
          boxCards = [...boxCards, cards.value[i]]
        }
      }
    }
    return {
      ...el,
      cards: boxCards
    }
  }) as Array<object>)

  const interval = (interval: number) => {
    if (interval >= 30)
      return t('month', [useMath('floor', interval / 30).value])
    if (interval >= 7)
      return useMath('floor', interval / 7).value > 1 ? t('week', [useMath('floor', interval / 7).value], 2) : t('week')
    return interval > 1 ? t('day', [interval], 2) : t('day')
  }
</script>

<template>
  <div>
    <CardsSectionTitle
      :title="data?.name ?? ''"
      :back="true"
      to="/cards"
    >
      <UButton
        class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
        size="2xs"
        icon="i-heroicons-pencil"
        :to="`/cards/boxes/${$route.params.id}/edit`"
      >{{ t('edit') }}</UButton>
    </CardsSectionTitle>

    <UAccordion
      :items="items"
      multiple
    >
      <template #default="{ item, open }">
        <UButton
          variant="soft"
          class="border-gray-200 dark:border-gray-700 mb-1.5"
        >
          <template #leading>
            <UBadge
              color="black"
              variant=solid
              size="xs"
              :ui="{ rounded: 'rounded-full' }"
            >
              <span>{{ item.cards.length }}</span>
            </UBadge>
          </template>

          <span class="truncate">{{ interval(parseInt(item.interval)) }}</span>

          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-down-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && '-rotate-180']"
            />
          </template>
        </UButton>
      </template>
      <template #item="{ item }">
        <div class="flex flex-nowrap  gap-x-3 mt-3 overflow-y-auto p-2">
          <NuxtLink
            v-for="card in item.cards"
            :key="card.id"
            :to="`/cards/${card.id}`"
          >
            <CardsTile :card="card" />
          </NuxtLink>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<style></style>