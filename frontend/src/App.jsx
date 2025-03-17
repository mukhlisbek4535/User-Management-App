import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
}
