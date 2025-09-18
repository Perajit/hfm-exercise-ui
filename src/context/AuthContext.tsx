import { useUserProfileQuery } from '@/hooks/useUserProfileQuery';
import { Spinner } from 'flowbite-react';
import { FC, PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { UserProfile } from '../types/user.type';

export type AuthContextType = {
  currentUser: UserProfile | null;
  setCurrentUser: (user: UserProfile | null) => void;
  isAuthenticated: boolean;
}

const defaultAuthContext: AuthContextType = {
  currentUser: null,
  setCurrentUser: () => { },
  isAuthenticated: false,
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Auto fetch current user
  const { data, isLoading } = useUserProfileQuery();

  useEffect(() => {
    setCurrentUser(data || null);
  }, [data]);

  const contextValue = useMemo(() => ({
    currentUser,
    setCurrentUser,
    isAuthenticated: !!data,
  }), [currentUser, data]);

  return isLoading ? (
    <div className="h-full flex justify-center items-center">
      <Spinner aria-label="Loading user profile." />
    </div>
  ) : (
    <AuthContext.Provider
      value={contextValue}
    >
      {children}
    </AuthContext.Provider>
  );
};
