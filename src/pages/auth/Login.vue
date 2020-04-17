<template>
  <v-container>
    <v-layout align-center justify-center :class="$style.formWrapper">
      <v-flex class="grey lighten-4">
        <v-container class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>

            <v-form v-model="valid" @submit="submit">
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="pwRules"
                required
              ></v-text-field>
              <v-card-actions>
                <v-btn
                  primary text large block
                  type="submit"
                  :disabled="!valid"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /*eslint-disable no-useless-escape*/
  import { mapActions } from 'vuex'

  export default {
    name: 'LoginPage',

    data () {
      return { 
        valid: false,
        email: '',
        password: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            || 'E-mail must be valid'
        ],
        pwRules: [
          (v) => !!v || 'Password is required',
          (v) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v)
            || '8 Charactors, one uppercase, one number'
        ],
      }
    },

    methods: {
      ...mapActions('auth', ['login']),

      submit(e) {
        e.preventDefault()
        
        const payload = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('auth/login', payload)
      }
    },
  }
</script>

<style lang="scss" module>
  .formWrapper {
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>