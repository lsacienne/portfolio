<template>
  <div class="presentation">
    <div class="body">
      <img
        src="@/assets/avatar.webp"
        alt="My avatar picture"
        srcset=""
        class="profile_pic"
      />
      <article class="networks">
        <span class="name"> Alexandre Viala </span>
        <div class="link">
          <a href="http://www.linkedin.com/in/viala-alexandre/">
            <img
              src="@/assets/social_media_logos/logo_linkedin.svg"
              alt="Mon compte LinkedIn"
            />
          </a>
          <a href="http://github.com/lsacienne" class="img">
            <img
              src="@/assets/social_media_logos/logo_github.svg"
              alt="Mon compte Github"
            />
          </a>
        </div>
      </article>
    </div>
    <div class="body col">
      <article>
        <h1>A propos de moi</h1>
        <p class="item">
          Bonjour ! Je m'appelle Alexandre, et vous êtes actuellement sur la
          page d'accueil de mon portfolio. <br />
          Ici, vous pourrez trouver aussi bien tous les projets importantqs que
          j'ai réalisé au cours de mon parcours... Mais vous trouverez également
          les choses que j'aime. <br />
          Il y a d'ailleurs une chose que j'aime par dessus tout : c'est les
          grenouilles 🐸. Ne vous étonnez pas d'en retrouver un peu partout sur
          ce site !<br />
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePagePresentation",
};
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

.name {
  font-size: 4rem;
  font-family: "RobotoCondensed", Helvetica, sans-serif;
  color: #00a78d;
  font-weight: bold;
  line-height: 4rem;
}

.presentation {
  font-size: 1rem;
  text-align: justify;
}

.body {
  font-size: 1rem;
  display: inline-flex;
  gap: 1rem;
  line-height: 1.6;
  margin: 0.5rem;
}

.col {
  flex-direction: column;
}

.body .profile_pic {
  border: 0.3em solid whitesmoke;
  border-radius: 10px;
  width: 40%;
}

.body > .item {
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

.link > a > img {
  height: 100%;
  vertical-align: middle;
  margin-right: 1rem;
}

.link > a > img:hover {
  filter: brightness(0) saturate(100%) invert(47%) sepia(83%) saturate(2203%)
    hue-rotate(139deg) brightness(89%) contrast(101%);
}

article.networks {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

article > h1 {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 1100px) {
  .body {
    margin: unset;
    margin-bottom: 1rem;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }

  .body .profile_pic {
    align-self: center;
    width: 80%;
  }

  .body > .item {
    width: 80%;
    align-self: center;
  }
}
</style>
