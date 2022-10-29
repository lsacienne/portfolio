<template>
    <div class="global-layout">
        <div class="window-container">
            <MovingWindow window_title="Mes musiques préférées 🎵">
                <MusicPlayer></MusicPlayer>
            </MovingWindow>
            <MovingWindow window_title="Quelques origamis...">
                <OrigamisViewer></OrigamisViewer>
            </MovingWindow>
            <MovingWindow window_title="Mes jeux préférés 🎮">
                <GameDisplayer></GameDisplayer>
            </MovingWindow>
        </div>
        </div>
    </div>
</template>
<script>
import MovingWindow from "../components/hobbysComponents/MovingWindow.vue";
import MusicPlayer from "../components/hobbysComponents/MusicPlayer.vue";
import OrigamisViewer from "@/components/hobbysComponents/OrigamisViewer.vue";
import GameDisplayer from "@/components/skills/GameDisplayer.vue";
    export default {
    name: "HobbyPageView",
    data() {
        return {};
    },
    components: { MovingWindow, MusicPlayer, OrigamisViewer, GameDisplayer }
}
</script>
<style scoped>

    .global-layout {
        position: relative;
        display: flex;
        flex-direction: column;


        width: 100%;
    }
    .window-container {
        position: relative;
        margin-top: 1rem;
        display: inline-flex;
        justify-content: space-evenly;
        
        width: 100%;
    }

    @media only screen and (max-width: 1100px) {
        .window-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>