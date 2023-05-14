<template>
  <div class="locations">
    <main>
      <Location
        :markers="markers[0]"
        :title="'VIB — Brattleboro'"
        :sub-title="'Brattleboro'"
        :slider-class="'brattleboro-slider'"
        :location="'brattleboro'"
        :address="'70 LANDMARK HILL DR, BRATTLEBORO, VT 05301'"
        :subline="false"
        :second-image="'img1.webp'"
        :sliders="downtown"
        :index="1"
        :arrow-is-right-position="true"
        :arrow-is-left-position="true"
        :link="'vib-brattleboro/1'"
      />
      <Location
        :markers="markers[1]"
        :amount="true"
        :title="'VIB<sup>2</sup> — Downtown Brattleboro'"
        :sub-title="'Brattleboro'"
        :slider-class="'downtown'"
        :address="'80 Flat St unit #103 Brattleboro VT 05301'"
        :second-image="'img2.webp'"
        :sliders="bennington"
        :index="2"
        :link="'vib2-downtown-brattleboro/2'"
      />
      <Location
        :markers="markers[2]"
        :amount="true"
        :title="'VIB<sup>3</sup> — Downtown Bennington'"
        :sub-title="'Bennington'"
        :slider-class="'downtownbb'"
        :address="'425 Main St Bennington VT 05201'"
        :second-image="'img3.webp'"
        :sliders="brattleboro"
        :index="3"
        :link="'vib3-downtown-bennington/3'"
      />
    </main>
  </div>
</template>

<script>
import Location from "@/components/Location.vue";

export default {
  name: "Locations",
  components: {
    Location,
  },
  layout: "mainLayout",
  data: () => ({
    markers: {
      0: {
        lat: 42.876206535071475,
        lng: -72.55794222411159,
        label: "VIB - Brattleboro",
        active: true,
        id: "1",
      },
      1: {
        lat: 42.8503580984572,
        lng: -72.5602861155695,
        label: "VIB2 - Downtown Brattleboro",
        id: "2",
      },
      2: {
        lat: 42.878166335255735,
        lng: -73.19611221372156,
        label: "VIB3 - Downtown Bennington",
        id: "3",
      },
    },
    downtown: [
      {
        image: "vib/vib1.webp",
        id: "1",
        description:
          "We are a collective group of people who are looking to help push business, individuals, and ideas to the next level. We are interested in building, investing, and growing the community and also creating an innovation hub of creative like-minded people.",
      },
      {
        image: "vib/vib2.webp",
        id: "2",
        description:
          "What better place than right here in southern Vermont! We have seasons, skiing, the CT river, good food, culture, arts, and local brews all surrounded by well rounded and interesting people.",
      },
      {
        image: "vib/vib3.webp",
        id: "3",
      },
    ],
    bennington: [
      {
        image: "vib2/Flat1.webp",
        id: "1",
        description:
          "Here, we offer individual offices for a membership only fee with access any time of the day or night. Walk out the door and step on to Main St in downtown Brattleboro in ninety seconds. All locations share access to all other VIB locations in southern Vermont. Being a member at any one of our locations allows you access to our other properties as well as our services to assist with multiple facets of your business.",
      },
      {
        image: "vib2/Flat2.webp",
        id: "2",
        description:
          "From software development, new business strategies, financials, finding investors, market research, and more. You can host conferences, seminars, training sessions for certifications amongst other misc activities or events. We have up to fiber service at all locations so there is never any lag, all your downloads, uploads and video conferencing will be lightning fast.",
      },
      {
        image: "vib2/Flat3.webp",
        id: "3",
      },
    ],
    brattleboro: [
      {
        image: "vib3/vib1.webp",
        id: "1",
        description:
          "We have services to assist with multiple facets of your business, software development, new business strategies, financials, finding investors, market research, and more. You can host conferences, seminars, training sessions for certifications amongst other misc activities. Help us create and build a community here in Bennington to collaborate with the surrounding area in a thriving constructive environment.",
      },
      {
        image: "vib3/vib2.webp",
        id: "2",
        description:
          "Being a member at any one of our locations allows you access to our other properties as well as our services to assist with multiple facets of your business. From software development, new business strategies, financials, finding investors, market research, and more. You can host conferences, seminars, training sessions for certifications amongst other misc activities or events. ",
      },
      {
        image: "vib3/vib4.webp",
        id: "3",
        description:
          "We have up to fiber service at all locations so there is never any lag, all your downloads, uploads and video conferencing will be lightning fast.",
      },
    ],
  }),
  computed: {
    locationsImage() {
      return this.$store.state.locationsImage;
    },
  },
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
};
</script>
