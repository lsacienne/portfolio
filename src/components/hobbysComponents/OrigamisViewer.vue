<template>
    <div class="container">
        <VueAgile :autoplay="true">
            <div class="panel"><img src="@/assets/origamis/hedgehog-min.jpg" alt="Hedgehog origami" srcset=""></div>
            <div class="panel"><img src="@/assets/origamis/dragon-min.jpg" alt="Dragon origami" srcset=""></div>
            <div class="panel"><img src="@/assets/origamis/beetle-min.jpg" alt="Beetle origami" srcset=""></div>
            <div class="panel"><img src="@/assets/origamis/squirel-min.jpg" alt="Squirel origami" srcset=""></div>
            <div class="panel"><img src="@/assets/origamis/turtle-min.jpg" alt="Turtle origami" srcset=""></div>
        </VueAgile>
        <div class="origami-filter"><img src="@/assets/filter_origami.svg" alt="" srcset=""></div>
        <div class="filter"></div>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: "OrigamisViewer",
    components: {
        VueAgile: VueAgile
    }
}
</script>
<style scoped>
.container {
    position: relative;
    height: 100%;
    width: 100%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    overflow: hidden;
}

.panel {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.panel img {
    height: 45vh;
    object-fit: cover;
}

.filter {
    position: absolute;
    border-radius: inherit;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle,rgba(255,255,255,0) 60%, rgba(255,255,255,0.5) 70%,rgba(227, 245, 228, 0.8) 100%);
    pointer-events: none;
}

.origami-filter {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    pointer-events: none;
}

.origami-filter img {
    width: 35vh;
}

@media only screen and (max-width: 1100px) {
    .panel img {
        height: 116vw;
    }

    .origami-filter img {
        width: 90vw;
    }
}

</style>