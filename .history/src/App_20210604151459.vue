<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pokemon">About</router-link>
  </div>
  <router-view />
  <!-- <Home /> -->
</template>

<script>
// import Home from "../src/views/Home";
export default {
  name: App,
  // components: {
  //   Home,
  // },
};
</script>
<style>
#nav {
  padding: 30px;
  background-color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
