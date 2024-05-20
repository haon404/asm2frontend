<template>
  <div
    class="px-4 py-2 text-xl hover:cursor-pointer transition"
    @click="navigateTo(props.to)"
    :class="props.variant"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      to?: string;
      variant?: string;
    }>(),
    {
      variant: "primary",
    }
  );
</script>

<style scoped>
  .primary {
    @apply bg-green-500 text-white hover:bg-green-700;
  }
</style>
