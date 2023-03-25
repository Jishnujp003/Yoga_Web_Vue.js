export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    asna() {
      if (this.$store.state.flag === 0) {
        alert('Please Log In...!');
        this.$router.push('/login');
      } else {
        this.$router.push('/asanas');
      }
    },
    pranayama() {
      if (this.$store.state.flag === 0) {
        alert('Please Log In...!');
        this.$router.push('/login');
      } else {
        this.$router.push('/prana');
      }
    },
  },
};
