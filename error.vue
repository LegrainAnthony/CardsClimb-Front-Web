<script setup lang="ts">
  import type { NuxtError } from '#app'

  useSeoMeta({
    title: 'Page not found',
    description: 'We are sorry but this page could not be found.'
  })

  defineProps({
    error: {
      type: Object as PropType<NuxtError>,
      required: true
    }
  })

  useHead({
    htmlAttrs: {
      lang: 'fr'
    },
    bodyAttrs: {
      class: 'bg-white dark:bg-gray-900'
    }
  })

</script>

<template>
  <div>
    <main class="min-h-[100vh]">

      <UContainer>
        <div class="min-h-[100vh] flex flex-col items-center justify-center">
          <p class="text-base font-semibold text-primary">{{ error.statusCode }}</p>
          <h1 class="text-3xl font-bold tracking-tight sm:text-5xl">{{ error.statusMessage }}</h1>
          <UButton
            class="mt-10"
            size="lg"
            to="/"
          >Go back home</UButton>
        </div>
      </UContainer>
    </main>
    <UNotifications />
  </div>
</template>