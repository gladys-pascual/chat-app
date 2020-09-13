import React from "react";
import "./Contact.css";

const Contact = ({ name, avatar, online }) => {
  return (
    <div className="Contact">
      <img src={avatar} alt="avatar" className="avatar" />
      <div>
        <p className="name">{name}</p>
        <div className="status">
          <span className={online ? "status-online" : "status-offline"}> </span>
          <p className="status-text">{online ? "Online" : "Offline"} </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
