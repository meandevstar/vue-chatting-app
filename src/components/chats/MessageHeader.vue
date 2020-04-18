<template>
  <div :class="$style.root" @click="editing = true">
    <v-text-field
      :class="$style.text"
      :disabled="!editing"
      v-model="name"
      @blur="editing = false"
      v-on:keyup.enter="submit"
      placeholder="Set Username"
      single-line
      hide-details
    />
    <v-btn
      fab
      text
      v-if="editing"
      :class="$style.btn"
      @click="submit"
    >
      <v-icon color="blue">check_circle</v-icon>
    </v-btn>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'MessageHeader',

    data() {
      return {
        name: '',
        editing: false
      }
    },

    computed: {
      ...mapState('auth', ['info'])
    },

    watch: {
      info: function(val) {
        this.name = val.name
      }
    },

    methods: {
      submit() {
        this.$emit('onNameChange', this.name)
      }
    },

    mounted() {
      if (this.info) {
        this.name = this.info.name
      }
    },
  }
</script>

<style lang="scss" module>
.root {
  display: flex;
  width: 100%;
  position: relative;

  .text {
    width: auto;
  }

  .btn {
    position: absolute;
    right: 0;
    top: 14px;
    width: 32px;
    height: 32px;
  }
}
</style>