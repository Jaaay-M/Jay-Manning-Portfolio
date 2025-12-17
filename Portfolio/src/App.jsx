import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { CarDealership } from "../pages/CarDealership";
import { GrapheneTrace } from "../pages/GrapheneTrace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/CarDealership" element={<CarDealership />} />
      <Route path="/GrapheneTrace" element={<GrapheneTrace />} />
    </Routes>
  );
}

export default App;