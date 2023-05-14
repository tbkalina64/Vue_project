<template>
  <div class="swiper-container finding-room__slider" :class="name">
    <div class="swiper-wrapper" />
    <div ref="pagination" class="finding-room__slider-pagination" />
    <div v-if="arrows" class="finding-room__slider-buttons">
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
</template>

<script>
import Swiper, { Navigation, Autoplay, Pagination } from "swiper";

Swiper.use([Navigation, Autoplay, Pagination]);

export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "swiper",
    },
    loop: {
      type: Boolean,
      default: true,
    },
    arrows: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    images(nextValue) {
      if (!nextValue.length) {
        return;
      }
      this[this.name].removeAllSlides();
      const arrayOfElement = nextValue.map(
        (image) =>
          `<div class="swiper-slide">
        <img
          src="${require(`../../assets/image/${image}`)}"
          alt="${nextValue.name}"
          class="finding-room__slide-image"
        />
      </div>`
      );
      this[this.name].prependSlide(arrayOfElement);
    },
  },
  mounted() {
    this[this.name] = new Swiper("." + this.name, {
      loop: this.loop,
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
    this[this.name].removeAllSlides();
    const arrayOfElement = this.images.map(
      (image) =>
        `<div class="swiper-slide">
        <img
          src="${require(`../../assets/image/${image}`)}"

          class="finding-room__slide-image"
        />
      </div>`
    );
    this[this.name].prependSlide(arrayOfElement);
  },
};
</script>
