import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppSaveContext = createContext("");

const AppContext = ({ children }) => {
  const [install, setInstall] = useState(() => {
    return JSON.parse(localStorage.getItem("app")) || [];
  });

  const handleclick = (id, title) => {
    const isInstalled = install.includes(id);

    if (!isInstalled) {
      const updated = [...install, id];
      setInstall(updated);
      localStorage.setItem("app", JSON.stringify(updated));
      toast(`Yahoo !!${title} Installed Successfully`);
    }
  };

  return (
    <AppSaveContext.Provider value={[install, setInstall, handleclick]}>
      {children}
    </AppSaveContext.Provider>
  );
};

export default AppContext;
