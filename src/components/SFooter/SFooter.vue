<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__text text--color-1">
          {{ $t("footer.text") }}
        </div>
        <div class="footer__links">
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
  </footer>
</template>

<script setup lang="ts">
import AButton from "@/components/AButton/AButton.vue";
</script>
