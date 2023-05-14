<template>
  <div class="main_banner">
    <div class="row justify_c-sb">
      <div class="col-10 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9">
        <Logo :h1="true" class="logo-big" :sub-title="subTitle" />
      </div>
      <div class="col-2 col-sm-1 col-md-2 col-lg-3 col-xl-3 col-xxl-3 text_a-r">
        <a v-scroll-to="'.section_line'">
          <svg
            viewBox="0 0 100 95"
            class="banner__arrow"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.9999 75.4289V0H54.9999V75.4289L92.4644 37.9645L99.5354 45.0355L49.9999 94.5711L0.464355 45.0355L7.53542 37.9645L44.9999 75.4289Z"
              fill="black"
            />
          </svg>
          <svg
            viewBox="0 0 100 95"
            class="banner__arrow"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.9999 75.4289V0H54.9999V75.4289L92.4644 37.9645L99.5354 45.0355L49.9999 94.5711L0.464355 45.0355L7.53542 37.9645L44.9999 75.4289Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="d-lg-none">
      <img
        :src="require(`../../assets/image/${imageSmall}`)"
        alt="VERMONT INNOVATION BOX"
        class="main_banner__photo-phone"
      />
    </div>
    <div
      v-if="image"
      class="main_banner__photo"
      :style="{
        backgroundImage: `url(${require(`../../assets/image/${image}`)})`,
      }"
    >
      <div class="main_banner__text main_banner__title">
        <div>{{ leftDescription }}</div>
        <div v-if="secondDescription">
          {{ secondDescription }}
        </div>
      </div>
      <a
        v-if="anchorScroll"
        v-scroll-to="href"
        class="main_banner__text main_banner__sub_title animation__arrow"
      >
        <span>
          {{ rightDescription }}
          <Arrow :arrow-position="true" />
        </span>
      </a>
      <nuxt-link
        v-else
        :to="href"
        class="main_banner__text main_banner__sub_title animation__arrow"
      >
        <span>
          {{ rightDescription }}
          <Arrow :arrow-position="true" />
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/global/Arrow.vue";
import Logo from "../global/Logo.vue";

export default {
  components: {
    Logo,
    Arrow,
  },
  props: {
    href: {
      type: String,
      required: true,
      default: "",
    },
    anchorScroll: {
      type: Boolean,
      default: false,
    },
    subTitle: {
      type: String,
      required: true,
    },
    rightDescription: {
      type: String,
      required: true,
    },
    leftDescription: {
      type: String,
      required: true,
    },
    secondDescription: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    imageSmall: {
      type: String,
      required: true,
    },
  },
};
</script>
