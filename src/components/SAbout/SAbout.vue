<template>
  <section class="about">
    <div class="container">
      <div class="about__wrap">
        <div class="about__photo">
          <img class="about__photo-pic" :src="me" alt="Me" />
        </div>
        <div class="about__content text--color-1">
          <h3 class="title">{{ $t("about.title") }}</h3>
          <p
            v-for="(el, idx) in $tm('about.description')"
            :key="idx"
            v-html="$rt(el)"
          ></p>
          <h3 class="subtitle">{{ $t("about.stack.present.title") }}</h3>
          <ul class="about__technologies">
            <li
              class="about__technologies__item"
              v-for="(el, idx) in $tm('about.stack.present.technologies')"
              :key="idx"
            >
              <div class="about__technologies__item-pic">
                <img :src="getImg($rt(el.src))" :alt="$rt(el.src)" />
              </div>
              <p>{{ $rt(el.text) }}</p>
            </li>
          </ul>
          <h3 class="subtitle">{{ $t("about.stack.future.title") }}</h3>
          <ul class="about__technologies">
            <li
              class="about__technologies__item"
              v-for="(el, idx) in $tm('about.stack.future.technologies')"
              :key="idx"
            >
              <div class="about__technologies__item-pic">
                <img :src="getImg($rt(el.src))" :alt="$rt(el.src)" />
              </div>
              <p>{{ $rt(el.text) }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  vue,
  ts,
  nuxt,
  axios,
  scss,
  vueRouter,
  pinia,
  vuex,
  me,
} from "@/helpers/images";

const getImg = (str: string): string => {
  switch (str) {
    case "vue":
      return vue;
    case "ts":
      return ts;
    case "nuxt":
      return nuxt;
    case "axios":
      return axios;
    case "scss":
      return scss;
    case "vueRouter":
      return vueRouter;
    case "pinia":
      return pinia;
    case "vuex":
      return vuex;
    default:
      return "";
  }
};
</script>
