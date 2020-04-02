<template>
  <div class="chat-root">
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{`${message.user} sent message: "${message.text}"`}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ChatsPage',

    components: {

    },

    data () {
      return  {

      }
    },

    computed: {
      ...mapState({
        messages: state => state.messages.data,
        users: state => state.users.data
      })
    }
  }
</script>

<style lang="scss">
  
</style>