/**
 * @typedef {Object} DetailData
 * @property {string} header
 * @property {string} description
 * @property {Link[]} links
 * @property {Section[]} sections
 * @property {string[]} techStack
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
        "description": "Breathe is a 2D top down game created in Unity 2D. It was created in the Summer of 2024 as part of Gameheads' Summer Accelerated Program (SAP). I worked as the primary programmer and secondary artist on this game. This was a lot of fun to develop!",
        "techStack": ["unity", "github", "C#"],
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
            "sectionHeader": "Prototyping & Ideation",
            "description": "Here are some videos of early prototyping of breathe inside Unity!",
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
        },
        {
            "sectionHeader": "Showcases",
            "description": "Breathe was unveiled during Gameheads' 10th Annual Games showcase. It was also showcased to hundreds of people in two games conferences",
            "media": [
                {"src": "/details/breathe/breathe-demo.gif",
                 "caption": "A demo of Breathe!"
                },
                {"src": "/details/breathe/breathe-x-gameheads-showcase.jpg",
                 "caption": "A poster of out game, showcased at Gameheads' 10th Annual Games Showcase!"
                }
            ]
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