<template>
  <gmap-map :center="markerLocation[1] || markerLocation" :zoom="zoom">
    <gmap-info-window
      :options="infoOptions"
      :position="infoPosition"
      :opened="infoOpened"
      @closeclick="infoOpened = false"
    >
      {{ infoContent }}
    </gmap-info-window>
    <gmap-marker
      v-if="amount"
      :ref="`markerRef${markerLocation.id}`"
      :position="getPosition(markerLocation)"
      :clickable="true"
      @click="toggleInfo(markerLocation, markerLocation.id)"
    />
    <gmap-marker
      v-for="(marker, index) in markerLocation"
      v-else
      :key="index"
      :ref="`markerRef${marker.id}`"
      :position="getPosition(marker)"
      :clickable="true"
      @click="toggleInfo(marker, index)"
    />
  </gmap-map>
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    markerLocation: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    selectedLocation: {
      type: Object,
      default: () => ({}),
    },
    amount: {
      type: Boolean,
      default: false,
      required: false,
    },
    zoom: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  watch: {
    markerLocation() {
      this.infoOpened = false;
    },
    selectedLocation(location) {
      if (location) {
        this.$refs[`markerRef${location.id}`][0]._events.click[0]();
      }
    },
  },
  methods: {
    getPosition(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
    },
    toggleInfo(marker, index) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.label;
      if (this.infoCurrentKey === index) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = index;
      }
    },
  },
};
</script>
