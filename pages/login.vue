<template>
  <div class="h-screen flex flex-row">
    <div
      class="flex flex-col items-center m-auto gap-y-5"
    >
      <h1 class="text-center text-4xl">Login</h1>
      <Form
        @submit="onSubmit"
        :validationSchema="schema"
        class="flex flex-col max-w-screen-md border-2 p-6"
      >
        <FormField
          name="email"
          type="email"
        >
          Email:
        </FormField>
        <FormField
          name="password"
          type="password"
          >Password:
        </FormField>
        <Separator
          class="bg-white h-[1px] w-full m-5 mx-auto"
          decorative
        />
        <UiButton type="submit">Submit</UiButton>
      </Form>
    </div>
  </div>
  <UiToast v-model:open="open"
    >Login Successfully</UiToast
  >
  <UiToast v-model:open="failed"
    >Login Failed</UiToast
  >
</template>

<script lang="ts" setup>
  const open = ref(false);
  const failed = ref(false);

  import * as yup from "yup";

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { user, authenticated } = storeToRefs(
    useAuthStore()
  );
  const { authenticateUser } = useAuthStore();

  async function onSubmit(values: any) {
    await authenticateUser(
      values.email,
      values.password
    );
    console.log(user.value);
    if (authenticated.value) {
      open.value = true;
      window.setTimeout(() => {
        navigateTo("/");
      }, 1000);
    } else {
      failed.value = true;
    }
  }

  interface Login {
    email: string;
    password: string;
  }
</script>

<style scoped></style>
