<script lang="ts" setup>
  defineProps({
    propsOpen: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Array,
      required: true
    }
  })
  const emit = defineEmits(['update:menu'])
  const hnav = ref(true)

  const colorMode = useColorMode()

  const switchColorMode = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

</script>

<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-3 h-16">
      <NuxtLink
        to="/"
        class="lg:flex-1 flex items-center gap-1.5"
      >
        <UIcon
          class="w-7 h-7 lg:w-10 lg:h-10 flex-shrink-0 text-primary"
          name="i-heroicons-puzzle-piece-solid"
        />
        <span class="font-bold text-xl lg:text-2xl">
          Card<span class="text-primary">Climb</span>
        </span>
      </NuxtLink>
      <UHorizontalNavigation
        class="hidden lg:flex justify-around gap-x-8"
        :links="links"
      />
      <div class="flex items-center justify-center lg:flex gap-1.5">
        <UButton
          size="md"
          variant="ghost"
          color="gray"
          :ui="{
            rounded: 'rounded-full'
          }"
          @click="switchColorMode()"
        >
          <ColorScheme placeholder="">
            <Icon
              v-if="colorMode.value === 'dark'"
              name="i-heroicons-moon-20-solid"
              class="text-xl"
            />
            <Icon
              v-else
              name="i-heroicons-sun-20-solid"
              class="text-xl"
            />
          </ColorScheme>
        </UButton>
        <UButton
          color="white"
          to="/login"
          @click="emit('update:menu', false)"
        >
          Sign in
        </UButton>
        <UButton
          class="hidden lg:flex"
          color="black"
          to="/signup"
        >
          Sign up
        </UButton>
        <UButton
          class="lg:hidden"
          size="md"
          variant="ghost"
          color="gray"
          :ui="{
            rounded: 'rounded-full'
          }"
          :icon="!propsOpen ? 'i-heroicons-bars-3-20-solid' : 'i-heroicons-x-mark-20-solid'"
          @click="emit('update:menu', !propsOpen)"
        />
      </div>
    </UContainer>
  </header>
</template>

<style></style>