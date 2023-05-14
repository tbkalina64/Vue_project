<template>
  <div class="services">
    <div class="main-services">
      <div class="part-services">
        <nuxt-link to="/services/coworking-services" class="animation__arrow">
          <div>
            <div class="part-services__block-text">
              <h1 class="part-services__title">Coworking services</h1>
            </div>
            <div class="part-services__text">
              If you are interested in renting a place to work outside the house
              or as an alternative to higher-priced traditional office space, we
              welcome the opportunity to speak with you
            </div>
          </div>
          <div class="part-services__img">
            <Arrow :is-large="true" />
          </div>
        </nuxt-link>
      </div>
      <div class="part-it-company">
        <nuxt-link to="/services/it-company" class="animation__arrow">
          <div>
            <div class="part-it-company__block-text">
              <div class="part-it-company__top-title">Modern, growing</div>
              <h2 class="part-it-company__title">IT company</h2>
            </div>
            <div class="part-it-company__text">
              We are advisors, engineers, and designers solving business
              challenges with innovative technology solutions
            </div>
          </div>
          <div class="part-it-company__img">
            <Arrow :arrow-position="true" :is-large="true" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/global/Arrow.vue";
export default {
  name: "Services",
  components: {
    Arrow,
  },
  layout: "noContainerLayout",
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
};
</script>
