<template>
  <UiCard>
    <template #header>
      {{ category?.name }}
    </template>
    <template #body>
      {{ recruitment?.title }}
    </template>
    <template #footer>
      <div>{{ recruitment?.address }}</div>
      <div>{{ company?.name }}</div>
    </template>
    <UiButton>Apply</UiButton>
  </UiCard>
</template>

<script lang="ts" setup>
  import type { Category } from "~/types/Category";
  import type { Recruitment } from "~/types/Recruitment";
  import type { Company } from "~/types/Company";

  const recruitment = ref<Recruitment>();
  const category = ref<Category>();
  await useHttp<{
    recruitment: Recruitment;
    category: Category;
  }>(`/recruitment/popular`)
    .then((r) => {
      recruitment.value = r.recruitment;
      category.value = r.category;
    })
    .catch((e) => console.log(e));

  const company = ref<Company>();
  await useHttp<Company>(
    `/company/${recruitment.value?.companyId}`,
    {
      method: "GET",
    }
  )
    .then((r) => (company.value = r))
    .catch((e) => console.log(e));
</script>

<style scoped></style>
