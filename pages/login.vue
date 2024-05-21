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
        <Label for="email">Email: </Label>
        <ErrorMessage
          class="text-red-500"
          name="email"
        />
        <Field
          name="email"
          type="email"
          class="text-black"
        />
        <Label for="password">Password: </Label>
        <ErrorMessage
          class="text-red-500"
          name="password"
        />
        <Field
          class="text-black"
          name="password"
          type="password"
        />
        <Separator
          class="bg-white h-[1px] w-full m-5 mx-auto"
          decorative
        />
        <UiButton type="submit">Submit</UiButton>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import * as yup from "yup";
  import {
    Form,
    Field,
    ErrorMessage,
  } from "vee-validate";

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
      navigateTo("/");
    }
  }

  interface Login {
    email: string;
    password: string;
  }
</script>

<style scoped></style>
