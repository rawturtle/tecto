import template from './events-page.vue';

const events = {
  name: 'event-page',
  methods: {
  },
  data() {
    return {
      state: {
        name: "",
        email: "",
        phone: "",
        date: new Date(),
        timeTo: "",
        timeFrom: "",
      }
    }
  },
  ...template
};

export default events