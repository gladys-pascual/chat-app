import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <img
        src="https://randomuser.me/api/portraits/women/27.jpg"
        alt="user"
        className="avatar"
      />
      <div>
        <p className="name">Constance Johnson</p>
        <div className="status">
          <a className="status-online"></a>
          <p className="status-text"> online </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
