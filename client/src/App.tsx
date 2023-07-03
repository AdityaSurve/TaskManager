import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner, Login, Register, Home } from "./pages";
export default function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-purple-600 to-violet-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
