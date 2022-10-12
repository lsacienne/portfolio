<template>
    <div class="container">
        <VueAgile :autoplay="true">
            <div class="panel"><img :src="`/origamis/hedgehog.jpg`" alt="" srcset=""></div>
            <div class="panel"><img :src="`/origamis/dragon.jpg`" alt="" srcset=""></div>
            <div class="panel"><img :src="`/origamis/beetle.jpg`" alt="" srcset=""></div>
            <div class="panel"><img :src="`/origamis/squirel.jpg`" alt="" srcset=""></div>
            <div class="panel"><img :src="`/origamis/turtle.jpg`" alt="" srcset=""></div>
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
    background-color: blanchedalmond;
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
    pointer-events: none;
}

@media only screen and (max-width: 1100px) {
    .panel img {
        height: 116vw;
    }
}

</style>