import React from 'react';
import Navbar from './components/navbar/Navbar';

type Props = {
};

const Layout: React.FC<Props> = (props) => {

  return (
    <>
      <Navbar />
      <div> Code </div>
    </>
  );
};

export default Layout;