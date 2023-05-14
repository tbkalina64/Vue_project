<template>
  <div class="features section">
    <div class="section_line">
      <p class="section_line__number">03</p>
    </div>
    <div class="features__text">
      <div class="features__info">
        <h2 class="features__title">features</h2>
        <p class="features__description">
          Beneficial, creative Environment with everything you need to make it
          big time.
        </p>
      </div>
      <nuxt-link to="features" class="features__block animation__arrow">
        <span>DISCOVER all our features</span>
        <Arrow />
      </nuxt-link>
    </div>

    <div class="swiper-container features__slider">
      <div class="swiper-wrapper">
        <div v-for="slide of sliders" :key="slide.id" class="swiper-slide">
          <div
            class="features__slide"
            :style="{ backgroundColor: slide.color }"
          >
            <div class="features__slide-text">
              <div class="features__slide-progress" />
              <p class="features__slide-name">
                {{ slide.name }}
              </p>
              <p class="features__slide-description">
                {{ slide.description }}
              </p>
            </div>
            <img
              :src="require(`../../assets/image/features/${slide.image}`)"
              :alt="slide.name"
              class="features__slide-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="features-arrows">
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
import Swiper, { Navigation, Autoplay } from "swiper";
import Arrow from "@/components/global/Arrow.vue";

Swiper.use([Navigation, Autoplay]);

export default {
  components: {
    Arrow,
  },
  data: () => ({
    sliders: [
      {
        name: "HOST YOUR EVENT AT VT INBOX",
        description:
          "VIB is not just a place to work but a neighborhood where our friends can get together and share experiences, make connections and build their networks.",
        color: "#AACC99",
        image: "1.webp",
        id: "1",
      },
      {
        name: "MEETING ROOMS",
        description:
          "VIB's meeting rooms are ideal for private off-sites as well as break out sessions.  From small rooms that accommodate 4 people to larger conference rooms that can hold up to 20 people.",
        color: "#FFA2A2",
        image: "2.webp",
        id: "2",
      },
      {
        name: "COWORKING",
        description:
          "VIB's shared workspace is where industry influencers innovate against the backdrop of an unprecedented infrastructure and inspiring tech-scape with that wondrous Vermont charm.",
        color: "#92E6E6",
        image: "3.webp",
        id: "3",
      },
      {
        name: "YOUR OWN PRIVATE OFFICE",
        description:
          "Private offices provide a quiet, and lockable space for you and your team from 1 to 10. Your membership includes all access to all amenities and areas VIB has to offer.",
        color: "#F3EFE6",
        image: "4.webp",
        id: "4",
      },
      {
        name: "ROUNDTABLES",
        description:
          "Having a round table discussion may prove as a more worthy and personal way of discussing differing opinions. ",
        color: "#FFA2A2",
        image: "7.webp",
        id: "7",
      },
      {
        name: "OUTDOOR HANGOUTS",
        description:
          "VIB is situated on 16 acres of unspoiled Vermont land. The Connecticut River is our backyard neighbor and there is an abundance of wildlife sauntering throughout or lush woods.",
        color: "#92E6E6",
        image: "8.webp",
        id: "8",
      },
    ],
  }),
  mounted() {
    new Swiper(".features__slider", {
      loop: true,
      navigation: {
        nextEl: this.$refs.arrowRight,
        prevEl: this.$refs.arrowLeft,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  },
};
</script>
