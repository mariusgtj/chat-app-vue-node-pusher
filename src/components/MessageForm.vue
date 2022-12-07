<template>
  <div class="message-form">
   <span>@{{ user.username}}</span>
   <form 
    @submit.prevent="onSubmit"
    v-bind:class="{ running: sending }">
    <div 
     variant="danger"
     :show="hasError">
      {{ error }}
    </div>
    <div class="form-group">
      <input 
       type="text"
       id="message-input"
       v-model="message"
       placeholder="Enter Message"
       autocomplete="off"
       required>
    </div>
    <div class="clearfix">
     <button 
      type="submit"
      variant="primary">
       Send
     </button>
    </div>
   </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
 name: 'messageForm',
 data() {
  return {
   message: ''
  }
 },
 computed: {
  ...mapState([
   'user',
   'sending',
   'error',
   'activeRoom'
  ]),
  ...mapGetters([
   'hasError'
  ])
 }
}
</script>

<style>

</style>