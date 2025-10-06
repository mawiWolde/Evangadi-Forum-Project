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
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import HowItWorks from "./Pages/HowItWork/HowitWork";
import Terms from "./Pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"; // ✅ updated import

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HowItWorks />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<PrivacyPolicy />} /> {/* ✅ updated */}
      </Route>
    </Routes>
  );
};

export default App;


// // Oct2/2025
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout/Layout";
// import HowItWorks from "./Pages/HowItWork/HowitWork";
// import Terms from "./Pages/TermsOfService/TermsOfService";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Default page */}
//           <Route index element={<HowItWorks />} />

//           {/* Footer links */}
//           <Route path="how-it-works" element={<HowItWorks />} />
//           <Route path="terms" element={<Terms />} />
//           <Route path="privacy" element={<PrivacyPolicy />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;