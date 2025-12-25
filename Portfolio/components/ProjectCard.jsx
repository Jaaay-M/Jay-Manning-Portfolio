import { Link } from "react-router-dom";

const ProjectCard = ({ link, title, brief, img }) => (
  <Link to={link} className="card">
    <img src={img} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
    </div>
    <div className="card-brief">
    <p>{brief}</p>
    </div>
  </Link>
);

export default ProjectCard;