import { useEffect, useState } from "react";
import Logo from "../assets/pana.png";
import { toast } from "react-hot-toast";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (user: any) => {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
      toast.success("Login Successful");
    } else {
      toast.error("Login Failed");
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
          <div className="text-2xl font-bold w-full text-center">Sign In</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUser({ email, password });
              login(user);
            }}
            className="flex flex-col h-full mt-10 w-full justify-center gap-5 items-center"
          >
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
              Login
            </button>
          </form>
          <div className="w-full text-center text-sm mt-10">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:text-blue-600"
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
