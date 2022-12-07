<template>
  <div class="login__form">
   <h2 class="login__form-title">Chat Login</h2>
   <hr>

   <form @submit.prevent="onSubmit">
    <p :show="hasError">{{ error }}</p>

    <div id="userInputGroup">
     <label for="userInput">User Name</label>
     <br>
     <input 
      id="userInput" 
      type="text"  
      placeholder="Enter user name"
      v-model="userId"
      autocomplete="off"
      :disabled="loading"
      required
     >
    </div>

    <button 
     type="submit"
     class="login__form-button"
     v-bind:class="{ running: loading }"
     :disabled="isValid">
     Login
    </button>
   </form>
   
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
 name: 'login-form',
 data() {
  return {
   userId: '',
  }
 },
 computed: {
  isValid: function() {
   const result = this.userId.length < 3;
   return result ? result : this.loading
  },
  ...mapState([
   'loading',
   'error'
  ]),
  ...mapGetters([
   'hasError'
  ])
 }
}
</script>

<style lang="scss">

 .login__form {
  background-color: $secondaryLight;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $secondaryDark;

  input {
   margin: .5em 0;
  }

  .login__form-title {
   margin: 1.5em 0 .5em;
   color: $primaryDark;
  }

  .login__form-button {
   margin: .5em 0 1em;
  }
 }
</style>