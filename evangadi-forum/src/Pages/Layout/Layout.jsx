// import React from 'react'
// import NavbarPage from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'

// const Layout = ({children}) => {
//   return (
//     <>
//       <NavbarPage/>
//       {children}
//       <Footer/>
//     </>
//   )
// }

// export default Layout

import React from "react";
import NavbarPage from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      {/* Navbar always at the top */}
      {/* <NavbarPage /> */}

      {/* Page content */}
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        {children}
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
