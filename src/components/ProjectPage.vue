<template>
    <div class="project-page-container">
        <div class="project-container">
            <DevProject
            project_title="Projet d'application Android de gestion de budget"
            url_github="https://github.com/lsacienne/SY43_P2022_lafo_cheuse"
            picture="/avatar.jpg"
            github_project="SY43_P2022_lafo_cheuse"
            :document_list="[
                {file_url: '/projects_reports/Rapport_HM40_VIALA_GOBLOT.pdf', file_name: 'Rapport HM40'},
                {file_url: '/projects_reports/SY43-Presentation-Lafo-cheuse.odp', file_name: 'Présentation de SY43'}
            ]"
            contributors="GOBLOT David, VIALA Alexandre"
             >
                Lors du semestre de printemps 2022, dans le cadre de mes études à
                l'UTBM, j'ai dû, avec un de mes camarades, réaliser une application
                pour smartphones Android (version 10+). Il s'agit d'une application
                de gestion budgétaire destinée aux étudiants.<br>
                Ce projet nous a permi d'adopter une méthodologie de travail complète
                grâce à l'utilisation de divers techniques et outils de créativité.
                L'APK est téléchargeable en ligne. 
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject
            project_title="Projet d'idle game 'Lumber jack'"
            url_github="https://github.com/lsacienne/SY43_P2022_lafo_cheuse"
            picture="/avatar.jpg"
            github_project="SY43_P2022_lafo_cheuse"
            :document_list="[
                {file_url: '/projects_reports/Rapport_HM40_VIALA_GOBLOT.pdf', file_name: 'Rapport HM40'},
                {file_url: '/projects_reports/SY43-Presentation-Lafo-cheuse.odp', file_name: 'Présentation de SY43'}
            ]"
            contributors="GOBLOT David, VIALA Alexandre"
             >
                Lors du semestre de printemps 2022, dans le cadre de mes études à
                l'UTBM, j'ai dû, avec un de mes camarades, réaliser une application
                pour smartphones Android (version 10+). Il s'agit d'une application
                de gestion budgétaire destinée aux étudiants.<br>
                Ce projet nous a permi d'adopter une méthodologie de travail complète
                grâce à l'utilisation de divers techniques et outils de créativité.
                L'APK est téléchargeable en ligne. 
            </DevProject>
        </div>
    </div>
</template>

<script>
    import DevProject from './projects/DevProject.vue';
    export default {
        name: "ProjectPage",
        components: { DevProject },
        data() {
            return {
            }
        }
    }
</script>

<style>
    .project-page-container {
        width: 100%;
    }

    .project-container {
        width: 100%;
        margin-top: 1rem;
        background-color: rgb(0, 0, 0,70%);
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
    }
</style>