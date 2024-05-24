<template>
  <div class="flex flex-col">
    <Label>
      <slot name="label"></slot>
    </Label>
    <ErrorMessage
      class="text-red-500"
      :name="name"
    />
    <Field
      asChild
      :name="name"
      class="text-black px-2"
    >
      <UiSelectTags
        v-model="values"
        :placeholder="placeholder"
      >
        <slot></slot>
      </UiSelectTags>
    </Field>
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      name: string;
      placeholder?: string;
    }>(),
    {}
  );

  const values = defineModel<string[]>();
</script>

<style scoped></style>
