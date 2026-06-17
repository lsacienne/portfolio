<template>
  <div class="container">
    <LanguageBadge
      languageName="Vue-3"
      imgSource="vue-logo.png"
      :badgesList="[
        'https://github.com/lsacienne/calendar-maker',
        'https://github.com/lsacienne/portfolio',
      ]"
      :descriptionContent="$t('skillsPage.skills.vue3.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="CSS"
      imgSource="logo-css.png"
      :badgesList="[
        'https://github.com/lsacienne/portfolio',
        'https://github.com/lsacienne/ifd_site',
        'https://github.com/lsacienne/calendar-maker',
        'https://github.com/lsacienne/Site_congres_A21',
        'https://github.com/lmichel/alix',
      ]"
      :descriptionContent="$t('skillsPage.skills.css3.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="HTML"
      imgSource="logo-html.png"
      :badgesList="[
        'https://github.com/lsacienne/ifd_site',
        'https://github.com/lsacienne/portfolio',
        'https://github.com/lsacienne/calendar-maker',
        'https://github.com/lsacienne/Site_congres_A21',
      ]"
      :descriptionContent="$t('skillsPage.skills.html5.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Javascript"
      imgSource="Unofficial_JavaScript_logo_2 1.png"
      :badgesList="[
        'https://github.com/lsacienne/calendar-maker',
        'https://github.com/lsacienne/portfolio',
        'https://github.com/lsacienne/advent_of_code_2023',
        'https://github.com/Clamorae/Bandle_Mayor',
        'https://github.com/lsacienne/gpa-bot',
        'https://github.com/lmichel/alix',
        'https://github.com/lsacienne/Site_congres_A21',
      ]"
      :descriptionContent="$t('skillsPage.skills.javascript.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Typescript"
      imgSource="Typescript_logo_2020.svg.png"
      :badgesList="['https://github.com/lsacienne/calendar-maker']"
      :descriptionContent="$t('skillsPage.skills.typescript.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="C"
      imgSource="c_programming_language.png"
      :badgesList="[
        'https://github.com/lsacienne/belote_L_A',
        'https://github.com/QuinD3cim/LO21_Project',
        'https://github.com/lsacienne/LP25_project',
      ]"
      :descriptionContent="$t('skillsPage.skills.cLang.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="C++"
      imgSource="Cpp_Logo.png"
      :badgesList="[
        'https://github.com/lsacienne/CPP_practical_sessions',
        'https://github.com/lsacienne/jiang_viala_tp_fiits',
      ]"
      :descriptionContent="$t('skillsPage.skills.cpp.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="C#"
      imgSource="c_sharp.png"
      :badgesList="[
        'https://github.com/lsacienne/LP2B_project_unity_game',
        'https://github.com/la-ferme-en-folie/MV50',
      ]"
      :descriptionContent="$t('skillsPage.skills.csharp.description')"
    >
      C# Est un langage de programmation orientée objet. Il a été créé par
      Microsoft pour son framework .NET.<br />
      J'ai eu l'occasion d'utiliser ce langage pour programmer différentes
      applications sur Unity.
    </LanguageBadge>
    <LanguageBadge
      languageName="Unity"
      imgSource="unity.png"
      :badgesList="[
        'https://github.com/lsacienne/LP2B_project_unity_game',
        'https://github.com/la-ferme-en-folie/MV50',
      ]"
      :descriptionContent="$t('skillsPage.skills.unity.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Python"
      imgSource="Python_logo_01.svg.png"
      :badgesList="[
        'https://github.com/lsacienne/akari',
        'https://github.com/lmichel/alix',
      ]"
      :descriptionContent="$t('skillsPage.skills.python.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Java"
      imgSource="Java_Logo.svg.png"
      :badgesList="[
        'https://github.com/toma68650/ProjectLLP2A',
        'https://github.com/QuinD3cim/AP4B_Lumber',
      ]"
      :descriptionContent="$t('skillsPage.skills.java.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Kotlin"
      imgSource="Kotlin_Icon.svg.png"
      :badgesList="['https://github.com/lsacienne/SY43_P2022_lafo_cheuse']"
      :descriptionContent="$t('skillsPage.skills.kotlin.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="SQL, MySQL, SQLite"
      imgSource="SQLite370.png"
      :badgesList="[
        'https://github.com/lsacienne/ifd_site',
        'https://github.com/lsacienne/SY43_P2022_lafo_cheuse',
        'https://github.com/lmichel/alix',
      ]"
      :descriptionContent="$t('skillsPage.skills.sql.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="PHP"
      imgSource="PHP-logo.svg.png"
      :badgesList="['https://github.com/lsacienne/ifd_site']"
      :descriptionContent="$t('skillsPage.skills.php.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Android"
      imgSource="Android_robot.svg.png"
      :badgesList="['https://github.com/lsacienne/SY43_P2022_lafo_cheuse']"
      :descriptionContent="$t('skillsPage.skills.android.description')"
    >
    </LanguageBadge>
    <LanguageBadge
      languageName="Figma"
      imgSource="Figma-logo.svg"
      :badgesList="[]"
      :descriptionContent="$t('skillsPage.skills.figma.description')"
    >
    </LanguageBadge>
  </div>
</template>
<script>
import LanguageBadge from "@/components/skills/LanguageBadge.vue";

export default {
  name: "SkillsPageView",
  data() {
    return {};
  },
  components: { LanguageBadge },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}
</style>
