<template>
  <div class="order-block">
    <p class="order-block__title">Order Detail</p>
    <div class="order-block__wrapper">
      <div class="order-block__card">
        <div class="order-block__info">
          <p class="order-block__name">
            {{ event.title }}
          </p>
          <p class="order-block__address">
            <img
              class="order-block__icon"
              src="@/assets/image/icons/location.svg"
            />
            {{ event.address }}
          </p>
          <div class="order-block__second-info">
            <p class="order-block__date">
              <img
                class="order-block__icon"
                src="@/assets/image/icons/calendar.svg"
              />
              <template>
                {{ event.date }}
              </template>
            </p>
          </div>
        </div>
        <img
          class="order-block__image"
          :src="require(`assets/image/events/${event.image}`)"
          :alt="event.title"
        />
        <p class="order-block__price">
          <span>amount</span>
          <span>${{ selectedTicket.price * quantity }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState(["selectedTicket", "quantity"]),
  },
};
</script>
