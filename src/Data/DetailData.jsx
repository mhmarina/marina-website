export const detailData = {
    "monogame-game-engine": {
        "details": "DETAILS FOR MONOGAME !!"
    },
    "breathe": {
        "details": "DETAILS FOR BREATHE"
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