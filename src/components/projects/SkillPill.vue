<template>
    <div class="pill">
        <div class="img"><img :src="imgSrc" :alt="skillName + ' logo'"></div>
        <div class="name">{{ skillName }}</div>
    </div>
</template>

<script>
export default {
    name: "SkillPill",
    props: {
        skill: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            imgMap: new Map(),
            nameMap: new Map()
        }
    },
    created() {
        // Initialize imgMap
        this.imgMap.set("vue", "./languages/vue-logo.png");
        this.imgMap.set("csharp", "./languages/c_sharp.png");
        this.imgMap.set("c", "./languages/c_programming_language.png");
        this.imgMap.set("cpp", "./languages/Cpp_Logo.png");
        this.imgMap.set("figma", "./languages/Figma-logo.svg");
        this.imgMap.set("java", "./languages/Java_Logo.svg.png");
        this.imgMap.set("kotlin", "./languages/Kotlin_Icon.svg.png");
        this.imgMap.set("css", "./languages/logo-css.png");
        this.imgMap.set("html", "./languages/logo-html.png");
        this.imgMap.set("php", "./languages/PHP-logo.svg.png");
        this.imgMap.set("python", "./languages/Python_logo_01.svg.png");
        this.imgMap.set("sqlite", "./languages/SQLite370.png");
        this.imgMap.set("mysql", "./languages/MySQL.svg");
        this.imgMap.set("typescript", "./languages/Typescript_logo_2020.svg.png");
        this.imgMap.set("unity", "./languages/unity.png");
        this.imgMap.set("javascript", "./languages/Unofficial_JavaScript_logo_2 1.png");

        // initialize nameMap
        this.nameMap.set("vue", "Vue JS");
        this.nameMap.set("csharp", "C#");
        this.nameMap.set("c", "C lang");
        this.nameMap.set("cpp", "C++");
        this.nameMap.set("figma", "Figma");
        this.nameMap.set("java", "Java");
        this.nameMap.set("kotlin", "Kotlin");
        this.nameMap.set("css", "CSS");
        this.nameMap.set("html", "HTML");
        this.nameMap.set("php", "PHP");
        this.nameMap.set("python", "Python");
        this.nameMap.set("sqlite", "SQLite");
        this.nameMap.set("mysql", "MySQL");
        this.nameMap.set("typescript", "Typescript");
        this.nameMap.set("unity", "Unity");
        this.nameMap.set("javascript", "Javascript");
    },
    computed: {
        imgSrc() {
            return this.imgMap.get(this.skill);
        },
        skillName() {
            return this.nameMap.get(this.skill);
        }
    }
}
</script>

<style scoped>
.pill {
    display: inline-flex;
    height: 2.5rem;
    border-radius: 2rem;
    background-color: rgba(0, 83, 25, 0.5);
    padding: .2rem;
    padding-right: 1rem;
    padding-left: 1rem;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

.img {
    height: 50%;
    aspect-ratio: 1/1;
}

.img>img {
    height: 100%;
}

.name {
    color: azure;
    font-size: 1rem;
}
</style>