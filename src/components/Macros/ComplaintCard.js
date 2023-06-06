import React from "react";
import { Card, Image } from "antd";
import { useNavigate } from "react-router-dom";

const ComplaintCard = ({ id, img, description, status }) => {
  const nav = useNavigate();
  img = img.split("?")[0];
  const handleCardClick = (id) => {
    nav(`/complaint/${id}`);
  };

  // Function to determine the CSS class based on the status
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "dot-red";
      case "Resolved":
        return "dot-green";
      case "Ongoing":
        return "dot-yellow";
      default:
        return "dot-red";
    }
  };

  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "darkred";
      case "Resolved":
        return "darkgreen";
      case "Ongoing":
        return "darkorange";
      default:
        return "darkred";
    }
  };

  status = status[0].toUpperCase() + status.slice(1);
  if (status === "In-progress") status = "Ongoing";

  return (
    <Card
      onClick={() => handleCardClick(id)}
      className="pb-4 w-[350px] cursor-pointer shadow-xl"
      cover={<Image src={img} alt="Complaint Image" width={350} height={150} />}
    >
      <div className="card-status">
        {/* Display a colored dot */}
        <span className={`dot ${getStatusColor(status)}`}></span>
        <div className={`status-box ${getStatusColor(status)}`}>
          <p className="text-t1 mt-3" style={{ color: getColor(status) }}>
            {status}
          </p>
        </div>
      </div>
      <div className="card-content">
        <p className="text-t1 mt-2 text-black">{description}</p>
      </div>
    </Card>
  );
};

export default ComplaintCard;
