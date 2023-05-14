<template>
  <div class="finding-room section" :class="location">
    <div v-if="subline" class="section_line">
      <p class="section_line__number">0{{ index }}</p>
    </div>
    <div class="locations-title-wrapper">
      <h2 class="locations__title" v-html="title" />
      <div class="locations__subtitle">
        THE MOST EXCITING WORK SPACES IN <span>{{ subTitle }}</span>
      </div>
    </div>
    <div class="finding-room__wrapper">
      <div class="finding-room__map">
        <GoogleMap :amount="true" :marker-location="markers" />
      </div>
      <div class="locations-info">
        <nuxt-link
          :to="`/locations/${link}`"
          class="locations-info__place hover-link animation__arrow-link"
        >
          <span> EXPLORE this place </span>
          <div class="animated-link">
            <Arrow v-if="arrowIsLeftPosition" />
            <Arrow v-else :arrow-position="true" />
          </div>
        </nuxt-link>
        <div class="locations-info__address locations-address">
          <div class="locations-address__title">Address</div>
          <div class="locations-address__link">
            {{ address }}
          </div>
        </div>
      </div>
      <div class="swiper-container finding-room__slider" :class="sliderClass">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, slideIndex) of sliders"
            :key="slideIndex"
            class="swiper-slide"
          >
            <img
              v-if="slide.image"
              :src="require(`../assets/image/${slide.image}`)"
              :alt="232"
            />
          </div>
        </div>
        <div ref="pagination" class="finding-room__slider-pagination" />
        <div class="finding-room__slider-buttons">
          <div ref="arrowLeft" class="slider-button">
            <svg
              width="46"
              height="16"
              viewBox="0 0 46 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292759 7.27082C-0.0979518 7.66116 -0.0982576 8.29432 0.292076 8.68504L6.65296 15.0521C7.0433 15.4428 7.67646 15.4431 8.06718 15.0528C8.45789 14.6624 8.4582 14.0293 8.06786 13.6385L2.41374 7.97895L8.07332 2.32483C8.46404 1.9345 8.46434 1.30133 8.07401 0.910619C7.68367 0.519906 7.05051 0.5196 6.65979 0.909936L0.292759 7.27082ZM46.0005 7L1.00001 6.97827L0.999042 8.97827L45.9995 9L46.0005 7Z"
                fill="#000126"
              />
            </svg>
          </div>
          <div ref="arrowRight" class="slider-button">
            <svg
              width="46"
              height="16"
              viewBox="0 0 46 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292759 7.27082C-0.0979518 7.66116 -0.0982576 8.29432 0.292076 8.68504L6.65296 15.0521C7.0433 15.4428 7.67646 15.4431 8.06718 15.0528C8.45789 14.6624 8.4582 14.0293 8.06786 13.6385L2.41374 7.97895L8.07332 2.32483C8.46404 1.9345 8.46434 1.30133 8.07401 0.910619C7.68367 0.519906 7.05051 0.5196 6.65979 0.909936L0.292759 7.27082ZM46.0005 7L1.00001 6.97827L0.999042 8.97827L45.9995 9L46.0005 7Z"
                fill="#000126"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="locations__bottom">
      <div class="locations__image">
        <img
          :src="require(`../assets/image/locations/${secondImage}`)"
          :alt="232"
        />
      </div>
      <div class="locations-descriptions">
        <div
          v-for="(slide, indexSlide) of sliders"
          :key="indexSlide"
          class="locations__description"
        >
          {{ slide.description }}
        </div>
      </div>

      <div class="locations-join">
        <nuxt-link to="book-now" class="hover-link animation__arrow-link">
          <span> Join </span>
          <div class="animated-link">
            <Arrow v-if="arrowIsLeftPosition" :arrow-position="true" />
            <Arrow v-else />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
import Arrow from "@/components/global/Arrow.vue";
import GoogleMap from "./global/GoogleMap";

Swiper.use([Navigation, Autoplay, Pagination]);

export default {
  components: {
    Arrow,
    GoogleMap,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    markers: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    location: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    subline: {
      type: Boolean,
      default: true,
    },
    index: {
      type: Number,
      default: undefined,
    },
    address: {
      type: String,
      default: "",
    },
    sliderClass: {
      type: String,
      default: "",
    },
    secondImage: {
      type: String,
      default: "",
    },
    sliders: {
      type: Array,
      default: () => [],
    },
    link: {
      type: String,
      default: "",
    },
    arrowIsRightPosition: {
      type: Boolean,
      default: false,
    },
    arrowIsLeftPosition: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.selectedRoom = this.sliders[0];
  },
  mounted() {
    this.swiper = new Swiper(`.${this.sliderClass}`, {
      loop: true,
      navigation: {
        nextEl: this.$refs.arrowRight,
        prevEl: this.$refs.arrowLeft,
      },
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: this.$refs.pagination,
        clickable: true,
      },
    });
  },
};
</script>
