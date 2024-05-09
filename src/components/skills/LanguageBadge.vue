<template>
    <div class="language-container">
        <div class="language-inner">
            <button class="badge-front">
                <img v-if="imgSource" :src="`/languages/${imgSource}`" alt="skill" srcset="">
                <img v-else src="/languages/frog-placeholder.png" alt="skill">
            </button>
            <div class="badge-back">
                <h1>{{ languageName }}</h1>
                <div class="description" ref="description">
                    <p ref="content" @click="switchDescriptionDisplay">
                        <slot></slot>
                    </p>
                    <span class="shrink" @click="switchDescriptionDisplay">
                        {{ descShrinked ? 'Lire la suite' : 'Montrer moins' }}
                    </span>
                </div>
                <div class="thumbnails-container">
                    <ProjectThumbnail v-for="badge in badgesList" :projectRepo="badge" :key="badge" />
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
    data() {
        return {
            fullDescription: String,
            previewDesc: String,
            descShrinked: {
                type: Boolean,
                default: true
            }
        }
    },
    mounted() {
        this.fullDescription = this.$refs.content.textContent;
        let descArray = this.fullDescription.split(' ');
        let accArray = [];
        for (let i = 0; i < descArray.length; ++i) {
            accArray.push(descArray.slice(0, i).join(' '));
            if (accArray[i].length > 35) {
                if (i !== 0) {
                    this.previewDesc = accArray[i - 1];
                } else {
                    this.previewDesc = accArray[i];
                }
                break;
            }
        }
        this.$refs.content.textContent = this.previewDesc
        //this.$refs.description.style.maxHeight = this.$refs.description.scrollHeight + 'px';
    },
    methods: {
        switchDescriptionDisplay() {

            if (this.descShrinked) {
                this.$refs.content.textContent = this.fullDescription;
            } else {
                this.$refs.content.textContent = this.previewDesc;
            }
            this.descShrinked = !this.descShrinked;
            this.$refs.description.classList.toggle('active');
            //this.$refs.description.style.maxHeight = this.$refs.description.scrollHeight + 'px';
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

.badge-front,
.badge-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 0.5rem solid cornflowerblue;
    border-radius: 2rem;
    background-color: rgb(0, 0, 0, .5);
    padding: 1rem;
    text-align: justify;
}

.badge-back {
    overflow-y: scroll;
    transform: rotateY(180deg);
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: aliceblue;

    -ms-overflow-style: none;
    /* for Internet Explorer, Edge */
    scrollbar-width: none;
    /* for Firefox */
}


.description p {
    display: inline;
    white-space: pre-wrap;
}

.description .shrink {
    cursor: pointer;
    display: inline;
    background: none;
    border: none;
    color: aliceblue;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1vw;
    padding: 0;
    margin-left: 0.5vw;
}

.badge-back::-webkit-scrollbar {
    display: none;
    /* for Chrome, Safari, and Opera */
}

.badge-front {
    display: flex;
    align-items: center;
    justify-content: center;
}

.badge-front>img {
    max-width: 100%;
    max-height: 100%;
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

@media only screen and (max-width: 1100px) {
    .language-container {
        width: 90vw;
        height: 90vw;
        perspective: 225vw;
    }

    .description .shrink {
        font-size: 6vw;
        margin-left: 3vw;
    }

    .badge-back h1 {
        font-size: 2rem;
    }

    .badge-back p {
        font-size: 6vw;
    }
}
</style>