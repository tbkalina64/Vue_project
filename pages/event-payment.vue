<template>
  <div class="book-now">
    <main>
      <div class="book-now__wrapper">
        <h2 class="book-now__title">
          {{ getWrapperContext }}
        </h2>
        <div />
      </div>
      <EventCheckout
        :events="eventItem"
        :step="currentStep"
        :handle-change-card="handleChangeCard"
        :handle-change-form="handleChangeForm"
        :form="form"
      />
    </main>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import EventCheckout from "../components/eventPayment/EventCheckout";

export default {
  name: "EventPayment",
  components: {
    EventCheckout,
  },
  layout: "mainLayout",
  data: () => ({
    currentStep: 2,
    eventItem: null,
    steps: [
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
    getWrapperContext() {
      let title = "";
      switch (this.currentStep) {
        case 2:
          title = "card";
          break;

        case 3:
          title = "Checkout";
          break;

        case 4:
          title = "Payment successful!";
          break;

        default:
          break;
      }

      return title;
    },
    ...mapState({
      selectedTicket: (state) => state.selectedTicket,
    }),
    ...mapState({
      events: (state) => state.events,
    }),
    ...mapGetters(["getEventName"]),
  },
  mounted() {
    this.$router.push("/404");

    this.$nuxt.$emit("title", this.$options.name);
    this.eventItem = this.getEventName(this.$route.query.slug);
    if (!this.eventItem) {
      this.$router.push("/events");
    }
  },
  methods: {
    handleIncStep() {
      window.scroll(0, 0);
      this.currentStep += 1;
      this.passedStep = this.currentStep;
    },
    ...mapActions({
      bookEvent: "bookEvent",
    }),
    handleChangeForm(form) {
      this.form = form;
      this.handleIncStep();
    },
    async handleChangeCard(card) {
      this.card = card;
      const result = await this.bookEvent({
        ...this.form,
        ...this.card,
        ...this.eventItem,
        event: this.eventItem.title,
        price: this.selectedTicket.price,
        type_ticket: this.selectedTicket.name,
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
