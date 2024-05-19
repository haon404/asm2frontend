<template>
  <div class="flex flex-col p-6">
    <div>Popular Company</div>
    <div class="overflow-hidden h-36 w-36">
      <img
        src="#"
        alt="#"
      />
    </div>
    <div class="text-xl">{{ company?.name }}</div>
    <div class="text-sm">
      <span class="text-purple">
        {{ company?.recruitmentIds.length }}
      </span>
      recruitments
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { type Company } from "~/interfaces/Company";

  const company = ref<Company>();
  await useHttp<Company>(`/company/popular`, {
    method: "GET",
  })
    .then((r) => (company.value = r))
    .catch((e) => console.log(e));
</script>

<style scoped></style>
