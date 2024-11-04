import React from "react";
import three_dot_icon from "../assets/Icons/three_dot_menu.svg";
import add from "../assets/Icons/add.svg";
import doneicon from "../assets/Icons/Done.svg";
import inprogressicon from "../assets/Icons/in-progress.svg";
import cancelledicon from "../assets/Icons/Cancelled.svg";
import todoicon from "../assets/Icons/To-do.svg";
import backlogicon from "../assets/Icons/Backlog.svg";
import TodoCard from "./TodoCard";
import highicon from "../assets/Icons/Img - High Priority.svg";
import mediumicon from "../assets/Icons/Img - Medium Priority.svg";
import lowicon from "../assets/Icons/Img - Low Priority.svg";
import noprioicon from "../assets/Icons/No-priority.svg";
import urgenticon from "../assets/Icons/SVG - Urgent Priority colour.svg";
import usericon from "../assets/Icons/userc.svg";
import "./css/categorytemplate.css"; // Import the CSS file
import acuser from "../assets/Icons/acuser.webp";
import offuser from "../assets/Icons/ofuser.webp";

function CategoryTemplate({ title, tickets, users }) {
  //console.log(users);

  const title_to_icon = {
    backlog: backlogicon,
    todo: todoicon,
    "in progress": inprogressicon,
    done: doneicon,
    cancelled: cancelledicon,
    3: highicon,
    2: mediumicon,
    1: lowicon,
    0: noprioicon,
    4: urgenticon,
  };

  const title_map = {
    backlog: "Backlog",
    todo: "To Do",
    "in progress": "In Progress",
    done: "Done",
    cancelled: "Cancelled",
    3: "High Priority",
    2: "Medium Priority",
    1: "Low Priority",
    0: "No Priority",
    4: "Urgent Priority",
  };

  const count = tickets.length;

  return (
    <div className="w-full  mt-2 p-2">
      <div className="flex justify-between items-center">
        <span className="flex justify-start space-x-2">
          {title_to_icon[title.toLowerCase()] != null ? (
            <img src={title_to_icon[title.toLowerCase()]} alt="icon" />
          ) : users[title.toLowerCase()]?.available ? (
            <img height={30} width={30} src={acuser} alt="icon" />
          ) : (
            <img height={30} width={30} src={offuser} alt="icon" />
          )}
          <h2 className="text-center capitalize text-sm font-semibold">
            {title_map[title.toString()] || title} &nbsp;
            <span className="text-sm text-gray-500 font-normal">{count}</span>
          </h2>
        </span>
        <span className="flex justify-center">
          <img src={add} alt="addicon" />
          <img src={three_dot_icon} alt="menu icon" />
        </span>
      </div>

      {/* Render each ticket in this category */}
      {tickets.map((ticket) => (
        <TodoCard key={ticket.id} ticket={ticket} user={users[ticket?.userId]} />
      ))}
    </div>
  );
}

export default CategoryTemplate;
