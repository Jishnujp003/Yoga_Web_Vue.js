<template>
  <div class= "box"  style="margin-top: 80px;">
    <div class="for">
      <h3>Forgot Password</h3>

      <div class="inputbox">
        <label for="email">
        <input type="email" v-model="input.email"
        placeholder="E mail"  /></label>
        <span></span>
          <i></i>
      </div>

      <div class="inputbox">
        <label for="pass1">Enter Password
          <input type="password"
           v-model="input.password1"
           placeholder="Enter Password" /></label>
            <span></span>
              <i></i>
      </div>

      <div class="inputbox">
        <label for="pass2">Re Enter Password
          <input type="text"
           v-model="input.password2"
           placeholder="Re-enter Password " /></label>
            <span></span>
                <i></i>
      </div>

      <button type="submit" class="btn btn-outline-success "
       v-on:click="forgetpassword()">Reset password</button>
    </div>
  </div>
</template>
<style src="./forgotpass.css"></style>
<script src="./pass.vue"></script>
