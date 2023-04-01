<template>
    <div class="game-container">
        <div class="game-displayer" ref="games" @click="extandSkills">

        </div>
    </div>
</template>
<script>
export default {
    name: "GameDisplayer",
    methods: {
        extandSkills: function () {
            if (!this.$refs.games.classList.contains("extanded") && !this.$refs.games.classList.contains("shrinked")) {
                this.$refs.games.classList.add("extanded");
            } else {
                this.$refs.games.classList.toggle("shrinked");
                this.$refs.games.classList.toggle("extanded");
            }


        }
    }
}
</script>
<style scoped>
.game-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
