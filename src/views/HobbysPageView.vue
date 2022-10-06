<template>
    <div class="window-container">
        <MovingWindow>
        </MovingWindow>
        <MovingWindow>

        </MovingWindow>
    </div>
</template>
<script>
import MovingWindow from "../components/hobbysComponents/MovingWindow.vue";
    export default {
    name: "HobbyPageView",
    data() {
        return {};
    },
    components: { MovingWindow}
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
</style>