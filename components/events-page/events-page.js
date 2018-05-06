import template from './events-page.vue';
import Datepicker from 'vuejs-datepicker'
import NoSSR from 'vue-no-ssr'


const events = {
  name: 'event-page',
  methods: {
  },
  components: {
    'no-ssr': NoSSR,
    'datepicker': Datepicker,
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
        comments: "",
      }
    }
  },
  ...template
};

export default events