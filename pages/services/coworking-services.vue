<template>
  <div class="coworking-services">
    <main>
      <div class="features-page__wrapper">
        <h2 class="features-page__title">Coworking Services</h2>
        <div class="features-page__subtitle">
          <a v-scroll-to="'.section_line'">
            <svg
              viewBox="0 0 100 95"
              class="banner__arrow"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.9999 75.4289V0H54.9999V75.4289L92.4644 37.9645L99.5354 45.0355L49.9999 94.5711L0.464355 45.0355L7.53542 37.9645L44.9999 75.4289Z"
                fill="black"
              />
            </svg>
            <svg
              viewBox="0 0 100 95"
              class="banner__arrow"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.9999 75.4289V0H54.9999V75.4289L92.4644 37.9645L99.5354 45.0355L49.9999 94.5711L0.464355 45.0355L7.53542 37.9645L44.9999 75.4289Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
      <Feature
        v-for="(feature, index) of features"
        :key="feature.id"
        :feature="feature"
        :index="index"
      />
      <div class="section_line">
        <p class="section_line__number">02</p>
      </div>
      <Questions />
    </main>
  </div>
</template>

<script>
import Feature from "@/components/Feature.vue";
import Questions from "../../components/global/Questions";

export default {
  name: "CoworkingServices",
  components: {
    Questions,
    Feature,
  },
  layout: "mainLayout",
  data: () => ({
    features: [
      {
        image: "services/service-mr.webp",
        link: "/book-now",
        id: "1",
        title: "Meeting Rooms",
        texts: [
          "With nicely sized and designed conference rooms in our properties, you can meet regularly with your team, with potential clients, potential employees, and your future investors. There will usually always be an opportunity to snag one at a moments notice too if needed. We can host large conferences and seminars as well, we just need a heads up to plan for the copious number of people coming in to hear you speak!",
          "Price Upon Request. Pricing is based off duration, attendance, and other needs. Please call or email us today.",
        ],
        price: "CONTACT FOR PRICING",
        color: "#F3EFE6",
      },
      {
        image: "services/service-po.webp",
        link: "/book-now",
        id: "2",
        title: "Private office",
        texts: [
          "Want to move your offices to our facility and become a long term tenant? Or perhaps you would prefer to be short term and looking for a satellite office to work remotely from.....either way you get to start with a blank canvas and make it your own. We give you a shell and you make it your own to match your personality and company! Just check with us before you go smashing through walls!",
        ],
        price: "STARTING AT $275/MO",
        color: "#92E6E6",
      },
      {
        image: "services/service-n.webp",
        link: "/book-now",
        id: "3",
        title: "NOMAD",
        texts: [
          "Maybe you are a wanderer and do not actually want a dedicated office space. Perhaps you prefer to be around other people in our expansive cooperative space upstairs, working, lounging, chatting it up with others. However you work best is how we work best and together we'll make it possible. Just grab a seat anywhere in the building, inside or out, and let the creativity flow!",
        ],
        price: "$150/MO",
        color: "#FFA2A2",
      },
      {
        image: "services/service-dp.webp",
        link: "/book-now",
        id: "4",
        title: "Day Passes",
        texts: ["An on-demand day pass reservation service"],
        price: "$25",
        color: "#AACC99",
      },
    ],
  }),
  mounted() {
    this.$nuxt.$emit("title", "CoworkingServices");
  },
};
</script>
