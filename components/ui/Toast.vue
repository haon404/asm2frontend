<script setup lang="ts">
  const open = defineModel<boolean>("open");
</script>

<template>
  <ToastProvider :duration="1000">
    <ToastRoot
      class="border-4 border-white bg-black fixed bottom-0 right-0 m-5 p-5"
      v-model:open="open"
    >
      <ToastDescription>
        <slot></slot>
      </ToastDescription>
    </ToastRoot>

    <div>
      <ToastViewport />
    </div>
  </ToastProvider>
</template>

<style scoped></style>
