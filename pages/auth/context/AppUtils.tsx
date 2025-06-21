'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AppUtilsType {
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
  setAuthToken: (state: null | string) => void;
  userProfile: any;
  setUserProfile: (state: any) => void;
}

const AppUtilsContext = createContext<AppUtilsType | undefined>(undefined);

export const AppUtilsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState<null | string>(null);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const profile = localStorage.getItem('user_profile');

    if (token) {
      setAuthToken(token);
      setIsLoggedIn(true);
      if (profile) {
        setUserProfile(JSON.parse(profile));
      }
    }
  }, []);

  return (
    <AppUtilsContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setAuthToken,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AppUtilsContext.Provider>
  );
};

export const myAppHook = () => {
  const context = useContext(AppUtilsContext);

  if (!context) {
    throw new Error('App Utils functions must be wrapped inside AppUtils Provider');
  }

  return context;
};
