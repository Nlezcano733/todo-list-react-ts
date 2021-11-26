import React from 'react';

type Props = {
};

const Navbar: React.FC<Props> = (props) => {

  return (
    <header className="bg-gray-100 text-gray-700">
      <div className="container grid grid-cols-12 justify-between mx-auto">
        <h1 className="col-span-10 mt-2 text-blue-400 text-4xl font-cairo">myDesk</h1>

        <nav className="col-span-2 flex justify-end align-center my-4 text-lg">
          <div><i className="far fa-user mr-4 md:mr-6"></i></div>
          <div><i className="far fa-bell mr-4 md:mr-6"></i></div>
          <div><i className="fas fa-sign-out-alt"></i></div>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;