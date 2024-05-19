<template>
  <div class="bg-white text-black">
    <div class="container flex flex-row mx-auto">
      <CardRecruitmentPopular />
      <CardCompanyPopular />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import CardCompanyPopular from "~/components/CardCompanyPopular.vue";
  import CardRecruitmentPopular from "~/components/CardRecruitmentPopular.vue";
</script>

<style scoped></style>
