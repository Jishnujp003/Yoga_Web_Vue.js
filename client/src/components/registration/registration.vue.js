import axios from 'axios';

export default {
  name: 'RegistraTion',
  data() {
    return {
      input: {
        username: '',
        password: '',
        email: '',
        phone: '',
        country: '',
      },
    };
  },
  methods: {
    // login() {
    // const path = 'http://localhost:5000/login';
    // },
    register() {
      const path = 'http://localhost:5000/signup';
      // console.log('inside login function');
      // console.log(this.input.username);
      if (this.input.username !== '' && this.input.password !== '') {
        axios.post(
          path,
          {
            username: this.input.username,
            password: this.input.password,
            email: this.input.email,
            phone: this.input.phone,
            country: this.input.country,
          },
          // config,
        )
          .then(
            (res) => {
              if (res.data === 'already exist') {
                alert('user already exist');
                this.$router.push('/signup');
                this.input.username = '';
                this.input.password = '';
                this.input.email = '';
                this.input.phone = '';
                this.input.country = '';
              } else {
                alert('New record Successfully added');
                this.$router.push('/login');
                this.input.username = '';
                this.input.password = '';
                this.input.email = '';
                this.input.phone = '';
                this.input.country = '';
              }
            },
          )
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('Enter Valid Details');
      }
    },
  },
  // setup() {
  //   return {
  //     PopUp,
  //   };
  // },
};
