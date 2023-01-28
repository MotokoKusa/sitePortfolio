<template>
  <div :class="['portfolio', { 'dark-themes': isLightThemes }]">
    <SHeader @handler-change-themes="changeThemes" />
    <!--    <SFooter v-if="$route.name !== 'main'" />-->
  </div>
</template>

<script setup lang="ts">
import "@/styles/main.scss";
import { onUpdated, ref } from "vue";
import SHeader from "@/components/SHeader/SHeader.vue";

const isLightThemes = ref<boolean>(false);

const changeThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};

let t: ReturnType<typeof setTimeout> | string | number | undefined;

const up = () => {
  const top: number = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );

  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    t = setTimeout(() => {
      up();
    }, 20);
  } else clearTimeout(t);
};

onUpdated(() => {
  up();
});

// import SFooter from "@/components/SFooter/SFooter";
</script>
