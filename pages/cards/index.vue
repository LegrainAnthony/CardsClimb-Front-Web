<script lang="ts" setup>

  const { getBoxes } = useBox();
  const { data: boxes } = await getBoxes()

</script>

<template>
  <div>
    <CardsBoxList :boxes="boxes" />
  </div>
</template>

<style></style>
