import React from "react";
import "./css/TodoCard.css";
import highicon from "../Icons/Img - High Priority.svg";
import mediumicon from "../Icons/Img - Medium Priority.svg";
import lowicon from "../Icons/Img - Low Priority.svg";
import noprioicon from "../Icons/No-priority.svg";
import urgenticon from "../Icons/SVG - Urgent Priority grey.svg";

function TodoCard({ ticket }) {
  const iconmap = {
    3: highicon,
    2: mediumicon,
    1: lowicon,
    0: noprioicon,
    4: urgenticon,
  };
  return (
    <div className="todo-card">
      <div className="todo-card-content">
        <h6 className="todo-card-id">{ticket.id}</h6>
        <h3 className="todo-card-title">{ticket.title}</h3>
        {/* Render tags if available */}
        {ticket.tag &&
          ticket.tag.map((item, i) => (
            <span className="todo-card-tag" style={{display:"flex" ,alignItems:"center",justifyContent:"start"}} key={i}>
             {<img src={iconmap[ticket.priority]} alt="p" />}&nbsp; {item}
            </span>
          ))}
      </div>
    </div>
  );
}

export default TodoCard;
