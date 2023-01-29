<template>
  <div class="main">
    <div class="container">
      <div class="main__wrap">
        <p class="main__subtitle text--color-1">
          {{ $t("main.text.subtitle") }}
        </p>
        <h1 class="main__title">
          {{ $t("main.text.title") }}
        </h1>
        <p
          class="main__text text--color-2"
          v-html="$t('main.text.description')"
        ></p>
        <div class="main__links">
          <AButton
            button-view="link"
            image="mail"
            gradient-bg="1"
            :image-title="$t('main.buttons.mail.name')"
            link-href="mailto:roman.belov.94@gmail.com"
          />
          <AButton
            button-view="link"
            image="telegram"
            gradient-bg="2"
            :image-title="$t('main.buttons.telegram.name')"
            :link-href="$t('main.buttons.telegram.link')"
          />
          <AButton
            button-view="link"
            image="linked"
            gradient-bg="3"
            :image-title="$t('main.buttons.linkedIn.name')"
            :link-href="$t('main.buttons.linkedIn.link')"
          />
          <AButton
            button-view="link"
            image="git"
            gradient-bg="4"
            :image-title="$t('main.buttons.github.name')"
            :link-href="$t('main.buttons.github.link')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AButton from "@/components/AButton/AButton.vue";
</script>
