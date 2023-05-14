<template>
  <div class="app">
    <div class="container-fluid" :class="$route.name">
      <transition name="fade">
        <Loader v-if="showLoader" />
      </transition>
      <PopUp v-if="showPopUp" />
      <Header />
      <BreadCrumbs v-if="$route.name !== 'index' && $route.name !== null" />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Loader from "@/components/global/Loader";
import PopUp from "@/components/global/PopUp";
import { mapActions, mapState } from "vuex";
import BreadCrumbs from "@/components/global/BreadCrumbs";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
    Loader,
    BreadCrumbs,
    PopUp,
  },
  data: () => ({
    title: "",
  }),
  head() {
    if (this.title) {
      return {
        title: this.title + " | VT-Inbox",
      };
    } else {
      return {
        title: "VT-Inbox",
      };
    }
  },
  computed: {
    ...mapState(["showLoader", "showPopUp"]),
  },
  watch: {
    $route(to, from) {
      this.$ga.page(this.$router);
    },
  },
  created() {
    this.$nuxt.$on("title", (data) => {
      this.title = data;
    });
  },
  mounted() {
    window.scrollTo(0, 0);
    this.handleLoader(false);
    this.fetchLocations();
    this.fetchServices();
  },
  methods: {
    ...mapActions({
      handleLoader: "handleLoader",
      fetchServices: "fetchServices",
      fetchLocations: "fetchLocations",
    }),
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
