<template>
    <div class="music-widget">
        <div class="thumbnail">
            <img src="@/assets/avatar.jpg" alt="" class="art" ref="thumbnail">
            <div class="song-info">
                <h1 class="song-title" ref="song">
                    hello i'm the title
                </h1>
                <p class="artist-name" ref="artist">Hello i'm the artist</p>
                <audio ref="audio"
                src=""
                preload
                loop
                id="audio"></audio>
            </div>
        </div>
        <ul class="toolbar" role="toolbar">
            <li>
                <button aria-label="previous" class="button previous" v-on:click="pushPrev">
                    <img src="@/assets/icons/previous_icon.svg" alt="previous button">
                </button>
            </li>
            <li>
                <button aria-label="play-pause" class="button-play button" v-on:click="playMusic" >
                    <img src="@/assets/icons/play_icon.svg" alt="play and pause button">
                </button>
            </li>
            <li>
                <button aria-label="next" class="button next" v-on:click="pushNext">
                    <img src="@/assets/icons/next_icon.svg" alt="next button">
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
import songs from '@/assets/json/songs.json'

    export default {
    name: "MusicPlayer",
    data() {
        return {
            loading: true,
            songArray: [],
            index_selected: 0
        }
    },
    created() {
        console.log(songs)
        this.songArray = songs;
    },
    mounted() {
        this.loading=false
        console.log(this.$refs.thumbnail)
        this.songArray = songs;
        this.$refs.thumbnail.src = this.songArray[0].album_cover;
        this.$refs.artist.textContent = this.songArray[0].artist;
        this.$refs.song.textContent = this.songArray[0].title;
        this.$refs.audio.src = this.songArray[0].preview;
        this.$refs.audio.muted = false;
    },
    methods: {
        playMusic: function(event) {
            if (!this.$refs.audio.paused) {
                this.$refs.audio.pause();
                event.target.children[0].src=require("@/assets/icons/play_icon.svg");
            } else {
                this.$refs.audio.play();
                event.target.children[0].src=require("@/assets/icons/pause_icon.svg");
            }
            
        },
        pushNext: function() {
            this.index_selected = ((this.index_selected + 1) % this.songArray.length);

            let is_paused = this.$refs.audio.paused;

            this.$refs.thumbnail.src = this.songArray[this.index_selected].album_cover;
            this.$refs.artist.textContent = this.songArray[this.index_selected].artist;
            this.$refs.song.textContent = this.songArray[this.index_selected].title;
            this.$refs.audio.src = this.songArray[this.index_selected].preview;

            if (!is_paused) {
                this.$refs.audio.play();
            }
        },
        pushPrev: function() {
            this.index_selected -= 1;
            this.index_selected = this.index_selected < 0 ? this.songArray.length -1 : this.index_selected;

            let is_paused = this.$refs.audio.paused;

            this.$refs.thumbnail.src = this.songArray[this.index_selected].album_cover;
            this.$refs.artist.textContent = this.songArray[this.index_selected].artist;
            this.$refs.song.textContent = this.songArray[this.index_selected].title;
            this.$refs.audio.src = this.songArray[this.index_selected].preview;

            if (!is_paused) {
                this.$refs.audio.play();
            }
        },
        /*
        fadeOutAudio: function() {
            let fadePoint = this.$refs.audio.duration - 2;
            let fadeAudio = setInterval(function() {
                if((this.$refs.audio.currentTime >= fadePoint) && (this.$refs.audio.volume != 0.0)) {
                    this.$refs.audio.volume -= 0.1;
                }

                if(this.$refs.audio.volume === 0.0) {
                    clearInterval(fadeAudio);
                }
            }, 200);
        },
        */
        fadeInAudio: function() {
            this.$refs.audio.volume = 0.0;
            var fadeAudio = setInterval(function() {
                
                if(this.$refs.audio.volume != 1.0) {
                    this.$refs.audio.volume += 0.1;
                }

                if(this.$refs.audio.volume === 1.0) {
                    clearInterval(fadeAudio);
                }
            }, 2000);
        }
    },
}
    
</script>
<style scoped>
    .loader {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .music-widget {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .thumbnail {
        position: relative;
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        overflow: hidden;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .art {
        width: 100%;
    }

    .song-info {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 25%;
        padding: .5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;



        background-color: rgba(255, 255, 255, 0.50);
        backdrop-filter: blur(.2rem);
    }

    .song-title {
        animation: slide 9s linear infinite;
    }

    @keyframes slide {
        from {
            transform: translateX(450%);
        }
        to {
            transform: translateX(-450%);
        }
    }

    .artist-name {
        font-style: italic;
    }

    .toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 30%;

        align-items: center;
    }

    .toolbar li {
        height: 80%;
        width: 30%;
    }

    .button {
        position: relative;
        height: 100%;
        width: 80%;
        border-radius: 50%;
        background: transparent;
        border: transparent;
        transition: .3s;
    }


    .button.previous img, .button.next img{
        width: 50%;
        height: 50%;
    }

    .button img {
        width: 100%;
        height: 100%;
    }

    .button:after {
        content: "";
        background-color: rgba(0, 0, 0,0.2);
        display: block;
        height: 0;
        left: 50%;
        position: absolute;
        top: 50%;
        transition: .3s;
        width: 0;
        z-index:1;
    }
    .button:hover {
        border-color: rgba(0, 0, 0,0.2);
    }
    .button:hover:after {
        background-color: rgba(0, 0, 0,0.2);
        border-radius: 100px;
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
    }
</style>