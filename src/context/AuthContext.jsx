import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const loginContext = (userData, newToken) => {
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("user", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔥 هنا export ديال useAuth خاص
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
