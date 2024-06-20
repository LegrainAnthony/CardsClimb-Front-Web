<script lang="ts" setup>
</script>

<template>
  <div>
    <CardsSectionTitle
      :title="`Card ${$route.params.id}`"
      :back="true"
      @back="$router.back()"
    >
    </CardsSectionTitle>
  </div>
</template>

<style></style>