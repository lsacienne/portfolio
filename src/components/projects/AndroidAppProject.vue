<template>
    <h1>{{ project_title }}</h1>
    <div class="row">
        <div class="img">
            <img :src=picture alt="" srcset="">
        </div>
        <div class="column presentation">
            <h2>Présentation</h2>
            <p>
                <slot>
                    Lors du semestre de printemps 2022, dans le cadre de mes études à
                    l'UTBM, j'ai dû, avec un de mes camarades, réaliser une application
                    pour smartphones Android (version 10+). Il s'agit d'une application
                    de gestion budgétaire destinée aux étudiants.<br>
                    Ce projet nous a permi d'adopter une méthodologie de travail complète
                    grâce à l'utilisation de divers techniques et outils de créativité.
                    L'APK est téléchargeable en ligne. 
                </slot>
            </p>
            <div class="row">
                <div class="column github-container">
                    <h2>Github</h2>
                    <a class="github row" :href="url_github">
                        <img src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="logo Github">
                        <p>
                            {{github_project}}
                        </p>
                    </a>
                </div>
                <div class="column doc-container">
                    <h2>Documents</h2>
                    <div class="doc">
                        <DocumentDownloader v-for="document in document_list" :key="document.file_url" :file_url="document.file_url">
                            {{ document.file_name }}
                        </DocumentDownloader>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row contributions">
        <h2>Contributeurs:</h2>
        <p>
            {{ contributors }}
        </p> 
    </div>
</template>

<script>
import DocumentDownloader from './DocumentDownloader.vue';
    export default {
    name: "AndroidAppProject",
    components: { DocumentDownloader },
    data() {
        return {
            url_file:"/projects_reports/Rapport_HM40_VIALA_GOBLOT.pdf"
        }
    },
    props: {
        project_title: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        url_github: {
            type: String
        },
        github_project: {
            type: String
        },
        document_list: {
            type: Array
        },
        contributors: {
            type: String
        }
    }
}
</script>

<style scoped>

    h1 {
        text-align: left;
        color: white;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .column {
        display: flex;
        flex-direction: column;
    }
    .img {
        height: 30vh;        
    }
    .img>img {
        height: 100%;
        border-radius: 3rem;
        border: solid 0.3rem whitesmoke;
    }

    .presentation {
        margin-left: 1rem;
    }

    .column>h2 {
        text-align: left;
        font-size: 1.5rem;
        color: white;
        margin-bottom: 0.5rem;
    }
    .column>p {
        text-align: justify;
        font-size: 1rem;
        color: white;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .github-container {
        margin-right: 2rem;
    }

    .github {
        border: 0.2rem solid white;
        border-radius: 1rem;
        height: 4rem;
        padding: 0.5rem;
        align-items: center;
    }

    .github:link {
        color: white;
        text-decoration: none;
    }

    .github:visited {
        color: #42b983;
        text-decoration: none;
    }

    .github:hover {
        background-color: rgb(255, 228, 196,10%);
    }

    .github>img {
        height: 100%;
        margin-right: 1rem;
    }

    .doc-container {
        flex-grow: 3;
    }

    .doc {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content:space-evenly;
    }


    .contributions {
        text-align: right;
        justify-content: flex-end;
        align-items: center;
    }

    .contributions>h2 {
        font-size: 1rem;
        font-weight: bold;
        font-style: italic;
        margin-right: 1rem;
        color: grey;
    }

    .contributions>p {
        font-size: 1rem;
        font-style: italic;
        color: grey;

    }
    .contributions>p:before {
        content: "© Tous droits réservés ";
    }

</style>