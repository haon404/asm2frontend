<template>
  <div
    class="flex flex-col gap-y-10 container mx-auto"
  >
    <UiButton class="w-fit">New</UiButton>
    <ElementJob
      v-for="recruitment in recruitments"
      :recruitment="recruitment"
    ></ElementJob>
    <div class="flex flex-row gap-x-10">
      <UiPagination
        :total="recruitments.length"
        v-model:page="page"
        class="mx-auto"
      ></UiPagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Company } from "~/types/Company";
  import type { Recruitment } from "~/types/Recruitment";

  const page = ref(1);

  const { user } = storeToRefs(useAuthStore());
  const company = await useHttp<Company>(
    `/company/${user.value?.companyId}`
  );
  const recruitments = await useHttp<
    Recruitment[]
  >(
    `/recruitment?companyId=${company.id}&page=${
      page.value - 1
    }&size=5`
  );
</script>

<style scoped></style>
