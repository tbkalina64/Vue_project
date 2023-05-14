<template>
  <main class="main">
    <div v-if="location" class="place">
      <div class="place-top-wrapper">
        <div>
          <h1 class="place__title" v-html="location.name" />
          <div class="place__address">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 41"
                fill="none"
              >
                <path
                  d="M19.999 0C12.245 0 5.93652 6.46615 5.93652 14.4141C5.93652 17.0994 6.66223 19.72 8.03566 21.9936L19.1986 40.4322C19.4124 40.7854 19.7891 41 20.1943 41C20.1974 41 20.2004 41 20.2036 41C20.6122 40.9967 20.9897 40.7755 21.1996 40.4161L32.078 21.7989C33.3757 19.5733 34.0615 17.0197 34.0615 14.4141C34.0615 6.46615 27.7531 0 19.999 0ZM30.0667 20.5655L20.1765 37.4915L10.0277 20.7279C8.88449 18.8355 8.26465 16.6522 8.26465 14.4141C8.26465 7.7908 13.5373 2.38633 19.999 2.38633C26.4607 2.38633 31.7256 7.7908 31.7256 14.4141C31.7256 16.5859 31.1466 18.7133 30.0667 20.5655Z"
                  fill="#505050"
                />
                <path
                  d="M20 7.20703C16.123 7.20703 12.9688 10.4401 12.9688 14.4141C12.9688 18.3626 16.0716 21.6211 20 21.6211C23.9768 21.6211 27.0312 18.3192 27.0312 14.4141C27.0312 10.4401 23.877 7.20703 20 7.20703ZM20 19.2348C17.4018 19.2348 15.2969 17.07 15.2969 14.4141C15.2969 11.7648 17.4153 9.59336 20 9.59336C22.5847 9.59336 24.6953 11.7648 24.6953 14.4141C24.6953 17.0313 22.6394 19.2348 20 19.2348Z"
                  fill="#505050"
                />
              </svg>
              <a :href="location.google_url2" target="_blank">{{
                location.address
              }}</a>
            </div>
          </div>
        </div>
        <div class="place-arrows-wrapper">
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
      <div class="finding-room__wrapper place-location">
        <div class="place-schedule">
          <div class="place-schedule__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76 40.5C76 60.1061 60.1061 76 40.5 76C20.8939 76 5 60.1061 5 40.5C5 20.8939 20.8939 5 40.5 5C60.1061 5 76 20.8939 76 40.5ZM81 40.5C81 62.8675 62.8675 81 40.5 81C18.1325 81 0 62.8675 0 40.5C0 18.1325 18.1325 0 40.5 0C62.8675 0 81 18.1325 81 40.5ZM41.5 12.5C41.5 11.1193 40.3807 10 39 10C37.6193 10 36.5 11.1193 36.5 12.5V42.5816L53.7883 58.8221C54.7946 59.7675 56.3768 59.718 57.3221 58.7117C58.2675 57.7054 58.218 56.1232 57.2117 55.1779L41.5 40.4184V12.5Z"
                fill="#505050"
              />
            </svg>
            schedule
          </div>
          <div v-if="location.markForTitle" class="mark-for-title">
            {{ location.markForTitle }}
          </div>
          <div v-if="location.aroundTheClock" class="around-the-clock">
            <div>{{ location.aroundTheClock }}</div>
            <div>{{ location.aroundTheClockTime }}</div>
          </div>
          <div v-else>
            <div class="place-schedule__time">
              <div>M - F:</div>
              <span> 9am - 5pm</span>
            </div>
            <div class="place-schedule__time">
              <div class="place-schedule__time--min">Weekend Access:</div>
              <span>Membership Only</span>
            </div>
          </div>
        </div>
        <div class="place-info">
          {{ location.placeInfo }}
        </div>
        <nuxt-link
          class="place-booking hover-link animation__arrow"
          to="/book-now"
        >
          <span>booking now</span>
          <Arrow :arrow-position="true" />
        </nuxt-link>
        <Slider :name="'swiperOne'" :images="location.images" />
      </div>
      <div class="place-info-wrapper">
        <div class="place-additional">
          <div class="place-info__box turquoise-color" />
          <div class="place-info__title">
            {{ location.firstText }}
          </div>
        </div>
        <div class="place-additional">
          <div class="place-info__box lilak-color" />
          <div class="place-info__title">
            {{ location.secondText }}
          </div>
        </div>
      </div>
      <div class="section_line">
        <p class="section_line__number">02</p>
      </div>
      <div class="types_room__title">
        <h2>
          NOMAD ■ MEETING ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING
          ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING ROOMS ■ PRIVATE
          OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING ROOMS ■ PRIVATE OFFICE ■ DAY
          PASSES ■
        </h2>
        <h2>
          DAY PASSES ■ NOMAD ■ MEETING ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■
          NOMAD ■ MEETING ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING
          ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING ROOMS ■ PRIVATE
          OFFICE ■
        </h2>
      </div>
      <div class="select-rooms">
        <div class="row">
          <div class="col-xl-4 col-12">
            <div
              class="place-buttons-wrapper"
              :class="{
                'place-buttons-wrapper--only':
                  location &&
                  location.services &&
                  location.services.length === 1,
              }"
            >
              <div
                v-for="place of location.services"
                :key="place.title"
                class="place__button"
                :class="{
                  'place__button--active': place.title === selectLocation.title,
                  'place__button--none': !place.view,
                }"
                @click="handleSelectLocatoin(place)"
              >
                <span class="place__button-name">{{ place.title }}</span>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-12">
            <div class="row">
              <div class="col-12 relative">
                <div class="select-room-slider">
                  <Slider
                    :loop="false"
                    :arrows="false"
                    :name="'swiperRoom'"
                    :images="selectLocation.images"
                  />
                </div>
                <div class="row slider-content-wrap">
                  <div class="col-md-6 col-12 room-icons-wrapper">
                    <div class="slider-place__description">
                      {{ selectLocation.description }}
                    </div>
                    <div
                      v-if="selectLocation.additionalDescription"
                      class="slider-place__description"
                    >
                      {{ selectLocation.additionalDescriptionSecond }}
                    </div>
                    <div
                      v-if="selectLocation.additionalDescriptionSecond"
                      class="slider-place__description"
                    >
                      {{ selectLocation.additionalDescriptionSecond }}
                    </div>
                  </div>
                  <div
                    v-if="!selectLocation.forDitails"
                    class="col-12 col-sm-8 col-md-3 capacity-wrapper"
                  >
                    <div class="capacity">
                      <div class="capacity__title">Capacity</div>
                      <div class="capacity__amount">
                        {{ selectLocation.persons }}
                      </div>
                    </div>
                    <div class="place-price">
                      <div
                        v-if="!selectLocation.contactPrice"
                        class="place-price__title"
                      >
                        Price
                      </div>
                      <div
                        class="place-price__amount"
                        :class="{
                          'place-price__small': selectLocation.contactPrice,
                        }"
                      >
                        {{ selectLocation.price }}
                      </div>
                    </div>
                  </div>
                  <div v-else class="col-12 col-sm-8 col-md-3 capacity-wrapper">
                    <div class="capacity__amount forDitails">
                      {{ selectLocation.forDitails }}
                    </div>
                  </div>
                  <div class="col-12 col-sm-4 col-md-3">
                    <nuxt-link to="/book-now" class="animation__arrow">
                      <div class="select-room__link hover-link">
                        <span> Join </span>
                        <Arrow />
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FindingUs
        :fetched-location="fetchedLocation"
        :description="location.placeInfo"
      />
    </div>
  </main>
