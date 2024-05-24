<template>
  <div>
    <div
      class="flex flex-row p-5 container justify-between mx-auto"
    >
      <div>Work Cv</div>
      <div class="flex flex-row gap-x-5">
        <UiButton
          variant="minimal"
          to="/"
          >Home</UiButton
        >
        <ElementButtonProfile
          v-if="authenticated"
        />
        <UiButton
          v-if="!authenticated"
          to="/login"
          >Login</UiButton
        >
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const { authenticated } = storeToRefs(
    useAuthStore()
  );
</script>

<style scoped></style>
