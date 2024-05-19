<template>
  <div class="flex flex-col p-6 gap-y-5 w-3/5">
    <div>
      <div class="uppercase text-sm text-purple">
        Most applied job
      </div>
      <div class="text-2xl">
        Popular recruitment post
      </div>
    </div>
    <div
      class="flex flex-col border-4 border-black gap-1.5 p-5 w-full relative"
    >
      <div class="uppercase text-sm text-purple">
        {{ category?.name }}
      </div>
      <div class="text-xl">
        {{ recruitment?.title }}
      </div>
      <div class="flex flex-row gap-x-3">
        <div class="text-sm">
          {{ company?.name }}
        </div>
        <div class="text-sm">
          {{ recruitment?.address }}
        </div>
      </div>
      <button
        class="absolute bottom-5 right-5 border-black bg-green border-2 px-6 py-2 hover:bg-purple hover:border-white"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Category } from "~/interfaces/Category";
  import type { Company } from "~/interfaces/Company";
  import type { Recruitment } from "~/interfaces/Recruitment";

  const recruitment = ref<Recruitment>();
  const category = ref<Category>();
  await useHttp<{
    recruitment: Recruitment;
    category: Category;
  }>("/recruitment/popular", {
    method: "GET",
  })
    .then((r) => {
      recruitment.value = r.recruitment;
      category.value = r.category;
    })
    .catch((e) => console.log(e));

  const company = ref<Company>();
  await useHttp<Company>(
    `/company/${recruitment.value?.companyId}`,
    { method: "GET" }
  )
    .then((r) => (company.value = r))
    .catch((e) => console.log(e));
</script>

<style scoped></style>
