import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pana.png";
const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async (user: any) => {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home", { state: { user } });
      toast.success("Registered Successful");
    } else {
      toast.error("Registration Failed");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) window.location.href = "/home";
  });
  return (
    <div className="h-full w-full font-pops flex gap-20 justify-center items-center">
      <div className="flex gap-5 bg-white items-center px-10 py-5 rounded-xl">
        <img src={Logo} alt="logo" className="flex h-64" />
        <div className="h-1/2 w-[25rem] font-pops flex flex-col justify-center py-10">
          <div className="text-2xl font-bold w-full text-center">Sign Up</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUser({ username, email, password });
              register(user);
            }}
            className="flex flex-col h-full mt-10 w-full justify-center gap-5 items-center"
          >
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-100 w-3/4 h-10 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Username"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 w-3/4 h-10 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 w-3/4 h-10 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-blue-600 mt-5 text-white font-bold w-3/4 rounded-xl py-2"
            >
              Register
            </button>
          </form>
          <div className="w-full text-center text-sm mt-10">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:text-blue-600"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
