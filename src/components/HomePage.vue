<template>
  <div class="home-page-container">
    <div class="widgets-container">
      <div class="home-page-item name">
        <div class="text-container">
          <div class="smaller">
            Bonjour, Je suis
          </div>
          Alexandre
        </div>
      </div>
      <div class="home-page-item time">
        {{ time }}
      </div>
    </div>
    <div class="widgets-container">
      <div class="home-page-item github">
        <h1>Github :</h1>
        <GithubList/>
      </div>
      <div class="home-page-item presentation">
        <HomePagePresentation/>
      </div>
    </div>
  </div>
</template>

<script>
import GithubList from "@/components/GithubList";
import HomePagePresentation from "@/components/HomePagePresentation";
export default {
  name: "HomePage",
  components: {HomePagePresentation, GithubList},
  data() {
    return {
      time: ""
    }
  },
  created() {
    setInterval(this.getTime, 1000);
  },

  methods: {
    getTime: function() {
      let date = new Date();
      this.time = date.toLocaleTimeString();
    }
  }
}
</script>

<style scoped>

.home-page-container {
  width: 100%;
  height: 30vh;
  display: flex;
  flex-flow: row wrap;
}

.home-page-item {
  flex: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
  border-radius: 20px;
  font-size: 4rem;
  padding: 1rem;
  margin: 1rem;
}

.smaller {
  font-size: 1.8rem;
}
.name {
  flex-grow: 5;
}

.text-container {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.github {
  align-items: normal;
  justify-content: flex-start;
  flex-direction: column;
  text-align: start;
}
</style>