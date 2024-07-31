// App.jsx
import React from 'react';
import Layout from './components/layout';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Vitrine from './components/vitrine';


//j'essayait de remplacer un composant par une autre lors d'un clic en gardant certains intact


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/vitrine" element={<Layout><Vitrine /></Layout>} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </Router>
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




