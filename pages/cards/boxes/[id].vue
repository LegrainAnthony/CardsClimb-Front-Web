<script lang="ts" setup>

  const route = useRoute()


  const { getBoxWithSteps } = useBox()
  const { data, execute } = await getBoxWithSteps(parseInt(route.params.id as string))

  execute()

  const items = computed(() => data.value?.box_steps?.map((el: Step) => ({ id: el.order, label: el.interval.toString(), content: el })) as Array<object>)

  const interval = (interval: number) => {
    if (interval >= 30)
      return `${useMath('floor', interval / 30).value} mois`
    if (interval >= 7)
      return useMath('floor', interval / 7).value > 1 ? `${useMath('floor', interval / 7).value} semaines` : '1 semaine'
    return interval > 1 ? `${interval} jours` : '1 jour'
  }
</script>

<template>
  <div>
    <CardsSectionTitle
      :title="data?.name ?? ''"
      back-to="/cards"
    >
      <UButton
        class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
        size="2xs"
        icon="i-heroicons-pencil"
        :to="`/cards/boxes/${$route.params.id}/edit`"
      >Editer</UButton>
    </CardsSectionTitle>

    <UAccordion
      :items="items"
      multiple
    >
      <template #default="{ item, index, open }">
        <UButton
          variant="solid"
          class="border-gray-200 dark:border-gray-700 mb-1.5"
        >
          <template #leading>
            <UBadge
              color="black"
              variant=solid
              size="xs"
              :ui="{ rounded: 'rounded-full' }"
            >
              <!--TODO remplacer par le nombre de cartes-->
              <span>{{ useMath('trunc', useMath('random').value * 10) }}</span>
            </UBadge>
          </template>

          <span class="truncate">{{ interval(parseInt(item.label)) }}</span>

          <template #trailing>
            <UIcon
              name="i-heroicons-chevron-down-20-solid"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && '-rotate-180']"
            />
          </template>
        </UButton>
      </template>
    </UAccordion>
  </div>
</template>

<style></style>