<template>
  <div class="projectsHolder centered" v-if="loading">
    <SemipolarSpinner />
  </div>
  <div class="projectsHolder" v-else>
    <div
      v-for="project in fiveProjects"
      :key="project.id"
      class="projectsHolderItem"
    >
      <a :href="project.html_url" class="githubLogo">
        <img src="../assets/GitHub-Mark-Light.svg" alt="github logo" />
      </a>
      <div class="name">
        <a :href="project.html_url">{{ project.name.split("_").join(" ") }}</a>
      </div>
      <div class="date">
        Dernière modification: <br />
        {{ getGoodDateFormat(project.pushed_at) }}
      </div>
    </div>
  </div>
</template>

<script>
import DateConst from "@/assets/js/DateConst";
import SemipolarSpinner from "@/components/SemipolarSpinner.vue";

export default {
  name: "GithubList",
  components: { SemipolarSpinner },
  data() {
    return {
      repos: [],
      user: "lsacienne",
      loading: false,
    };
  },
  computed: {
    fiveProjects() {
      return this.repos.slice(0, 5);
    },
  },
  methods: {
    getGoodDateFormat: function (date) {
      let dateDate = new Date(date);
      return (
        DateConst.week_short.get(dateDate.getDay()) +
        " " +
        dateDate.getDate() +
        " " +
        DateConst.year_short.get(dateDate.getMonth()) +
        " " +
        dateDate.getFullYear()
      );
    },

    fetchGithubApi: async function () {
      this.loading = true;
      let response = await fetch(
        "https://api.github.com/users/" + this.user + "/repos",
      );
      return response.json();
    },

    getRepos: function () {
      this.fetchGithubApi().then((data) => {
        this.loading = false;
        this.repos = data;

        this.repos = this.repos.sort(function (a, b) {
          return -(new Date(a.pushed_at) - new Date(b.pushed_at));
        });
      });
    },
  },
  created() {
    this.getRepos();
    setInterval(this.getRepos, 60 * 60 * 1000);
  },
};
</script>

<style scoped>
.projectsHolder {
  display: flex;
  flex-direction: column;
}

.projectsHolderItem {
  display: flex;
  align-items: center;
  margin: 0.5rem;
  justify-content: space-between;

  background: #161b22;
  padding: 0.5rem;
  border-radius: 20px;
  border: solid 0.1em whitesmoke;
  font-size: 2rem;
  list-style: none;
}

.githubLogo {
  height: 100%;
}

.githubLogo img:hover {
  filter: invert(35%) sepia(100%) saturate(774%) hue-rotate(176deg)
    brightness(90%) contrast(91%);
}

.name a:link {
  color: whitesmoke;
  text-decoration: none;
}

.name a:visited {
  color: #42b983;
  text-decoration: none;
}

.name a:hover {
  color: #1c78c0;
}

.name {
  font-size: 1.5rem;
}

.date {
  flex-flow: row;
  font-size: 0.8rem;
  text-align: end;
  align-self: flex-end;
}

.centered {
  align-self: center;
}

@media only screen and (max-width: 1100px) {
  a {
    font-size: 1rem;
  }

  .name {
    margin-left: 1rem;
  }
}
</style>
