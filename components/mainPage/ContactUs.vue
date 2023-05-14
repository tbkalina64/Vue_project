<template>
  <div class="contact-us section">
    <div class="section_line">
      <p class="section_line__number">
        {{ numberOfSection }}
      </p>
    </div>
    <div class="contact-us__wrapper">
      <div class="row">
        <div class="col-12 col-xl-6">
          <div class="features__text">
            <div class="features__info">
              <h2 class="features__title">COME CHECK <br />US OUT</h2>
            </div>
          </div>
          <div class="contact-us__links">
            <div
              v-for="link of links"
              :key="link.name"
              class="contact-us__block-link"
            >
              <p>
                {{ link.name }}
              </p>
              <a :href="link.href" target="_blank">
                {{ link.link }}
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-10 offset-sm-1 offset-xl-1 col-xl-5">
          <ValidationObserver ref="ValidationObserver" v-slot="validator">
            <form
              class="contact-us__form"
              @submit.prevent="() => onSubmit(validator)"
            >
              <div class="contact-us__form-block">
                <ValidationProvider
                  v-slot="{ errors, dirty }"
                  name="First Name"
                  :rules="`${
                    form.first_name.required ? 'required|' : ''
                  }|name|max:24`"
                >
                  <div class="form-group input">
                    <input
                      v-model="form.first_name.value"
                      type="text"
                      class="input__field"
                    />
                    <span
                      class="input__label"
                      :class="{ 'input__label--active': dirty }"
                      >First Name<b v-if="form.first_name.required"></b
                    ></span>
                    <span class="input__error">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors, dirty }"
                  name="Last Name"
                  :rules="`${
                    form.last_name.required ? 'required|' : ''
                  }name|max:24`"
                >
                  <div class="form-group input">
                    <input
                      v-model="form.last_name.value"
                      type="text"
                      class="input__field"
                    />
                    <span
                      class="input__label"
                      :class="{ 'input__label--active': dirty }"
                      >Last Name<b v-if="form.last_name.required"></b
                    ></span>
                    <span class="input__error">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <ValidationProvider
                v-slot="{ errors, dirty }"
                name="Phone"
                :rules="`${form.phone.required ? 'required|' : ''}phone`"
              >
                <div class="form-group input select-phone-code">
                  <input
                    v-model="form.phone.value"
                    type="text"
                    class="input__field"
                  />
                  <span
                    class="input__label"
                    :class="{ 'input__label--active': dirty }"
                    >Phone<b v-if="form.phone.required"></b
                  ></span>
                  <span class="input__error">{{ errors[0] }}</span>
                  <a-select
                    slot="addonBefore"
                    v-model="form.phone_code.value"
                    style="width: 80px"
                  >
                    <a-select-option value="+1"> +1 </a-select-option>
                  </a-select>
                </div>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, dirty }"
                name="Email"
                :rules="`${form.email.required ? 'required|' : ''}email`"
              >
                <div class="form-group input">
                  <input
                    v-model="form.email.value"
                    type="text"
                    class="input__field"
                    @keydown.space.prevent
                  />
                  <span
                    class="input__label"
                    :class="{ 'input__label--active': dirty }"
                    >Email<b v-if="form.email.required"></b
                  ></span>
                  <span class="input__error">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors, dirty }" name="message">
                <div class="form-group input">
                  <input
                    v-model="form.message.value"
                    type="text"
                    class="input__field"
                  />
                  <span
                    class="input__label"
                    :class="{ 'input__label--active': dirty }"
                    >Message<b v-if="form.message.required"></b
                  ></span>
                  <span class="input__error">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <button
                class="contact-us__form-button"
                type="submit"
                :disabled="disableButton"
              >
                <span>send message</span>
                <Arrow :arrow-position="true" />
              </button>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Select } from "ant-design-vue/lib";
import Arrow from "@/components/global/Arrow.vue";

import { mapActions } from "vuex";

export default {
  name: "ContactForm",
  components: {
    ValidationProvider,
    ValidationObserver,
    Arrow,
    "a-select": Select,
    "a-select-option": Select.Option,
  },
  props: {
    numberOfSection: {
      type: String,
      default: "05",
    },
  },
  data: () => ({
    disableButton: false,
    links: [
      {
        name: "E-mail",
        link: "INFO@VTINBOX.COM",
        href: "mailto:INFO@VTINBOX.COM",
      },
      {
        name: "Phone",
        link: "802.254.5201",
        href: "tel:802.254.5201",
      },
    ],
    form: {
      first_name: {
        value: "",
        required: true,
      },
      last_name: {
        value: "",
        required: true,
      },
      email: {
        value: "",
        required: true,
      },
      phone: {
        value: "",
        required: true,
      },
      phone_code: {
        value: "+1",
        required: true,
      },
      message: {
        value: "",
        required: false,
      },
    },
    defaultForm: {},
  }),
  mounted() {
    this.$recaptcha.init();
    this.defaultForm = JSON.parse(JSON.stringify(this.form));
  },
  methods: {
    ...mapActions({
      postMessage: "postMessage",
    }),
    resetFields() {
      this.form = JSON.parse(JSON.stringify(this.defaultForm));
      this.agree = false;
      this.$refs.ValidationObserver.reset();
    },
    async onSubmit(validator) {
      if (!(await validator.validate())) {
        return;
      }

      this.disableButton = true;
      setTimeout(() => {
        this.disableButton = false;
      }, 5000);

      const res = await this.postMessage(this.form);

      if (res && res.status) {
        this.$notification.success({
          message: "Successfully",
          description: "Message sent successfully",
        });

        this.resetFields();
      }
    },
  },
};
</script>
