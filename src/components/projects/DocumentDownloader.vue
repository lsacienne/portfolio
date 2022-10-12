<template>
    <a :href=file_url class="container">
        <div class="file-icon">
            <img src="@/assets/icons/download_google.svg" alt="Download file">
        </div>
        <p>
            <slot>
                File
            </slot>
        </p>
    </a>
</template>

<script>
    export default {
        name: "DocumentDownloader",
        props: {
            file_url: {
                type: String,
                required: true
            }
        },
        created() {
            console.log(this.file_url)
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        height: 4rem;
        padding: 0.5rem;
        align-items: center;
        border: 0.2rem solid white;
        border-radius: 1rem;
    }

    .container:hover {
        background-color: rgb(255, 228, 196,10%);
    }

    .container {
        color: white;
        text-decoration: none;
    }

    .container:visited {
        color: #42b983;
        text-decoration: none;
    }

    .file-icon {
        margin-right: 1rem;
        border-radius: 1rem;
    }

    .file-icon>img {
        height: 100%;
        color: white;
    }



</style>