<template>
  <div class="book-now__checkout">
    <OrderBlock v-if="events" :event="events" />
    <BookNowForm
      v-if="step === 2"
      :change-form="handleChangeForm"
      :data="form"
      :events="events"
    />
    <BookNowCard
      v-else-if="step === 3"
      :change-form="handleChangeCard"
      :data="form"
    />
    <BookNowFinish
      v-if="step === 4"
      :event="true"
      :form="form"
      :change-form="handleChangeCard"
    />
    <EventOrderModal :order="events" />
  </div>
</template>

<script>
import OrderBlock from "@/components/eventPayment/EventOrder.vue";
import BookNowForm from "@/components/eventPayment/EventForm.vue";
import BookNowCard from "@/components/bookNow/BookNowCard.vue";
import BookNowFinish from "@/components/bookNow/BookNowFinish.vue";
import EventOrderModal from "@/components/eventPayment/EventOrderModal.vue";

export default {
  components: {
    OrderBlock,
    BookNowForm,
    BookNowCard,
    BookNowFinish,
    EventOrderModal,
  },
  props: {
    events: {
      type: Object,
      default: () => ({}),
    },
    form: {
      type: Object,
      default: () => ({}),
    },
    step: {
      type: Number,
      default: 2,
    },
    handleChangeCard: {
      type: Function,
      default: () => {},
    },
    handleChangeForm: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
