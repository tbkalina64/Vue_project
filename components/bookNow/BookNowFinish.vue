<template>
  <div class="book-now__finish">
    <p class="order-block__title">PERSONAL INFORMATION</p>
    <div class="order-block__wrapper">
      <div class="book-now__finish-info">
        <div
          v-for="item of getFormData"
          :key="item.name"
          class="book-now__finish-info-block"
        >
          <p class="book-now__finish-info-name">{{ item.name }}:</p>
          <p class="book-now__finish-info-value">
            {{ item.value }}
          </p>
        </div>
      </div>
      <div v-if="form.link" class="book-now__finish-download">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9421 35.339C22.1467 35.5436 22.3895 35.7059 22.6568 35.8167C22.9242 35.9274 23.2106 35.9844 23.5 35.9844C23.7893 35.9844 24.0758 35.9274 24.3431 35.8167C24.6104 35.7059 24.8533 35.5436 25.0579 35.339L33.3663 27.0306C33.7795 26.6174 34.0116 26.0571 34.0116 25.4728C34.0116 24.8885 33.7795 24.3281 33.3663 23.9149C32.9531 23.5018 32.3928 23.2696 31.8085 23.2696C31.2242 23.2696 30.6638 23.5018 30.2506 23.9149L25.7031 28.4624V4.40625C25.7031 3.82194 25.471 3.26157 25.0578 2.84841C24.6447 2.43524 24.0843 2.20313 23.5 2.20312C22.9157 2.20313 22.3553 2.43524 21.9421 2.84841C21.529 3.26157 21.2969 3.82194 21.2969 4.40625V28.4624L16.7493 23.9149C16.3362 23.5018 15.7758 23.2696 15.1915 23.2696C14.6072 23.2696 14.0468 23.5018 13.6336 23.9149C13.2205 24.3281 12.9884 24.8885 12.9884 25.4728C12.9884 26.0571 13.2205 26.6174 13.6336 27.0306L21.9421 35.339Z"
            fill="#3396CD"
          />
          <path
            d="M42.5938 21.2969C42.0094 21.2969 41.4491 21.529 41.0359 21.9422C40.6227 22.3553 40.3906 22.9157 40.3906 23.5V40.3906H6.60938V23.5C6.60938 22.9157 6.37726 22.3553 5.96409 21.9422C5.55093 21.529 4.99056 21.2969 4.40625 21.2969C3.82194 21.2969 3.26157 21.529 2.84841 21.9422C2.43524 22.3553 2.20313 22.9157 2.20312 23.5V41.125C2.20312 42.0988 2.58998 43.0328 3.27859 43.7214C3.9672 44.41 4.90116 44.7969 5.875 44.7969H41.125C42.0988 44.7969 43.0328 44.41 43.7214 43.7214C44.41 43.0328 44.7969 42.0988 44.7969 41.125V23.5C44.7969 22.9157 44.5648 22.3553 44.1516 21.9422C43.7384 21.529 43.1781 21.2969 42.5938 21.2969Z"
            fill="#3396CD"
          />
        </svg>
        <a :href="form.link" target="_blank" rel="nofollow">DOWNLOAD</a>
      </div>
      <nuxt-link to="/" class="contact-us__form-button" type="submit">
        <span>home</span>
        <Arrow />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/global/Arrow.vue";

export default {
  name: "BookNowFinish",
  components: {
    Arrow,
  },
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    event: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getFormData() {
      if (!this.form) return;
      const dataForm = [
        {
          name: "First Name",
          value: this.form.first_name,
        },
        {
          name: "Last Name",
          value: this.form.last_name,
        },
        {
          name: "Phone",
          value: this.form.phone,
        },
        {
          name: "Email",
          value: this.form.email,
        },
      ];
      if (!this.event) {
        dataForm.unshift({
          name: "Company Name (Optional)",
          value: this.form.company_name,
        });
      }
      return dataForm;
    },
  },
};
</script>
