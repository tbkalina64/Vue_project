<template>
  <div
    v-if="order"
    class="book-now-modal"
    :class="{ 'book-now-modal--show': showModal }"
    @click="showModal = !showModal"
  >
    <div class="book-now-modal__main-info">
      <div class="book-now-modal__main-name">
        {{ order.title }}
      </div>
      <div class="book-now-modal__main-arrow">
        <p class="book-now-modal__main-price">
          ${{ selectedTicket.price * quantity }}
        </p>
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
        <p class="order-block__date">
          <img
            class="order-block__icon"
            src="@/assets/image/icons/calendar.svg"
          />
          {{ order.date }}
        </p>
      </div>
    </div>
    <img
      class="order-block__image"
      :src="require(`assets/image/events/${order.image}`)"
      :alt="order.title"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState(["selectedTicket", "quantity"]),
  },
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