</template>

<script>
import Slider from "@/components/global/Slider";
import FindingUs from "@/components/global/FindingUs";

import { mapActions, mapState } from "vuex";

export default {
  name: "Location",
  components: {
    Slider,
    FindingUs,
  },
  layout: "mainLayout",
  middleware: ["checkExistingLocation"],
  data() {
    return {
      selectLocation: {},
      location: {},
      locations: {
        1: {
          placeInfo:
            "We have over 18,000 sq ft of historic creative space located just on the edge of downtown brattleboro, vt in a spacious old mansion",
          firstText:
            "We are a collective group of people who are looking to help push business, individuals and ideas to the next level. Not only are we interested in building, investing and growing entrepreneurs but also creating a innovation hub of creative like minded people.",
          secondText:
            "What better place than right here in southern Vermont! We have seasons, skiing, the CT river, good food, culture, arts, and local brews all surrounded by well rounded and interesting people.",
          services: [
            {
              title: "Private Office",
              images: ["locations/privo-vib.jpg"],
              description: "Unit #104 - 496 sq ft",
              additionalDescription: "Unit #211 - 483 sq ft",
              additionalDescriptionSecond: "Unit #212 - 600 sq ft",
              price: "$275/MO",
              persons: "1 - 4 people",
              forDitails: "Contact For Details",
            },
            {
              title: "Meeting Rooms",
              images: ["services/service-mr.webp"],
              description:
                "VIB1 - A large board room style room seating up to 16, and available for classroom or training rentals seating up to 30. Advanced notice and coordination needed for seating more than 16. Beautiful views of Brattleboro, glass entree doors, kitchen area and bathrooms nearby.",
              price: "CONTACT FOR PRICING",
              contactPrice: true,
              persons: "15 people",
            },
            {
              title: "Nomad",
              images: ["vib/vib1.webp"],
              description:
                "You will have your pick of open desks in the flex workspace, lounge area, and hub space. We also have phone booths you're welcome to pop into to make private calls.",
              price: "$150/MO",
              persons: "PER PERSON",
            },
            {
              title: "Day Passes",
              images: ["vib/vib3.webp"],
              description:
                "There is open co-working seating in all our open co-working space. Co-working space - $150/mo",
              price: "$25/DAY",
              persons: "PER PERSON",
            },
          ],
          images: ["slots/1.webp", "slots/3.webp"],
        },
        2: {
          aroundTheClock: "Membership Only",
          aroundTheClockTime: "24/7 Access",
          placeInfo:
            "We have over 2,000 sq ft of private offices located in the heart of downtown brattleboro, VT",
          firstText:
            "Here, we offer individual offices for a membership only fee with access any time of the day or night. Walk out the door and step on to Main St in downtown Brattleboro in ninety seconds. All locations share access to all other VIB locations in southern Vermont. Being a member at any one of our locations allows you access to our other properties as well as our services to assist with multiple facets of your business.",
          secondText:
            "From software development, new business strategies, financials, finding investors, market research, and more. You can host conferences, seminars, training sessions for certifications amongst other misc activities or events. We have up to fiber service at all locations so there is never any lag, all your downloads, uploads and video conferencing will be lightning fast.",
          services: [
            {
              title: "Private Office",
              images: ["locations/privo-vib2.jpg"],
              description: "Starting at $275/mo (8 Available)",
              additionalDescription:
                "Nomad and day passes are not avail at this location",
              price: "$275/MO",
              persons: "1 PERSON",
            },
          ],
        },
        3: {
          markForTitle: "Opening Q1 2022",
          placeInfo:
            "We have over 5,000 sq ft of historic creative space smack in the middle of downtown bennington, VT",
          firstText:
            "We have services to assist with multiple facets of your business, software development, new business strategies, financials, finding investors, market research, and more. You can host conferences, seminars, training sessions for certifications amongst other misc activities. Help us create and build a community here in Bennington to collaborate with the surrounding area in a thriving constructive environment.",
          secondText:
            "Being a member at any one of our locations allows you access to our other properties as well as our services to assist with multiple facets of your business. From software development, new business strategies, financials, finding investors, market research, and more. You can host conferences, seminars, training sessions for certifications amongst other misc activities or events. We have up to fiber service at all locations so there is never any lag, all your downloads, uploads and video conferencing will be lightning fast.",
          services: [
            {
              title: "Private Office",
              images: ["locations/privo-vib3.jpg"],
              description: "Starting at $400/mo (11 Available)",
              price: "$400/MO",
              persons: "1 - 2 people",
            },
            {
              title: "Meeting Rooms",
              images: ["services/service-mr.webp"],
              description:
                "VIB3 - A large board room style room seating up to 16, and available for classroom or training rentals seating up to 30. Advanced notice and coordination needed for seating more than 16. Beautiful views of Downtown Bennington, glass entree doors, kitchen area and bathrooms nearby.",
              price: "CONTACT FOR PRICING",
              contactPrice: true,
              persons: "15 people",
            },
            {
              title: "Nomad",
              images: ["vib/vib1.webp"],
              description:
                "You will have your pick of open desks in the flex workspace, lounge area, and hub space. We also have phone booths you're welcome to pop into to make private calls.",
              price: "$150/MO",
              persons: "PER PERSON",
            },
            {
              title: "Day Passes",
              images: ["vib/vib3.webp"],
              description: "Co-working space - $150/mo",
              price: "$25/DAY",
              persons: "PER PERSON",
            },
          ],
        },
      },
    };
  },
  computed: {
    ...mapState({
      fetchedLocation: (state) => state.currentLocation,
    }),
    locationsImage() {
      return this.$store.state.locationsImage;
    },
  },
  mounted() {
    this.$nuxt.$emit("title", this.$options.name);
  },
  async created() {
    const fetchedLocation = await this.fetchLocation(this.$route.params.id);
    if (!fetchedLocation) {
      await this.$router.push("/");
    }
    this.location = {
      ...this.locations[this.$route.params.id],
      ...this.fetchedLocation,
      images: this.locationsImage[this.$route.params.id].images,
    };
    this.selectLocation = this.location.services[0];
  },
  methods: {
    handleSelectLocatoin(location) {
      this.selectLocation = {};
      this.selectLocation = location;
    },
    ...mapActions({
      fetchLocation: "fetchLocation",
    }),
  },
};
</script>
