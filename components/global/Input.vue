<template>
  <div class="input">
    {{ error }}
    <input
      :value="data.value"
      class="input__field"
      :name="data.name"
      @input="change"
    />
    <span
      class="input__label"
      :class="{
        'input__label--active': data.value,
        'input__label--error': error,
      }"
    >
      {{ name }}
    </span>
    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    name: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    change: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style></style>
