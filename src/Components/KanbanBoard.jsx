import React, { useState, useEffect } from "react";
import CategoryTemplate from "./CategoryTemplate";
import displayicon from "../Icons/Display.svg";
import downicon from "../Icons/down.svg";

function KanbanBoard({ Data }) {
  const [FilterOptions, setFilterOptions] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status"); // Grouping criteria state
  const [orderBy, setOrderBy] = useState("priority"); // Ordering criteria state

  useEffect(() => {
    if (Data) {
      setTickets(Data.tickets);
      setUsers(Data.users);
    }
  }, [Data]);

  const toggleOptions = () => {
    setFilterOptions(!FilterOptions);
  };

  const handleGroupChange = (e) => {
    setGroupBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  //   const groupedTickets = () => {
  //     const groups = {};

  //     tickets.forEach((ticket) => {
  //       let key;
  //       switch (groupBy) {
  //         case "status":
  //           key = ticket.status.toLowerCase();
  //           break;
  //         case "user":
  //           key = ticket.assignedUser || "unassigned"; // Group by user or 'unassigned' if no user
  //           break;
  //         case "priority":
  //           key = ticket.priority; // Group by priority level
  //           break;
  //         default:
  //           key = ticket.status.toLowerCase();
  //       }

  //       if (!groups[key]) {
  //         groups[key] = [];
  //       }
  //       groups[key].push(ticket);
  //     });

  //     // Sort tickets within each group based on selected ordering criteria
  //     Object.keys(groups).forEach((group) => {
  //       groups[group].sort((a, b) => {
  //         if (orderBy === "priority") {
  //           return b.priority - a.priority; // Higher priority first
  //         } else if (orderBy === "title") {
  //           return a.title.localeCompare(b.title); // Alphabetical order
  //         }
  //         return 0;
  //       });
  //     });

  //     return groups;
  //   };

  const groupedTickets = () => {
    if (!tickets || tickets.length === 0) return {}; // Return an empty object if tickets are undefined or empty

    const groups = {};

    tickets.forEach((ticket) => {
      let key;
      switch (groupBy) {
        case "status":
          key = ticket.status.toLowerCase();
          break;
        case "user":
          key = ticket.userId || "unassigned"; // Group by user or 'unassigned' if no user
          break;
        case "priority":
          key = ticket.priority; // Group by priority level
          break;
        default:
          key = ticket.status.toLowerCase();
      }

      if (!groups[key]) {
        groups[key] = [];
      }
      
      groups[key].push(ticket);
      if(groups["todo"]==null && groupBy=="status") {
        groups["todo"] = [];
      }
      if(groups["in progress"]==null && groupBy=="status") {
        groups["in progress"] = [];
      }if(groups["backlog"]==null && groupBy=="status") {
        groups["backlog"] = [];
      }if(groups["done"]==null && groupBy=="status") {
        groups["done"] = [];
      }if(groups["cancelled"]==null && groupBy=="status") {
        groups["cancelled"] = [];
      }
    });

    // Sort tickets within each group based on selected ordering criteria
    Object.keys(groups).forEach((group) => {
      groups[group].sort((a, b) => {
        if (orderBy === "priority") {
          return b.priority - a.priority; // Higher priority first
        } else if (orderBy === "title") {
          return a.title.localeCompare(b.title); // Alphabetical order
        }
        return 0;
      });
    });

    return groups;
  };

  return (
    <div className="relative w-full h-full">
      {FilterOptions && (
        <div
          onMouseLeave={() => setFilterOptions(false)}
          className="absolute top-14 left-8 bg-white border w-64 p-4 rounded-lg z-30 shadow-md"
        >
          <form>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="group" className="text-sm font-medium">
                  Grouping
                </label>
                <select
                  className="border border-gray-300 rounded-md p-1 text-sm"
                  name="group"
                  id="group"
                  value={groupBy}
                  onChange={handleGroupChange}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="order" className="text-sm font-medium">
                  Ordering
                </label>
                <select
                  className="border border-gray-300 rounded-md p-1 text-sm"
                  name="order"
                  id="order"
                  value={orderBy}
                  onChange={handleOrderChange}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-start bg-white p-2 rounded-md shadow-sm">
        <button
          onClick={toggleOptions}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-md hover:bg-gray-200"
        >
          <img src={displayicon} alt="display" />
          <span className="font-semibold text-sm">Display</span>
          <img src={downicon} alt="display" />
        </button>
      </header>

      {/* Main Kanban Board */}
      <main className="p-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.entries(groupedTickets()).map(([group, tickets]) => (
          <CategoryTemplate key={group} title={group} tickets={tickets} />
        ))}
      </main>
    </div>
  );
}

export default KanbanBoard;
