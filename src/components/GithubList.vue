<template>
<div class="projectsHolder">
  <div v-for="project in fiveProjects" :key="project.id" class="projectsHolderItem">
    <a :href="project.html_url">
      <img src="../assets/GitHub-Mark-Light-120px-plus.png" alt="github logo"/>
    </a>
    <div class="name">
      <a :href="project.html_url">{{project.name}}</a>
    </div>
    <div class="date">Dernière modification: {{getGoodDateFormat(project.pushed_at)}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "GithubList",
  data() {
    return {
      repos: [],
      user: "lsacienne",
      week: new Map([
        [0, "Lun"],
        [1, "Mar"],
        [2, "Mer"],
        [3, "Jeu"],
        [4,"Ven"],
        [5,"Sam"],
        [6,"Dim"]
      ]),
      year: new Map([
        [0, "Jan"],
        [1, "Fev"],
        [2, "Mar"],
        [3, "Avr"],
        [4, "Mai"],
        [5, "Juin"],
        [6, "Juil"],
        [7, "Aou"],
        [8, "Sep"],
        [19, "Oct"],
        [10, "Nov"],
        [11, "Dec"]
      ])
    }
  },
  computed: {
    fiveProjects() {
      return this.repos.slice(0,5);
    }
  },
  methods: {
    getGoodDateFormat : function(date) {
      let dateDate = new Date(date);
      console.log(dateDate.getMonth()+" "+dateDate.getDay())
      return this.week.get(dateDate.getDay()) + " "
          + dateDate.getDate() + " "
          + this.year.get(dateDate.getMonth()) + " "
          + dateDate.getFullYear();
    },

    fetchGithubApi: async function() {
      let response = await fetch("https://api.github.com/users/" + this.user + "/repos");
      return response.json();
    },

    getRepos: function() {
      this.fetchGithubApi().then(
          data => {
            this.repos = data

            this.repos = this.repos.sort(function(a,b){
              return - (new Date(a.pushed_at) - new Date(b.pushed_at));
            })


          }
      )
    },
  },
  created() {
    this.getRepos()
  }
}
</script>

<style scoped>

.projectsHolder {
  display: flex;
  flex-flow: column nowrap;
  align-content: space-between;
}

.projectsHolderItem {
  display: flex;
  flex-flow: row wrap;
  margin: 1rem;

  padding: 1rem;
  border-radius: 30px;
  border: solid 0.3em whitesmoke;
  font-size: 2rem;list-style: none;
}


.projectsHolderItem .date {
  font-size: 0.8rem;
  text-align: end;
}
</style>