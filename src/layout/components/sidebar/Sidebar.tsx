import React from 'react';
import { useNavigate } from 'react-router-dom';

import './sidebar.css';

type Props = {
};


const Sidebar: React.FC<Props> = (props) => {
  const linksData: string[] = [
    "Dashboard", "Tasks", "Sprints", "Teams", "Calendar"
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-start w-full">
        <div className="sidebar_header bg-gray-400">
          <h3 className="text-lg text-gray-100 font-bold truncate">
            Proyecto Inicial
          </h3>
          <h4 className="text-sm text-gray-300">
            Sprint: inicial
          </h4>
        </div>
        <nav className="sidebar_links p-4">
          {
            linksData.map(l => (
              <button
                className="sidebar_links-link text-lg text-gray-800 py-2 hover:text-blue-600"
                onClick={() => navigate(`/${l.toLowerCase()}`)}
              >
                {l}
              </button>
            ))
          }
        </nav>
      </div>
      <p className="text-center text-sm text-gray-500">
        <span className="text-blue-500
        ">
          myDesk
        </span>
        &nbsp; Diciembre 2021
      </p>
    </>
  );
};

export default Sidebar;