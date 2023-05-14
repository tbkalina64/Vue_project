<template>
  <div class="book-now__first-step">
    <p class="book-now__chose">Choose services</p>
    <div class="book-now__types">
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
      </nuxt-link>

      <nuxt-link
        v-for="type of services"
        :key="type.id"
        :to="createLink('contacts', '2', 'query')"
        class="types_room__type"
        :class="{
          'types_room__type--selected': selectService.id === type.id,
        }"
        :style="{ backgroundColor: type.color }"
        @click="handleSelectService(type)"
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
      </nuxt-link>
    </div>
    <div class="book-now__filters">
      <div class="book-now__filters-select">
        <p class="book-now__filters-select-name">Choose date</p>
        <img
          src="@/assets/image/icons/calendar.svg"
          class="book-now__icon calendar"
        />
        <a-range-picker
          :disabled="!selectService.id"
          :disabled-date="disabledDate"
          :value="filters.dates"
          :open="pickerIsOpen"
          @calendarChange="handleChangeDate"
          @openChange="handleEndOpenChange"
        />
      </div>
      <div class="book-now__filters-select">
        <p class="book-now__filters-select-name">Choose location</p>
        <img
          src="@/assets/image/icons/location.svg"
          class="book-now__icon location"
        />
        <a-select
          v-model="filters.location_id"
          placeholder="Where"
          style="width: 100%"
          :disabled="!selectService.id"
          size="large"
        >
          <a-select-option
            v-for="location of locations"
            :key="location.id"
            :value="location.id"
          >
            <span class="book-now__location-name" v-html="location.name" />
          </a-select-option>
        </a-select>
      </div>
      <div class="book-now__filters-select">
        <p class="book-now__filters-select-name">Choose number of people</p>
        <img src="@/assets/image/icons/user.svg" class="book-now__icon user" />
        <a-input
          :value="filters.participants"
          placeholder="Participants"
          :disabled="
            !selectService.id ||
            selectService.id === 4 ||
            selectService.id === 2
          "
          size="large"
          @change="handleChangeParticipants"
        />
      </div>
      <Button :color="'black'" :text="'reset'" :callback="handleReset" />
    </div>
    <div class="book-now__places">
      <p class="book-now__places-result">{{ result }} result</p>
      <div v-if="isFilterFull && result" class="book-now__list">
        <BookNowItem
          v-for="item of list"
          :key="item.id"
          :item="item"
          :select-item="selectItem"
        />
      </div>
      <div v-else-if="isFilterFull" class="book-now__empty-list">
        <p class="book-now__places-empty">
          Sorry, there are no results for your request. Try changing the
          location, or the date. Below are the options that may suit you, pay
          attention to <span style="color: #000">the date</span> and
          <span style="color: #000">the location</span>.
        </p>
        <div class="book-now__list book-now__list-near">
          <p class="book-now__list-near-text">The near future options</p>
          <BookNowItem
            v-for="item of list"
            :key="item.id"
            :item="item"
            :select-item="selectItem"
          />
        </div>
      </div>
      <p v-else class="book-now__places-empty">
        Please select the filters you need.
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/global/Button.vue";
import { Select, DatePicker, Input } from "ant-design-vue/lib";
import { mapActions } from "vuex";
import moment from "moment";
import helpers from "@/mixins/helpers";
import BookNowItem from "~/components/bookNow/BookNowItem.vue";

const DATES = {
  RANGE: "range",
  DAY: "day",
  MONTH: "month",
};

