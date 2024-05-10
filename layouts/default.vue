<script lang="ts" setup>
  const { open, close, getState } = useOpen()
  const { t } = useI18n()

  const router = useRouter();
  const { isAuthenticated, signout } = useAuth();
  const handleSignout = async () => {
    await signout();
    router.push("/login");
  };

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
      :is-authenticated="isAuthenticated()"
      @open="$event == false ? close() : open()"
      @sign-out="handleSignout()"
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
          color="white"
          block
          to="/login"
          @click="click()"
        >{{ isAuthenticated() ? t('signOut') : t('signIn') }}</UButton>
        <UButton
          v-if="!isAuthenticated()"
          block
          color="primary"
          to="/signup"
          @click="click()"
        >{{ t('signUp') }}</UButton>
      </div>
      <div :class="getState() ? 'hidden lg:block ' : 'lg:block'">
        <slot />
      </div>
    </UContainer>
  </div>
</template>