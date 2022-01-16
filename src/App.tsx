import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import RoutesContainer from './routes/RoutesContainer';

function App() {
  return (
    <Router>
      <Layout>
        <RoutesContainer />
      </Layout>
    </Router>
  );
}

export default App;