export default {
  components: {
    Button,
    BookNowItem,
    "a-select": Select,
    "a-input": Input,
    "a-select-option": Select.Option,
    "a-range-picker": DatePicker.RangePicker,
  },
  mixins: [helpers],
  props: {
    handleSelectItem: {
      type: Function,
      default: () => {},
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    showNotification: true,
    endOpen: false,
    pickerIsOpen: false,
    selectService: {},
    services: [],
    locations: [],
    result: 0,
    list: [],
    filters: {
      location_id: "Where",
      participants: "",
      dates: [null, null],
    },
  }),
  computed: {
    isFilterFull() {
      return (
        this.filters.location_id !== "Where" &&
        this.filters.participants !== "" &&
        this.filters.dates[0] &&
        this.filters.dates[1]
      );
    },
  },
  watch: {
    filters: {
      async handler(val) {
        if (this.isFilterFull) {
          const dateStart = this.filters.dates[0]
            ? this.filters.dates[0].hours(0).minutes(0).seconds(0).valueOf()
            : 0;

          const dateEnd = this.filters.dates[1]
            ? this.filters.dates[1].hours(23).minutes(59).seconds(59).valueOf()
            : Date.now();

          const data = await this.fetchFilteredList({
            ...val,
            service_id: this.selectService.id,
            date_start: `${dateStart}`.slice(0, -3),
            date_end: `${dateEnd}`.slice(0, -3),
          });

          if (!data) {
            return;
          }

          this.list = data.list;
          this.result = data.result;
        } else {
          this.list = [];
          this.result = 0;
        }
      },
      deep: true,
    },
  },
  async created() {
    const services = await this.fetchServices();
    this.services = services;

    if (this.$route.query.service) {
      const findedService = services.find(
        (service) => Number(service.id) === Number(this.$route.query.service)
      );
      if (findedService) {
        this.handleSelectService(findedService);
      }
    }
  },
  mounted() {
    if (this.data.filters) {
      this.filters = {
        ...this.data?.filters,
      };
      this.selectService = {
        ...this.data?.selectService,
      };
    }
  },
  methods: {
    handleShowNotification() {
      this.filters.participants = "";
      if (!this.showNotification) {
        return;
      }
      this.$notification.warning({
        message: "Attention",
        description:
          "You entered an invalid number. In this service the number of people is limited to 100.",
      });
      this.showNotification = false;
      setTimeout(() => {
        this.showNotification = true;
      }, 3000);
    },
    handleChangeParticipants(e) {
      const value = e.target.value.replace(/-\D/g);

      if (!value) {
        this.handleShowNotification();
        return;
      }
      const participants = Number(value);

      if (isNaN(participants) || participants < 1 || participants > 100) {
        this.handleShowNotification();
        return;
      }

      this.filters.participants = participants;
    },
    selectItem(item) {
      const data = {
        filters: this.filters,
        selectService: this.selectService,
      };
      this.handleSelectItem(item, data);
    },
    handleChangeDate(dates) {
      switch (this.selectService.count_dates) {
        case DATES.DAY:
          this.filters.dates = [dates[0], dates[0]];
          this.pickerIsOpen = false;
          break;

        case DATES.MONTH: {
          const dateEnd = dates[0].unix() + 29 * 24 * 60 * 60;

          const date = moment(dateEnd * 1000);

          this.filters.dates = [dates[0], date];
          this.pickerIsOpen = false;
          break;
        }

        default:
          this.filters.dates = dates;
          break;
      }
    },
    handleEndOpenChange(e) {
      this.pickerIsOpen = e;
    },
    handleReset() {
      this.filters = {
        location_id: "Where",
        participants: "",
        dates: [null, null],
      };
      this.list = [];
      this.result = 0;
    },
    callNotification(service) {
      let description = "";

      switch (service.count_dates) {
        case DATES.DAY:
          description = "This service is available only for one day";
          break;

        case DATES.MONTH:
          description = "This services is available on a monthly basis";
          break;

        default:
          return;
      }

      this.$notification.warning({
        message: "Attention",
        description,
      });
    },
    async handleSelectService(service) {
      if (this.selectService && this.selectService.id === service.id) {
        return;
      }
      this.callNotification(service);
      const [data] = await this.fetchSelectedService(service);
      this.locations = data.locations;
      this.selectService = data;
      this.handleReset();

      if (service.id === 4 || service.id === 2) {
        this.filters.participants = 1;
      }
    },
    ...mapActions({
      fetchServices: "fetchServices",
      fetchSelectedService: "fetchSelectedService",
      fetchFilteredList: "fetchFilteredList",
    }),
    disabledDate(current) {
      const currentDate = current.unix();
      const dateAfterYear =
        new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).getTime() / 1000;

      let disableDate = false;
      if (current) {
        disableDate = current < moment().endOf("day");
        disableDate = disableDate || currentDate > dateAfterYear;
      }

      const numberOfDay = current.day();
      let disableByWeekends = false;
      disableByWeekends = numberOfDay === 0 || numberOfDay === 6;

      return disableDate || disableByWeekends;
    },
  },
};
</script>
