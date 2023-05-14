<template>
  <section v-if="isLeftPosition || isNotDesktop" class="feature section">
    <div class="feature__image">
      <img
        :src="require(`../assets/image/${feature.image}`)"
        :alt="feature.title"
      />
      <div class="feature__block">
        <div
          :style="{ backgroundColor: feature.color }"
          class="feature__block--color"
        />
        <nuxt-link
          :to="feature.link"
          class="feature__block--link animation__arrow"
        >
          <span>join</span>
          <Arrow :arrow-position="true" />
        </nuxt-link>
      </div>
    </div>
    <div class="feature__texts">
      <p class="feature__title">
        {{ feature.title }}
      </p>
      <p v-for="text of feature.texts" :key="text" class="feature__text">
        {{ text }}
      </p>
      <p class="feature__price">
        {{ feature.price }}
      </p>
    </div>
    <nuxt-link
      :style="{ borderColor: feature.color }"
      :to="feature.link"
      class="feature__block--link feature__link animation__arrow"
    >
      <span>join</span>
      <Arrow :arrow-position="true" />
    </nuxt-link>
  </section>

  <section v-else class="feature feature--right section">
    <div class="feature__image d-sm-none">
      <img
        :src="require(`../assets/image/${feature.image}`)"
        :alt="feature.title"
      />
    </div>

    <div class="feature__texts">
      <p class="feature__title">
        {{ feature.title }}
      </p>
      <p v-for="text of feature.texts" :key="text" class="feature__text">
        {{ text }}
      </p>
      <p class="feature__price">
        {{ feature.price }}
      </p>
    </div>
    <div class="feature__image">
      <img
        class="d-none d-sm-block"
        :src="require(`../assets/image/${feature.image}`)"
        :alt="feature.title"
      />
      <div class="feature__block">
        <div
          :style="{ backgroundColor: feature.color }"
          class="feature__block--color"
        />
        <nuxt-link
          :to="feature.link"
          class="feature__block--link animation__arrow"
        >
          <span> join</span>
          <Arrow />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Arrow from "@/components/global/Arrow.vue";

export default {
  components: {
    Arrow,
  },
  props: {
    feature: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    isLeftPosition() {
      return this.index % 2 === 0;
    },
    isNotDesktop() {
      // if (process.client) {
      //   return window.innerWidth < 1200
      // }
      return false;
    },
  },
};
</script>
