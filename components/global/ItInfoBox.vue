<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-0">
    <div class="it-box" :style="{ backgroundColor: color }">
      <div class="it-box__title">
        {{ title }}
      </div>
      <ul>
        <li v-for="(item, index) in services" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    services: {
      required: true,
      type: Array,
    },
    color: {
      required: true,
      type: String,
    },
  },
};
</script>
