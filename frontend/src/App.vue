<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="/" class="nav">Beats</router-link>
        <router-link to="/Contact" class="nav">Contact</router-link>
      </b-navbar-nav>
    </b-navbar>
    <br />
    <router-view />
  </div>
</template>

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
