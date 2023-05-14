<template>
  <div class="error-layout">
    <main class="error-page">
      <div class="error-page__blocks">
        <p class="error-page__title">
          {{ error.statusCode }}
        </p>
        <div class="error-page__blocks--pink" />
        <div class="error-page__blocks--grey" />
        <div class="error-page__blocks--text">
          <p class="error-page__sub-title">
            Opps, something going wrong. Check your url
          </p>
        </div>
        <nuxt-link to="/" class="error-page__blocks--button animation__arrow">
          <span class="animation__arrow--title">
            home
            <Arrow :arrow-position="true" />
          </span>
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
import Arrow from "@/components/global/Arrow.vue";

export default {
  name: "Error",
  components: {
    Arrow,
  },
  layout: "mainLayout",
  props: {
    error: {
      default: () => ({}),
      type: Object,
    },
  },
  head() {
    return {
      title: `${this.error.statusCode} | VT-Inbox`,
    };
  },
};
</script>
