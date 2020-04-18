<template>
  <div v-if="data && data.sender" :class="$style.root">
    <div :class="`${$style.avatar} ${data.isMe ? $style.me : '' }`">
      {{data.sender.name.toUpperCase().substr(0, 2)}}
      <i :class="$style[data.sender.status.toLowerCase()]"/>
    </div>
    <div :class="$style.message">
      <span :class="$style.name">{{data.sender.name}}</span>
      <span :class="$style.timestamp">{{new Date(data.timestamp).toLocaleString()}}</span>
      <p>{{data.text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: ['data'],

    mounted() {
      console.log(this.data)
    }
  }
</script>

<style lang="scss" module>
.root {
  display: flex;
  max-width: 80%;
  min-height: 30px;
  padding: 5px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: grey;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &.me {
      background: #e6b324;
    }

    i {
      border: 1px solid #5a4a4a;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;

      &.online {
        background: #64f707;
        border-color: #fff;
      }
    }
  }

  .message {
    padding: 0 10px;

    .name {
      font-size: 16px;
      font-weight: bold;
      margin-right: 8px;
    }
    .timestamp {
      margin-bottom: 5px;
      font-size: 12px;
    }
  }
}
</style>