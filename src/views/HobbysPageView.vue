<template>
    <div class="window-container">
        <MovingWindow>
            <MusicPlayer></MusicPlayer>
        </MovingWindow>
        <MovingWindow>
            
        </MovingWindow>
    </div>
</template>
<script>
import MovingWindow from "../components/hobbysComponents/MovingWindow.vue";
import MusicPlayer from "../components/hobbysComponents/MusicPlayer.vue";
    export default {
    name: "HobbyPageView",
    data() {
        return {};
    },
    components: { MovingWindow, MusicPlayer }
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