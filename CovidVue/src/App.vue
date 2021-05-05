<template>
  <!-- <router-link to="/Home">Home</router-link>> -->
  <!--router-link to="/MyForm">MyForm</router-link-->
  <router-view />
  <my-Home/>
  <my-form/>
</template>

<script setup>

import Home from './views/Home.vue'
import MyForm from './views/MyForm.vue'


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
</style>
