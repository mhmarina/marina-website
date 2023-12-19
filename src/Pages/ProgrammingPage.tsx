import ProjectCard from "../Components/ProjectCard";

interface Project {
  title: string;
  image: string;
  description: string;
}

const project1: Project = {
  title: "Bulk Upload Tool",
  image: "src/assets/cover_image_1675885062.jpeg",
  description:
    "During The Summer of 2023, I was a software engineering intern at The Home Depot. During this time, I gain valuable experience working on theit internal Bulk Upload Tool. Over the course of this internship, I quickly learned and applied React.js. This tool will be used by hundreds of creatives within the company!",
};

const project2: Project = {
  title: "MyCO2",
  image: "src/assets/aws.png",
  description:
    "During my freshman year of college, as an Amazon Cloud Scholar I participated the AWS hackathon. Not only was this my first hackathon ever, it was my first ever introduction to coding. This experience introduced me to various cloud computing concepts and ignited an interest in computer science.",
};

const project3: Project = {
  title: "Santa Slays",
  image: "src/assets/end game illustration.png",
  description:
    "One of the biggest motivations for entering the field of computer science is my interest in video games. In Winter of 2023, I participated in the Christmas Game Jam hosted by Blizzard and Unity. Over the course of 2 weeks, my team and I developed a first person shooter. This was an amazing experience and a great into to game development.",
};

const project4: Project = {
  title: "EffortLogger",
  image: "src/assets/resize.png",
  description:
    "Although most of the CSE360 course was a drag, working on this project taught me how to work with a group of engineers, as well as helped me brush up on my Java and JavaFX skills.",
};

const project5: Project = {
  title: "Grace Hopper Conference 2022",
  image: "src/assets/next-is-now.png",
  description:
    "Being awarded the GHC2022 scholarship during my Sophomore year was one of the best experiences of my life. Not only did it introduce me to various fields in computer science, it helped me land my first internship and helped me get my foot in the door. Thank to GHC, I gained better insight into what I want to do with my future.",
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
