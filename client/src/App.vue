<template>
  <!-- <div class="vue-tempalte"> -->
    <header>
      <nav class="navbar shadow rounded justify-content-between  fixed-topp hdb">
        <div class="container">
          <router-link class=" btn btn-outline-secondary" to="/">
            <fa icon="home-lg" />
          </router-link>
              <router-link class=" btn btn-outline-secondary"
          to="/asanas" v-on:click="asna()"
          style="margin-left: -50px;">Asanas
          </router-link>
              <router-link class=" btn btn-outline-secondary" to="/prana"
              v-on:click="pranayama()"
          style="margin-left: -50px;">Pranayamas & Meditation</router-link>

          <ul v-if="this.$store.state.flag == 0" class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="btn btn-outline-secondary"
              style="margin-left: -50px;" to="/login">
                <fa :icon="['fas', 'sign-in-alt']" />
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-secondary"
              to="/signup" style="margin-left: 7px;">
                <fa :icon="['fas', 'user']" /> Register
              </router-link>
            </li>
          </ul>
          <ul v-if="this.$store.state.flag == 1"
          class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <button class="btn btn-outline-secondary"
              v-on:click="signout()" style="margin-left: 7px;">
                <fa :icon="['fas', 'sign-out']" />
            </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- <div class="App"> -->
      <!-- <div> -->
      <router-view />
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    signout() {
      this.$store.state.flag = 0;
      alert('Logged out Successfully');
      this.$router.push('/');
    },
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
</script>

<style>

.hdb {
  background-color: rgb(249, 229, 229);
}
.fixed-topp {
    /* position: fixed; */
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}
</style>
