<template>
  <div :class="$style.root">
    <div :class="$style.logoutWrapper">
      <v-btn text large @click="logout">Sign Out</v-btn>
    </div>
    <div :class="$style.headerContainer">
      <message-header @onNameChange="setName" />
    </div>
    <v-divider />
    <div :class="$style.messageContainer">
      <message v-for="message in messages" :key="message._id" :data="message" />
    </div>
    <v-divider />
    <div :class="$style.inputContainer">
      <message-input @submit="sendMessage" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Message from '@/components/chats/Message'
  import MessageInput from '@/components/chats/MessageInput'
  import MessageHeader from '@/components/chats/MessageHeader'

  export default {
    name: 'ChatsPage',

    components: {
      Message,
      MessageInput,
      MessageHeader
    },

    computed: {
      ...mapGetters('messages', ['messages']),
    },

    methods: {
      ...mapActions('messages', ['sendMessage']),
      ...mapActions('users', ['setName']),
      ...mapActions('auth', ['logout'])
    },

    mounted() {
      this.$store.dispatch('users/getUsers')
      this.$store.dispatch('messages/getMessages')
    }
  }
</script>

<style lang="scss" module>
  .root {
    max-width: 768px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    padding: 40px 0;

    .logoutWrapper {
      text-align: right;
    }

    .headerContainer {
      width: 100%;
    }

    .messageContainer {
      height: calc(100% - 140px);
      padding: 40px 20px;
    }

    .inputContainer {
      width: 100%;
      height: 40px;
    }
  }
</style>