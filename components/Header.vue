<script lang="ts" setup>

  const open = ref(false)
</script>

<template>
  <header>
    <UContainer class="flex justify-between">
      <div>
      </div>
      <ul class="hidden lg:flex justify-around gap-x-8">
        <li>Cards</li>
        <li>Blitz</li>
        <li>Profile</li>
      </ul>
      <div class="flex items-center justify-center lg:flex gap-1.5">
        <UButton color="white">Sign in</UButton>
        <UButton
          class="hidden lg:flex"
          color="black"
        >Sign up</UButton>
        <UButton
          v-model="open"
          class="lg:hidden"
          size="md"
          variant="ghost"
          color="gray"
          :ui="{
            rounded: 'rounded-full'
          }"
          :icon="open ? 'i-heroicons-bars-3-20-solid' : 'i-heroicons-x-mark-20-solid'"
          @click="open = !open"
        />
      </div>
    </UContainer>
  </header>
</template>

<style></style>