<script lang="ts" setup>
  
  const { getBoxes } = useBox();
  const { data: boxes, execute: executeBoxes } = await getBoxes()
  executeBoxes();

</script>

<template>
  <div>
    <CardsBoxList :boxes="boxes" />
  </div>
</template>

<style></style>
