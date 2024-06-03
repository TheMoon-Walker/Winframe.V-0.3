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
