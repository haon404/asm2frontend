<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger as-child>
      <UiButton variant="account"
        >Account</UiButton
      >
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="border-2 border-white py-2 px-4 my-2 bg-black"
        align="end"
      >
        <DropdownMenuItem
          class="hover:text-green-500 hover:cursor-pointer"
          @click="navigateTo('/profile')"
          >Profile</DropdownMenuItem
        >
        <DropdownMenuItem
          class="hover:text-green-500 hover:cursor-pointer"
          v-if="
            user?.roleRoleName === 'RECRUITER'
          "
          @click="
            navigateTo('/profile/recruitments')
          "
          >Manage Recruitments</DropdownMenuItem
        >
        <Separator
          class="bg-white h-[1px] w-full m-2 mx-auto container"
          decorative
        />
        <DropdownMenuItem
          class="hover:text-green-500 hover:cursor-pointer"
          @click="logoutUser"
          >Logout</DropdownMenuItem
        >
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
  const open = ref(false);
  const { logoutUser } = useAuthStore();
  const { user, authenticated } = storeToRefs(
    useAuthStore()
  );
  watch(authenticated, () => {
    if (!authenticated) {
      console.log("not authenticated");
      navigateTo("/");
    }
  });
</script>

<style scoped></style>
