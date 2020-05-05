<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="/" class="nav">Home</router-link>
        <router-link to="/Contact" class="nav">Contact</router-link>
        <router-link to="/Beats" class="nav">Beats</router-link>
        <GoogleLogin
          :params="params"
          :renderParams="renderParams"
          :onSuccess="onSuccess"
          :onFailure="onFailure"
        ></GoogleLogin>
        <GoogleLogin
          :params="params"
          :logoutButton="true"
          class="btn btn-danger"
          >Logout</GoogleLogin
        >
      </b-navbar-nav>
    </b-navbar>
    <br />
    <router-view />
  </div>
</template>
<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "App",
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "951491493515-fj3umvhhdeo0p0ua93874qaarnrn82td"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      email: ""
    };
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      let profile = googleUser.getBasicProfile();
      // This only gets the user information: id, name, imageUrl and email
      console.log(profile.getEmail());
      this.email = profile.getEmail();
    },
    onFailure() {
      alert("Failed to login!");
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #418bc8;
  height: 100vh;
}

.nav {
  padding: 10px;
  font-weight: bold;
  color: #418bc8;
}
</style>
