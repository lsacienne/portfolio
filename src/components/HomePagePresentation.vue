<template>
  <div class="presentation">
    <h1>Présentation</h1>
    <div class="body">
      <div class="avatar">
      <img src="@/assets/avatar.jpg" alt="My avatar picture" srcset="" class="item profile_pic">
      </div>
      <p class="item">
        Bonjour ! Je m'appelle Alexandre, je suis étudiant ingénieur en informatique à l'UTBM à Belfort. <br/>
        Je suis plutôt intéressé par tout ce qui touche au développement d'interface utilisateur mais également au développement de logiciel dans son ensemble.<br/>
        Vous pouvez retrouver mon travail et mes loisirs juste ci-dessous.
      </p>
    </div>
    <h1>Liens</h1>
    <div class="body col">
      <div class="link">
        <a href="http://github.com/lsacienne" class="img">
          <img src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="Logo de Github">
        </a>
        <a href="https://github.com/lsacienne">
          Mon profil Github
        </a>
        
      </div>
      <div class="link">
        <a href="http://www.linkedin.com/in/alexandre-viala-62963521b/">
          <img src="@/assets/linkedin.png" alt="Logo de linkedIn">
        </a>
        <a href="https://www.linkedin.com/in/alexandre-viala-62963521b/">
          Mon profil LinkedIn
        </a>
      </div>
    </div>
    
    

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
    font-family: Helvetica,cursive;
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
    width: 0;
  }

  .link {
    height: 3rem;
    margin-top:0.5rem;
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
</style>