<template>
  <main>
    <h1>Bienvenue sur le portfolio de Alexandre Viala</h1>
    <WebsiteNavigation/>
    <HomePage/>
  </main>
</template>

<script>
import HomePage from "@/components/HomePage";
import WebsiteNavigation from "@/components/WebsiteNavigation";

export default {
  name: 'App',
  components: {
    HomePage,
    WebsiteNavigation
  }
}
</script>

<style>

@font-face {
  font-family: "SquarePeg";
  src: local("SquarePeg"),
  url(./fonts/SquarePeg-Regular.ttf) format("truetype");
}

main {
  margin-left: 20vw;
  margin-right: 20vw;
}

h1 {
  color: black;
  font-size: 2.5rem;
  font-family: "SquarePeg", Helvetica,serif;
  text-align: start;
}

html {
  background-image: url("./assets/background.jpeg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
