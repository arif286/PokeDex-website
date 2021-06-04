<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pokemon">Pokemon</router-link>
  </div>
  <router-view />
</template>

<style>
#nav {
  padding: 30px;
  background-color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #42b983;
}
</style>
