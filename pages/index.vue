<template>
  <main>
    <MainBanner
      image="mainBanner.webp"
      image-small="mainBanner.webp"
      left-description="ENVIRONMENT SHAPES EXPERIENCE AND AT VERMONT INNOVATION BOX WE TAKE THIS TO HEART."
      right-description="vermont innovation box Features"
      sub-title="THE MOST EXCITING WORK SPACES IN Brattleboro & Bennington"
      href="features"
    />
    <TypesRoom />
    <Features />
    <Finding />
    <ContactUs />
  </main>
</template>

<script>
import MainBanner from "../components/mainPage/MainBanner.vue";
import TypesRoom from "../components/mainPage/TypesRoom.vue";
import Features from "../components/mainPage/Features.vue";
import Finding from "../components/mainPage/Finding.vue";
import ContactUs from "../components/mainPage/ContactUs.vue";

export default {
  components: {
    MainBanner,
    TypesRoom,
    Features,
    Finding,
    ContactUs,
  },
  layout: "mainLayout",
  head() {
    return {
      title: "Vermont Innovation Box",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The most exciting workspace in Brattleboro & Bennington",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Coworking and private offices in southern Vermont",
        },
        {
          property: "og:description",
          content: "The most exciting workspace in Brattleboro & Bennington",
        },
      ],
    };
  },
};
</script>
