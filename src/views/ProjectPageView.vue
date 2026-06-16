<template>
  <div class="project-page-container">
    <div class="project-container">
      <DevProject
        project_title="Jumeau numérique de la ferme de Badevel"
        url_github="https://github.com/la-ferme-en-folie/MV50"
        picture="./project_icons/la-ferme-en-folie-icon.webp"
        :element_list="[
          {
            file_url:
              './projects_reports/Rapport_mv50_Trombini-Caillier-Renaud-Crouts_de_Paille-Viala.pdf',
            file_name: 'Rapport MV50',
            type: 'doc',
          },
          {
            file_url:
              './projects_reports/Soutenance-MV50-Crouts_De_Paille-Renaud-Caillier-Trombini-Viala.pdf',
            file_name: 'Soutenance MV50',
            type: 'doc',
          },
          {
            file_url:
              './projects_reports/doc_jumeau_numerique_ferme_badevel.pdf',
            file_name: 'Documentation',
            type: 'doc',
          },
          {
            file_url:
              'https://github.com/la-ferme-en-folie/MV50/releases/tag/v1.0.0',
            file_name: 'Release du Projet',
            type: 'url',
          },
        ]"
        contributors="TROMBINI Quentin, CAILLIER Paul, Crouts-De-Paille Benjamin, RENAUD Eléanore & VIALA Alexandre"
        :skills="['unity', 'blender', 'csharp', 'figma']"
      >
        Pendant mes études à l'UTBM, j'ai eu l'occasion de suivre la
        spécilaisation "Mondes Virtuels, UX & UI". Dans cette spécialisation,
        j'ai eu l'occasion, avec plusieurs de mes camarade, de réaliser un
        projet sur tout le long du semestre. L'objectif de ce projet était de
        mobiliser les connaissances acquises dans la spécialisation que nous
        avions choisi dans un projet s'approchant d'une situation réelle.<br />
        Pour ce projet, nous étions encadrés par l'un de nos professeurs. Il
        nous a donné les objectifs attendus du projet et il nous a conseillé
        dans nos choix sur le projet. Nous devions réaliser le jumeau numérique
        de la ferme d'une commune du Doubs, Badevel. Un jumeau numérique d'un
        lieu est une copie du lieu dans un environnement 3D permettant d'être
        exploré depuis un appareil numérique. La Ferme de Badevel est une ferme
        connectée, destinée à cultiver des plantes de manière ludique à l'aide
        de différents capteurs et de robots. Les enjeux de ce jumeau numérique
        était donc de représenter la ferme tout en fournissant la possibilité de
        consoluter les données en temps réel.<br />
        Pour ce projet, nous avons dû réaliser différentes tâches :
        <ul>
          <li>Etablissement du cahier des charges</li>
          <li>Conception de l'interface et de l'expérience utilisateur</li>
          <li>Modélisation 3D des modèles</li>
          <li>Création de la ferme dans Unity</li>
          <li>Visualisation des données dans le jumeau</li>
          <li>Lien avec une base de données</li>
          <li>Affichage de la météo dynamiquement</li>
        </ul>
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        project_title="Appartement Blender"
        url_github="https://github.com/lsacienne/appartment-blender"
        picture="./project_icons/frog-toon-final.webp"
        :element_list="[
          {
            file_url: './projects_reports/2023_MV52_Viala_Alexandre.pdf',
            file_name: 'Rapport MV52',
            type: 'doc',
          },
        ]"
        contributors="VIALA Alexandre"
        :skills="['blender']"
      >
        Au cours de mon semestre d'étude de Printemps 2023, j'ai eu l'occasion
        de suivre des cours de synthèse d'image dans le cadre de ma formation à
        l'UTBM. Au travers de ces cours, j'ai acquis des compétences en HLSL, en
        mathématiques et en Pipeline de rendu. J'ai également appris à maîtriser
        logiciel de modélisation 3D
        <a href="https://www.blender.org/">Blender</a>.<br />
        J'ai dû, dans le cadre de cet enseignement, réaliser une scène 3D
        quelconque. C'est pourquoi, j'ai choisi de représenter une partie de mon
        appartement étudiant plus ou moins fidélement. Grâce à ce projet de
        modélisation, j'ai appris à maîtriser différents aspects du logiciel :
        <ul>
          <li>Le mode Edit et le mode Object</li>
          <li>La création d'Armature et le mode Pose</li>
          <li>L'utilisation des Matériaux procéduraux</li>
          <li>L'utilisation des Noeuds de Géométrie</li>
        </ul>
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        project_title="AMORA"
        url_github="https://github.com/lmichel/alix/tree/DR12-viala"
        picture="./project_icons/amora-icon.webp"
        :element_list="[
          {
            file_url: 'https://xcatdb.unistra.fr/xsasdb/',
            file_name: 'XcatDB AliX',
            type: 'url',
          },
          {
            file_url:
              './projects_reports/RAPPORT_A22_INFO_ST40_VIALA_ALEXANDRE.pdf',
            file_name: 'Rapport de stage',
            type: 'doc',
          },
          {
            file_url: './projects_reports/Soutenance_VIALA_Alexandre.pdf',
            file_name: 'Soutenance de stage',
            type: 'doc',
          },
        ]"
        contributors="MICHEL Laurent & VIALA Alexandre"
        :skills="[
          'figma',
          'flask',
          'css',
          'python',
          'jinja',
          'javascript',
          'jquery',
          'html',
          'bootstrap',
        ]"
      >
        Au cours du semestre d'automne 2022, j'ai eu la chance de réaliser un
        stage d'assistant ingénieur à l'Observatoire Astronomique de Strasbourg.
        Cette expérience de 6 mois m'a permis de travailler dans un domaine
        passionnant tout en mobilisant mes connaissances acquises durant mon
        cursus.<br />
        Dans le cadre de ce stage, j'ai dû réaliser plusieurs missions toutes
        liés à un même projet : L'Asynchronous Multi-Observatory Region Analysis
        (AMORA). Il s'agit d'un site web lié au logiciel
        <a href="https://xcatdb.unistra.fr/4xmmdr13/index.html">XCatDB</a>
        permettant d'éxecuter des scripts rédigés par des scientifiques depuis
        une page web. AMORA se rapproche de ce que l'on appelle un cloud
        Platform As A Service (PaaS). Ce projet a été conçu dans le langages de
        programmation Python avec le framework Flask pour toute la partie
        Back-end. Le front-end a quant à lui été rédigé en pur Javascript.<br />
        Pendant ce stage, j'ai acquéris énormément d'expérience :
        <ul>
          <li>
            La perspective de la conception d'un logiciel de cette envergure m'a
            permis d'approfondir mes connaissances en Programmation Orientée
            Objet.
          </li>
          <li>
            J'ai également pu mettre en application mes compétences acquises en
            conception d'interface utilisateur avec gestion de l'expérience
            utilisateur.
          </li>
          <li>
            J'ai approfondi mes connaissances en technologies web, notamment sur
            toute la partie back-end. Flask étant relativement bas niveau, j'ai
            pu maîtriser les redirections de mes endpoints manuellement.
          </li>
          <li>
            Finalement, j'ai largement approfondi mes compétences en Python.
            J'ai acquis une connaissance profonde des fonctionnalités du langage
            et du systsème d'environnement.
          </li>
        </ul>
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        project_title="Mon Portfolio"
        url_github="https://github.com/lsacienne/portfolio"
        picture="./project_icons/logo_portfolio.png"
        :element_list="[
          {
            file_url: 'https://lsacienne.github.io/portfolio/',
            file_name: 'Mon portfolio',
            type: 'url',
          },
        ]"
        contributors="VIALA Alexandre"
        :skills="['vue', 'html', 'css', 'javascript', 'figma', 'blender']"
      >
        Eh oui ! Même si j'utilise ce site internet pour présenter mes projets,
        il s'agit également d'un autre de mes projets personnels ! Après avoir
        travaillé sur divers projets de site web au cours de mes trois premières
        années d'étude, j'ai décidé de créer un site entièrement personnel.<br />
        J'ai réalisé ce site avec le framework javascript
        <a href="http://vuejs.org/">Vue JS</a>. Ce site, en amélioration
        constante, m'a déjà permis de manipuler plusieurs API, de m'exercer au
        CSS et de découvrir mon premier framwork front-end.<br />
        Ce site est également l'occasion pour moi de réaliser des
        fonctionnalités funs que je ne pourrais pas réaliser en temps normal. 🐸
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        project_title="Projet d'application Android de gestion de budget"
        url_github="https://github.com/lsacienne/SY43_P2022_lafo_cheuse"
        picture="./project_icons/lafo-cheuse_icon.png"
        :element_list="[
          {
            file_url: './projects_reports/Rapport_HM40_VIALA_GOBLOT.pdf',
            file_name: 'Rapport HM40',
            type: 'doc',
          },
          {
            file_url: './projects_reports/SY43-Presentation-Lafo-cheuse.odp',
            file_name: 'Présentation de SY43',
            type: 'doc',
          },
        ]"
        contributors="GOBLOT David, VIALA Alexandre"
        :skills="['android', 'kotlin', 'figma', 'sqlite']"
      >
        Lors du semestre de printemps 2022, dans le cadre de mes études à
        l'UTBM, j'ai dû, avec un de mes camarades, réaliser une application pour
        smartphones Android (version 10+). Il s'agit d'une application de
        gestion budgétaire destinée aux étudiants.<br />
        Ce projet nous a permis d'adopter une méthodologie de travail complète
        grâce à l'utilisation de divers techniques et outils de créativité.
        L'APK est téléchargeable en ligne.
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        project_title="Projet d'idle game 'Lumber jack'"
        url_github="https://github.com/QuinD3cim/AP4B_Lumber"
        picture="./project_icons/logo_lumber.png"
        :element_list="[
          {
            file_url: './projects_reports/Rapport_UML.pdf',
            file_name: 'Rapport AP4B',
            type: 'doc',
          },
        ]"
        contributors="MANN William, LIGNON Thomas, LE GUILLY Erwann, VIALA Alexandre"
        :skills="['java']"
      >
        Au cours de mon semestre d'étude de printemps 2022 à l'UTBM, j'ai eu
        l'occasion de suivre des cours de programmation orientée objet. Dans ce
        cadre, j'ai eu l'occasion d'apprendre les bases du C++ et de réaliser un
        "idle game" en Java avec plusieurs de mes camarades.<br />
        Un idle game est un jeu où le joueur a pour seul objectif de faire
        augmenter une ou plusieurs ressource(s) de manière exponentielle. Pour
        cela le joueur dispose de plusieurs leviers d'action (augmenter la
        productivité globale, augmenter la productivité d'un ouvrier, etc.)<br />
        Ce projet m'a permis de découvrir davantage les possibilités du langage
        Java et notamment la gestion des threads.
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.gpaDiscordBot.title')"
        url_github="https://github.com/lsacienne/gpa-bot"
        picture="./project_icons/gpa_bot.png"
        contributors="VIALA Alexandre"
        :skills="['javascript']"
        :description="$t('projectsPage.projects.gpaDiscordBot.body')"
      >
        Lors de mes années à l'UTBM, j'ai pu découvrir ce que l'on appelle le
        'Grade Point Average' ou plus sobrement le GPA. En effet, dans notre
        école, nous recevons des notes entre A et F (comme aux Etats-Unis) et
        afin de se faire une idée de notre moyenne générale, nous devons
        calculer ce GPA.<br />
        A chaque fin de semestre, l'UTBM calcule pour nous ce GPA.
        Malheureusement, ce calcul ne se fait qu'une fois par jour, afin de
        diminuer la charge serveur. Beaucoup d'étudiants souhaitent néanmoins
        connaître leur GPA rapidement.<br />
        C'est pourquoi, j'ai créé ce bot discord qui a pour objectif de calculer
        le GPA à partir des résultats de l'utilisateur. Ce projet m'a surtout
        permis d'explorer plus en profondeur les notions de promesses et
        d'asynchronisme en Javascript.
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="
          $t('projectsPage.projects.congresIndustrielWebsite.title')
        "
        url_github="https://github.com/lsacienne/Site_congres_A21"
        picture="./project_icons/congres.png"
        :element_list="[
          {
            file_url: 'https://lsacienne.github.io/Site_congres_A21/site/',
            file_name: 'Site congrès',
            type: 'url',
          },
          {
            file_url: 'https://lsacienne.github.io/Site_congres_A21/',
            file_name: 'Documentation',
            type: 'url',
          },
        ]"
        contributors="CHAILLARD Léo, VIALA Alexandre"
        :skills="['html', 'css', 'javascript', 'jquery']"
        :description="$t('projectsPage.projects.congresIndustrielWebsite.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.unityGames.title')"
        url_github="https://github.com/lsacienne/LP2B_project_unity_game"
        picture="./project_icons/bad_apple_catcher.png"
        :element_list="[
          {
            file_url:
              'https://github.com/lsacienne/LP2B_project_unity_game/blob/main/README.md',
            file_name: 'Fonctionnalités LP2B',
            type: 'url',
          },
        ]"
        contributors="CHAILLARD Léo, VIALA Alexandre"
        :skills="['unity']"
        :description="$t('projectsPage.projects.unityGames.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.ponyGame.title')"
        url_github="https://github.com/toma68650/ProjectLLP2A"
        picture="./project_icons/ponygame_icon.png"
        :element_list="[
          {
            file_url: './projects_reports/Project_LP2A.pdf',
            file_name: 'Rapport LP2A',
            type: 'doc',
          },
        ]"
        contributors="LIGNON Thomas, VIALA Alexandre"
        :skills="['java']"
        :description="$t('projectsPage.projects.ponyGame.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.unTrollBienMecontent.title')"
        url_github="https://github.com/lsacienne/ifd_site"
        picture="./project_icons/UnTrollBienMecontent_logo.png"
        :element_list="[
          {
            file_url: './projects_reports/IFD1_chaillard_caillier_viala.pdf',
            file_name: 'Rapport IFD1',
            type: 'doc',
          },
        ]"
        contributors="CAILLER Paul, CHAILLARD Léo, VIALA Alexandre"
        :skills="['mysql', 'php', 'html', 'css']"
        :description="$t('projectsPage.projects.unTrollBienMecontent.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.akari.title')"
        url_github="https://github.com/lsacienne/akari"
        picture="./project_icons/akari_icon.png"
        :element_list="[
          {
            file_url:
              './projects_reports/dossier_projet_isn_akari_v_alexandre.pdf',
            file_name: 'Rapport Akari',
            type: 'doc',
          },
        ]"
        contributors="BIETH Elise, VIALA Alexandre"
        :skills="['python']"
        :description="$t('projectsPage.projects.akari.body')"
      >
      </DevProject>
    </div>
  </div>
</template>

<script>
import DevProject from "@/components/projects/DevProject.vue";
export default {
  name: "ProjectPageView",
  components: { DevProject },
  data() {
    return {};
  },
};
</script>

<style scoped>
.project-page-container {
  width: 100%;
  margin-bottom: 3rem;
}

ul > li {
  list-style: disc;
  margin-left: 1.5rem;
}

ul > li::marker {
  color: #42b983;
}

.project-container {
  width: 100%;
  margin-top: 1rem;
  background-color: rgb(0, 0, 0, 70%);
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
}

a:link {
  color: #42b983;
  text-decoration: none;
}

a:visited {
  color: #6ba4b6;
  text-decoration: none;
}

@media only screen and (max-width: 1100px) {
  .project-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
