<template>
    <div class= "box"  style="margin-top: 80px;">
      <div class="for">
            <h2>Sign In</h2>

            <div class="inputbox">
                <label for="username" >
                <input type="text" required="required"
                v-model="input.username" placeholder="username"/></label>
                <span></span>
                <i></i>
            </div>

            <div class="inputbox">
                <label for="password" >
                <input type="text" required="required"
                v-model="input.password" placeholder="password"/></label>
                <span></span>
                <i></i>
            </div>

            <button type="submit" class="btn btn-outline-info "
             v-on:click="login()">Log In</button>

            <p style="margin-top: 20px;">
              <i></i>
                <router-link to="/forgotpassword"
                 style= "color: #45f3ff;">Forgot password ?</router-link>
            </p>

      </div>
    </div>
</template>

<script src="./login.vue.js"></script>

<style src="./login.css"></style>
