<template>
    <div class="game-container">
        <div class="game-header">
            <div class="gamer-info">
                <div class="avatar">
                    <img src="@/assets/howlongtobeat-logo.svg" alt="HowLongToBeat logo" class="upper">
                    <img src="@/assets/languages/frog-placeholder.png" alt="Avatar picture" class="avatar-pic">
                </div>
                <a class="player-name" href="#">
                    L'Sacienne
                </a>
            </div>
            <svg class="up" viewBox="0 0 494 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.0692444L494 0.0692368C323 36.5 172.5 36 0 0.0692444Z" fill="#27197D" />
            </svg>
        </div>

        <div class="game-content">
            <div class="game">
                <div class="game-picture">
                    <img src="@/assets/languages/frog-placeholder.png" alt="">
                </div>
                <div class="game-infos">
                    <a class="game-title" href="#">
                        Frogger
                    </a>
                    <div class="game-platform">
                        3DO Max
                    </div>
                    <div class="game-finish">
                        Fini le 17/04/2022
                    </div>
                </div>
            </div>
            <div class="game">
                <div class="game-picture">
                    <img src="@/assets/languages/frog-placeholder.png" alt="">
                </div>
                <div class="game-infos">
                    <div class="game-title">
                        Frogger The return of the deathloop
                    </div>
                    <div class="game-platform">
                        3DO Max
                    </div>
                    <div class="game-finish">
                        Fini le 17/04/2022
                    </div>
                </div>
            </div>
            <div class="game">
                <div class="game-picture">
                    <img src="@/assets/languages/frog-placeholder.png" alt="">
                </div>
                <div class="game-infos">
                    <div class="game-title">
                        Frogger The return of the deathloop
                    </div>
                    <div class="game-platform">
                        3DO Max
                    </div>
                    <div class="game-finish">
                        Fini le 17/04/2022
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "GameDisplayer",
    props: {
        user: String
    },
    methods: {
    },
    mounted() {
        const url = 'https://howlongtobeat.com/api/user/441722/games/list'
        fetch(url, {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "user_id": 441722,
                    "lists": [
                        "completed"
                    ],
                    "set_playstyle": "comp_all",
                    "name": "",
                    "platform": "",
                    "storefront": "",
                    "sortBy": "",
                    "sortFlip": 0,
                    "view": "",
                    "random": 0,
                    "limit": 10,
                    "currentUserHome": false
                }
            )
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }
}
</script>
<style scoped>
.game-container {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgba(13, 9, 38, .8);
}

.game-header {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
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
    overflow: hidden;
    border-radius: .3rem;
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
    font-family: "LilitaOne", Helvetica, serif;
    font-size: 2rem;
}

.game-content {
    justify-self: flex-start;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    gap: 1rem;
}

.game-content::-webkit-scrollbar {
    display: none;
    /* for Chrome, Safari, and Opera */
}

.game-content .game:first-child {
    margin-top: 35%;
}

.game-content .game:last-child {
    margin-bottom: 5%;
}

.game-content .game {
    display: inline-flex;
    border: 0.2rem solid white;
    align-items: center;
    gap: 2rem;
    border-radius: 1rem;
    padding: 1rem;
    width: 90%;
}

.game .game-picture {
    aspect-ratio: 1 / 1;
    height: 10vh;
    border-radius: .8rem;
    box-shadow: 0 0 15px 4px #8FBAED;
}

.game .game-picture img {
    width: 100%;
    height: 100%;
}

.game .game-infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

.game .game-infos .game-title {
    font-family: "LilitaOne", Helvetica, serif;
    font-size: 2rem;
    color: #00D7E5;
    text-shadow: 0 0 30px #00D7E5;
}

.game .game-infos .game-platform {
    font-family: "LilyScriptOne", Helvetica, serif;
    font-size: 1.6rem;
    color: #E937F9;
    text-shadow: 0 0 30px #E937F9;
}

.game .game-infos .game-finish {
    font-family: "Orbitron", Helvetica, serif;
    font-size: 1.2rem;
    color: #52F937;
    text-shadow: 0 0 30px #52F937;
}
</style>
