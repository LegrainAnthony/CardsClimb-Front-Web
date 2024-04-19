<script lang="ts" setup>
  const { open, close, getState } = useOpen()

  // pour fermer le menu au click
  const click = () => {
    close()
  }
  const links = [
    {
      label: 'Cards',
      icon: 'i-heroicons-inbox-stack-20-solid',
      to: '/cards',
      click
    },
    {
      label: 'Blitz',
      icon: 'i-heroicons-bolt-20-solid',
      to: '/blitz',
      click
    },
    {
      label: 'Profile',
      icon: 'i-heroicons-user-20-solid',
      to: '/profile',
      click
    }
  ]
</script>
<template>
  <div>
    <Header
      :props-open="getState()"
      :links=links
      @close="close()"
      @open="open()"
    />

    <UContainer>
      <div
        v-if=getState()
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
          @click="close()"
        >Sign Up</UButton>
      </div>
      <div :class="getState() ? 'hidden lg:block ' : 'lg:block'">
        <slot />
      </div>

    </UContainer>

  </div>
</template>