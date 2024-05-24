<template>
  <div
    class="flex flex-row container mx-auto justify-center gap-x-[100px]"
  >
    <FormInfoPersonal></FormInfoPersonal>
    <FormInfoCompany
      v-if="user?.roleRoleName === 'RECRUITER'"
    ></FormInfoCompany>
  </div>
</template>

<script lang="ts" setup>
  const { user } = storeToRefs(useAuthStore());
</script>

<style scoped></style>
