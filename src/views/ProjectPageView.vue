<template>
    <div class="project-page-container">
        <div class="project-container">
            <DevProject
            project_title="Mon Portfolio"
            url_github="https://github.com/lsacienne/portfolio"
            picture="./project_icons/logo_portfolio.png"
            :document_list="[
                {file_url: 'https://lsacienne.github.io/portfolio/', file_name: 'Mon portfolio'}
            ]"
            contributors="VIALA Alexandre"
             >
                Eh oui ! Même si j'utilise ce site internet pour présenter mes projets,
                il s'agit également d'un autre de mes projets personnels ! Après avoir
                travaillé sur divers projets de site web au cours de mes trois premières
                années d'étude, j'ai décidé de créer un site entièrement personnel.<br/>
                J'ai réalisé ce site avec le framework javascript 
                <a href="http://vuejs.org/">Vue JS</a>. Ce site, en amélioration constante,
                m'a déjà permis de manipuler plusieurs API, de m'exercer au CSS et de découvrir
                mon premier framwork front-end.<br/>
                Ce site est également l'occasion pour moi de réaliser des fonctionnalités funs
                que je ne pourrais pas réaliser en temps normal. 🐸
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject
            project_title="Projet d'application Android de gestion de budget"
            url_github="https://github.com/lsacienne/SY43_P2022_lafo_cheuse"
            picture="./project_icons/lafo-cheuse_icon.png"
            :document_list="[
                {file_url: './projects_reports/Rapport_HM40_VIALA_GOBLOT.pdf', file_name: 'Rapport HM40'},
                {file_url: './projects_reports/SY43-Presentation-Lafo-cheuse.odp', file_name: 'Présentation de SY43'}
            ]"
            contributors="GOBLOT David, VIALA Alexandre"
             >
                Lors du semestre de printemps 2022, dans le cadre de mes études à
                l'UTBM, j'ai dû, avec un de mes camarades, réaliser une application
                pour smartphones Android (version 10+). Il s'agit d'une application
                de gestion budgétaire destinée aux étudiants.<br>
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
            :document_list="[
                {file_url: './projects_reports/Rapport_UML.pdf', file_name: 'Rapport AP4B'}
            ]"
            contributors="MANN William, LIGNON Thomas, LE GUILLY Erwann, VIALA Alexandre"
             >
                Au cours de mon semestre d'étude de printemps 2022 à l'UTBM, j'ai eu
                l'occasion de suivre des cours de programmation orientée objet. Dans
                ce cadre, j'ai eu l'occasion d'apprendre les bases du C++ et de réaliser
                un "idle game" en Java avec plusieurs de mes camarades.<br>
                Un idle game est un jeu où le joueur a pour seul objectif de faire
                augmenter une ou plusieurs ressource(s) de manière exponentielle.
                Pour cela le joueur dispose de plusieurs leviers d'action (augmenter la
                productivité globale, augmenter la productivité d'un ouvrier, etc.)<br>
                Ce projet m'a permis de découvrir davantage les possibilités du langage
                Java et notamment la gestion des threads.
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject
            project_title="Projet de robot dicord calculant le Grade Point Average (GPA)"
            url_github="https://github.com/lsacienne/gpa-bot"
            picture="./project_icons/gpa_bot.png"
            contributors="VIALA Alexandre"
             >
                Lors de mes années à l'UTBM, j'ai pu découvrir ce que l'on appelle le
                'Grade Point Average' ou plus sobrement le GPA. En effet, dans notre école,
                nous recevons des notes entre A et F (comme aux Etats-Unis) et afin de se faire
                une idée de notre moyenne générale, nous devons calculer ce GPA.<br>
                A chaque fin de semestre, l'UTBM calcule pour nous ce GPA. Malheureusement,
                ce calcul ne se fait qu'une fois par jour, afin de diminuer la charge serveur.
                Beaucoup d'étudiants souhaitent néanmoins connaître leur GPA rapidement.<br/>
                C'est pourquoi, j'ai créé ce bot discord qui a pour objectif de calculer le GPA
                à partir des résultats de l'utilisateur. Ce projet m'a surtout permis d'explorer
                plus en profondeur les notions de promesses et d'asynchronisme en Javascript. 
            </DevProject>
            
        </div>
        <div class="project-container">
            <DevProject
            project_title="Site du Congrès Industriel 2021"
            url_github="https://github.com/lsacienne/Site_congres_A21"
            picture="./project_icons/congres.png"
            :document_list="[
                {file_url: 'https://lsacienne.github.io/Site_congres_A21/site/', file_name: 'Site congrès'},
                {file_url: 'https://lsacienne.github.io/Site_congres_A21/', file_name: 'Documentation'}
            ]"
            contributors="CHAILLARD Léo, VIALA Alexandre"
             >
                Pendant ma dernière année de Tronc Commun à l'UTBM (notre cycle préparatoire), j'ai eu
                le privilège de créer, avec l'un de mes camarade, le site internet du Congrès
                Industriel 2021.<br>
                Le site était purement front-end en HTML et CSS pur sans framework (mis à part 
                <a href="https://fontawesome.com/">font-awesome</a>). Nous avons eu recours à quelques
                subterfuges afin de simuler une base de donnée au cours du développement.<br>
                Ce projet m'a permis de découvrir le monde associatif à l'UTBM, de découvrir
                le langage Javascript et de travailler pour la première fois avec des personnes
                n'ayant pas d'expertise informatique. 
            </DevProject>
        </div>
    </div>
</template>

<script>
    import DevProject from '@/components/projects/DevProject.vue';
    export default {
        name: "ProjectPageView",
        components: { DevProject },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .project-page-container {
        width: 100%;
        margin-bottom: 3rem;
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