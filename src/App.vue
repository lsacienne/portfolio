<template>
  <main>
    <h1>Bienvenue sur le portfolio de Alexandre Viala</h1>
    <WebsiteNavigation @option="(opt) => option = opt"/>
    <transition name="fade">
      <HomePage v-if="option == 'home'"/>
    </transition>
    <transition name="fade">
      <ProjectPage v-if="option == 'projects'"/>
    </transition>
  </main>
</template>

<script>
import HomePage from "@/components/HomePage";
import WebsiteNavigation from "@/components/WebsiteNavigation";
import ProjectPage from "./components/ProjectPage.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    WebsiteNavigation,
    ProjectPage
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity .5s;
  opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
