<template>
  <div class="flex flex-col items-center gap-y-5">
    <h1 class="text-center text-4xl">
      Personal Information
    </h1>
    <!-- Todo update profile picture -->
    <div class="w-28 h-28">
      <img
        v-if="profileImageUrl"
        :src="profileImageUrl"
        alt="Profile Image"
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

  async function onFileSelected(event: Event) {
    const file = (
      event.target as HTMLInputElement
    ).files?.[0];
    if (file) {
      profileImageUrl.value =
        URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("file", file);
      console.log(formData.get("file"));
      await useHttp(
        `/user/${user.value?.id}/picture`,
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
    address: yup.string().required(),
    phoneNumber: yup.string().required(),
    description: yup.string().required(),
  });
</script>

<style scoped></style>
