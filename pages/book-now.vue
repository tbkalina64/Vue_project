<template>
  <div class="book-now">
    <main>
      <div class="book-now__wrapper">
        <h2 class="book-now__title">
          {{ getWrapperContext.title }}
        </h2>
        <div />
        <div v-if="currentStep < 4" class="book-now__steps">
          <div class="book-now__progress">
            <span
              class="book-now__progress--active"
              :style="{ width: `${getStepsProgress}%` }"
            />
          </div>
          <div
            v-for="step of steps"
            :key="step.id"
            class="book-now__step"
            :class="{
              'book-now__step--active': step.step === currentStep,
              'book-now__step--prev': step.step < currentStep,
            }"
            @click="() => handleChangeStep(step)"
          >
            <span class="book-now__step--color" />
            <span class="book-now__step--name">
              {{ step.name }}
            </span>
          </div>
        </div>
      </div>
      <BookNowFirst
        v-if="currentStep === 1"
        :handle-select-item="handleSelectItem"
        :handle-change-card="handleChangeCard"
        :data="filters"
      />
      <BookNowCheckout
        v-if="currentStep > 1"
        :order="selectedOrder"
        :step="currentStep"
        :handle-change-card="handleChangeCard"
        :handle-change-form="handleChangeForm"
        :form="form"
      />
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BookNowFirst from "../components/bookNow/BookNowFirst.vue";
import BookNowCheckout from "../components/bookNow/BookNowCheckout.vue";

export default {
  name: "BookNow",
  components: {
    BookNowFirst,
    BookNowCheckout,
  },
  layout: "mainLayout",
  data: () => ({
    passedStep: 1,
    selectedOrder: null,
    currentStep: 1,
    filters: {},
    steps: [
      {
        name: "01",
        step: 1,
        id: "1",
      },
      {
        name: "02",
        step: 2,
        id: "2",
      },
      {
        name: "03",
        step: 3,
        id: "3",
      },
    ],
    form: {
      phone_code: "+1",
    },
    card: null,
  }),
  computed: {
    getStepsProgress() {
      if (this.currentStep === 1) return 0;
      return 100 / (this.steps.length - this.currentStep + 1);
    },
    getWrapperContext() {
      const context = {
        title: "",
        description: "",
      };
      switch (this.currentStep) {
        case 1:
          context.title = "book now";
          context.description =
            "Choose the service you need. Further, if necessary, select the date, the location and the number of people. From the filters you selected, the results will be displayed below where you will see the available VIB buildings.";
          break;

        case 2:
          context.title = "card";
          context.description =
            "In order to secure this place you need to specify your credentials. Once you have provided your personal information, go to the next step of payment.";
          break;

        case 3:
          context.title = "Checkout";
          context.description =
            "Choose the payment system or enter your card details below. After successful payment, you will receive a payment check to the email address that you indicated in the step above.";
          break;

        case 4:
          context.title = "Payment successful!";
          context.description =
            "The payment was successful. Thank you for using our service. You can download the receipt of payment, as well we will send it to you by mail.";
          break;

        default:
          break;
      }

      return context;
    },
  },
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
  methods: {
    handleSelectItem(item, data) {
      this.selectedOrder = item;
      this.filters = data;
      this.handleIncStep();
    },
    handleChangeStep({ step }) {
      if (step > this.passedStep) {
        return;
      }
      window.scroll(0, 0);
      this.currentStep = step;
    },
    handleIncStep() {
      window.scroll(0, 0);
      this.currentStep += 1;
      this.passedStep = this.currentStep;
    },
    ...mapActions({
      bookOrder: "bookOrder",
    }),
    handleChangeForm(form) {
      this.form = form;
      this.handleIncStep();
    },
    async handleChangeCard(card) {
      this.card = card;
      const result = await this.bookOrder({
        ...this.form,
        ...this.card,
        ...this.selectedOrder,
        location_id: this.selectedOrder.id,
      });

      if (result) {
        this.handleIncStep();
        this.form = {
          ...this.form,
          link: result.link,
        };
      }
    },
  },
};
</script>
