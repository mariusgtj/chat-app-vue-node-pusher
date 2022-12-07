<template>
  <div class="user-list">
   <h4>Members</h4>
   <hr>
   <ul>
    <li
     v-for="user in users"
     :key="user.username"
    >
     {{ user.name }}
     <span 
      v-if="user.presence"
      :variant="statusColor(user.presence)"
     >{{ user.presence }}</span>
    </li>
   </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
 name: 'userList',
 computed: {
  ...mapState([
   'users',
   'loading'
  ])
 },
 methods: {
  statusColor(status) {
   return status === 'online' ? 'success' : 'warning'
  }
 }
}
</script>

<style lang="scss">
  .user-list ul {
    list-style: none;
  }
</style>