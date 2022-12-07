<template>
  <div class="room-list">
   <h4>Channels</h4>
   <hr>
   <ul v-if="activeRoom">
    <li
     v-for="room in rooms"
     :key="room.name"
     :active="activeRoom.id === room.id"
     href="#"
     @click="onChange(room)"
    >
     # {{ room.name }}
    </li>
   </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
 name: 'roomList',
 computed: {
  ...mapState([
   'rooms',
   'activeRoom'
  ]),
 }
}
</script>

<style lang="scss">
  .room-list ul {
    list-style: none;
  }
</style>