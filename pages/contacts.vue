<template>
  <div class="contacts-page">
    <main>
      <div class="contacts-map section">
        <div class="row justify_c-sb">
          <div class="col-10 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9">
            <div class="contacts-page__text">
              <h1 class="contacts-page__title">CONTACTS</h1>
            </div>
          </div>
          <div
            class="col-2 col-sm-1 col-md-2 col-lg-3 col-xl-3 col-xxl-3 text_a-r"
          >
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

        <div class="wrapper row">
          <div class="map col-xl-7 col-lg-12">
            <GoogleMap
              :selected-location="selectedLocation"
              :marker-location="markers"
              :zoom="9"
            />
          </div>
          <div class="buttons col-xl-5 col-lg-12">
            <div class="buttons-container">
              <div
                v-for="(place, index) of places"
                :key="place.id"
                class="contacts-page__button animation__block animation__arrow-link"
                @mouseenter="() => handleSelectLocation(place)"
                @click="() => pushToRoute(place.link)"
              >
                <div class="contacts-page-title">
                  <span class="button-VIB">
                    VIB<sup v-if="index">{{ index + 1 }}</sup> &mdash;
                    {{ place.name }}
                  </span>
                </div>
                <div class="button__address">
                  <div class="icon__location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <path
                        d="M11.5 0C7.04141 0 3.41406 3.62735 3.41406 8.08594C3.41406 9.59235 3.83134 11.0625 4.62107 12.3379L11.0397 22.6815C11.1627 22.8796 11.3793 23 11.6123 23C11.6141 23 11.6158 23 11.6176 23C11.8526 22.9982 12.0697 22.874 12.1904 22.6724L18.4454 12.2286C19.1916 10.9802 19.5859 9.54765 19.5859 8.08594C19.5859 3.62735 15.9586 0 11.5 0ZM17.2889 11.5367L11.6021 21.0318L5.76649 11.6278C5.10914 10.5663 4.75273 9.3415 4.75273 8.08594C4.75273 4.37045 7.78451 1.33867 11.5 1.33867C15.2155 1.33867 18.2428 4.37045 18.2428 8.08594C18.2428 9.30426 17.9099 10.4977 17.2889 11.5367Z"
                        fill="#C1BFBF"
                      />
                      <path
                        d="M11.5 4.04297C9.27071 4.04297 7.45703 5.85664 7.45703 8.08594C7.45703 10.301 9.24119 12.1289 11.5 12.1289C13.7867 12.1289 15.543 10.2766 15.543 8.08594C15.543 5.85664 13.7293 4.04297 11.5 4.04297ZM11.5 10.7902C10.006 10.7902 8.7957 9.57586 8.7957 8.08594C8.7957 6.59974 10.0138 5.38164 11.5 5.38164C12.9862 5.38164 14.1998 6.59974 14.1998 8.08594C14.1998 9.55412 13.0176 10.7902 11.5 10.7902Z"
                        fill="#C1BFBF"
                      />
                    </svg>
                  </div>
                  <div>{{ place.address }}</div>
                </div>
                <div class="button__working-hours">
                  <div class="icon__times">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <path
                        d="M11.5 0C5.15901 0 0 5.15901 0 11.5C0 17.8409 5.15901 23 11.5 23C17.8409 23 23 17.8409 23 11.5C23 5.15901 17.841 0 11.5 0ZM11.5 22C5.70998 22 0.999984 17.29 0.999984 11.5C0.999984 5.70998 5.70998 0.999984 11.5 0.999984C17.29 0.999984 22 5.70998 22 11.5C22 17.29 17.29 22 11.5 22Z"
                      />
                      <circle
                        cx="11.5"
                        cy="11.5"
                        r="10.75"
                        stroke-width="1.5"
                      />
                      <path
                        d="M10.9248 4.6001V12.6501L16.6748 14.9501"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="button__working-hours__value">
                    <div v-for="time of place.times" :key="time.name">
                      <div>{{ time.name }}</div>
                      <div>{{ time.hours }}</div>
                    </div>
                  </div>
                </div>
                <div class="location-link animated-link">
                  <Arrow :arrow-position="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactsUs :number-of-section="'02'" />
    </main>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ContactsUs from "../components/mainPage/ContactUs.vue";
import GoogleMap from "../components/global/GoogleMap";
import Arrow from "../components/global/Arrow.vue";

export default {
  name: "Contacts",
  components: {
    GoogleMap,
    ContactsUs,
    Arrow,
  },
  layout: "mainLayout",
  data: () => ({
    selectedLocation: {},
    selectedService: null,
    markers: {
      0: {
        lat: 42.87632053925372,
        lng: -72.55779738493906,
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
    places: [
      {
        id: "1",
        name: "Brattleboro",
        address: "70 Landmark Hill DR, Brattleboro, VT 05301",
        link: "/locations/vib-brattleboro/1",
        times: [
          {
            name: "M - F: 9am - 5pm",
            hours: "Weekend Access: Membership Only",
          },
        ],
        lat: "42.87632053925372",
        lng: "-72.55779738493906",
      },
      {
        id: "2",
        name: "Downtown Brattleboro",
        address: "80 Flat St unit #103 Brattleboro VT 05301",
        link: "/locations/vib2-downtown-brattleboro/2",
        times: [
          {
            name: "Membership Only",
            hours: "24/7 Access",
          },
        ],
        lat: "42.8503580984572",
        lng: "-72.5602861155695",
      },
      {
        id: "3",
        name: "Downtown Bennington",
        address: "425 Main St Bennington VT 05201",
        link: "/locations/vib3-downtown-bennington/3",
        times: [
          {
            name: "M - F: 9am - 5pm",
            hours: "Weekend Access: Membership Only",
          },
        ],
        lat: "42.878166335255735",
        lng: "-73.19611221372156",
      },
    ],
  }),
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);

    if (this.$route.query.service && !this.selectedService) {
      this.selectedService = this.$route.query.service;
      this.setPopUp(true);
    }
  },
  destroyed() {
    this.setPopUp(false);
  },
  methods: {
    ...mapMutations(["setPopUp"]),
    getPosition(point) {
      return {
        lat: parseFloat(point.lat),
        lng: parseFloat(point.lng),
      };
    },
    handleSelectLocation(location) {
      this.selectedLocation = location;
    },
    pushToRoute(link) {
      this.$router.push(link);
    },
  },
};
</script>
