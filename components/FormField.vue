<template>
  <Label>
    <slot></slot>
  </Label>
  <ErrorMessage
    class="text-red-500"
    :name="name"
  />

  <Field
    v-if="type === 'select'"
    :name="name"
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

  <Field
    v-else-if="type === 'textarea'"
    :name="name"
    class="text-black px-2"
    v-slot="{ field }"
    :value="value"
  >
    <textarea
      rows="3"
      v-bind="field"
      class="px-2 py-1 text-black"
    ></textarea>
  </Field>

  <Field
    v-else
    :name="name"
    :type="type"
    :value="value"
    class="text-black px-2"
  >
  </Field>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      name: string;
      type?: string;
      value?: string;
    }>(),
    {
      type: "text",
      value: "",
    }
  );
</script>

<style scoped></style>
