<template>
  <div class="container">
    <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p>
        <i>To login, use <b>demo</b> as email and <b>demo</b> as password.</i>
      </p>
      <p>Email: <input v-model="formEmail" type="text" name="email" /></p>
      <p>
        Password:
        <input v-model="formPassword" type="password" name="password" />
      </p>
      <button @click.prevent="login" type="submit">
        Login
      </button>
      <a href="/auth/facebook">
        Login With Facebook
      </a>
      <a href="/auth/twitter">
        Login With Twitter
      </a>
      <a href="/auth/google">
        Login With Google
      </a>
      <a href="/auth/github">
        Login With GitHub
      </a>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.email }}!
      <pre>
I am the secret content, I am shown only when the user is connected.</pre
      >
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p>
      <NuxtLink to="/secret">
        Super secret page
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          email: this.formEmail,
          password: this.formPassword
        })
        this.formEmail = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
