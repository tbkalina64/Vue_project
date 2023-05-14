<template>
  <div class="book-now__form">
    <p class="order-block__title">PERSONAL INFORMATION</p>
    <div class="order-block__wrapper">
      <ValidationObserver v-slot="{ invalid }">
        <form class="contact-us__form" @submit.prevent="onSubmit">
          <ValidationProvider
            v-slot="{ errors }"
            name="Company Name"
            rules="name|max:128"
          >
            <div class="input">
              <input
                v-model="form.company_name"
                type="text"
                class="input__field"
              />
              <span
                class="input__label"
                :class="{ 'input__label--active': form.company_name }"
                >Company Name (Optional)</span
              >
              <span class="input__error">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

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
import { Select } from "ant-design-vue/lib";
import { mapActions } from "vuex";
import Arrow from "@/components/global/Arrow.vue";

export default {
  name: "BookNowForm",
  components: {
    ValidationProvider,
    ValidationObserver,
    Arrow,
    "a-select": Select,
    "a-select-option": Select.Option,
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
  },
  data: () => ({
    form: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company_name: "",
      phone_code: "+1",
    },
    disableButton: false,
  }),
  mounted() {
    this.form = {
      ...this.data,
    };
  },
  methods: {
    ...mapActions({
      bookOrderForm: "bookOrderForm",
    }),
    handleChange(e) {
      this.form[e.target.name] = e.target.value;
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
