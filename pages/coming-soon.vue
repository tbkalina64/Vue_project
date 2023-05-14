<template>
  <div class="coming-soon">
    <main class="coming-soon">
      <div class="coming-soon__blocks">
        <p class="coming-soon__title">This Page is coming soon...</p>
        <div class="coming-soon__blocks--pink" />
        <div class="coming-soon__blocks--grey" />
        <nuxt-link to="/" class="coming-soon__blocks--button animation__arrow">
          <span class="animation__arrow--title">
            home
            <svg
              width="44"
              height="46"
              viewBox="0 0 44 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.5129 42.5009L0 3.04874L2.14672 0.953125L40.5734 40.317V2.00093H43.5734V45.5009H1.07336V42.5009H38.5129Z"
                fill="white"
              />
            </svg>
          </span>
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  layout: "mainLayout",
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
};
</script>
