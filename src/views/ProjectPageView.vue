<template>
    <div class="project-page-container">
        <div class="project-container">
            <DevProject project_title="Appartement Blender" url_github="https://github.com/lsacienne/appartment-blender"
                picture="./project_icons/frog-toon-final.webp" :document_list="[
                    { file_url: './projects_reports/2023_MV52_Viala_Alexandre.pdf', file_name: 'Rapport MV52', type: 'doc' }
                ]" contributors="VIALA Alexandre">
                Au cours de mon semestre d'étude de Printemps 2023, j'ai eu l'occasion
                de suivre des cours de synthèse d'image dans le cadre de ma formation
                à l'UTBM. Au travers de ces cours, j'ai acquis des compétences en HLSL,
                en mathématiques et en Pipeline de rendu. J'ai également appris à maîtriser
                logiciel de modélisation 3D <a href="https://www.blender.org/">Blender</a>.<br />
                J'ai dû, dans le cadre de cet enseignement, réaliser une scène 3D quelconque.
                C'est pourquoi, j'ai choisi de représenter une partie de mon appartement étudiant
                plus ou moins fidélement. Grâce à ce projet de modélisation, j'ai appris à maîtriser
                différents aspects du logiciel :
                <ul>
                    <li>Le mode Edit et le mode Object</li>
                    <li>La création d'Armature et le mode Pose</li>
                    <li>L'utilisation des Matériaux procéduraux</li>
                    <li>L'utilisation des Noeuds de Géométrie</li>
                </ul>
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject project_title="AMORA" url_github="https://github.com/lmichel/alix/tree/DR12-viala"
                picture="./project_icons/amora-icon.webp" :document_list="[
                    { file_url: 'https://xcatdb.unistra.fr/xsasdb/', file_name: 'XcatDB AliX', type: 'url' },
                    { file_url: '', file_name: 'Rapport de stage', type: 'doc' },
                    { file_url: '', file_name: 'Soutenance de stage', type: 'doc' }
                ]" contributors="MICHEL Laurent & VIALA Alexandre">
                Au cours du semestre d'automne 2022, j'ai eu la chance de réaliser un stage
                d'assistant ingénieur à l'Observatoire Astronomique de Strasbourg. Cette
                expérience de 6 mois m'a permis de travailler dans un domaine passionnant
                tout en mobilisant mes connaissances acquises durant mon cursus.<br />
                Dans le cadre de ce stage, j'ai dû réaliser plusieurs missions toutes liés
                à un même projet : L'Asynchronous Multi-Observatory Region Analysis (AMORA).
                Il s'agit d'un site web lié au logiciel
                <a href="https://xcatdb.unistra.fr/4xmmdr13/index.html">XCatDB</a> permettant
                d'éxecuter des scripts rédigés par des scientifiques depuis une page web.
                AMORA se rapproche de ce que l'on appelle un cloud Platform As A Service (PaaS).
                Ce projet a été conçu dans le langages de programmation Python avec le framework
                Flask pour toute la partie Back-end. Le front-end a quant à lui été rédigé en pur
                Javascript.<br />
                Pendant ce stage, j'ai acquéris énormément d'expérience :
                <ul>
                    <li>
                        La perspective de la conception d'un logiciel de cette
                        envergure m'a permis d'approfondir mes connaissances
                        en Programmation Orientée Objet.
                    </li>
                    <li>
                        J'ai également pu mettre en application mes compétences acquises
                        en conception d'interface utilisateur avec gestion de
                        l'expérience utilisateur.
                    </li>
                    <li>
                        J'ai approfondi mes connaissances en technologies
                        web, notamment sur toute la partie back-end. Flask
                        étant relativement bas niveau, j'ai pu maîtriser les
                        redirections de mes endpoints manuellement.
                    </li>
                    <li>
                        Finalement, j'ai largement approfondi mes compétences
                        en Python. J'ai acquis une connaissance profonde des
                        fonctionnalités du langage et du systsème d'environnement.
                    </li>
                </ul>
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject project_title="Mon Portfolio" url_github="https://github.com/lsacienne/portfolio"
                picture="./project_icons/logo_portfolio.png" :document_list="[
                    { file_url: 'https://lsacienne.github.io/portfolio/', file_name: 'Mon portfolio', type: 'url' }
                ]" contributors="VIALA Alexandre">
                Eh oui ! Même si j'utilise ce site internet pour présenter mes projets,
                il s'agit également d'un autre de mes projets personnels ! Après avoir
                travaillé sur divers projets de site web au cours de mes trois premières
                années d'étude, j'ai décidé de créer un site entièrement personnel.<br />
                J'ai réalisé ce site avec le framework javascript
                <a href="http://vuejs.org/">Vue JS</a>. Ce site, en amélioration constante,
                m'a déjà permis de manipuler plusieurs API, de m'exercer au CSS et de découvrir
                mon premier framwork front-end.<br />
                Ce site est également l'occasion pour moi de réaliser des fonctionnalités funs
                que je ne pourrais pas réaliser en temps normal. 🐸
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject project_title="Projet d'application Android de gestion de budget"
                url_github="https://github.com/lsacienne/SY43_P2022_lafo_cheuse"
                picture="./project_icons/lafo-cheuse_icon.png" :document_list="[
                    { file_url: './projects_reports/Rapport_HM40_VIALA_GOBLOT.pdf', file_name: 'Rapport HM40', type: 'doc' },
                    { file_url: './projects_reports/SY43-Presentation-Lafo-cheuse.odp', file_name: 'Présentation de SY43', type: 'doc' }
                ]" contributors="GOBLOT David, VIALA Alexandre">
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
            <DevProject project_title="Projet d'idle game 'Lumber jack'"
                url_github="https://github.com/QuinD3cim/AP4B_Lumber" picture="./project_icons/logo_lumber.png"
                :document_list="[
                    { file_url: './projects_reports/Rapport_UML.pdf', file_name: 'Rapport AP4B', type: 'doc' }
                ]" contributors="MANN William, LIGNON Thomas, LE GUILLY Erwann, VIALA Alexandre">
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
            <DevProject project_title="Projet de robot dicord calculant le Grade Point Average (GPA)"
                url_github="https://github.com/lsacienne/gpa-bot" picture="./project_icons/gpa_bot.png"
                contributors="VIALA Alexandre">
                Lors de mes années à l'UTBM, j'ai pu découvrir ce que l'on appelle le
                'Grade Point Average' ou plus sobrement le GPA. En effet, dans notre école,
                nous recevons des notes entre A et F (comme aux Etats-Unis) et afin de se faire
                une idée de notre moyenne générale, nous devons calculer ce GPA.<br>
                A chaque fin de semestre, l'UTBM calcule pour nous ce GPA. Malheureusement,
                ce calcul ne se fait qu'une fois par jour, afin de diminuer la charge serveur.
                Beaucoup d'étudiants souhaitent néanmoins connaître leur GPA rapidement.<br />
                C'est pourquoi, j'ai créé ce bot discord qui a pour objectif de calculer le GPA
                à partir des résultats de l'utilisateur. Ce projet m'a surtout permis d'explorer
                plus en profondeur les notions de promesses et d'asynchronisme en Javascript.
            </DevProject>

        </div>
        <div class="project-container">
            <DevProject project_title="Site du Congrès Industriel 2021"
                url_github="https://github.com/lsacienne/Site_congres_A21" picture="./project_icons/congres.png"
                :document_list="[
                    { file_url: 'https://lsacienne.github.io/Site_congres_A21/site/', file_name: 'Site congrès', type: 'url' },
                    { file_url: 'https://lsacienne.github.io/Site_congres_A21/', file_name: 'Documentation', type: 'url' }
                ]" contributors="CHAILLARD Léo, VIALA Alexandre">
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
        <div class="project-container">
            <DevProject project_title="Suite de jeu sous Unity"
                url_github="https://github.com/lsacienne/LP2B_project_unity_game"
                picture="./project_icons/bad_apple_catcher.png" :document_list="[
                    { file_url: 'https://github.com/lsacienne/LP2B_project_unity_game/blob/main/README.md', file_name: 'Fonctionnalités LP2B', type: 'url' },
                ]" contributors="CHAILLARD Léo, VIALA Alexandre">
                Pour un cours portant sur le traitement informatique de l'image, nous avons dû
                réaliser des travaux pratiques sur Unity. Notre professeur nous donnait plusieurs
                assets (des images, des sons, des vidéos, etc.) et un support de TP sous forme de
                diaporama. Nous avons eu 4-5 TP comme celui-ci au cours du semestre et à la fin,
                nous devions compiler tous les travaux réalisé dans un seul projet.<br>
                Nous pouvions alors ajouter des fonctionnalités, en changer certaines, ajouter
                nos propres assets, etc. Mon camarade s'est davantage occupé de la partie casse-brique
                en implémentant beaucoup de power-ups, des niveaux et un menu. J'ai pour ma part fait
                quelques modifications sur le mini-jeu "Apple Catcher" et "Furapi bird".<br>
                Cette expérience m'a permis d'avoir un premier contact avce les moteurs physique et le
                langage C#. J'ai également appris à utiliser les coroutines, qui sont utilisées dans
                d'autres langages (Kotlin notamment).
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject project_title="PonyGame - Jeu de Ludo en Java"
                url_github="https://github.com/toma68650/ProjectLLP2A" picture="./project_icons/ponygame_icon.png"
                :document_list="[
                    { file_url: './projects_reports/Project_LP2A.pdf', file_name: 'Rapport LP2A', type: 'doc' },
                ]" contributors="LIGNON Thomas, VIALA Alexandre">
                Pendant mon dernier semestre de cycle préparatoire intégré à l'UTBM, j'ai eu l'occasion
                de suivre un cours de programmation orientée objet. Pour appliquer les notions de
                polymorphisme, d'abstraction, d'encapsulage et d'héritage, nous avons utilisé le
                langage Java.<br />
                Afin de parfaire nos connaissances et de travailler sur un projet plus
                concret, nous avons dû réaliser, en binôme, un jeu de petits chevaux en Java.<br />
                Ce projet m'a permis de réaliser mon premier système informatique utilisant
                pleinement les mécanismes de base de programmation orientée objet.
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject project_title="Un Troll Bien Mécontent - Metacritic des jeux de société"
                url_github="https://github.com/lsacienne/ifd_site" picture="./project_icons/UnTrollBienMecontent_logo.png"
                :document_list="[
                    { file_url: './projects_reports/IFD1_chaillard_caillier_viala.pdf', file_name: 'Rapport IFD1', type: 'doc' },
                ]" contributors="CAILLER Paul, CHAILLARD Léo, VIALA Alexandre">
                Pendant ma préparation intégrée à l'UTBM, en 2020, j'ai suivi des cours de base de
                données. Ces cours m'ont permis de découvrir les bases des bases de données
                relationnelles et le principe de normalisation de base de données.<br />
                Pour clôturer l'UV, nous avons dû réaliser, en groupe de trois personnes, un site
                internet lié à une base de données relationnelle. Le thème était imposé, nous
                devions réalisé un réseau social, similaire à Metacritic pour les jeux de société.<br />
                Ce projet m'a permis de débuter dans la programmation web en back-end et de parfaire
                mes connaissances en front-end.
            </DevProject>
        </div>
        <div class="project-container">
            <DevProject project_title="Akari" url_github="https://github.com/lsacienne/akari"
                picture="./project_icons/akari_icon.png" :document_list="[
                    { file_url: './projects_reports/IFD1_chaillard_caillier_viala.pdf', file_name: 'Rapport Akari', type: 'doc' },
                ]" contributors="BIETH Elise, VIALA Alexandre">
                En classe de terminale au lycée. J'ai suivi les cours d'un enseignement optionnel d'Informatique
                & Sciences du Numérique (SIN). Au cours de cet enseignement, j'ai appris les bases du langage de
                balisage HTML et de style CSS ainsi que les bases de la programmation impérative à l'aide du langage
                Python.<br />
                Pour conclure cet enseignement, nous avons dû réaliser un projet de notre choix permettant de mettre
                en exergue nos compétences acquises en Python. Nous devions toutefois utiliser une bibliothèque
                graphique telle que PyGames ou tkinter. Avec une de mes camarade, nous avons choisi de réaliser
                une implémentation du jeu de logique Akari avec la bibliothèque tkinter.<br />
                Graĉe à ce projet j'ai réalisé mes premiers pas en informatique.
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

ul>li {
    list-style: disc;
    margin-left: 1.5rem;
}

ul>li::marker {
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