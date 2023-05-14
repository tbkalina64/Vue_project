<template>
  <div class="book-now__item">
    <img class="book-now__item-image" :src="item.image" />
    <div class="book-now__item-info">
      <h3 class="book-now__item-name" v-html="item.name" />
      <div class="book-now__item-info-main">
        <div
          class="book-now__item-address"
          :class="{ 'book-now__item--near_date': item.near_date === 'address' }"
        >
          <img src="@/assets/image/icons/location.svg" />
          {{ item.address }}
        </div>
        <div class="book-now__item-date">
          <img src="@/assets/image/icons/calendar.svg" />
          <p
            :class="{ 'book-now__item--near_date': item.near_date === 'date' }"
          >
            {{ item.date_start | date }} — {{ item.date_end | date }}
          </p>
        </div>
      </div>

      <div class="book-now__item-info-second">
        <p class="book-now__item-description" v-html="item.description" />
        <div class="book-now__item-info-specification">
          <p class="book-now__item-price">${{ item.price }}</p>
          <Button
            :color="'black'"
            :text="'book now'"
            :callback="() => selectItem(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/global/Button.vue";

export default {
  components: {
    Button,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    selectItem: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
