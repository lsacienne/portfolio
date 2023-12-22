<template>
  <div class="presentation">

    <div class="body">
      <div class="avatar">
        <img src="@/assets/avatar.webp" alt="My avatar picture" srcset="" class="item profile_pic">
      </div>
      <h1>Liens</h1>
      <div class="body col">
        <div class="link">
          <a href="http://www.linkedin.com/in/viala-alexandre/">
            <img src="@/assets/linkedin.png" alt="Logo de linkedIn">
          </a>
          <a href="https://www.linkedin.com/in/viala-alexandre/">
            Mon profil LinkedIn
          </a>
          <a href="http://github.com/lsacienne" class="img">
            <img src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="Logo de Github">
          </a>
          <a href="https://github.com/lsacienne">
            Mon profil Github
          </a>
        </div>
      </div>
    </div>

    <h1>A propos de moi</h1>
    <p class="item">
      Bonjour ! Je m'appelle Alexandre, et vous êtes actuellement sur la page d'accueil de mon por tfolio. <br />
      Ici, vous pourrez trouver aussi bien tous les projets importantqs que j'ai réalisé au cours de mon
      parcours... Mais vous trouverez également les choses que j'aime. <br />
      Il y a d'ailleurs une chose que j'aime par dessus tout : c'est les grenouilles 🐸. Ne vous étonnez pas
      d'en retrouver un peu partout sur ce site !<br />
    </p>



  </div>
</template>

<script>
export default {
  name: "HomePagePresentation"
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-family: Helvetica, cursive;
  color: whitesmoke;
}

.avatar {
  width: 50%;
}

.avatar>img {
  width: 100%;
}

.presentation {
  font-size: 1rem;
  text-align: justify;
}

.body {
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  line-height: 1.6;
  margin: 0.5rem;
}

.col {
  flex-direction: column;
}

.body .profile_pic {
  border: 0.3em solid whitesmoke;
  border-radius: 10px;
}

.body>.item {
  margin: 1rem;
  flex: 1 1 0;
  flex-wrap: wrap;

}

.link {
  height: 3rem;
  margin-top: 0.5rem;
  font-size: 1.3rem;
  font-weight: bolder;
  font-style: italic;
}


.link>a>img {
  height: 100%;
  vertical-align: middle;
  margin-right: 1rem;
}

.link>a>img:hover {
  filter: invert(35%) sepia(100%) saturate(774%) hue-rotate(176deg) brightness(90%) contrast(91%);
}

.link>a:visited {
  color: #42b983;
  text-decoration: none;
}

.link>a:hover {
  color: #1c78c0;
}

@media only screen and (max-width: 1100px) {
  .body {
    margin: unset;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }

  .body>.avatar {
    width: 80%;
    margin-top: 1rem;
    align-self: center;
  }

  .body>.item {
    width: 80%;
    align-self: center;
  }


}
</style>