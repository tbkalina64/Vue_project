<template>
  <div class="book-now__checkout">
    <OrderBlock :item="order" />
    <BookNowForm
      v-if="step === 2"
      :change-form="handleChangeForm"
      :data="form"
    />
    <BookNowCard
      v-else-if="step === 3"
      :change-form="handleChangeCard"
      :data="form"
    />
    <BookNowFinish
      v-else-if="step === 4"
      :form="form"
      :change-form="handleChangeCard"
    />
    <BookNowOrderModal v-if="step > 1" :order="order" />
  </div>
</template>

<script>
import OrderBlock from "@/components/bookNow/OrderBlock.vue";
import BookNowForm from "@/components/bookNow/BookNowForm.vue";
import BookNowCard from "@/components/bookNow/BookNowCard.vue";
import BookNowFinish from "@/components/bookNow/BookNowFinish.vue";
import BookNowOrderModal from "@/components/bookNow/BookNowOrderModal.vue";

export default {
  components: {
    OrderBlock,
    BookNowForm,
    BookNowCard,
    BookNowFinish,
    BookNowOrderModal,
  },
  props: {
    order: {
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
