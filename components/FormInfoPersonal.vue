<template>
  <div class="flex flex-col items-center gap-y-5">
    <h1 class="text-center text-4xl">
      Personal Information
    </h1>
    <!-- Todo update profile picture -->
    <div
      class="w-28 h-28 overflow-hidden rounded-full"
    >
      <img
        v-if="profileImageUrl"
        :src="profileImageUrl"
        alt="Profile Image"
        class="w-full h-full"
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
        v-if="user"
        :value="user.email"
      >
        Email:
      </FormField>
      <FormField
        name="fullName"
        v-if="user"
        :value="user.fullName"
        >Full Name:</FormField
      >
      <FormField
        name="address"
        v-if="user"
        :value="user.address"
        >Address:
      </FormField>
      <FormField
        name="phoneNumber"
        v-if="user"
        :value="user.phoneNumber"
        >Phone Number:
      </FormField>
      <!-- create field with name=description -->
      <FormField
        name="description"
        v-if="user"
        type="textarea"
        :value="user.description"
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

  const { user } = storeToRefs(useAuthStore());

  const fileInput = ref<HTMLInputElement>();
  const profileImageUrl = ref<string | null>(
    null
  );

  onMounted(async () => {
    if (user.value) {
      const file = await useHttp<File>(
        `/user/${user.value.id}/picture`
      );
      if (file) {
        profileImageUrl.value =
          URL.createObjectURL(file);
      }
    }
  });

  async function onFileSelected(event: Event) {
    const file = (
      event.target as HTMLInputElement
    ).files?.[0];
    if (file && user.value) {
      profileImageUrl.value =
        URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("file", file);
      console.log(formData.get("file"));
      await useHttp(
        `/user/${user.value.id}/picture`,
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
    fullName: yup.string().required(),
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
