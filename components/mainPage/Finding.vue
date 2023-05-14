<template>
  <div class="finding-room section">
    <div class="section_line">
      <p class="section_line__number">04</p>
    </div>
    <div class="features__text">
      <div class="features__info">
        <h2 class="features__title">FINDING YOUR <br />PERFECT SPOT</h2>
      </div>
    </div>

    <div class="finding-room__wrapper">
      <div class="finding-room__buttons">
        <div class="finding-room__buttons-text">
          <p>Choose an office location</p>
          <svg
            :style="{ top: selectedRoom.position }"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.8823 33.2078L1.51778 33.8785L1.48208 30.8787L57.9566 30.2067L30.749 3.06191L32.8679 0.93814L63.6625 31.6617L32.2946 63.1022L30.1708 60.9834L57.8823 33.2078Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="finding-room__buttons-container">
          <button
            v-for="(slider, index) of sliders"
            :key="slider.name"
            class="finding-room__button"
            :class="{
              'finding-room__button--selected':
                slider.name === selectedRoom.name,
            }"
            @click="selectedRoom = slider"
          >
            <span class="finding-room__button-VIB">
              VIB<sup v-if="index">{{ index + 1 }}</sup>
            </span>
            <span class="finding-room__button-name">
              {{ slider.name }}
            </span>
            <svg
              class="finding-room__button-arrow"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.81 28.1812L1.26402 28.1341L1.3238 25.5463L48.7633 25.5932L25.6521 2.48199L27.5021 0.632007L53.7401 26.8701L27.532 53.0782L25.7224 51.2687L48.81 28.1812Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="finding-room__map">
        <GoogleMap :marker-location="selectedRoom.map" :amount="true" />
      </div>
      <div class="swiper-container finding-room__slider">
        <div class="swiper-wrapper" />
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
  </div>
</template>

<script>
import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
import GoogleMap from "../global/GoogleMap";

Swiper.use([Navigation, Autoplay, Pagination]);

export default {
  components: { GoogleMap },
  data: () => ({
    swiper: null,
    selectedRoom: null,
    sliders: [
      {
        name: "Brattleboro",
        images: ["vib/vib1.webp", "vib/vib3.webp", "slots/3.webp"],
        position: "15px",
        map: {
          lat: 42.87632053925372,
          lng: -72.55779738493906,
          label: "VIB - Brattleboro",
          active: true,
          id: "1",
        },
      },
      {
        name: "Downtown Brattleboro",
        images: ["vib2/Flat1.webp", "vib2/Flat2.webp", "vib2/Flat3.webp"],
        position: "75px",
        map: {
          lat: 42.8503580984572,
          lng: -72.5602861155695,
          label: "VIB2 - Downtown Brattleboro",
          id: "2",
        },
      },
      {
        name: "Downtown Bennington",
        images: ["vib3/vib1.webp", "vib3/vib2.webp", "vib3/vib4.webp"],
        position: "135px",
        map: {
          lat: 42.878166335255735,
          lng: -73.19611221372156,
          label: "VIB3 - Downtown Bennington",
          id: "3",
        },
      },
    ],
  }),
  watch: {
    selectedRoom(nextValue) {
      this.swiper.removeAllSlides();
      const arrayOfElement = nextValue.images.map(
        (image) =>
          `<div class="swiper-slide">
        <img
          src="${require(`../../assets/image/${image}`)}"
          alt="${nextValue.name}"
          class="finding-room__slide-image"
        />
      </div>`
      );
      this.swiper.prependSlide(arrayOfElement);
    },
  },
  created() {
    this.selectedRoom = this.sliders[0];
  },
  mounted() {
    this.swiper = new Swiper(".finding-room__slider", {
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
