// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout/Layout";
// import HowItWorks from "./Pages/HowItWork/HowitWork";
// import Terms from "./Pages/TermsOfService/TermsOfService";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"; // ✅ updated import

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HowItWorks />} />
//         <Route path="how-it-works" element={<HowItWorks />} />
//         <Route path="terms" element={<Terms />} />
//         <Route path="privacy" element={<PrivacyPolicy />} /> {/* ✅ updated */}
//       </Route>
//     </Routes>
//   );
// };

// export default App;
// Oct 06
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout/Layout";
// import HowItWorks from "./Pages/HowItWork/HowitWork";
// import Terms from "./Pages/TermsOfService/TermsOfService";
// import HomePage from "./Components/Home/Home";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"; // ✅ updated import

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//       <Route path="home" element={<HomePage />} />
//         <Route index element={<HowItWorks />} />
//           <Route path="/howitworks" element={<Howitworks />} />
//         <Route path="/termofservice" element={<TermofService />} />
//         <Route path="/privacypolicy" element={<PrivacyPolicy />} />

//       </Route>
//     </Routes>
//   );
// };

// export default App;
// oct7/ 2025
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import your pages
// import Home from "./Components/Home/Home";
// import HowItworks from "./Pages/HowItWork";
// import TermofService from "./pages/TermofService";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// // Common components (if any)
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <Router>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/howitworks" element={<HowItworks />} />
//         <Route path="/termofservice" element={<TermofService />} />
//         <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home/Home";
// import Howitworks from "./Pages/HowItWork/HowItWork";
// import TermofService from "./Pages/TermsOfService/TermsOfService";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <Router>
//       {/* <Header /> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/howitwork" element={<HowItWork/>} />
//         <Route path="/terms" element={<TermofService />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Components/Home/Home";
import HowItWork from "./Pages/HowItWork/HowItWork";
import TermofService from "./Pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
// import header from "./Components/Header/Header"
// import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitwork" element={<HowItWork />} />
        <Route path="/terms" element={<TermofService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

