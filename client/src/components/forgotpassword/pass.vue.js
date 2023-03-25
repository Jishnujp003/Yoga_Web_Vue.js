import axios from 'axios';

export default {
  name: 'ForgotPassword',
  data() {
    return {
      input: {
        email: '',
        password1: '',
        password2: '',
      },
    };
  },
  // Custom style for main and input for make the page responsive:

  methods: {
    forgetpassword() {
      const path = 'http://localhost:5000/forgotpassword';
      console.log('inside function');
      console.log(this.input.email);
      console.log(this.input.password1);
      console.log(this.input.password2);
      if (this.input.email !== '' && this.input.password1 !== '' && this.input.password2 !== '') {
        axios.post(
          path,
          {
            email: this.input.email,
            password1: this.input.password1,
            password2: this.input.password2,
          },
          // config,
        )
          .then(
            (res) => {
              console.log('res');
              if (res.data === 'changed..!') {
                alert('Password Changed...!');
                this.$router.push('/login');
                this.input.email = '';
                this.input.password1 = '';
                this.input.password2 = '';
              } else if (res.data === 'incorrect') {
                alert('Enter Valid Email');
                this.input.email = '';
                this.input.password1 = '';
                this.input.password2 = '';
                this.$router.push('/forgotpassword');
              }
              // app.hideModal('my-modal');
              // app.getRecords();
            },
          )
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('Enter the Details');
      }
    },
  },
};
