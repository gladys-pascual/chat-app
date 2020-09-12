import React from "react";
import "./Contact.css";

const Contact = ({ avatar, name, isOnline }) => {
  return (
    <div className="Contact">
      <img src={avatar} alt="avatar" className="avatar" />
      <div>
        <p className="name">{name}</p>
        <div className="status">
          <span className={isOnline ? "status-online" : "status-offline"}>
            {" "}
          </span>
          <p className="status-text">{isOnline ? "Online" : "Offline"} </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
