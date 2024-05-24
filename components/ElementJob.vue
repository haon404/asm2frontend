<template>
  <UiCard v-if="recruitment">
    <template #header>
      <div v-for="category in categories">
        {{ category.name }}
      </div>
    </template>
    <template #body>
      {{ recruitment.title }}
    </template>
    <template #footer>
      <div>{{ recruitment.address }}</div>
      <div>{{ company?.name }}</div>
    </template>
    <div class="flex flex-row gap-x-3">
      <UiButton variant="blue">Detail</UiButton>
      <UiButton>Update</UiButton>
      <UiButton variant="danger">Delete</UiButton>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
  import type { Category } from "~/types/Category";
  import type { Company } from "~/types/Company";
  import type { Recruitment } from "~/types/Recruitment";

  const props = defineProps<{
    recruitment: Recruitment;
  }>();

  const categories = ref([] as Category[]);
  categories.value = await useHttp<Category[]>(
    `/categories/${props.recruitment.id}`
  );

  const company = ref<Company>();
  company.value = await useHttp<Company>(
    `/company/${props.recruitment.companyId}`
  );
</script>

<style scoped></style>
