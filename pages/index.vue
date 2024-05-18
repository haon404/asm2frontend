<template>
  <div class="flex flex-row container">
    <!-- Job -->
    <div class="flex flex-col w-3/5 gap-y-5">
      <div class="gap-y-1.5">
        <div
          class="text-sm text-muted-foreground uppercase"
        >
          Most applied jobs
        </div>
        <div class="text-3xl">
          Most popular recruitment
        </div>
      </div>
      <CardPopularJob />
    </div>
    <!-- Company -->
    <CardPopularCompany />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
