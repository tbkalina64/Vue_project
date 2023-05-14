<template>
  <div class="book-now__card">
    <p class="order-block__title">Payment</p>
    <div class="order-block__wrapper">
      <ValidationObserver v-slot="{ invalid }">
        <form class="contact-us__form" @submit.prevent="onSubmit">
          <div class="book-now__card-inputs">
            <ValidationProvider
              v-slot="{ errors }"
              name="Card number"
              rules="required|credit_card"
            >
              <div class="input">
                <input
                  type="text"
                  class="input__field"
                  :value="form.card_number | formatCardNumber"
                  @input="changeCard"
                />
                <span
                  class="input__label"
                  :class="{ 'input__label--active ': form.card_number }"
                  >Card number<b></b
                ></span>
                <span class="input__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|expiration_date"
            >
              <div class="input">
                <input
                  type="text"
                  class="input__field"
                  :value="form.expiration_date | formatExpirationDate"
                  @input="changeExpirationDate"
                />
                <span
                  class="input__label"
                  :class="{ 'input__label--active': form.expiration_date }"
                  >MM/YY<b></b
                ></span>
                <span class="input__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="book-now__card-inputs book-now__card-inputs--reverse">
            <ValidationProvider v-slot="{ errors }" rules="required|cvv">
              <div class="input">
                <input
                  v-model="form.cvv"
                  class="input__field"
                  type="password"
                />
                <span
                  class="input__label"
                  :class="{ 'input__label--active': form.cvv }"
                  >CVV<b></b
                ></span>
                <span class="input__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              rules="required|name|max:48"
            >
              <div class="input">
                <input
                  v-model="form.cardholder_name"
                  type="text"
                  class="input__field"
                />
                <span
                  class="input__label"
                  :class="{ 'input__label--active': form.cardholder_name }"
                  >Cardholder name<b></b
                ></span>
                <span class="input__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <p class="book-now__card-text">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our Privacy Policy.
          </p>

          <ValidationProvider
            v-slot="{ errors }"
            :rules="{ requiredAgree: { allowFalse: false } }"
          >
            <div class="input">
              <a-checkbox v-model="form.agree" :checked="form.agree">
                <p class="book-now__card-text">
                  I have read and agree to the website
                  <a href="/terms" target="_blank"> Terms And Conditions </a>
                </p>
                <span class="input__error">{{ errors[0] }}</span>
              </a-checkbox>
            </div>
          </ValidationProvider>

          <button
            class="contact-us__form-button"
            type="submit"
            :disabled="invalid || disableButton"
          >
            <span>place order</span>
            <Arrow :arrow-position="true" />
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Checkbox } from "ant-design-vue/lib";
import Arrow from "@/components/global/Arrow.vue";

export default {
  name: "BookNowCard",
  components: {
    ValidationProvider,
    ValidationObserver,
    Arrow,
    "a-checkbox": Checkbox,
  },
  props: {
    changeForm: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    form: {
      card_number: "",
      expiration_date: "",
      cvv: "",
      cardholder_name: "",
      agree: false,
    },
    disableButton: false,
  }),
  methods: {
    handleChange(e) {
      this.form[e.target.name] = e.target.value;
    },
    onSubmit() {
      this.disableButton = true;
      this.changeForm(this.form);
      this.startTimeout();
    },
    startTimeout() {
      setTimeout(() => {
        this.disableButton = false;
      }, 10 * 1000);
    },
    changeCard(e) {
      this.form.card_number = e.target.value.replace(/ /g, "");
    },
    changeExpirationDate(e) {
      this.form.expiration_date = e.target.value;
    },
  },
};
</script>
