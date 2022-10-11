<template>
    <div class="window-container">
        <MovingWindow window_title="Mes musiques préférées 🎵">
            <MusicPlayer></MusicPlayer>
        </MovingWindow>
        <MovingWindow window_title="Quelques origamis...">
            <OrigamisViewer></OrigamisViewer>
        </MovingWindow>
    </div>
</template>
<script>
import MovingWindow from "../components/hobbysComponents/MovingWindow.vue";
import MusicPlayer from "../components/hobbysComponents/MusicPlayer.vue";
import OrigamisViewer from "@/components/hobbysComponents/OrigamisViewer.vue";
    export default {
    name: "HobbyPageView",
    data() {
        return {};
    },
    components: { MovingWindow, MusicPlayer, OrigamisViewer }
}
</script>
<style>
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