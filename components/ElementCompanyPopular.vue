<template>
  <div class="flex flex-col">
    <div class="">Popular Company</div>
    <div
      class="w-32 h-32 overflow-hidden rounded-full"
    >
      <img
        v-if="profileImageUrl"
        :src="profileImageUrl"
        alt="Profile Image"
        class="w-full h-full"
      />
      <div
        v-else
        class="text-center"
      >
        No Profile Image
      </div>
    </div>
    <div class="text-xl">{{ company?.name }}</div>
    <div class="flex flex-row gap-x-1">
      <div class="text-green-500 text-sm">
        {{ company?.recruitmentIds.length }}
      </div>
      <div class="text-sm">
        {{
          amount > 1 ? "positions" : "position"
        }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Company } from "~/types/Company";

  const company = ref<Company>();

  await useHttp<Company>(`/company/popular`, {
    method: "GET",
  })
    .then((r) => (company.value = r))
    .catch((e) => console.log(e));

  const amount = computed(() => {
    // check if the above value is not undefined
    if (company?.value?.recruitmentIds.length) {
      return company?.value?.recruitmentIds
        .length;
    } else {
      return 0;
    }
  });
  const profileImageUrl = ref<string | null>();
  onMounted(async () => {
    if (company.value) {
      const file = await useHttp<File>(
        `/company/${company.value.id}/picture`
      );
      profileImageUrl.value =
        URL.createObjectURL(file);
    }
  });
</script>

<style scoped></style>
