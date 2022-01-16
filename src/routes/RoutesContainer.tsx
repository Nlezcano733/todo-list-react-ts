import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalendarContainer from './calendar/CalendarContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import SprintsContainer from './sprints/SprintsContainer';
import TasksContainer from './tasks/TasksContainer';
import TeamsContainer from './teams/TeamsContainer';

type Props = {
};

const RoutesContainer: React.FC<Props> = (props) => {

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardContainer />} />
      <Route path="/tasks" element={<TasksContainer />} />
      <Route path="/sprints" element={<SprintsContainer />} />
      <Route path="/teams" element={<TeamsContainer />} />
      <Route path="/calendar" element={<CalendarContainer />} />
    </Routes>
  );
};

export default RoutesContainer;