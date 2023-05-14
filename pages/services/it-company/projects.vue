<template>
  <main>
    <div class="projects projects-page">
      <div class="features-page__wrapper">
        <h2 class="features-page__title">Projects</h2>
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

      <div class="row">
        <ProjectItem
          title="Vermont Beer Makers"
          image="beer.webp"
          color="#AACC99"
          description="One of the original 10 breweries in Vermont (Trout River), that has rebranded in order to stay relevant and has continued operations still to this day"
          href="https://vermontbeermakers.com/"
        />
        <ProjectItem
          title="VERMONT MAPLE SYRUP"
          image="syrop.png"
          color="#FFA2A2"
          description="Organic maple syrup farm with 18,000+ taps located in southern Vermont"
          href="https://vermontmaplesyrup.com/"
        />
        <ProjectItem
          title="NORM’S MARINA"
          image="norms.webp"
          color="#92E6E6"
          description="Full Service boat Marina in Hinsdale, NH – 80+ slips"
          href="https://normsmarina.com/"
        />
        <ProjectItem
          title="Viking Farms"
          image="vikings.webp"
          color="#B0C0F8"
          description="Independent craft beer and maple syrup distributor in Vermont"
          href="https://vikings.farm/"
        />
        <ProjectItem
          title="Belogour Properties"
          image="belogour.webp"
          color="#F3EFE6"
          description="Real estate projects with top-tier developers such as Emaar, Meraas, Dubai properties and Damac"
          href="https://belogour.com/"
        />
        <ProjectItem
          title="FC PIRIN"
          image="pirin.webp"
          color="#AACC99"
          description="OFC Pirin and youth football school of Blagoevgrad, Bulgaria"
          href="https://fcpirin.com"
        />
        <ProjectItem
          title="Vermont news & media"
          image="news.webp"
          color="#92E6E6"
          description="A collection of Southern Vermont media publications"
          href="https://vtnewsmedia.com/"
        />
      </div>
      <div class="section_line">
        <p class="section_line__number">02</p>
      </div>
      <Questions />
    </div>
  </main>
</template>

<script>
import ProjectItem from "../../../components/global/ProjectItem";
import Questions from "../../../components/global/Questions";

export default {
  name: "Projects",
  components: {
    Questions,
    ProjectItem,
  },
  layout: "mainLayout",
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
};
</script>
