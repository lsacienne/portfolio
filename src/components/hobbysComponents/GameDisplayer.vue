<template>
  <div class="game-container">
    <div class="game-displayer" ref="games" @click="extandSkills"></div>
  </div>
</template>
<script>
export default {
  name: "GameDisplayer",
  methods: {
    extandSkills: function () {
      if (
        !this.$refs.games.classList.contains("extanded") &&
        !this.$refs.games.classList.contains("shrinked")
      ) {
        this.$refs.games.classList.add("extanded");
      } else {
        this.$refs.games.classList.toggle("shrinked");
        this.$refs.games.classList.toggle("extanded");
      }
    },
  },
};
</script>
<style scoped>
.game-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-displayer {
  width: 20%;
  height: 20%;
  display: flex;

  border-radius: 1rem;
  border: solid 0.2rem rgb(179, 206, 176);
  background: url("@/assets/background_night.jpg");
  background-size: cover;
  box-shadow: rgb(179, 206, 176) 0 0 8px 8px;
}

.extanded {
  width: 95%;
  height: 95%;
  animation: extandGames 2s;
}

.shrinked {
  animation: shrinkGames 2s;
}

@keyframes shrinkGames {
  0% {
    width: 95%;
    height: 95%;
  }

  20% {
    width: 8%;
    height: 95%;
  }

  100% {
    width: 20%;
    height: 20%;
  }
}

@keyframes extandGames {
  0% {
    width: 20%;
    height: 20%;
  }

  20% {
    width: 6%;
    height: 6%;
  }

  40% {
    width: 6%;
    height: 6%;
  }

  100% {
    width: 95%;
    height: 95%;
  }
}
</style>
