import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

type Props = {
};

const Layout: React.FC<Props> = (props) => {

  return (
    <>
      <Navbar />
      <main className="grid grid-cols-12">
        <aside className="col-span-2 flex flex-col justify-between pb-4 bg-gray-200">
          <Sidebar />
        </aside>
        <section className="col-span-10 ">
          {props.children}
        </section>
      </main>
    </>
  );
};

export default Layout;