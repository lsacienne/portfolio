<template>
  <nav ref="options">
    <div class="navigation">
      <HamburgerMenu @toggle="(toggled) => toggleMenu(toggled)" ref="hamburger"></HamburgerMenu>
    </div>
    <ol v-on:click="$refs.hamburger.updateMenu()">
      <router-link class="li" to="/">{{ $t("nav.home") }}</router-link>
      <router-link class="li" to="/projects">{{ $t("nav.projects") }}</router-link>
      <router-link class="li" to="/hobbys">{{ $t("nav.hobbys") }}</router-link>
      <router-link class="li" to="/skills">{{ $t("nav.skills") }}</router-link>
    </ol>
  </nav>
</template>

<script>
import HamburgerMenu from './navigation/HamburgerMenu.vue';
export default {
  name: "WebsiteNavigation",
  components: { HamburgerMenu },
  methods: {
    toggleMenu: function (toggled) {
      console.log(toggled, this.$refs.options.right)
      if (toggled) {
        this.$refs.options.style.right = 0
      } else {
        this.$refs.options.style.right = "-70vw"
      }
    }
  }
}
</script>

<style scoped>
.navigation {
  display: none;
  background-color: rgba(91, 163, 100, 0.8);
  border-radius: 1rem;
}

ol {
  width: 100%;
  padding: 0;
  border-bottom: solid 2px whitesmoke;
  display: inline-flex;
  justify-content: space-between;
}

.li {
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

.li:hover {
  background: #35454f;
  flex-grow: 1.5;
}

@media only screen and (max-width: 1100px) {
  .navigation {
    display: block;
    align-self: flex-start;
  }

  nav {
    display: inline-flex;
    flex-direction: row;
    position: fixed;
    top: 1vh;
    right: -70vw;
    transition: all 300ms;
    z-index: 3000;
  }

  ol {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: none;
    width: 70vw;
    height: 99vh;
    border-radius: 10px;
    background: rgba(91, 163, 100, 0.8);
  }

  .li {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8%;
    flex-grow: unset;
  }

  .li:hover {
    flex-grow: unset;
  }


}
</style>