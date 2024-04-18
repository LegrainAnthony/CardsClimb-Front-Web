<script setup lang="ts">
</script>

<template>
  <UContainer class="min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-y-10">
    <div class="-mt-20 flex flex-col justify-center items-center gap-y-2">
      <h1 class="text-center font-bold text-2xl">Welcome to <span class="text-primary">CardClimb</span></h1>
      <p class="text-center text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam esse explicabo
      </p>
    </div>
    <div class="flex justify-around">
      <UIcon
        class="w-48 h-48"
        name="i-heroicons-document-arrow-down"
      />
      <div class="flex items-center">
        <UButton
          to="/blitz"
          icon="i-heroicons-bolt-solid"
        >Blitz Mode</UButton>
      </div>
    </div>
  </UContainer>
</template>
