import * as VueGoogleMaps from "vue2-google-maps";
import Vue from "vue";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA4ygmFlQ_mVGWiPwa2fjlIE3Bz3NiGQ5Q",
    libraries: "places", // necessary for places input
    region: "en_US",
    language: "en-US",
  },
});
