import { Link } from "react-router-dom";
import "./slider.css";

const ReactSlider = (props) => {
  const { trackDetails } = props;
  const { cover, name } = trackDetails;

  return (
    <Link to={`/song/${name}`} className="link-item">
      <div>
        <h1 className="carousal-name">{name}</h1>
        <img src={cover} alt={name} className="carousal-image" />
      </div>
    </Link>
  );
};

export default ReactSlider;
