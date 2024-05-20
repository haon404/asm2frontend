<template>
  <div
    class="flex flex-row p-5 gap-x-20 container mx-auto justify-center"
  >
    <div class="flex flex-col">
      <div
        class="text-sm text-green-500 uppercase"
      >
        Most applied job
      </div>
      <div class="text-3xl capitalize">
        Noticable Job Recruitment
      </div>
      <div class="h-8"></div>
      <ElementJobPopular />
    </div>
    <ElementCompanyPopular />
  </div>
</template>

<script lang="ts" setup>
  import ElementCompanyPopular from "./ElementCompanyPopular.vue";
  import ElementJobPopular from "./ElementJobPopular.vue";
</script>

<style scoped></style>
