<template>
    <router-view />
    <!--<router-link to='/'>Home</router-link>
    <router-link to='/form'>Form</router-link>
    <router-view />-->
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style>
/*importing Anton font*/
@import url('//fonts.googleapis.com/css?family=Anton');

#app {
  font-family: 'Anton', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
