<template>
  <div class="project-page-container">
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.badevelFarm.title')"
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
        :description="$t('projectsPage.projects.badevelFarm.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.blenderAppartment.title')"
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
        :description="$t('projectsPage.projects.blenderAppartment.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.amora.title')"
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
        :description="$t('projectsPage.projects.amora.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.portfolio.title')"
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
        :description="$t('projectsPage.projects.portfolio.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.lafocheuse.title')"
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
        contributors="GOBLOT David & VIALA Alexandre"
        :skills="['android', 'kotlin', 'figma', 'sqlite']"
        :description="$t('projectsPage.projects.lafocheuse.body')"
      >
      </DevProject>
    </div>
    <div class="project-container">
      <DevProject
        :project_title="$t('projectsPage.projects.lumberJackIdleGame.title')"
        url_github="https://github.com/QuinD3cim/AP4B_Lumber"
        picture="./project_icons/logo_lumber.png"
        :element_list="[
          {
            file_url: './projects_reports/Rapport_UML.pdf',
            file_name: 'Rapport AP4B',
            type: 'doc',
          },
        ]"
        contributors="MANN William, LIGNON Thomas, LE GUILLY Erwann & VIALA Alexandre"
        :skills="['java']"
        :description="$t('projectsPage.projects.lumberJackIdleGame.body')"
      >
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
