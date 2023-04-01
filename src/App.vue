<template>
  <main>
    <h1>Bienvenue sur le portfolio de Alexandre Viala</h1>
    <WebsiteNavigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
import WebsiteNavigation from "@/components/WebsiteNavigation";

export default {
  name: 'App',
  components: {
    WebsiteNavigation,
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
  font-family: "SquarePeg", Helvetica, serif;
  text-align: start;
}

html {
  background: url("@/assets/background.jpeg") fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
  opacity: 0;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity .5s;
  opacity: 0;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (max-width: 1100px) {
  main {
    margin-left: 2.5vw;
    margin-right: 2.5vw;
  }

  html,
  body {
    background-color: #42b983;
    background: url("@/assets/background.jpeg") center center fixed;
    background-repeat: no-repeat;
    min-height: -webkit-fill-available;
    height: 100vh;
  }
}
</style>
