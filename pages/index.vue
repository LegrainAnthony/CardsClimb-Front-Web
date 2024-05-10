<script setup lang="ts">
  definePageMeta({
    name: "home",
    layout: "default",
  });

  const { t } = useI18n()
  const toast = useToast();

  const { user } = useMe()

  const { getRevision, getRevisionCardsLength } = useCard();

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
          {{ user ? t('welcomeBack') : t('welcomeTo') }}
          <span class="text-primary">
            {{ user ? user.username : 'CardClimb' }}
          </span>
        </h1>
        <p
          v-if=user
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
          <CardImage />
        </NuxtLink>
        <div class="flex flex-col items-center gap-y-4">
          <UButton
            v-if="user"
            block
            :disabled="disableRevision"
            :to="!disableRevision ? '/review' : ''"
            icon="i-heroicons-play-20-solid"
          >{{ t('review') }}</UButton>
          <UButton
            v-if="user"
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
    </UContainer>
    <UNotifications />
  </div>
</template>
