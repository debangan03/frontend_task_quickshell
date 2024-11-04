import React from "react";
import three_dot_icon from '../Icons/three_dot_menu.svg';
import add from "../Icons/add.svg";
import doneicon from "../Icons/Done.svg";
import inprogressicon from "../Icons/in-progress.svg";
import cancelledicon from "../Icons/Cancelled.svg";
import todoicon from '../Icons/To-do.svg';
import backlogicon from "../Icons/Backlog.svg";
import TodoCard from "./TodoCard";
import highicon from '../Icons/Img - High Priority.svg';
import mediumicon from '../Icons/Img - Medium Priority.svg';
import lowicon from '../Icons/Img - Low Priority.svg';
import noprioicon from '../Icons/No-priority.svg';
import urgenticon from '../Icons/SVG - Urgent Priority colour.svg';
import usericon from '../Icons/userc.svg';
import './css/categorytemplate.css'; // Import the CSS file

function CategoryTemplate({ title, tickets }) {
    const title_to_icon = {
        "backlog": backlogicon,
        "todo": todoicon,
        "in progress": inprogressicon,
        "done": doneicon,
        "cancelled": cancelledicon,
        "3": highicon,
        "2": mediumicon,
        "1": lowicon,
        "0": noprioicon,
        "4": urgenticon
    };

    const title_map = {
        "backlog": "Backlog",
        "todo": "To Do",
        "in progress": "In Progress",
        "done": "Done",
        "cancelled": "Cancelled",
        "3": "High Priority",
        "2": "Medium Priority",
        "1": "Low Priority",
        "0": "No Priority",
        "4": "Urgent Priority"
    };

    const count = tickets.length;

    return (
        <div className="w-full  mt-2 p-2">
            <div className="flex justify-between items-center">
                <span className="flex justify-start space-x-2">
                    <img src={title_to_icon[title.toLowerCase()] ?? usericon} alt="icon" />
                    <h2 className="text-center capitalize text-sm font-semibold">
                        {title_map[title.toString()] || title} {" "}&nbsp; 
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
                <TodoCard key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
}

export default CategoryTemplate;
