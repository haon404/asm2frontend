<script setup lang="ts">
  import { Icon } from "@iconify/vue";

  const props = defineProps<{
    placeholder?: string;
  }>();
  const values = defineModel<string[]>();

  const searchTerm = ref("");

  watch(
    values,
    () => {
      searchTerm.value = "";
    },
    { deep: true }
  );
</script>

<template>
  <div class="flex items-center justify-center">
    <ComboboxRoot
      v-model="values"
      v-model:search-term="searchTerm"
      multiple
    >
      <ComboboxAnchor
        class="flex flex-row items-end"
      >
        <TagsInputRoot
          v-slot="{ modelValue: tags }"
          :model-value="values"
          delimiter=""
          class="flex flex-row flex-wrap max-w-[300px] gap-x-1 gap-y-1"
        >
          <TagsInputItem
            v-for="item in tags"
            :value="item"
            class="flex bg-green-500 text-white rounded-full px-2 text-lg"
          >
            <TagsInputItemText />
            <TagsInputItemDelete>
              <Icon
                icon="lucide:x"
                class=""
              />
            </TagsInputItemDelete>
          </TagsInputItem>

          <ComboboxInput as-child>
            <TagsInputInput
              :placeholder="placeholder"
              @keydown.enter.prevent
              class="px-4 text-black"
            />
          </ComboboxInput>
        </TagsInputRoot>

        <ComboboxTrigger>
          <Icon
            icon="radix-icons:chevron-down"
            class="text-black my-2"
          />
        </ComboboxTrigger>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxViewport
          class="bg-white text-black border-1 border-green-500"
        >
          <ComboboxEmpty
            class="text-center text-lg"
            >No Options Available</ComboboxEmpty
          >

          <ComboboxGroup>
            <!-- <ComboboxItem
              v-for="(option, index) in options"
              :key="index"
              :value="option"
              class="relative border-1 data-[state=checked]:hidden"
            >
              <span class="mx-4">
                {{ option }}
              </span>
            </ComboboxItem> -->
            <slot></slot>
          </ComboboxGroup>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxRoot>
  </div>
</template>
