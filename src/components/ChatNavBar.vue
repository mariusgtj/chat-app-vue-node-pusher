<template>
 <nav id="chat-navbar">
  <a href="#">Vue Chat</a>
  <div class="nav">
   <p class="nav-text">{{ user.name }} | <a href="#" active>Logout</a></p>
  </div>
 </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
 name: 'chatNavBar',
 computed: {
  ...mapState([
   'user'
  ])
 }
}
</script>

<style lang="scss">
 #chat-navbar {
  margin-bottom: 1em;
  padding: .25em;
  background-color: $primaryDark;
  color: $secondaryLight;
  display: flex;

  .nav {
    margin-left: auto;
  }
  a {
    color: $secondaryLight;
  }
 }
</style>