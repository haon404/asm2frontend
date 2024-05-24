<template>
  <button
    class="px-4 py-2 text-xl hover:cursor-pointer transition"
    @click="doNavigation"
    :class="props.variant"
  >
    <slot></slot>
  </button>
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
  const doNavigation = () => {
    if (props.to !== undefined) {
      return navigateTo(props.to);
    } else {
      return;
    }
  };
</script>

<style scoped>
  .primary {
    @apply border-4 border-green-500 bg-green-500 text-white hover:bg-green-700 hover:border-green-700;
  }
  .account {
    @apply border-4 border-white hover:border-green-500 hover:text-green-500;
  }
  .minimal {
    @apply hover:text-green-500;
  }
</style>
