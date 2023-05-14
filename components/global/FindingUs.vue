<template>
  <div class="finding">
    <div class="section_line">
      <p class="section_line__number">03</p>
    </div>
    <div class="finding-top">
      <div class="finding__title">FINDING us!</div>
      <div class="finding__description">
        {{ description }}
      </div>
    </div>
    <div class="finding__map">
      <GoogleMap
        :marker-location="fetchedLocation.google_coordinates"
        :amount="true"
      />
    </div>
    <div class="finding-contact">
      <div class="finding-box">
        <div class="finding-contact__title">Phone</div>
        <a class="finding-contact__link" href="tel:802.254.5201"
          >802.254.5201</a
        >
      </div>
      <div class="finding-box">
        <div class="finding-contact__title">E-mail</div>
        <a class="finding-contact__link" href="mailto:info@vtinbox.com"
          >INFO@VTINBOX.COM</a
        >
      </div>
      <div class="finding-box">
        <div class="finding-contact__title">Address</div>
        <a
          class="finding-contact__link finding-box__address"
          :href="`https://maps.google.com?saddr=${fetchedLocation.google_coordinates.lat},${fetchedLocation.google_coordinates.lng}`"
          target="_blank"
          >{{ fetchedLocation.address }}</a
        >
      </div>
      <nuxt-link
        to="/contacts"
        class="finding-box-contact hover-link animation__arrow"
      >
        <span class="finding-box-contact__title">Contact us</span>
        <Arrow />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/global/Arrow.vue";
import GoogleMap from "./GoogleMap";

export default {
  name: "Breadcrumbs",
  components: {
    Arrow,
    GoogleMap,
  },
  props: {
    fetchedLocation: {
      type: Object,
      default: () => {},
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
