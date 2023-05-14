<template>
  <div class="arrow-icon" :class="{ 'arrow-icon--large': isLarge }">
    <svg
      v-if="arrowPosition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 45"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.5129 41.5478L0 2.09561L2.14672 0L40.5734 39.3639V1.04781H43.5734V44.5478H1.07336V41.5478H38.5129Z"
        fill="white"
      />
    </svg>
    <svg
      v-else
      class="arrow-left"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.56038 42.5L44.0732 3.04776L41.9265 0.952148L3.49988 40.316V1.99995H0.499882V45.5H42.9999V42.5H5.56038Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    arrowPosition: {
      type: Boolean,
      default: false,
    },
    isLarge: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
