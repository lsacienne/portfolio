<template>
  <div>
    <div class="widgets-container">
      <div class="home-page-item name">
        <div class="text-container">
          <div class="smaller">Bonjour, nous sommes le</div>
          {{ date }}
        </div>
      </div>
      <div class="home-page-item time">
        {{ time }}
      </div>
      <div class="home-page-item github">
        <h1>Github :</h1>
        <GithubList />
      </div>
      <div class="home-page-item presentation">
        <HomePagePresentation />
      </div>
    </div>
  </div>
</template>

<script>
import GithubList from "@/components/GithubList.vue";
import DateConst from "@/assets/js/DateConst.js";
import HomePagePresentation from "@/components/HomePagePresentation.vue";
export default {
  name: "HomePageView",
  components: { HomePagePresentation, GithubList },
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      date: this.getGoodDateFormat(new Date()),
    };
  },
  created() {
    setInterval(this.getTime, 1000);
  },

  methods: {
    getTime: function () {
      let cur_date = new Date();
      this.time = cur_date.toLocaleTimeString();
      this.date = this.getGoodDateFormat(cur_date);
    },
    getGoodDateFormat: function (date) {
      return (
        DateConst.week.get(date.getDay()) +
        " " +
        date.getDate() +
        " " +
        DateConst.year.get(date.getMonth()) +
        " " +
        date.getFullYear()
      );
    },
  },
};
</script>

<style scoped>
.widgets-container {
  width: 100%;
  display: grid;
  grid-template:
    "a a a a b b" auto
    "c c c d d d" auto
    "c c c d d d" auto
    "c c c d d d" / 1fr 1fr 1fr 1fr 1fr 1fr;
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
  grid-area: a;
}

.time {
  grid-area: b;
}

.github {
  grid-area: c;
}

.presentation {
  grid-area: d;
}

.text-container {
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.github h1 {
  font-size: 2rem;
  font-family: Helvetica, cursive;
  color: whitesmoke;
}

.github {
  flex: fit-content;
  align-items: normal;
  justify-content: flex-start;
  flex-direction: column;
  text-align: start;
  flex-grow: 5;
}

.presentation {
  flex: min-content;
  flex-grow: 20;
  align-items: start;
}

@media only screen and (max-width: 700px) {
  .widgets-container {
    grid-template:
      "a" auto
      "d" auto
      "c" auto
      "b" auto;
  }

  .home-page-item {
    margin: unset;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .text-container > .smaller {
    font-size: 1.5rem;
  }
}
</style>
