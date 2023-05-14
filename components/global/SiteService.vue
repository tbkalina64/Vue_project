<template>
  <div class="col-12 col-md-6 col-xl-12">
    <div class="site-service">
      <div class="site-service__title">
        {{ title }}
      </div>
      <div class="site-service__description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
  },
};
</script>
