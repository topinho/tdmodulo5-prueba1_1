<template>
  <div id="app">
    <span><router-link to="/clientes-con-p" active-class="active" exact>Clientes Con P</router-link></span>
    <span><router-link to="/clientes-sin-p" active-class="active" exact>Clientes Sin P</router-link></span>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  background-color: #007AD9;
  color: white;
  font-weight: 600;
}
a {
  background-color: white;
  color: black;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
