import { createI18n } from 'vue-i18n';

const messages = {
    'fr': {
        app: {
            title: 'Bienvenue sur le portfolio de Alexandre Viala'
        },
        nav: {
            home: 'Accueil',
            projects: 'Projets',
            hobbys: 'Loisirs',
            skills: 'Compétences',
        },
        home: {
            date: 'Bonjour nous sommes le {date}',
            github_date: 'Dernière modification: {date}',
            aboutMe: 'À propos de moi',
            aboutMeContent: `
                Bonjour ! Je m'appelle Alexandre, et vous êtes actuellement sur la page d'accueil de mon portoflio.
                <br> Ici, vous pourrez trouver aussi bien tous les projets important que j'ai réalisés au cours 
                de mon parcours... Mais vous trouverez également les choses que j'aime. Il y a 
                d'ailleurs une chose que j'aime par dessus tout : c'est les grenouilles 🐸. Ne vous étonnez pas 
                d'en retrouver un peu partout sur ce site !`
        }
    },
    'en': {
        app: {
            title: 'Welcome to the portfolio of Alexandre Viala'
        },
        nav: {
            home: 'Home',
            projects: 'Projects',
            hobbys: 'Hobbys',
            skills: 'Skills',
        },
        home: {
            date: 'Hello today is {date}',
            github_date: 'Last updated: {date}',
            aboutMe: 'About me',
            aboutMeContent: `
                Hello ! My name is Alexandre, and you are currently on the home page of my portoflio.<br>
                Here, you will find both all the important projects that I have carried out during my career...
                But you will also find the things that I like. There is one thing I like above all else: frogs 🐸.
                Don't be surprised to find them everywhere on this website!`
        }
    }
};


export default createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages
})