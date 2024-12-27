import Login from "./components/ui/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/ui/Register";
import Home from "./components/ui/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
