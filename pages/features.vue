<template>
  <div class="features-page">
    <main>
      <div class="features-page__wrapper">
        <h2 class="features-page__title">Features</h2>
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
import Questions from "../components/global/Questions";

export default {
  name: "Features",
  components: {
    Questions,
    Feature,
  },
  layout: "mainLayout",
  data: () => ({
    features: [
      {
        image: "features/1.webp",
        link: "/book-now",
        id: "1",
        title: "HOST YOUR EVENT AT VT INBOX",
        texts: [
          "VIB is not just a place to work but a neighborhood where our friends can get together and share experiences, make connections and build their networks. Perhaps most importantly it provides a platform for expressing opinions and experiencing journeys.",
          "With plenty of open space and medium-sized rooms, we can accommodate coworkers and friends gatherings, various types of functions such as wine tasting or a catered food event with your favorite local chef. We have the establishment and facilities to help create what your mind can imagine... just ask!",
        ],
        color: "#B0C0F8",
      },
      {
        image: "features/2.webp",
        link: "/book-now",
        id: "2",
        title: "MEETING ROOMS",
        texts: [
          "VIB's meeting rooms are ideal for private off-sites as well as break out sessions. From small rooms that accommodate 4 people to larger conference rooms that can hold up to 20 people.",
          "Meeting rooms include whiteboards addition to conference telephones, projectors, smart screens which create perfect conditions to conduct wide-ranging courses, seminars, workshops, and consultations.",
        ],
        color: "#AACC99",
      },
      {
        image: "features/3.webp",
        link: "/book-now",
        id: "3",
        title: "COWORKING",
        texts: [
          "VIB's shared workspace is where industry influencers innovate against the backdrop of an unprecedented infrastructure and inspiring tech-scape with that wondrous Vermont charm.",
          "Here a community centered around a core set of shared values—openness, collaboration, accessibility, and sustainability. Our space also comes with a variety of furniture including beanbag chairs, movable and writable tables, writable boards, sofa seats, bar stool seating, and other hidden lounge areas.",
        ],
        color: "#FFA2A2",
      },
      {
        image: "features/4.webp",
        link: "/book-now",
        id: "4",
        title: "YOUR OWN PRIVATE OFFICE",
        texts: [
          "Private offices provide a quiet, and lockable space for you and your team from 1 to 10.",
          "Your membership includes all access to all amenities and areas VIB has to offer.",
          "24-hour access and Free WI-FI",
        ],
        color: "#F3EFE6",
      },
      {
        image: "features/7.webp",
        link: "/book-now",
        id: "7",
        title: "ROUNDTABLES",
        texts: [
          "Having a round table discussion may prove as a more worthy and personal way of discussing differing opinions. For topics warranting more time and care, round tables remind us that behind every opinion is a human with feelings, a face with a background, and a soul worth listening to.",
        ],
        color: "#AACC99",
      },
      {
        image: "features/8.webp",
        link: "/book-now",
        id: "8",
        title: "OUTDOOR HANGOUTS",
        texts: [
          "VIB is situated on 16 acres of unspoiled Vermont land. The Connecticut River is our backyard neighbor and there is an abundance of wildlife sauntering throughout or lush woods.",
          "We have plenty of outdoor seating, a gazebo, and grassy knolls to sit on and work outside. Simply just to sit and chat and take a break from your mind-blowing creation!",
        ],
        color: "#FFA2A2",
      },
    ],
  }),
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
};
</script>
