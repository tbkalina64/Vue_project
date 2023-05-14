<template>
  <div class="app">
    <div class="container-fluid noContainerLayout">
      <transition name="fade">
        <Loader v-if="showLoader" />
      </transition>
      <Header />
      <BreadCrumbs />
    </div>
    <Nuxt v-if="!showLoader" />
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Loader from "@/components/global/Loader";
import { mapActions, mapState } from "vuex";
import BreadCrumbs from "@/components/global/BreadCrumbs";

export default {
  name: "MainLayout",
  components: {
    Header,
    Loader,
    BreadCrumbs,
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
    route() {
      return this.$route.path;
    },
    ...mapState({
      showLoader: (state) => state.showLoader,
    }),
  },
  watch: {
    route() {
      window.scrollTo(0, 0);
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
  },
  methods: {
    ...mapActions(["handleLoader"]),
  },
};
</script>
