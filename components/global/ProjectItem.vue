<template>
  <div class="col-12 col-sm-6 project-col col-xl-4">
    <a :href="href" target="_blank">
      <div class="project-item">
        <div class="project-item-wrapper" :style="{ backgroundColor: color }">
          <div class="project-item__title">
            {{ title }}
          </div>
          <div class="project-item__description">
            {{ description }}
          </div>
        </div>
        <img
          :src="require(`../../assets/image/projects/${image}`)"
          alt="VERMONT INNOVATION BOX"
          class="project-item__image"
        />
      </div>
    </a>
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
    color: {
      required: true,
      type: String,
    },
    href: {
      required: true,
      type: String,
    },
  },
};
</script>
