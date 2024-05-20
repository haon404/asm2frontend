<template>
  <div
    class="flex flex-row p-5 border-2 border-white justify-between gap-x-5"
  >
    <div class="flex flex-col">
      <div
        class="text-green-500 text-sm uppercase"
      >
        <slot name="header"></slot>
      </div>
      <div>
        <slot name="body"></slot>
      </div>
      <div class="flex flex-row text-sm gap-x-5">
        <slot name="footer"></slot>
      </div>
    </div>
    <div class="self-end">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
