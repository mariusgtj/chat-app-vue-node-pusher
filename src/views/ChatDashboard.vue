<template>
  <div class="chat-dashboard">
   <ChatNavBar />
   <div class="container" v-bind:class="{ running: loading }">
    <div class="row">
      <RoomList />
      <div class="">
        <MessageList />
        <MessageForm />
      </div>
      <UserList />
    </div>
   </div>
  </div>
</template>

<script>
import ChatNavBar from '@/components/ChatNavBar.vue'
import RoomList from '@/components/RoomList.vue'
import MessageList from '@/components/MessageList.vue'
import MessageForm from '@/components/MessageForm.vue'
import UserList from '@/components/UserList.vue'
import { mapState } from 'vuex'

export default {
 name: 'chatDashboard',
 components: {
  ChatNavBar,
  RoomList,
  MessageList,
  MessageForm,
  UserList
 },
 computed: {
  ...mapState([
   'loading'
  ])
 }
}
</script>

<style lang="scss">
  .chat-dashboard {
    padding: 1em;

    .row {
      display: flex;
      justify-content: space-around;
    }
  }
</style>