<template>
  <div class="thumbnail-container">
    <a class="github" :href="projectRepo">
      <img src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="logo Github" />
      <p>
        {{ getProjectName(projectRepo) }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectThumbnail",
  props: {
    projectRepo: {
      type: String,
      required: true,
    },
  },
  methods: {
    /**
     * @decription Method to get a project name from a github URL
     * @param {String} url - The url to scan
     * @return {String} The name of the project
     */
    getProjectName: function (url) {
      return url.split("/").at(-1).split("_").join(" ");
    },
  },
};
</script>

<style scoped>
.github {
  text-align: start;
  font-size: 1vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-flex;
  border: 0.15rem solid whitesmoke;
  border-radius: 2rem;
  padding: 0.3rem;
  padding-right: 0.5rem;
  gap: 0.3rem;
  align-items: center;
}

a:link {
  color: #42b983;
  text-decoration: none;
}

a:visited {
  color: #6ba4b6;
  text-decoration: none;
}

.github:hover {
  background-color: rgb(255, 228, 196, 10%);
}

.github > img {
  height: 1.5rem;
}

@media only screen and (max-width: 1100px) {
  .github {
    font-size: 6vw;
  }
}
</style>
