<template>
  <div :class="$style.root">
    <v-text-field
      :class="$style.text"
      v-model="text"
      placeholder="Jot down here"
      single-line
      hide-details
      v-on:keyup.enter="submit"
    />
    <v-btn :class="$style.btn" text class="" @click="submit">
      <v-icon color="blue">send</v-icon>
      Send
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'MessageInput',

    data() {
      return {
        text: ''
      }
    },

    methods: {
      submit() {
        this.$emit('submit', this.text)
        this.text = ''
      }
    }
  }
</script>

<style lang="scss" module>
.root {
  display: flex;
  width: 100%;
  position: relative;

  .text {
    width: 100%;
  }

  .btn {
    position: absolute;
    right: 0;
    top: 10px;

    & i {
      margin-right: 5px;
    }
  }
}
</style>