<template>
  <div class="book-now__form">
    <p class="order-block__title">PERSONAL INFORMATION</p>
    <div class="order-block__wrapper">
      <ValidationObserver v-slot="{ invalid }">
        <form class="contact-us__form" @submit.prevent="onSubmit">
          <template v-if="events && !events.quantity">
            <div class="ticket__title">Choose your ticket type</div>
            <a-radio-group
              v-if="events && events.ticket"
              v-model="currentPrice.price"
              name="radioGroup"
            >
              <a-radio
                v-for="item in events.ticket"
                :key="item.name"
                :value="item.price"
                @change="() => changeValue(item)"
              >
                {{ item.name }}
              </a-radio>
            </a-radio-group>
          </template>
          <template else>
            <div class="ticket__title">Per ticket</div>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|numeric|value_is_int|max_value:10000"
              name="Quantity"
            >
              <div class="input">
                <input
                  v-model="form.count_tickets"
                  type="text"
                  class="input__field"
                  @input="validateQuantity"
                />
                <span
                  class="input__label"
                  :class="{ 'input__label--active': form.count_tickets }"
                >
                  Quantity<b></b>
                </span>
                <span class="input__error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </template>
          <ValidationProvider
            v-slot="{ errors }"
            name="First Name"
            rules="required|name|max:24"
          >
            <div class="input">
              <input
                v-model="form.first_name"
                type="text"
                class="input__field"
              />
              <span
                class="input__label"
                :class="{ 'input__label--active': form.first_name }"
                >First Name<b></b
              ></span>
              <span class="input__error">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|name|max:24">
            <div class="input">
              <input
                v-model="form.last_name"
                type="text"
                class="input__field"
              />
              <span
                class="input__label"
                :class="{ 'input__label--active': form.last_name }"
              >
                Last Name<b></b>
              </span>
              <span class="input__error">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="Phone"
            rules="required|phone"
          >
            <div class="form-group input select-phone-code">
              <input v-model="form.phone" type="text" class="input__field" />
              <span
                class="input__label"
                :class="{ 'input__label--active': form.phone }"
                >Phone<b></b
              ></span>
              <span class="input__error">{{ errors[0] }}</span>
              <a-select
                slot="addonBefore"
                v-model="form.phone_code"
                style="width: 80px"
              >
                <a-select-option value="+1"> +1 </a-select-option>
              </a-select>
            </div>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" rules="required|email">
            <div class="input">
              <input v-model="form.email" class="input__field" />
              <span
                class="input__label"
                :class="{ 'input__label--active': form.email }"
                >E-mail<b></b
              ></span>
              <span class="input__error">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            :rules="{ requiredLiability: { allowFalse: false } }"
          >
            <div class="input">
              <a-checkbox v-model="form.agree" :checked="form.agree">
                <p class="book-now__card-text">
                  I have read and agree to the
                  <a href="/liability" target="_blank">
                    Waiver And Release Of Liability
                  </a>
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
            <span>next</span>
            <Arrow :arrow-position="true" />
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Select, Radio, Checkbox } from "ant-design-vue/lib";

import { mapActions, mapState } from "vuex";
import Arrow from "@/components/global/Arrow.vue";

export default {
  name: "BookNowForm",
  components: {
    ValidationProvider,
    ValidationObserver,
    Arrow,
    "a-select": Select,
    "a-radio": Radio,
    "a-radio-group": Radio.Group,
    "a-select-option": Select.Option,
    "a-checkbox": Checkbox,
  },
  props: {
    changeForm: {
      type: Function,
      default: () => {},
    },
    data: {
      type: Object,
      default: () => {},
    },
    events: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    form: {
      count_tickets: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company_name: "",
      phone_code: "+1",
      agree: false,
    },
    disableButton: false,
  }),
  computed: {
    ...mapState({
      currentPrice: (state) => state.selectedTicket,
    }),
  },
  mounted() {
    this.form = {
      ...this.data,
    };
  },
  methods: {
    ...mapActions({
      bookOrderForm: "bookOrderForm",
      handleChangeTicket: "handleChangeTicket",
      handleChangeQuantity: "handleChangeQuantity",
    }),
    validateQuantity(e) {
      let value = e.target.value.replace(/[^\d]/g, "");

      if (value[0] === "0") {
        value = value.replace("0", "");
      }

      this.form.count_tickets = value;

      if (value > 0 && value < 10001) {
        this.handleChangeQuantity(value);
      } else {
        this.handleChangeQuantity(1);
      }
    },
    changeValue(el) {
      this.handleChangeTicket(el);
    },
    async onSubmit() {
      this.disableButton = true;
      this.startTimeout();
      const data = await this.bookOrderForm(this.form);

      if (data) {
        this.changeForm(this.form);
      }
    },
    startTimeout() {
      setTimeout(() => {
        this.disableButton = false;
      }, 10 * 1000);
    },
  },
};
</script>
