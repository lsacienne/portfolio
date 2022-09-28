<template>
  <nav>
    <ol>
      <li @click="selectOption('home')">Accueil</li>
      <li @click="selectOption('projects')">Projets</li>
      <li @click="selectOption('origamis')">Origamis</li>
      <li @click="selectOption('apps')">Mes applications</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "WebsiteNavigation",
  emits:['option'],
  methods: {
    selectOption: function(option) {
      this.$emit('option',option)
    }
  }
}
</script>

<style scoped>
  ol {
    width: 100%;
    padding: 0;
    border-bottom: solid 2px whitesmoke;
    display: inline-flex;
    justify-content: space-between;
  }

  li {
    flex-grow: 1;
    list-style-type: none;
    margin: 0.2vw;
    padding: 10px;
    border-radius: 10px;
    color: whitesmoke;
    text-shadow: 2px 0 #2c3e50, -2px 0 #2c3e50, 0 2px #2c3e50, 0 -2px #2c3e50,
    1px 1px #2c3e50, -1px -1px #2c3e50, 1px -1px #2c3e50, -1px 1px #2c3e50;

    transition: all 300ms;
  }

  li:hover {
    background: #35454f;
    flex-grow: 1.5;
  }
</style>