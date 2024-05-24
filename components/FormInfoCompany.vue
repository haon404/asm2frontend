<template>
  <div
    class="flex flex-col items-center gap-y-5"
    v-if="company"
  >
    <h1 class="text-center text-4xl">
      Company Information
    </h1>
    <!-- Todo update profile picture -->
    <div
      class="w-28 h-28 overflow-hidden rounded-full"
    >
      <img
        v-if="profileImageUrl"
        :src="profileImageUrl"
        alt="Profile Image"
        class="object-fill w-full h-full aspect-square"
      />
      <div
        v-else
        class="text-center"
      >
        No Profile Image
      </div>
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        @change="onFileSelected"
        class="hidden"
      />
    </div>
    <UiButton @click="fileInput?.click()"
      >Upload</UiButton
    >
    <Form
      @submit="onUpdate"
      :validationSchema="schema"
      class="flex flex-col max-w-screen-md border-2 p-6"
    >
      <FormField
        name="email"
        type="email"
        :value="company.email"
      >
        Email:
      </FormField>
      <FormField
        name="name"
        :value="company.name"
        >Company Name:</FormField
      >
      <FormField
        name="address"
        :value="company.address"
        >Address:
      </FormField>
      <FormField
        name="phoneNumber"
        :value="company.phoneNumber"
        >Phone Number:
      </FormField>
      <!-- create field with name=description -->
      <FormField
        name="description"
        type="textarea"
        :value="company.description"
        >Description:
      </FormField>

      <Separator
        class="bg-white h-[1px] w-full m-5 mx-auto"
        decorative
      />
      <UiButton type="submit">Update</UiButton>
    </Form>
  </div>
</template>

<script lang="ts" setup>
  import * as yup from "yup";
  import type { Company } from "~/types/Company";

  const { user } = storeToRefs(useAuthStore());

  const fileInput = ref<HTMLInputElement>();
  const profileImageUrl = ref<string | null>(
    null
  );

  const company = ref<Company>();
  onMounted(async () => {
    const companyId = user.value?.companyId;
    if (companyId) {
      company.value = await useHttp<Company>(
        `/company/${companyId}`
      );
      const file = await useHttp<File>(
        `/company/${company.value.id}/picture`
      );
      profileImageUrl.value =
        URL.createObjectURL(file);
    }
  });

  async function onFileSelected(event: Event) {
    const file = (
      event.target as HTMLInputElement
    ).files?.[0];
    if (file && company.value) {
      profileImageUrl.value =
        URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("file", file);
      console.log(formData.get("file"));
      await useHttp(
        `/company/${company.value.id}/picture`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((r) => {
          console.log(r);
        })
        .catch((e) => console.log(e));
    }
  }

  function onUpdate(data: any) {
    console.log(data);
  }

  const schema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    address: yup.string().optional().nullable(),
    phoneNumber: yup
      .string()
      .optional()
      .nullable(),
    description: yup
      .string()
      .optional()
      .nullable(),
  });
</script>

<style scoped></style>
