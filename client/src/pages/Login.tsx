import { useState } from "react";

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
    console.log(data);
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-1/2 w-1/4 bg-white font-pops flex flex-col rounded-lg justify-between py-16">
        <div className="text-2xl font-bold w-full px-20">LOGIN</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser({ email, password });
            login(user);
          }}
          className="flex flex-col h-3/4 w-full justify-evenly items-center"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
