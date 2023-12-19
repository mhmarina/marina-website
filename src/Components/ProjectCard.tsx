import "../App.css";

function ProjectCard(props: any) {
  return (
    <div className="projectcard">
      <div className="textarea">
        <div className="textareatitle">{props.title}</div>
        <div>{props.description}</div>
      </div>
      <img src={props.image} />
    </div>
  );
}

export default ProjectCard;
