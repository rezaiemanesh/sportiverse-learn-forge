import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  role: 'admin' | 'instructor' | 'student';
  name: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isInstructor: boolean;
  isStudent: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('sportsManagementUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('sportsManagementUser');
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would be API call
    if (username === 'admin' && password === '1234') {
      const adminUser: User = {
        id: '1',
        username: 'admin',
        role: 'admin',
        name: 'مدیر سیستم',
        email: 'admin@sportsmanagement.com'
      };
      setUser(adminUser);
      localStorage.setItem('sportsManagementUser', JSON.stringify(adminUser));
      return true;
    }
    
    if (username === 'instructor' && password === 'instructor123') {
      const instructorUser: User = {
        id: '2',
        username: 'instructor',
        role: 'instructor',
        name: 'استاد نمونه',
        email: 'instructor@sportsmanagement.com'
      };
      setUser(instructorUser);
      localStorage.setItem('sportsManagementUser', JSON.stringify(instructorUser));
      return true;
    }

    if (username === 'student' && password === 'student123') {
      const studentUser: User = {
        id: '3',
        username: 'student',
        role: 'student',
        name: 'دانشجوی نمونه',
        email: 'student@sportsmanagement.com'
      };
      setUser(studentUser);
      localStorage.setItem('sportsManagementUser', JSON.stringify(studentUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sportsManagementUser');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isInstructor: user?.role === 'instructor',
    isStudent: user?.role === 'student',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};