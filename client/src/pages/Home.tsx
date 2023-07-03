import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
