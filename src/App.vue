<template>
  <div id="app">
  <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  }
}
</script>

<style>
body{
background-color: #161843;
}
h1,p{
  color: antiquewhite
}
</style>
