import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) window.location.href = "/home";
  });
  return (
    <div className="h-full font-pops w-full justify-center items-center flex flex-col gap-10">
      <div className="text-white text-5xl font-extrabold">Task Manager</div>
      <div className="text-gray-300 text-xl">Empower Your Productivity</div>
      <button
        onClick={() => navigate("/register")}
        className="bg-blue-500 px-5 py-3 rounded-full hover:bg-blue-600 active:scale-95 text-white"
      >
        Get Started
      </button>
    </div>
  );
};

export default Banner;
