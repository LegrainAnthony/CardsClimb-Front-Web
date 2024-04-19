<script setup lang="ts">
  const isConnected = ref(false)

  const { t } = useI18n()
</script>

<template>
  <UContainer class="min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-y-10">
    <div class="-mt-20 flex flex-col justify-center items-center gap-y-2">
      <h1 class="text-center font-bold text-2xl">
        {{ isConnected ? t('WelcomeBack') : t('welcomeTo') }}
        <span class="text-primary">
          {{ isConnected ? 'UserName' : 'CardClimb' }}
        </span>
      </h1>
      <p
        v-if=isConnected
        class="text-center text-gray-500 dark:text-gray-400"
        v-html="t('reviewMessage', { number: 7 })"
      >
      </p>
      <p
        v-else
        class="text-center text-gray-500 dark:text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam esse explicabo
      </p>
    </div>
    <div class="flex items-center justify-center gap-x-6 lg:gap-x-16">
      <UIcon
        class="w-36 h-36 lg:w-48 lg:h-48 shrink"
        name="i-heroicons-document-arrow-down"
      />
      <div class="flex flex-col items-center gap-y-4">
        <UButton
          v-if="isConnected"
          block
          to="/review"
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
  </UContainer>
</template>
