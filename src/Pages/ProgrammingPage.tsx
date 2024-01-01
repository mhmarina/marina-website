import ProjectCard from "../Components/ProjectCard";
import BUT from "../assets/programmingAssets/cover_image_1675885062.jpeg";
import AWS from "../assets/programmingAssets/aws.png";
import santa from "../assets/programmingAssets/end game illustration.png";
import effort from "../assets/programmingAssets/resize.png";
import GHC from "../assets/programmingAssets/next-is-now.png";
import "../App.css";

interface Project {
  title: string;
  image: string;
  description: string;
}

const project1: Project = {
  title: "Bulk Upload Tool",
  image: BUT,
  description:
    "During The Summer of 2023, I was a software engineering intern at The Home Depot. During this time, I gained valuable experience working on their internal Bulk Upload Tool. Over the course of this internship, I quickly learned and applied React.js. This tool will be used by hundreds of creatives within the company!",
};

const project2: Project = {
  title: "MyCO2",
  image: AWS,
  description:
    "During my freshman year of college, as an Amazon Cloud Scholar I participated in the AWS hackathon. This was my first ever introduction to coding, and I hadn't written a line of code prior. This experience introduced me to various cloud computing concepts and ignited in me a serious interest in computer science.",
};

const project3: Project = {
  title: "Santa Slays",
  image: santa,
  description:
    "One of my biggest motivations for entering the field of computer science is my interest in video games. In Winter of 2023, I participated in the Christmas Game Jam hosted by Blizzard and Unity. Over the course of 2 weeks, my team and I developed a first person shooter. This was an amazing experience and a great intro to game development.",
};

const project4: Project = {
  title: "EffortLogger 2.0",
  image: effort,
  description:
    "Working on this project taught me how to work with a group of engineers, as well as introduced me to SQL and helped me brush up on my Java and JavaFX knowledge.",
};

const project5: Project = {
  title: "Grace Hopper Conference 2022",
  image: GHC,
  description:
    "Attending the Grace Hopper Conference during my Sophomore year was one of the best experiences of my life. Not only did it introduce me to the various fields in computer science, it helped me land my first internship. Thanks to GHC, I gained better insight into what I wanted to do with my future.",
};

const projects: Project[] = [project1, project2, project3, project4, project5];

function ProgrammingPage() {
  return (
    <div className="programmingpage">
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          image={project.image}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProgrammingPage;
