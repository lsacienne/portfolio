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
                    Description
                </slot>
            </p>
            <div class="row">
                <div class="column github-container">
                    <h2>Github</h2>
                    <a class="github row" :href="url_github">
                        <img src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="logo Github">
                        <p>
                            {{ getProjectName(url_github) }}
                        </p>
                    </a>
                </div>
                <div class="column doc-container" v-if="document_list">
                    <h2>Documents</h2>
                    <div class="doc">
                        <DocumentDownloader v-for="document in document_list" :key="document.file_url"
                            :file_url="document.file_url">
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
    name: "DevProject",
    components: { DocumentDownloader },
    data() {
        return {
            url_file: ""
        }
    },
    methods: {
        /**
         * @decription Method to get a project name from a github URL
         * @param {String} url - The url to scan
         * @return {String} The name of the project
         */
        getProjectName: function (url) {
            return url.split("/").at(-1).split("_").join(" ");
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
        document_list: {
            type: Array,
            required: false
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
    align-items: center;
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

a:link {
    color: #42b983;
    text-decoration: none;
}

a:visited {
    color: #6ba4b6;
    text-decoration: none;
}

.github:hover {
    background-color: rgb(255, 228, 196, 10%);
}

.doc {
    flex-wrap: wrap;
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
    justify-content: flex-start;
    gap: 2rem;
}


.contributions {
    text-align: right;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
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


@media only screen and (max-width: 1100px) {
    h1 {
        font-size: 1.3rem;
        text-align: justify;
    }

    .column>h2 {
        font-size: 1.2rem;
    }

    .row {
        flex-direction: column;
        width: 100%;
    }

    .img {
        height: unset;
        width: 100%;
        margin-bottom: 1rem;
    }

    .img>img {
        height: unset;
        width: 80%;
    }


    .row.github {
        flex-direction: row;
        align-self: center;
    }

    .github-container {
        margin-bottom: 1rem;
    }

    .doc {
        row-gap: 0.5rem;
    }

    .contributions>p:before {
        content: "© ";
    }

    .row.contributions {
        justify-content: center;
    }

    .contributions p {
        font-size: 0.8rem;
    }

}
</style>