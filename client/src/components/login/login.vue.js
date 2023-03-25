import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    login() {
      const path = 'http://localhost:5000/login';
      console.log('inside login function');
      console.log(this.input.username);
      console.log(this.input.password);
      if (this.input.username !== '' && this.input.password !== '') {
        axios.post(
          path,
          {
            username: this.input.username,
            password: this.input.password,
          },
          // config,
        )
          .then(
            (res) => {
              if (res.data === 'Logged') {
                console.log(res);
                this.$store.state.flag = 1;
                console.log(this.$store.state.flag);
                alert('logged in Successfully');
                this.$router.push('/');
                // console.log(this.input.username);
                this.input.username = '';
                this.input.password = '';
              } else if (res.data === 'Incorrect username/password!') {
                alert('Incorrect username/password!');
                this.$router.push('/login');
                this.input.username = '';
                this.input.password = '';
              }
            },
          )
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('Enter vaild details');
      }
    },
  },
};
