<template>
  <nuxt-link v-if="link" :class="'button ' + color" :to="href">
    {{ text }}
  </nuxt-link>
  <button v-else :class="'button ' + color" @click="callback">
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      default: "white",
      type: String,
    },
    text: {
      default: "Button",
      type: String,
    },
    link: {
      default: false,
      type: Boolean,
    },
    href: {
      default: "/coming-soon",
      type: String,
    },
    callback: {
      default: () => {},
      type: Function,
    },
  },
};
</script>
