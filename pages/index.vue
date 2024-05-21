<template>
  <SectionCategory />
  <Separator
    class="bg-white h-[1px] w-full m-10 mx-auto container"
    decorative
  />
  <SectionPopular />
</template>

<script lang="ts" setup>
  import SectionCategory from "~/components/SectionCategory.vue";
  import SectionPopular from "~/components/SectionPopular.vue";
</script>

<style scoped></style>
