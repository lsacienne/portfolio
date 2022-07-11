<template>
  <main>
    <h1>Bienvenue sur le portfolio de Alexandre Viala</h1>
    <WebsiteNavigation/>
  </main>
</template>

<script>
import WebsiteNavigation from "@/components/WebsiteNavigation";

export default {
  name: 'App',
  components: {
    WebsiteNavigation,
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
</style>
