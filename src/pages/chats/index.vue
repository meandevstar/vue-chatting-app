<template>
  <div class="chat-root">
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{`${message.user.name} sent message: "${message.text}"`}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ChatsPage',

    components: {

    },

    data () {
      return  {

      }
    },

    computed: {
      ...mapGetters('messages', ['messages'])
    }
  }
</script>

<style lang="scss">
  
</style>