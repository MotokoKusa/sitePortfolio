<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" class="header__logo">
          <img :src="logo" alt="logo" />
        </router-link>
        <ul v-if="!isMobileView" class="header__nav text--color-1">
          <li
            class="header__nav__item"
            v-for="(el, idx) in $tm('header.nav')"
            :key="idx"
          >
            <router-link
              class="header__nav__item-link text--color-1"
              :to="$rt(el.name)"
            >
              {{ $rt(el.title) }}
            </router-link>
          </li>
        </ul>
        <button @click="changeThemes" class="header__themes">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_578_178)">
              <path
                class="header__themes--dark"
                d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_578_178">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          @click="changeLanguage($i18n)"
          class="header__lang text--color-1"
        >
          {{ $t("header.language") }}
        </button>
        <button @click="clickBurger" v-if="isMobileView" class="header__burger">
          <span class="header__burger__line"></span>
          <span class="header__burger__line"></span>
          <span class="header__burger__line"></span>
        </button>
      </div>
    </div>
    <div
      :class="[
        'header__mobile__wrap',
        { 'header__mobile__wrap--active': isActiveBurger },
      ]"
      v-if="isMobileView"
    >
      <button @click="clickBurger" class="header__mobile__wrap__close">
        &#10006;
      </button>
      <ul class="header__mobile__nav">
        <li
          class="header__mobile__nav__item"
          v-for="(el, idx) in $tm('header.nav')"
          :key="idx"
        >
          <router-link
            class="header__mobile__nav__item-link text--color-1"
            :to="$rt(el.name)"
          >
            {{ $rt(el.title) }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import debounce from "lodash/debounce";
import { isMobile } from "@/helpers/responsive";
import { onMounted, onUnmounted, ref } from "vue";
import { logo } from "@/helpers/images";

const isMobileView = ref<boolean>(false);
const isActiveBurger = ref<boolean>(false);

const changeLanguage = (lang: { locale: string }) => {
  lang.locale = lang.locale === "ru" ? "en" : "ru";
};
const clickBurger = () => (isActiveBurger.value = !isActiveBurger.value);

const clickOutsideBurger = (event: Event): void => {
  const menu: Node | null = document.querySelector(".header__mobile__wrap");
  const burger: Node | null = document.querySelector(".header__burger");
  const target = event.target as Node | null;
  if (burger && menu) {
    if (
      event?.target !== menu &&
      !burger.contains(target) &&
      isActiveBurger.value
    ) {
      isActiveBurger.value = false;
    }
  }
  window.removeEventListener("click", clickOutsideBurger);
};

const emit = defineEmits(["handler-change-themes"]);
const changeThemes = () => {
  emit("handler-change-themes");
};

onMounted(() => {
  isMobileView.value = isMobile();
  document.addEventListener("click", clickOutsideBurger);
  window.addEventListener(
    "resize",
    debounce((): void => (isMobileView.value = isMobile()), 100)
  );
});

onUnmounted(() => {
  window.removeEventListener(
    "resize",
    debounce((): void => (isMobileView.value = isMobile()), 100)
  );
});
</script>
