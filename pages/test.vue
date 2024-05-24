<script setup lang="ts">
  import type { Category } from "~/types/Category";

  function onSubmit(data: any) {
    console.log(data);
  }

  const categories = ref([] as Category[]);
  categories.value = await useHttp<Category[]>(
    `/categories`,
    {
      method: "GET",
    }
  );
</script>

<template>
  <DialogRoot>
    <DialogTrigger>
      <UiButton>New</UiButton>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="bg-gray-900 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
      />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] p-5 border-4 border-white translate-x-[-50%] translate-y-[-50%] bg-black z-[100]"
      >
        <DialogTitle class="py-5">
          New Recruitment
        </DialogTitle>

        <Form @submit="onSubmit">
          <FormField name="title"
            >Title:
          </FormField>
          <FormField name="description"
            >Description:
          </FormField>
          <FormField name="experience"
            >Experience:
          </FormField>
          <FormField name="amount"
            >Recruit Amount:
          </FormField>
          <FormField name="address"
            >Location:
          </FormField>
          <FormField
            name="dueDate"
            type="date"
            >Due Date:
          </FormField>
          <FormField name="salary"
            >Salary:
          </FormField>
          <FormField
            type="select"
            name="category"
          >
            Category:
            <template #options>
              <option
                v-for="category in categories"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </template>
          </FormField>
        </Form>

        <div
          class="mt-[25px] flex justify-between"
        >
          <DialogClose as-child>
            <UiButton variant="danger"
              >Cancel</UiButton
            >
          </DialogClose>
          <DialogClose as-child>
            <UiButton>Post</UiButton>
          </DialogClose>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
