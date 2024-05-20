<template>
  <SectionCategory />
  <Separator
    class="bg-white SeparatorRoot"
    decorative
    orientation="vertical"
  />
  <SectionPopular />
</template>

<script lang="ts" setup>
  import SectionCategory from "~/components/SectionCategory.vue";
  import SectionPopular from "~/components/SectionPopular.vue";
</script>

<style scoped>
  .SeparatorRoot[data-orientation="vertical"] {
    height: 1px;
    width: 100%;
  }
</style>
