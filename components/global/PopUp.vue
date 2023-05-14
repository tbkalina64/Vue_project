<template>
  <div class="pop-up">
    <div v-if="selectedService" class="pop-up__container">
      <h3 class="pop-up__title">{{ selectedService }} booking rules</h3>
      <p class="pop-up__text">
        <span class="pop-up__service">{{ selectedService }}</span> service is
        available in all locations: VIB - BRATTLEBORO , VIB2 - DOWNTOWN
        BRATTLEBORO, VIB3 - DOWNTOWN BENNINGTON.
        <br />
        This service is only available for long-term rentals. To arrange the
        {{ selectedService }}
        service, please fill out the form and send us your details.
      </p>
      <Button
        :color="'white'"
        :text="'Retrieved'"
        :callback="handleShowPopUp"
      />
    </div>
    <div v-else class="pop-up__container">
      <h3 class="pop-up__title">The service is now closed</h3>
      <p class="pop-up__text">
        The service is temporarily closed. You can make service by writing to us
        in the contact form and we will contact you.
      </p>
      <Button
        :color="'white'"
        :text="'Retrieved'"
        :callback="handleShowPopUp"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { scrollTo } from "vue-scrollto";
import Button from "./Button.vue";

export default {
  name: "Loader",
  components: {
    Button,
  },
  data: () => ({
    selectedService: null,
    services: {
      0: "Meeting rooms",
      1: "Private office",
    },
  }),
  mounted() {
    if (this.$route.query.service) {
      scrollTo(".section_line");
      this.selectedService = this.services[this.$route.query.service];
    }
  },
  methods: {
    ...mapMutations(["setPopUp"]),
    handleShowPopUp() {
      this.setPopUp(false);
    },
  },
};
</script>
