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
    :type="props.type"
    class="text-black px-2"
  >
  </Field>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      name: string;
      type?: string;
    }>(),
    {
      type: "text",
    }
  );
</script>

<style scoped></style>
