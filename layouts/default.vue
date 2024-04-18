<script lang="ts" setup>
  const open = ref(false)

  // pour fermer le menu au click
  const click = () => {
    open.value = false
  }
  const links = [
    {
      label: 'Cards',
      icon: 'i-heroicons-inbox-stack',
      to: '/cards',
      click
    },
    {
      label: 'Blitz',
      icon: 'i-heroicons-bolt-solid',
      to: '/blitz',
      click
    },
    {
      label: 'Profile',
      icon: 'i-heroicons-user',
      to: '/profile',
      click
    }
  ]
</script>
<template>
  <div>
    <Header
      :props-open="open"
      :links=links
      @update:menu="open = $event"
    />

    <UContainer>
      <div
        v-if=open
        class="px-4 sm:px-6 pt-3 lg:hidden"
      >
        <UVerticalNavigation
          class="pb-6"
          :links="links"
        />
        <UDivider class="mb-4" />
        <UButton
          block
          to="/signup"
          @click="click()"
        >Sign Up</UButton>
      </div>
      <div :class="open ? 'hidden lg:block ' : 'lg:block'">
        <slot />
      </div>

    </UContainer>

  </div>
</template>