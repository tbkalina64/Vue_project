<template>
  <div class="book-now-modal" :class="{ 'book-now-modal--show': showModal }">
    <div class="book-now-modal__main-info" @click="showModal = !showModal">
      <div class="book-now-modal__main-name">
        {{ order.service_name }}
      </div>
      <div class="book-now-modal__main-arrow">
        <p class="book-now-modal__main-price">${{ order.price }}</p>
        <img
          class="order-block__icon"
          src="@/assets/image/icons/arrowToTop.svg"
        />
      </div>
    </div>
    <div class="order-block__info">
      <p class="order-block__address">
        <img
          class="order-block__icon"
          src="@/assets/image/icons/location.svg"
        />
        {{ order.address }}
      </p>
      <div class="order-block__second-info">
        <p class="order-block__users">
          <img class="order-block__icon" src="@/assets/image/icons/user.svg" />
          {{ order.participants }} Participants
        </p>
        <p class="order-block__date">
          <img
            class="order-block__icon"
            src="@/assets/image/icons/calendar.svg"
          />
          {{ order.date_start | date }} -
          {{ order.date_end | date }}
        </p>
      </div>
    </div>
    <img class="order-block__image" :src="order.image" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    order: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    showModal: false,
  }),
  mounted() {
    if (window.innerWidth < 1200) {
      this.handleFooter(false);
    }
  },
  unmounted() {
    this.handleFooter(true);
  },
  methods: {
    ...mapActions({
      handleFooter: "handleFooter",
    }),
  },
};
</script>
