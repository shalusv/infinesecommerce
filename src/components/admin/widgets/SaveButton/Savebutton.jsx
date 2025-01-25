import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "./ExploreButton.css";

const Savebutton = ({ text, to }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    navigate(to); // Navigate to the route passed as the 'to' prop
  };

  return (
    <div className="explore" onClick={handleClick}>
      <div className="explore-button">
        <LuChevronLeft />
        <span className="title">{text}</span>
        <LuChevronRight />
      </div>
    </div>
  );
};

export default Savebutton;
