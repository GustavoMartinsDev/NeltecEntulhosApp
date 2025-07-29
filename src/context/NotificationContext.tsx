import React, { createContext, useState, ReactNode } from "react";
import { FAlert } from "../components/atoms";
import { AlertProps } from "../types";

interface NotificationContextType {
  showNotification: (type: AlertProps["type"], message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export { NotificationContext };

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notification, setNotification] = useState<{
    type: AlertProps["type"];
    message: string;
    isVisible: boolean;
  }>({
    type: "info",
    message: "",
    isVisible: false,
  });

  const showNotification = (type: AlertProps["type"], message: string) => {
    setNotification({
      type,
      message,
      isVisible: true,
    });
  };

  const hideNotification = () => {
    setNotification((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <FAlert
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </NotificationContext.Provider>
  );
};
