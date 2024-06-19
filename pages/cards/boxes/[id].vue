<script lang="ts" setup>

  const route = useRoute()

  const { getBoxWithSteps } = useBox()
  const { data, execute } = await getBoxWithSteps(parseInt(route.params.id as string))



  execute()

  const items = computed(() => data.value?.box_steps?.map((el: Step) => ({ id: el.order, label: el.interval.toString(), content: el })) as Array<object>)

  const interval = (interval: number) => {
    if (interval >= 30)
      return `${Math.floor(interval / 30)} mois`
    if (interval >= 7)
      return Math.floor(interval / 7) > 1 ? `${Math.floor(interval / 7)} semaine(s)` : '1 semaine'
    return interval > 1 ? `${interval} jour(s)` : '1 jour'
  }
</script>

<template>
  <div>
    <div class="flex items-center mb-3">
      <UButton
        class="lg:text-sm lg:py-1.5 lg:px-2.5 lg:gap-x-1.5"
        size="xs"
        variant="ghost"
        icon="i-heroicons-arrow-left"
        to="/cards"
      ></UButton>
      <h1 class="lg:text-lg font-medium text-gray-500 dark:text-gray-400">{{ data?.name ?? null }}</h1>
    </div>
    <UAccordion
      :items="items"
      variant="solid"
      multiple
    >
      <template #default="{ item, index, open }">
        <UButton
          variant="solid"
          class="border-b border-gray-200 dark:border-gray-700 mb-1.5"
        >
          <template #leading>
            <UBadge
              color="black"
              variant=solid
              size="xs"
              :ui="{ rounded: 'rounded-full' }"
            ><span>{{ useMax(Object.keys(item.content).length - index, 0) }}</span></UBadge>
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