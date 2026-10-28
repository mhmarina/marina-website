import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import { DetailsPage } from "./Components/Pages/DetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/projects/:id" element={<DetailsPage/>} />
    </Routes>
  );
}

export default App;
