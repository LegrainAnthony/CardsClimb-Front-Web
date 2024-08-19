<script lang="ts" setup>
  const { t } = useI18n();
  const router = useRouter()
  const { getRevision, validateCard } = useCard()
  const { data } = await getRevision()

  const carousel = ref<{ page: number, next: () => {} }>()
  const response = ref<boolean>(false);
  const cardResponded = ref<number[]>([]);

  watch(() => carousel.value?.page, () => {
    response.value = false
  })

  const answerCard = async (id: number, payload: string) => {
    const response = await validateCard(id, payload)
    console.log(response)
    if (!cardResponded.value.includes(id)) {
      cardResponded.value.push(id)
      carousel.value?.next()
    }
  }
</script>

<template>
  <UCarousel
    class="mt-10"
    ref="carousel"
    :items="data || undefined"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
      indicators: {
        wrapper: 'relative bottom-0 mt-4'
      }
    }"
    indicators
  >
    <template #default="{ item }">
      <div class="mx-auto p-4">
        <UCard @render="response = false">
          <template #header>
            <div class="flex justify-end">
              <div v-if="item.tags.length">
                <UBadge
                  v-for="(tag, index) in item.tags"
                  :key="index"
                >
                  {{ tag?.name }}
                </UBadge>
              </div>
              <div v-else>
                <UBadge
                  color="gray"
                  variant="solid"
                  class="flex items-end gap-x-1 "
                >
                  <UIcon name="i-heroicons-no-symbol-20-solid">
                  </UIcon>
                  {{ t('noTags') }}
                </UBadge>
              </div>
            </div>
          </template>

          <div class=" min-h-[calc(50vh-4rem)] max-w-80 flex justify-center items-center flex-wrap text-center">
            {{ response ? item.answer : item.question }}
          </div>
          <template #footer>
            <div
              v-if="!response"
              class="flex justify-end"
            >
              <UButton
                @click="response = true"
                :disabled="cardResponded?.includes(data ? item.id : -1)"
              >
                <template #trailing>
                  <UIcon
                    name="i-heroicons-arrow-path-20-solid"
                    class="w-5 h-5"
                  />
                </template>
                {{ t('response') }}
              </UButton>
            </div>
            <div
              v-else
              class="flex justify-between"
            >
              <UButton
                variant="outline"
                color="red"
                @click="answerCard(item.id, 'failled')"
              >
                <template #leading>
                  <UIcon
                    name="i-heroicons-x-mark-16-solid"
                    class="w-5 h-5"
                  />
                </template>
                {{ t('incorrect') }}
              </UButton>
              <UButton @click="answerCard(item.id, 'passed')">
                <template #trailing>
                  <UIcon
                    name="i-heroicons-check-20-solid"
                    class="w-5 h-5"
                  />
                </template>
                {{ t('correct') }}
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </template>
    <template #indicator="{ onClick, page, active }">
      <UButton
        :label="String(page)"
        :color="cardResponded?.includes(data ? data[page - 1]?.id : -1) ? 'gray' : 'primary'"
        :variant="active ? 'solid' : 'outline'"
        :disabled="cardResponded?.includes(data ? data[page - 1]?.id : -1)"
        size="2xs"
        class="rounded-full min-w-6 justify-center"
        @click="onClick(page)"
      />
    </template>
  </UCarousel>
  <UContainer class="mt-10 flex justify-start">
    <UButton
      variant="outline"
      icon="i-heroicons-arrow-uturn-left-20-solid"
      @click="router.push({ name: 'home' })"
    >{{
      t('stop') }}</UButton>
  </UContainer>
</template>


<style></style>