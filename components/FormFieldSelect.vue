<template>
  <Label :for="props.name">
    <slot></slot>
  </Label>
  <ErrorMessage
    class="text-red-500"
    :name="props.name"
  />
  <Field
    :name="props.name"
    class="text-black px-2"
    v-slot="{ field }"
  >
    <select
      v-bind="field"
      class="px-2 py-1 text-black"
    >
      <slot name="options"></slot>
    </select>
  </Field>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    name: string;
  }>();
</script>

<style scoped></style>
