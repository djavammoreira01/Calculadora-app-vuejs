<template>
  <div id="app">
        <calculadora/>
  </div>
</template>

<script>

import Calculadora from './components/Calculadora/index';

export default {
  name: 'App',
  components: {
    Calculadora,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
  margin-left: 400px;
  width: 450px;
  background: blue;
  padding-top: 10px;
  border-radius: 10px;
  align-self: center;
  border: 2px solid rgb(12, 12, 12);
}
</style>
