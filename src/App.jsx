// app.jsx
import HomePage from "./components/homePage";
import Vitrine from "./components/vitrine";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/vitrine" element={<Vitrine/>}/>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
// App.jsx
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/layout';
// import VitrinePage from './components/VitrinePage'; // Exemple d'une autre page

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout><HomePage /></Layout>} />
//         <Route path="/vitrine" element={<Layout><VitrinePage /></Layout>} />
//         {/* Ajoute d'autres routes ici */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
