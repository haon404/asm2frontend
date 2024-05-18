<template>
  <Card class="relative w-full">
    <CardHeader>
      <CardDescription class="uppercase">{{
        category?.name
      }}</CardDescription>
      <CardTitle>{{
        recruitment?.title
      }}</CardTitle>
      <div class="flex flex-row gap-x-3">
        <CardDescription>{{
          recruitment?.address
        }}</CardDescription>
        <CardDescription>{{
          company?.name
        }}</CardDescription>
      </div>
    </CardHeader>
    <Button class="absolute right-6 bottom-6"
      >Apply Job</Button
    >
  </Card>
</template>

<script lang="ts" setup>
  import type { Category } from "~/interfaces/Category";
  import type { Company } from "~/interfaces/Company";
  import type { Recruitment } from "~/interfaces/Recruitment";

  const recruitment = ref<Recruitment>();
  await useHttp<Recruitment>(
    "/recruitment/popular",
    {
      method: "GET",
    }
  )
    .then((r) => (recruitment.value = r))
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

  const category = ref<Category>();
  await useHttp<Category>(
    `/category/${recruitment.value?.categoryIds[0]}`,
    {
      method: "GET",
    }
  )
    .then((r) => (category.value = r))
    .catch((e) => console.log(e));
</script>

<style scoped></style>
