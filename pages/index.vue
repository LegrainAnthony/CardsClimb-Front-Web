<script setup lang="ts">
  const isConnected = ref(false)

  const { t } = useI18n()

  const { getRevision, getRevisionCardsLength } = useCard();
  const toast = useToast();


  if (getRevisionCardsLength() === null) {
    const { error } = await getRevision();
    if (error.value)
      toast.add({ title: `${error.value.statusCode} - ${error.value.statusMessage}`, color: 'red' })
  }

  const disableRevision = computed(() => {
    return getRevisionCardsLength() === 0 || getRevisionCardsLength() === null
  })
</script>

<template>
  <div>
    <UContainer class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-y-10">
      <div class="-mt-20 flex flex-col justify-center items-center gap-y-6">
        <h1 class="text-center font-bold text-4xl sm:text-5xl">
          {{ isConnected ? t('welcomeBack') : t('welcomeTo') }}
          <span class="text-primary">
            {{ isConnected ? 'UserName' : 'CardClimb' }}
          </span>
        </h1>
        <p
          v-if=isConnected
          class="text-lg text-center text-gray-500 dark:text-gray-400"
          v-html="t('reviewMessage', { number: getRevisionCardsLength() })"
        >
        </p>
        <p
          v-else
          class="text-lg text-center text-gray-500 dark:text-gray-400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam esse explicabo
        </p>
      </div>
      <div class="flex items-center justify-center gap-x-6 lg:gap-x-16">
        <NuxtLink to="/cards">
          <UIcon
            class="w-36 h-36 lg:w-48 lg:h-48 shrink"
            name="i-heroicons-document-arrow-down"
          />
        </NuxtLink>
        <div class="flex flex-col items-center gap-y-4">
          <UButton
            v-if="isConnected"
            block
            :disabled="disableRevision"
            :to="!disableRevision ? '/review' : ''"
            icon="i-heroicons-play-20-solid"
          >{{ t('review') }}</UButton>
          <UButton
            v-if="isConnected"
            block
            to="/profile"
            icon="i-heroicons-user-20-solid"
          >{{ t('profile') }}</UButton>
          <UButton
            block
            to="/blitz"
            icon="i-heroicons-bolt-20-solid"
          >{{ t('blitz') }}</UButton>
        </div>
      </div>
      <div class="flex justify-center items-center absolute bottom-20">
        <UButton
          variant="outline"
          @click="isConnected = !isConnected"
        >Change isConnected</UButton>
      </div>
    </UContainer>
    <UNotifications />
  </div>
</template>
