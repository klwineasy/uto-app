import React, { useState, createContext, useContext } from 'react';

export interface NotificationContextProps {
  notificationMessage: string;
  setNotificationMessage: React.Dispatch<React.SetStateAction<string>>;
  notificationSeverity: string;
  setNotificationSeverity: React.Dispatch<React.SetStateAction<AlertColor>>;
  notificationEnabled: boolean;
  setNotificationEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AlertColor = 'success' | 'info' | 'warning' | 'error';

export interface NotificationProviderProps {
  children: React.ReactElement;
}

export const NotificationContext = createContext(
  {} as NotificationContextProps
);

export const NotificationProvider = (props: NotificationProviderProps) => {
  const { children } = props;
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const [notificationSeverity, setNotificationSeverity] =
    useState<AlertColor>('success');
  const [notificationEnabled, setNotificationEnabled] =
    useState<boolean>(false);

  const context: NotificationContextProps = {
    notificationMessage,
    setNotificationMessage,
    notificationSeverity,
    setNotificationSeverity,
    notificationEnabled,
    setNotificationEnabled,
  };
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }

  return {
    ...context,
  };
};
