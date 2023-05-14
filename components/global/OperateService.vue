<template>
  <div class="col-12 col-lg-12">
    <div class="operate-service">
      <img
        :src="require(`../../assets/image/operate/${image}`)"
        alt="VERMONT INNOVATION BOX"
        class="site-service__image"
      />
      <div class="operate-service-wrapper">
        <div class="operate-service__title">
          {{ title }}
        </div>
        <div class="operate-service__description">
          {{ description }}
        </div>
      </div>
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
    description: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
  },
};
</script>
