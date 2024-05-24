<template>
  <div class="h-screen flex flex-row">
    <div
      class="flex flex-col items-center m-auto gap-y-5"
    >
      <h1 class="text-center text-4xl">
        Register
      </h1>
      <Form
        @submit="onSubmit"
        :validationSchema="schema"
        class="flex flex-col max-w-screen-md border-2 p-6"
      >
        <FormField
          name="email"
          type="email"
          >Email:
        </FormField>
        <FormField name="fullname"
          >Full Name:
        </FormField>
        <FormField
          name="password"
          type="password"
          >Password:
        </FormField>
        <FormField
          name="password_confirmation"
          type="password"
          >Confirm Password:
        </FormField>

        <FormField
          type="select"
          name="role"
        >
          Role:
          <template #options>
            <option value="APPLICANT">
              Applicant
            </option>
            <option value="RECRUITER">
              Recruiter
            </option>
          </template>
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
    >User Registered Successfully</UiToast
  >
  <UiToast v-model:open="failed"
    >User Registeration Failed</UiToast
  >
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });

  const open = ref(false);
  const failed = ref(false);

  import * as yup from "yup";

  const schema = yup.object({
    email: yup.string().email().required(),
    fullname: yup.string().required(),
    password: yup.string().required(),
    password_confirmation: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Passwords must match"
      )
      .required(),
    role: yup.string().required(),
  });

  async function onSubmit(data: any) {
    const user = {
      email: data.email,
      fullName: data.fullname,
      password: data.password,
      roleRoleName: data.role,
    };
    await useHttp("/register", {
      method: "POST",
      body: user,
    })
      .then((res) => {
        open.value = true;
        // delay for 1s
        setTimeout(() => {
          open.value = false;
        }, 1000);
        navigateTo("/login");
      })
      .catch((err) => {
        failed.value = true;
        console.log(err);
      });
  }
</script>

<style scoped></style>
