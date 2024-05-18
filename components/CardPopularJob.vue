<template>
  <Card class="relative">
    <CardHeader>
      <CardDescription class="uppercase">{{
        recruitment?.categoryIds
      }}</CardDescription>
      <CardTitle>{{
        recruitment?.title
      }}</CardTitle>
      <div class="flex flex-row gap-x-3">
        <CardDescription>{{
          recruitment?.address
        }}</CardDescription>
        <CardDescription>{{
          recruitment?.companyId
        }}</CardDescription>
      </div>
    </CardHeader>
    <Button class="absolute right-6 bottom-6"
      >Apply Job</Button
    >
  </Card>
</template>

<script lang="ts" setup>
  import type { Recruitment } from "~/interfaces/Recruitment";

  const recruitment = ref<Recruitment>();
  await useHttp<Recruitment>(
    "/recruitment/popular",
    {
      method: "GET",
    }
  ).then((r) => (recruitment.value = r));
</script>

<style scoped></style>
