<template>
    <div class="game-container">
        <div class="game-displayer" ref="games" @click="extandSkills">
            <div class="game-header">
                <div class="gamer-info">
                    <div class="avatar">
                        <img src="@/assets/howlongtobeat-logo.svg" alt="HowLongToBeat logo" class="upper">
                        <img src="@/assets/languages/frog-placeholder.png" alt="Avatar picture" class="avatar-pic">
                    </div>
                    <div class="player-name">
                        L'Sacienne
                    </div>
                </div>
                <svg class="up" viewBox="0 0 494 28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0692444L494 0.0692368C323 36.5 172.5 36 0 0.0692444Z" fill="#27197D" />
                </svg>
            </div>

            <div class="game-content">
                test
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "GameDisplayer",
    methods: {
    }
}
</script>
<style scoped>
.game-container {
    position: relative;
    height: 100%;
    width: 100%;
    display: block;
    background-color: rgba(13, 9, 38, .8);
}

.game-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.game-header svg {
    width: 100%;
    margin: 0;
}

.gamer-info {
    width: 100%;
    padding-top: 1rem;
    background-color: #27197D;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
}

.gamer-info .avatar {
    position: relative;
    width: 20%;
    aspect-ratio: 1/1;
    background-color: white;
    overflow: hidden;
    border-radius: .5rem;
}

.gamer-info .avatar img.avatar-pic {
    height: 100%;
}

.gamer-info .avatar img.upper {
    position: absolute;
    height: 30%;
    top: 0;
    right: 0;
}

.gamer-info .player-name {
    color: white;
}
</style>
