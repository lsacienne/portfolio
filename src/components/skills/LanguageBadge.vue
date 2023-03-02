<template>
    <div class="language-container">
        <div class="language-inner">
            <button class="badge-front">
                <img v-if="imgSource" :src="require(`@/assets/languages/${imgSource}`)" alt="skill" srcset="">
                <img v-else src="@/assets/languages/frog-placeholder.png" alt="skill">
            </button>
            <div class="badge-back">
                <h1>{{ languageName }}</h1>
                <p>
                    <slot></slot>
                </p>
                <div class="thumbnails-container">
                    <ProjectThumbnail v-for="badge in badgesList" :projectRepo="badge" :key="badge"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProjectThumbnail from './ProjectThumbnail.vue';

    export default {
    name: "LanguageBadge",
    props: {
        languageName: {
            type: String,
            required: true
        },
        badgesList: {
            type: Array
        },
        imgSource: {
            type: String
        }
    },
    components: { ProjectThumbnail }
}
</script>
<style scoped>
    .language-container {
        background-color: transparent;
        width: 15vw;
        height: 15vw;
        perspective: 50vw;
    }
    .language-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform-style: preserve-3d;
        text-align: center;
    }
    .language-container:hover .language-inner {
        transform: rotateY(180deg);
    }
    .badge-front, .badge-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border: 0.5rem solid cornflowerblue;
        border-radius: 2rem;
        background-color: rgb(0, 0, 0,.5);
        padding: 1rem;
        text-align: justify;
    }

    .badge-back {
        transform: rotateY(180deg);
        text-align: justify;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .badge-front {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .badge-front>img {
        max-width:100%;
        max-height: 100%;
    }

    .badge-back {
        color: aliceblue;
    }
    .badge-back h1 {
        font-weight: bold;
        font-size: 2rem;
        flex-shrink: 1;
    }

    .badge-back p {
        font-size: 1vw;
    }

    .thumbnails-container {
        display: inline-flex;
        flex-wrap: wrap;
        row-gap: 0.5rem;
        column-gap: 0.2rem;
    }
</style>