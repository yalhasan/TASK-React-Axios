import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/:id" Component={PetDetail} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
