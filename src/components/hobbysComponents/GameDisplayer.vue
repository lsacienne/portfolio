<template>
  <div class="game-container">
    <div v-for="project in games" :key="project.name" class="game-item-wrapper">
      <div class="game-item">
        <img
          :src="project.artwork_url"
          :alt="`${project.name} artwork`"
          class="game-artwork"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameDisplayer",
  data() {
    return {
      loading: true,
      gamesLink: "http://0.0.0.0:8080/steam/games",
      games: [],
    };
  },
  created() {
    this.getGames();
  },
  methods: {
    async fetchSteamApi() {
      this.loading = true;
      let response = await fetch(this.gamesLink);
      return response.json();
    },
    getGames() {
      this.fetchSteamApi().then((data) => {
        this.games = data;
        console.log(this.games);
        this.loading = false;
      });
    },
  },
};
</script>
<style scoped>
.game-container {
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  position: absolute;
  perspective: 100vw;
}

.game-item-wrapper {
  position: absolute;
  height: 92%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 15%;

  transition: all 0.3s;
}

.game-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65%;
  padding: 0.5rem;
  border-radius: 1.2rem;
  z-index: 1;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgb(19, 19, 19) 0%,
    rgba(43, 43, 43, 1) 100%
  );
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.5) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.7) 0px 30px 60px -30px;

  transition: all 0.3s;
}

.game-item-wrapper:nth-child(1) {
  transform: rotateY(0) translateZ(15rem);
}
.game-item-wrapper:nth-child(2) {
  transform: rotateY(50deg) translateZ(15rem);
}
.game-item-wrapper:nth-child(3) {
  transform: rotateY(144deg) translateZ(15rem);
}
.game-item-wrapper:nth-child(4) {
  transform: rotateY(216deg) translateZ(15rem);
}
.game-item-wrapper:nth-child(5) {
  transform: rotateY(310deg) translateZ(15rem);
}

/* Blur background games */
.game-item-wrapper:nth-child(3) .game-artwork {
  filter: blur(5px) brightness(50%);
}
.game-item-wrapper:nth-child(4) .game-artwork {
  filter: blur(5px) brightness(50%);
}

/* Delete box-shadow */
.game-item-wrapper:nth-child(n + 2) .game-item {
  box-shadow: none;
}

.game-artwork {
  height: 100%;
  border-radius: 0.7rem;

  transition: all 0.3s;
}
</style>
