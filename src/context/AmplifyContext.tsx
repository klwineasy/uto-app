import React, { useState, useEffect, createContext, useContext } from 'react';
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useRouter } from 'next/router';

export interface AmplifyContextProps {
  authState?: AuthState;
  user?: AuthenticatedUser;
  logout: () => Promise<void>;
}

export interface AuthenticatedUser {
  email: string;
  username: string;
  id: string;
}

export interface AmplifyProviderProps {
  children: React.ReactElement;
}

export const AmplifyContext = createContext({} as AmplifyContextProps);

export const AmplifyProvider = (props: AmplifyProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<AuthenticatedUser>();
  const [authState, setAuthState] = useState<AuthState>();
  const router = useRouter();

  const loadCurrentUser = async () => {
    try {
      const cognitoUser: CognitoUser = await Auth.currentAuthenticatedUser();
      const currentUser: any = await Auth.currentUserInfo;
      console.log('hi');
      if (cognitoUser && currentUser) {
        setAuthState(AuthState.SignedIn);
        setUser({
          id: currentUser.id,
          email: currentUser.email,
          username: currentUser.username,
        });
      } else {
        setAuthState(AuthState.SignedOut);
        setUser(undefined);
        router.push('/login');
      }
    } catch (err) {
      //User might not actually be logged in
      router.push('/login');
    }
  };

  useEffect(() => {
    if (authState === undefined) {
      (async () => {
        await loadCurrentUser();
      })();
    }
  }, [authState]);

  const logout = async () => {
    await Auth.signOut();
    setAuthState(AuthState.SignedOut);
    setUser(undefined);
  };

  const context: AmplifyContextProps = {
    authState,
    user,
    logout,
  };

  return (
    <AmplifyContext.Provider value={context}>
      {children}
    </AmplifyContext.Provider>
  );
};

export const useAmplify = () => {
  const context = useContext(AmplifyContext);

  if (context === undefined) {
    throw new Error('useAmplify must be used within a AmplifyProvider');
  }

  return {
    ...context,
  };
};
