import React, { useState, useEffect, createContext, useContext } from 'react';

export interface LocationContextProps {}

export interface LocationProviderProps {
  children: React.ReactElement;
}

export const LocationContext = createContext({} as LocationContextProps);

export const LocationProvider = (props: LocationProviderProps) => {
  const { children } = props;

  const context: LocationContextProps = {};

  return (
    <LocationContext.Provider value={context}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }

  return {
    ...context,
  };
};
