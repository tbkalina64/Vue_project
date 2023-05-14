<template>
  <div class="order-block">
    <p class="order-block__title">Order Detail</p>
    <div class="order-block__wrapper">
      <div class="order-block__card">
        <div class="order-block__info">
          <p class="order-block__name">
            {{ item.service_name }}
          </p>
          <p class="order-block__vib" v-html="item.alias" />
          <p class="order-block__address">
            <img
              class="order-block__icon"
              src="@/assets/image/icons/location.svg"
            />
            {{ item.address }}
          </p>
          <div class="order-block__second-info">
            <p class="order-block__users">
              <img
                class="order-block__icon"
                src="@/assets/image/icons/user.svg"
              />
              {{ item.participants }} Participants
            </p>
            <p class="order-block__date">
              <img
                class="order-block__icon"
                src="@/assets/image/icons/calendar.svg"
              />
              {{ item.date_start | date }} -
              {{ item.date_end | date }}
            </p>
          </div>
        </div>
        <img class="order-block__image" :src="item.image" />
        <p class="order-block__price">
          <span>amount</span>
          <span>${{ item.price }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
