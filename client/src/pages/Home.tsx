import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
  }, []);
  const getUser = () => {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data || "{}");
    console.log(user.email);
  };
  return (
    <div className="h-full w-full">
      <div className="fixed"></div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Log Out
      </button>
      <button onClick={() => getUser()}>Get User Details</button>
    </div>
  );
};

export default Home;
