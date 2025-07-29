import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification deve ser usado dentro de um NotificationProvider"
    );
  }
  return context;
};
