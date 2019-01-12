<template>
  <div id="app" class="container-fluid">
    <div class="jumbotron jumbotron-fluid">
      <h1 class="display-4 text-white">Personajes de Game Of Thrones</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.jumbotron{
	background-image: url('./assets/banner.jpg');
	background-size: cover;
	background-repeat: no-repeat;
} 
</style>
