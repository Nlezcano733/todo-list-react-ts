import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TasksContainer from './tasks/TasksContainer';

type Props = {
};

const RoutesContainer: React.FC<Props> = (props) => {

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" />
        <Route path="/tasks" element={<TasksContainer />} />
      </Routes>
    </Router>
  );
};

export default RoutesContainer;