const ProjectCard = ({ link, title, desc, img }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="card">
    <img src={img} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </a>
);

export default ProjectCard;