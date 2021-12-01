import React from 'react';
import Links from './components/Links';

type Props = {
};


const Sidebar: React.FC<Props> = (props) => {
  const linksData: string[] = [
    "Dashboard", "Tasks", "Sprints", "Teams", "Calendar"
  ];

  return (
    <nav className="p-4">
      {/* {
        linksData.map(l => (
          <Links name={l} />
        ))
      } */}
    </nav>
  );
};

export default Sidebar;