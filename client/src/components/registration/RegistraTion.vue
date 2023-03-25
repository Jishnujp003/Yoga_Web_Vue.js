<template>
  <div class= "box"  style="margin-top: 80px;">
      <div class="for">
      <h4>Sign Up</h4>

      <div class="inputbox">
        <label for="email">
          <input type="email" id="email"
          v-model="input.email"
            placeholder="E mail" /></label>
            <span></span>
                <i></i>
      </div>

      <div class="inputbox">
        <label for="username">
          <input type="text"
           v-model="input.username"
            placeholder="username" /></label>
            <span></span>
                <i></i>
      </div>

      <div class="inputbox">
        <label for="password">
          <input id="password" type="password"
           v-model="input.password"
            placeholder="Password" /></label>
            <span></span>
                <i></i>
      </div>

      <div class="inputbox">
        <label for="phone">
          <input id="phone"
           v-model="input.phone"
            placeholder="phone" /></label>
            <span></span>
                <i></i>
      </div>

      <div class="inputbox">
        <label for="country">
          <input id="country"
           v-model="input.country"
            placeholder="country" /></label>
            <span></span>
                <i></i>
      </div>
<!-- <p>global{{ this.loginFlag }}</p> -->
      <button class="btn btn-outline-info " type="submit"
      v-on:click="register()">Sign Up</button>
      <p class="forgot-password text-right" style= "margin-top:20px;color:lightseagreen;">
        Alreadyregistered...<fa :icon="['fas','coffee']" />
        <router-link :to="{ name: 'LogIn' }" class="link-info"
         style= "margin-left:20px;">Sign in?</router-link>
      </p>
  </div>
  </div>
</template>

<script src="./registration.vue.js"></script>

<style src="./register.css"></style>
