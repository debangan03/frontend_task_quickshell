import React from "react";
import "./css/TodoCard.css";
import highicon from "../assets/Icons/Img - High Priority.svg";
import mediumicon from "../assets/Icons/Img - Medium Priority.svg";
import lowicon from "../assets/Icons/Img - Low Priority.svg";
import noprioicon from "../assets/Icons/No-priority.svg";
import urgenticon from "../assets/Icons/SVG - Urgent Priority grey.svg";
import on from "../assets/Icons/acuser.webp";
import off from "../assets/Icons/ofuser.webp";

function TodoCard({ ticket, user }) {
  const iconmap = {
    3: highicon,
    2: mediumicon,
    1: lowicon,
    0: noprioicon,
    4: urgenticon,
  };
  return (
    <div className="todo-card">
      <img
        src={!user.available ? off : on}
        height={20}
        width={20}
        style={{ position: "absolute", right: "10px", top: "20px", zIndex: 10 }}
        alt="usericon"
      />
      <div className="todo-card-content">
        <h6 className="todo-card-id">{ticket.id}</h6>
        <h3 className="todo-card-title">{ticket.title}</h3>
        {/* Render tags if available */}
        <ul
          className="todo-card-tag"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            {<img style={{position:"absolute",left:16}} src={iconmap[ticket.priority]} alt="p" />}&nbsp;{" "}
          </span>
          {ticket.tag && ticket.tag.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default TodoCard;
