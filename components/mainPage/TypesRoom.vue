<template>
  <div class="types_room section">
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
        DAY PASSES ■ NOMAD ■ MEETING ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■ NOMAD
        ■ MEETING ROOMS ■ PRIVATE OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING ROOMS ■
        PRIVATE OFFICE ■ DAY PASSES ■ NOMAD ■ MEETING ROOMS ■ PRIVATE OFFICE ■
      </h2>
    </div>
    <div class="row justify_c-sb">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 offset-xl-1">
        <div class="types_room__text">
          If you are interested in renting a place to work outside the house or
          as an alternative to higher-priced traditional office space, we
          welcome the opportunity to speak with you about your needs and how
          VERMONT INNOVATION BOX might be a perfect fit during this economic
          change - and beyond.
        </div>
        <div class="types_room__text">
          Whether you need a desk, an office, a meeting room, or just a friendly
          place to work and/or network for the day, we’ve got you covered. Our
          Brattleboro coworking community includes area startups, small
          businesses, freelancers, financiers, designers, artists and makers.
        </div>
        <div class="types_room__text">Everyone’s welcome.</div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 text_a-r">
        <div class="types_room__image">
          <nuxt-link to="book-now" class="types_room__join animation__arrow">
            <span> Join </span>
            <Arrow />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="types_room__types">
      <nuxt-link
        :to="createLink('contacts', '0', 'query')"
        class="types_room__type"
        :style="{ backgroundColor: '#6CE6E6' }"
      >
        <h3 class="types_room__type_name">Meeting Rooms</h3>
        <h3 class="types_room__type_name--hiden">Meeting Rooms</h3>
        <p class="types_room__type_description">
          Nicely sized and smartly designed conference rooms.
        </p>
        <div class="types_room__type_price">
          Contact for pricing
          <Arrow :arrow-position="true" :color-black="true" />
        </div>
      </nuxt-link>

      <nuxt-link
        :to="createLink('contacts', '1', 'query')"
        class="types_room__type"
        :style="{ backgroundColor: '#F3EFE6' }"
      >
        <h3 class="types_room__type_name">Private Office</h3>
        <h3 class="types_room__type_name--hiden">Private Office</h3>
        <p class="types_room__type_description">
          We start with a blank canvas and you make it your own.
        </p>
        <div class="types_room__type_price">
          Contact for pricing
          <Arrow :arrow-position="true" :color-black="true" />
        </div>
      </nuxt-link>

      <nuxt-link
        v-for="type of services"
        :key="type.id"
        :to="createLink('contacts', type.id, 'query')"
        class="types_room__type"
        :style="{ backgroundColor: type.color }"
      >
        <h3 class="types_room__type_name">
          {{ type.name }}
        </h3>
        <h3 class="types_room__type_name--hiden">
          {{ type.name }}
        </h3>
        <p class="types_room__type_description">
          {{ type.description }}
        </p>
        <div class="types_room__type_price">
          $ {{ type.price }}
          <Arrow :arrow-position="true" :color-black="true" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import helpers from "@/mixins/helpers";
import Arrow from "@/components/global/Arrow.vue";

export default {
  components: {
    Arrow,
  },
  mixins: [helpers],
  data: () => ({
    services: [],
  }),
  async created() {
    this.services = await this.fetchServices();
  },
  methods: {
    ...mapActions({
      fetchServices: "fetchServices",
    }),
  },
};
</script>
