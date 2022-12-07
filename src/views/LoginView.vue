<template>
  <div class="login">
   <header class="login-header">
    <h1>Vue.js Chat Application</h1>
    <p>Powered by <span> <a target="_blank" href="https://pusher.com/">Pusher</a></span></p>
   </header>
   <div class="container">
    <div class="row">
     <LoginForm />
    </div>
   </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
 name: 'loginForm',
 components: {
  LoginForm
 }
}
</script>

<style lang="scss">

 .login-header {
  background-color: $primary;
  color: $primaryLight;
  padding: 1em 2em;
 }
</style>