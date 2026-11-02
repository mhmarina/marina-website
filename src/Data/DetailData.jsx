/**
 * @typedef {Object} DetailData
 * @property {string} header
 * @property {string} description
 * @property {Link[]} links
 * @property {Section[]} sections
 * @property {string[]} techStack
 * @property {Media[]} hero
 * @property {string[]} custom
 */

/** 
 * @typedef {Object} Section
 * @property {Media[]} media // videos, images
 * @property {string} sectionHeader
 * @property {string} description
 */

/**
 * @typedef {Object} Media
 * @property {string} src
 * @property {string} caption
 */

/**
 * @typedef {Object} Link
 * @property {string} domain //ex github, determin icon, or use a helper function
 * @property {string} url
 * @property {string} display
 */

export const detailData = {
    "breathe": {
        "header": "Breathe",
        "description": "Breathe is a 2D top down game where the player roleplays as a kupuna from Hawaiian mythology, whose goal is to vanquish the Mo’o monsters plaguing their home in Waipi’o valley. The game was created as part of Gameheads' Summer Accelerated Program (SAP) for 2024, and was showcased at 2025 Conference on BIPOC Game Studies at Strong Museum of Play, RIT EDGE, and Honolulu Museum.",
        "techStack": ["unity", "github", "C#"],
        "hero": [{
            "src": "/details/breathe/breathe-demo.gif",
            "caption": "A demo of Breathe!"
        }],
        "links": [{
            "domain": "itch.io",
            "url": "https://gameheads.itch.io/breathe",
            "display": "Play Breathe on itch!" //there should be default display based on domain
        },
        {
            "domain": "github",
            "url": "https://github.com/mhmarina/Gameheads-SAP-2024"
        },
        {
            "domain": "youtube",
            "url": "https://www.youtube.com/watch?v=IO3P7k5acmE",
            "display": "Watch the trailer for Breathe!"
        }],
        "sections": [{
            "sectionHeader": "Prototyping",
            "description": "Here are some videos of early prototyping of Breathe inside Unity! A lot of work was done to develop the core mechanic of inhaling and exhaling both the enemies as well as the mana.",
            "media": [
                {"src": "/details/breathe/prototype-sc.png"},
                {"src": "/details/breathe/prototype-1.gif"},
                {"src": "/details/breathe/prototype-2.gif"},
                {"src": "/details/breathe/prototype-3.gif"},
            ]
        },
        {
            "sectionHeader": "Art",
            "description": "I contributed to some of the background art for Breathe for some of our cutscenes!",
            "media": [
                {"src": "/details/breathe/bg1.png"},
                {"src": "/details/breathe/bg2.png"},
                {"src": "/details/breathe/bg3.png"},
                {"src": "/details/breathe/art-in-game.jpg",
                 "caption": "My background art beautifully composed in game by our artist Serena Cai!"
                }
            ]
        }]
    },
    "valkyrie": {
        "header": "Valkyrie",
        "hero": [
        {
            "src": "/details/valkyrie/concept-sketch.png",
            "caption": "Early concept art for Valkyrie"
        },
        {
            "src": "/details/valkyrie/concept-art.png",
            "caption": "Visual Development for Valkyrie"
        }],
        "description": "Valkrie is a 2D platformer made in Gamemaker2. I solo developed this game includng GML scripting, UI design, illustrations, animations, level design as well as narrative design! This game has both a web build as well as a windows build.",
        "links": [{
            "domain": "itch.io",
            "url": "https://mhmarina.itch.io/valkyrie",
            "display": "Play Valkyrie!"
        }]
    },
    "alder-mayo":{
        "header": "Alder Mayo",
        "description": "In a partnership with Mayo Clinic, a team of Next Lab student workers are creating a virtual reality training simulation for medical students to practice diagnosing strokes. As a programmer on this project with NEXT Lab, I worked on desigining and implementing responsive, event driven systems, both XR and desktop controls, User Interface, Audio recognition, and more.",
        "links": [{
            "domain": "unity",
            "url": "https://alder-mayo-sept-8-2025.netlify.app/",
            "display": "Try the demo!"
        },
        {
            "domain": "readme",
            "url": "https://nextlab.asu.edu/alder-mayo/",
            "display": "Read Next Lab's blog"
        }],
        "hero": [{
            "src": "/details/alder-mayo/aldermayo.webp"
        },
        {
            "src": "/details/alder-mayo/early-dev.png",
            "caption": "Early development of the project featuring Susan"
        }],
        "sections": [{
            "sectionHeader": "Features",
            "description": "In a real stroke assessment, a provider would assess a patient based on visuals, such as droop eyes, sound, such as slurred speech, as well as interacting with them: such as their response to commands like raising their arm or reading simple words. We set out to build digital twins of stroke patients that students are The Mayo Clinic can train on in virtual reality. The experience would also be able to evaluate a student's assessments.",
            "media": [{
                "src": "/details/alder-mayo/harold-armup.png",
                "caption": "Harold responding to raising his arms up"
            },
            {
                "src": "/details/alder-mayo/assessment.png",
                "caption": "Interactable tablet used to assess"
            },
            {
                "src": "/details/alder-mayo/harold-dab.png"
            }]
        }]
    }
}

// Snippet to load custom components:
// import WeatherDemo from "../components/demos/WeatherDemo";

// export const detailsData = {
//   "weather-app": {
//     description: "Longer write-up...",
//     techStack: ["React"],
//     Custom: WeatherDemo,   // only this project has one
//   },
//   "portfolio-site": {
//     description: "...",
//     techStack: ["React", "Vite"],
//   },
// };

// // pages/ProjectDetails.jsx
// function ProjectDetails() {
//   const { id } = useParams();
//   const details = detailsData[id];
//   const Custom = details.Custom;

//   return (
//     <article>
//       <h1>{previewData.find(p => p.id === id).title}</h1>
//       <p>{details.description}</p>
//       {Custom && <Custom />}
//     </article>
//   );
// }