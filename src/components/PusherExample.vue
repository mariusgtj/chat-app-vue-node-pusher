<template>
  <div class="container">

    <div> Push button to increment the counter: {{ count }}</div>
    <button type="submit" @click="handleCount">Push</button>

    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" >
      <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <form @submit.prevent="handleUsername">
          <input 
            class="fs-5 fw-semibold" 
            type="text"
            v-model="newUser"
            placeholder="Enter user name">
          <button type="submit">Update Username</button>
        </form>
      </div>
      <div>User: {{ newUser }}</div>

      <!-- <div class="list-group list-group-flush border-bottom scrollarea">
        <div 
          class="list-group-item list-group-item-action py-3 lh-sm"
          v-for="message in messages"
          :key="message">
          <div class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">{{ message.username }}</strong>
          </div>
          <div class="col-10 mb-1 small">{{ message.message }}</div>
        </div>
      </div> -->

    </div>

    <!-- <form @submit.prevent="submit">
      <input 
        type="text" 
        class="form-control"
        placeholder="Write message"
        v-model="message">
    </form> -->

  </div>
</template>

<script>

// !!! *** ATTENTION:
/*Explanation - Pusher: on submit, we trigger the event to pusher (and send message to pusher). Then, by onMounted method, we retrieve messages from pusher and show them in template (with v-for loop in messages array). */
// !!! ***

// import {ref, onMounted} from 'vue';  // --> using "ref" hook
// import { mapState, mapActions, mapMutations } from 'vuex'
import { mapState, mapActions } from 'vuex' // in case of mutating state of username, bsc we used 'dispatch' for "username", we did not need to import mapMutation and mapActions

// import Pusher from 'pusher-js';

/**
 * Explanations:
 * in order to use v-model in the input form of username, we returned data (as data(){...}), with an initial value;
 * we brought the State into Component:
 * we added mapMutations and mapActions, as needed;
 * we also used dispatch() to trigger actions;
 * This way we explored the use of mapMutations, mapActionas ant dispatch;
 * Be aware of how to use v-model and "this" key-word!
 */
export default {
  name: 'pusherExample',

  data () {
    return {
      newUser: ''
    }
  },

  computed: {
    ...mapState([
      'count',
      'user'
    ]),
  },

  methods: {
    // ...mapMutations([
    //   'UPDATE_USERNAME'
    // ]), 
    ...mapActions([
      'increment_count',
      // 'update_username'
    ]),
    handleCount () {
      this.increment_count()
      // console.log('count value is: ', this.count) //ok
    },
    handleUsername () {
      // verify the initial value of "user"
      console.log('initial this.user is:', this.user)
      
      // Solution #1 --> using directly mutations
      // this.$store.commit('UPDATE_USERNAME', this.newUser)

      // Solution #2 --> using actions
      // this.update_username(this.newUser)

      this.$store.dispatch('update_username', this.newUser)

      // verify if state.user had mutate
      console.log(this.$store.state.user)

      // clear input
      this.newUser = ''
    },

    // submit: async () => {
      // Pusher.logToConsole = true;

      // const pusher = new Pusher('957e9dc4041b3817ed2f', {
      //   cluster: 'eu'
      // });

      // const channel = pusher.subscribe('channel');
      // channel.bind('message', (data) => {
      //   this.messages.push(data);
      //   console.log(data)
      // });
      
      // const usrn = 'John';
      
      // await fetch('http://localhost:5000/messages', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //     username: usrn,
      //     message: this.message
      //   })
      // })
    // }

  },

  // setup() {
  //   const username = ref('username');
  //   const messages = ref([]);
  //   let message = ref('');

  //   onMounted(() => {
      // Pusher.logToConsole = true;

      // const pusher = new Pusher('957e9dc4041b3817ed2f', {
      //   cluster: 'eu'
      // });

      // const channel = pusher.subscribe('channel');
      // channel.bind('message', (data) => {
      //   messages.value.push(data);
      // });
  //   })

  //   const submit = async () => {
  //     // send the event in the submit function
  //     // we take username and message from inputs and send them to backend as app.post('/messages)
  //     await fetch('http://localhost:5000/messages', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         username: username.value,
  //         message: message.value
  //       })
  //     })

  //     message.value = '';
  //   }

  //   return {
  //     username,
  //     messages,
  //     message,
  //     submit, 
  //   }
  // }
  
}
</script>

<style>
  .scrollarea {
    min-height: 250px;
  }
</style>