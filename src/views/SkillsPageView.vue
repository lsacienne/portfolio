<template>
    <div class="container">
        <LanguageBadge languageName="Vue-3" imgSource="vue-logo.png"
            :badgesList="['https://github.com/lsacienne/calendar-maker', 'https://github.com/lsacienne/portfolio']">
            Vue 3 est un framework front-end pour le langage Javascript. Il permet de concevoir
            des sites internets front-end.<br>
            J'ai eu l'ocassion d'utiliser ce framework afin de réaliser ce portfolio ainsi que
            la deuxième version de mon logiciel calendar-maker.
        </LanguageBadge>
        <LanguageBadge languageName="CSS" imgSource="logo-css.png" :badgesList="[
            'https://github.com/lsacienne/portfolio',
            'https://github.com/lsacienne/ifd_site',
            'https://github.com/lsacienne/calendar-maker',
            'https://github.com/lsacienne/Site_congres_A21',
            'https://github.com/lmichel/alix',
        ]">
            CSS est un langage de feuilles de cascade. Son but est de styliser des pages
            HTML principalement.<br>
            J'ai eu l'occasion de l'utiliser dès mes premières utilisation d'HTML.
        </LanguageBadge>
        <LanguageBadge languageName="HTML" imgSource="logo-html.png" :badgesList="[
            'https://github.com/lsacienne/ifd_site',
            'https://github.com/lsacienne/portfolio',
            'https://github.com/lsacienne/calendar-maker',
            'https://github.com/lsacienne/Site_congres_A21'
        ]">
            HTML est un langage de balisage. Il permet de définir le contenu d'un document texte.
            Ces docuements peuvent ensuite être distribués sur internet au travers du protocole HTTP.<br>
            J'utilise très souvent HTML afin de réaliser des interfaces rapidement pour des concepts.
        </LanguageBadge>
        <LanguageBadge languageName="Javascript" imgSource="Unofficial_JavaScript_logo_2 1.png" :badgesList="[
            'https://github.com/lsacienne/calendar-maker',
            'https://github.com/lsacienne/portfolio',
            'https://github.com/lsacienne/advent_of_code_2023',
            'https://github.com/Clamorae/Bandle_Mayor',
            'https://github.com/lsacienne/gpa-bot',
            'https://github.com/lmichel/alix',
            'https://github.com/lsacienne/Site_congres_A21'
        ]">
            Javascript est un langage de programmation multiparadigme faiblement typé. Il s'agit d'un des deux
            seuls langages de programmation, avec WebAssembly, directement interprétable par les navigateurs modernes.<br>
            Mon utilisation de Javascript se cantonne principalement au développement de fonctionnalités front-end
            d'applications. J'utilise notamment les fonctionnalités de canvas, d'objets et d'asynchronisme afin de réalier
            cesdites fonctionnalités.<br>
            J'utilise également Javascript avec l'utilitaire Node afin de concevoir rapidement des algorithmes
            mais également pour réaliser des robots Discord.
        </LanguageBadge>
        <LanguageBadge languageName="Typescript" imgSource="Typescript_logo_2020.svg.png"
            :badgesList="['https://github.com/lsacienne/calendar-maker']">
            Typescript est un langage de programmation dérivé du Javascript qui permet de rendre ce dernier
            plus robuste et extensif à l'aide, notamment, de fonctionnalités de typage fort.<br>
            J'ai eu l'occasion d'utiliser Typescript pour réaliser la version 2 de monn générateur d'emplois du temps
            (toujours en cours de développement).
        </LanguageBadge>
        <LanguageBadge languageName="C" imgSource="c_programming_language.png"
            :badgesList="['https://github.com/lsacienne/belote_L_A', 'https://github.com/QuinD3cim/LO21_Project', 'https://github.com/lsacienne/LP25_project']">
            Le langage C est un langage de programmation particulièrement performant utilisé depuis de nombreuses
            années. Il est principalement utilisé dans le développement de solutions dédiées au bas niveau (robotique,
            systèmes d'exploitations, drivers, etc.).<br>
            J'ai beaucoup utilisé le langage C au cours de mes études pour des cours d'initiation à l'informatique. Ces
            projets consistaient souevent à maîtriser des fonctionnalités particulières du C comme les structures de
            données, les fonctionnalités unix (getopts par exemple) ou encore différents algorithmes basiques
            (tri à bulles, tri par insertion, recherche binaire, tri rapide, etc.).
        </LanguageBadge>
        <LanguageBadge languageName="C++" imgSource="Cpp_Logo.png"
            :badgesList="['https://github.com/lsacienne/CPP_practical_sessions', 'https://github.com/lsacienne/jiang_viala_tp_fiits']">
            Le langage C++ est un langage de programmation multi-paradigme. Contrairement au langage C qui n'utilise
            que le paradigme impératif, le C++ peut également être également utilisé en programmation orientée objet.
            C'est un langage largement utilisé pour la programmation graphique notamment grâce à OpenGL.<br>
            J'ai eu l'occasion d'utiliser ce langage pendant mes cours à l'UTBM pour apprendre les fonctionnalités de
            base du langage comme la surcharge d'opérateur ou la définition des classes, méthodes, etc.<br>
            J'ai également eu l'occasion d'utiliser ce langage pour travailler avec l'API Qt permettant de réaliser
            des interfaces utilisateur en C++.

        </LanguageBadge>
        <LanguageBadge languageName="C#" imgSource="c_sharp.png"
            :badgesList="['https://github.com/lsacienne/LP2B_project_unity_game', 'https://github.com/la-ferme-en-folie/MV50']">
            C# Est un langage de programmation orientée objet. Il a été créé par Microsoft pour son framework .NET.<br>
            J'ai eu l'occasion d'utiliser ce langage pour programmer différentes applications sur Unity.
        </LanguageBadge>
        <LanguageBadge languageName="Unity" imgSource="unity.png"
            :badgesList="['https://github.com/lsacienne/LP2B_project_unity_game', 'https://github.com/la-ferme-en-folie/MV50']">
            Unity est un moteur de jeu multi-plateforme permettant notamment de réaliser des jeux-vidéos.<br>
            J'ai eu l'occasion d'utiliser unity pour réaliser des applications en 2D et en 3D.
        </LanguageBadge>
        <LanguageBadge languageName="Python" imgSource="Python_logo_01.svg.png"
            :badgesList="['https://github.com/lsacienne/akari', 'https://github.com/lmichel/alix']">
            Python est un langage de programmation multi-paradigme. Ce langage est largement utilisé pour sa syntaxe
            simple et sa grande polyvalence grâce à son gestionaire de bibliothèques <i>pip</i>.<br>
            J'ai eu l'occasion d'utiliser Python pour réaliser différents projets. J'ai notamment eu l'occasion
            d'utiliser le framework <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> permettant de réaliser
            le backend d'une application web par la création d'uen REST API.<br>
            J'ai également eu l'occasion d'utiliser les bibliothéques <a
                href="https://docs.python.org/fr/3/library/tkinter.html">Tkinter</a>, <a
                href="https://matplotlib.org/">MatplotLib</a>,
            <a href="https://pandas.pydata.org/">Pandas</a> et CUDA Python.
        </LanguageBadge>
        <LanguageBadge languageName="Java" imgSource="Java_Logo.svg.png"
            :badgesList="['https://github.com/toma68650/ProjectLLP2A', 'https://github.com/QuinD3cim/AP4B_Lumber']">
            Java est un langage de programmation orientée objet. Ce langage a pour particularité d'être particulièrement
            portable grâce à l'utilisation d'une machine virtuelle (JVM).<br>
            J'ai eu l'occasion d'utiliser ce langage pour créer une application graphique. C'est également avec
            ce langage que j'ai acquis mes premières compétences en programmation orientée objet.
        </LanguageBadge>
        <LanguageBadge languageName="Kotlin" imgSource="Kotlin_Icon.svg.png"
            :badgesList="['https://github.com/lsacienne/SY43_P2022_lafo_cheuse']">
            Kotlin est un langage de programamtion orientée objet. Ce langage a été développé par l'entreprise
            JetBrains connue pour sa suite de logiciels d'environnement de développement intégré (IDE).<br>
            Tout comme Java, ce langage fonctionne sur la Machine virtuelle Java (JVM). Kotlin a pour particularité
            d'être plus simple à aborder que Java grâce à sa syntaxe bien moins verbeuse que Java. Le langage utilise
            également des notions introduites dans d'autres langages comme les coroutines (ces dernières remplacent
            les threads de Java).<br>
            J'ai eu l'occasion d'utiliser ce langage pour la conception d'une application Android.
        </LanguageBadge>
        <LanguageBadge languageName="SQL, MySQL, SQLite" imgSource="SQLite370.png"
            :badgesList="['https://github.com/lsacienne/ifd_site', 'https://github.com/lsacienne/SY43_P2022_lafo_cheuse', 'https://github.com/lmichel/alix']">
            SQL est le langage de requête le plus utilisé. Il permet de réaliser des requêtes sur des
            bases de données relationnelles. Certains langages de requêtes comme <a
                href="https://www.ivoa.net/documents/ADQL/20180112/PR-ADQL-2.1-20180112.html">ADQL</a>
            (Astronomical Data Query Language) ou <a href="https://cassandra.apache.org/doc/latest/cassandra/cql/">CQL</a>
            (Cassandra Query Language)
            se basent fortement sur SQL.<br>
            SQL est utilisé avec ce que l'on appelle un système de gestion de base de données (SGBD). Ces derniers
            correspondent à l'implémentation de la base de données. La plupart de ces systèmes sont des
            implémentations serveur nécessitant de tourner sur un démon pour fonctionner. C'est le cas de MySQL ou de
            PostGreSQL. D'autres systèmes n'utilisent pas de démon et conviennent mieux à des données embarquées. C'est
            notamment le cas de SQLite.<br>
            J'ai eu l'occasion d'apprendre de nombreuses notions de SQL sur les SGBD MySQL et Microsoft Access. J'ai
            également eu l'occasion d'utiliser le SGBD SQLite pour le développement d'une application Android et
            pour la réalisation d'un service Web en Python/Flask.
        </LanguageBadge>
        <LanguageBadge languageName="PHP" imgSource="PHP-logo.svg.png"
            :badgesList="['https://github.com/lsacienne/calendar-maker', 'https://github.com/lsacienne/portfolio']">
            Vue 3 est un framework front-end pour le langage Javascript. Il permet de concevoir
            des sites internets front-end.<br>
            J'ai eu l'ocassion d'utiliser ce framework afin de réaliser ce portfolio ainsi que
            la deuxième version de mon logiciel calendar-maker.
        </LanguageBadge>
        <LanguageBadge languageName="Android" imgSource="Android_robot.svg.png"
            :badgesList="['https://github.com/lsacienne/calendar-maker', 'https://github.com/lsacienne/portfolio']">
            Vue 3 est un framework front-end pour le langage Javascript. Il permet de concevoir
            des sites internets front-end.<br>
            J'ai eu l'ocassion d'utiliser ce framework afin de réaliser ce portfolio ainsi que
            la deuxième version de mon logiciel calendar-maker.
        </LanguageBadge>
        <LanguageBadge languageName="Figma" imgSource="Figma-logo.svg"
            :badgesList="['https://github.com/lsacienne/calendar-maker', 'https://github.com/lsacienne/portfolio']">
            Vue 3 est un framework front-end pour le langage Javascript. Il permet de concevoir
            des sites internets front-end.<br>
            J'ai eu l'ocassion d'utiliser ce framework afin de réaliser ce portfolio ainsi que
            la deuxième version de mon logiciel calendar-maker.
        </LanguageBadge>
    </div>
</template>
<script>
import LanguageBadge from '@/components/skills/LanguageBadge.vue';

export default {
    name: "SkillsPageView",
    data() {
        return {};
    },
    components: { LanguageBadge }
}
</script>

<style scoped>
.container {
    width: 100%;
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
}
</style>