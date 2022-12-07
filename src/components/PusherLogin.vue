<template>
  <div class="container">
    <h1>This is the Login Page</h1>
      <form class="pure-form" id="user-form">
        <div class="signup-form">
            <div class="left-side">
                <div class="row">
                    <input type="text" required placeholder="enter a username or displayname" id="display_name">
                </div>
                <div class="row">
                    <textarea placeholder="enter initial status text" required id="initial_status" rows="3"></textarea>
                </div>
            </div>
            <div class="right-side">
                <button 
                    type="submit" 
                    @click="handleLogin"
                    class="button-secondary pure-button" >Signup/Login</button>
            </div>
        </div>
      </form>

  </div>
</template>

<script>

// import {ref, onMounted} from 'vue';
// import Pusher from 'pusher-js';

export default {
  name: 'pusherLogin',
  setup() {

    const handleLogin = () => {
      alert("Loging in...")
    }

    return {
      handleLogin
    }
  }
  
}
</script>

<style>

</style>