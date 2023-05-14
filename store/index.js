import axios from "axios";

const baseUrl = "https://apicabinet.dib.company/dib-profile";

export const state = () => ({
  showLoader: true,
  showPopUp: false,
  services: [],
  locations: [],
  quantity: 1,
  events: [
    {
      event: true,
      id: 0,
      title: "New Years Eve Gatsby Gala",
      quantity: true,
      description:
        "Come celebrate the New Year in our Mansion styled from the 1920’s",
      date: "Friday December 31st, 2021",
      time: "9:00pm – 12:30am",
      address: "70 Landmark Hill DR, Brattleboro VT",
      image: "1.webp",
      googleMap: "https://goo.gl/maps/bfwUZkDTKhjiCsL3A",
      slug: "new-years-eve-gatsby-gala",
      ticket: [
        {
          name: "Per ticket",
          price: "40",
        },
      ],
      markers: {
        lat: 42.87632053925372,
        lng: -72.55779738493906,
        label: "VIB - Brattleboro",
        id: "1",
      },
    },
  ],
  selectedTicket: {
    name: "Single Ticket",
    price: "40",
  },
  showFooter: true,
  currentLocation: {},
  locationsImage: {
    1: {
      images: ["vib/vib1.webp", "vib/vib2.webp", "vib/vib3.webp"],
    },
    2: {
      images: ["vib2/Flat3.webp", "vib2/Flat2.webp", "vib2/Flat1.webp"],
    },
    3: {
      images: ["vib3/vib1.webp", "vib3/vib2.webp", "vib3/vib4.webp"],
    },
  },
});

export const mutations = {
  setPopUp: (state, payload) => {
    state.showPopUp = payload;
  },
  setLoader: (state, payload) => {
    state.showLoader = payload;
  },
  setServices: (state, payload) => {
    state.services = payload;
  },
  setLocations: (state, payload) => {
    state.locations = payload;
  },
  setFooter: (state, payload) => {
    state.showFooter = payload;
  },
  setCurrentLocation: (state, payload) => {
    state.currentLocation = payload;
  },
  setTicket: (state, payload) => {
    state.selectedTicket = { ...payload };
  },
  setQuantity: (state, payload) => {
    state.quantity = payload;
  },
};

export const getters = {
  getEventName: (state) => (name) => {
    return state.events.find((e) => e.slug === name);
  },
};

export const actions = {
  handleChangeTicket: ({ commit }, payload) => {
    commit("setTicket", payload);
  },
  handleChangeQuantity: ({ commit }, payload) => {
    commit("setQuantity", payload);
  },
  handleLoader: ({ commit }, payload) => {
    commit("setLoader", payload);
  },
  handleFooter: ({ commit }, payload) => {
    commit("setFooter", payload);
  },
  async fetchServices({ commit, state }) {
    try {
      if (state.services && state.services.length) return state.services;

      const { data } = await this.$axios.$get(
        baseUrl + "services/get-services"
      );
      commit("setServices", data);
      return data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async fetchLocations({ commit, state }) {
    try {
      if (state.locations && state.locations.length) return state.locations;

      const { data } = await this.$axios.$get(
        baseUrl + "services/get-locations"
      );
      commit("setLocations", data);
      return data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async fetchSelectedService(_, service) {
    try {
      const { data } = await this.$axios.$get(
        baseUrl + "/services/get-services/" + service.id
      );
      return data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async fetchFilteredList(_, filters) {
    try {
      const formData = new FormData();

      for (const key in filters) {
        formData.append(key, filters[key]);
      }

      const { data } = await axios.post(
        baseUrl + "/services/check-available",
        formData
      );
      return data.data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async bookOrder(_, form) {
    try {
      const formData = new FormData();

      for (const key in form) {
        formData.append(key, form[key]);
      }

      const { data } = await axios.post(
        baseUrl + "/services/book-now",
        formData
      );
      return data.data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async bookEvent(_, form) {
    try {
      const formData = new FormData();

      for (const key in form) {
        formData.append(key, form[key]);
      }

      const { data } = await axios.post(
        baseUrl + "/services/order-event",
        formData
      );
      return data.data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async bookOrderForm(_, form) {
    try {
      const formWithStep = {
        ...form,
        step: 2,
        type_ticket: "Single Ticket",
      };
      const formData = new FormData();

      for (const key in formWithStep) {
        formData.append(key, formWithStep[key]);
      }
      const { data } = await axios.post(
        baseUrl + "/services/check-available",
        formData
      );
      return data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async fetchLocation({ state }, id) {
    try {
      if (!Number(id)) {
        return;
      }
      if (state.locations && state.locations.length) {
        return state.locations.find((location) => location.id === Number(id));
      }
      const { data } = await this.$axios.$get(
        baseUrl + "services/get-locations/" + id
      );
      return data[0];
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
  async postMessage(_, form) {
    try {
      const json = {
        fields: form,
        email: "",
        template: "vt-inbox",
      };
      const { data } = await this.$axios.post(
        "https://api.dib.company/contact.php",
        json
      );
      return data;
    } catch (error) {
      this.$notification.error({
        message: "Error",
        description: error.response.data.message || error.message,
      });
    }
  },
};
