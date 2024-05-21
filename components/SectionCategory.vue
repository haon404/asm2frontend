<template>
  <div
    class="flex flex-col mx-auto items-center p-5"
  >
    <div class="text-green-500 text-sm uppercase">
      Job Category
    </div>
    <div class="text-3xl">Top Category</div>
    <div class="h-5"></div>
    <div class="flex flex-row gap-x-3">
      <div
        v-for="category in categories"
        class="p-5 border-white border-2"
      >
        <div class="uppercase">
          {{ category.name }}
        </div>
        <div
          class="flex flex-row text-sm gap-x-1"
        >
          <div class="text-green-500">
            {{ category.recruitmentIds.length }}
          </div>
          <div class="">positions</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Category } from "~/types/Category";

  const categories = ref<Category[]>();
  await useHttp<Category[]>(
    `/category/populars/4`,
    {
      method: "GET",
    }
  )
    .then((r) => (categories.value = r))
    .catch((e) => console.log(e));
</script>

<style scoped></style>
