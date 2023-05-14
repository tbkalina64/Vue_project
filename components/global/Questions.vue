<template>
  <div class="features-page__contacts">
    <h2 class="features-page__title">Questions?</h2>
    <div class="features-page__subtitle">
      <nuxt-link to="/contacts" class="features-page__link animation__arrow">
        <span>Contact us</span>
        <Arrow :arrow-position="true" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Arrow from "@/components/global/Arrow.vue";

export default {
  components: {
    Arrow,
  },
};
</script>
