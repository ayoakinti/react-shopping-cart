import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function ServicesCard() {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <div className="service-icon-container">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <h4>Secured Payment</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    </div>
  );
}

export default ServicesCard;
