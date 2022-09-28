<template>
  <main>
    <h1>Bienvenue sur le portfolio de Alexandre Viala</h1>
    <WebsiteNavigation @option="(opt) => option = opt"/>
      <HomePage v-if="option == 'home'"/>
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
  },
  data() {
    return {
      option: 'home'
    }
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
  margin-left: 15vw;
  margin-right: 15vw;
}

main>h1 {
  color: black;
  font-size: 2.5rem;
  font-family: "SquarePeg", Helvetica,serif;
  text-align: start;
}

html {
  background: url("./assets/background.jpeg") fixed;
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
