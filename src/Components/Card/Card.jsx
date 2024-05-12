import "./Card.css";
import { RiSettings2Fill } from "react-icons/ri";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src="" alt="icon" className="" />
          <div className="status-indicator on"></div>
        </div>

        <div className="card-details">
          <h2>PC PAVILION</h2>
          <div className="settings-icon">
            <RiSettings2Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
