
import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header';
import AnimatedHero from '../components/Hero/AnimatedHero';
import UserDashboard from '../components/Dashboard/UserDashboard';
import LoadingScreen from '../components/Loading/LoadingScreen';
import { useAuth } from '../hooks/useAuth';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Header userRole={user?.role || null} />
      
      {user ? (
        <UserDashboard userRole={user.role} userName={user.name} />
      ) : (
        <AnimatedHero />
      )}
    </div>
  );
};

export default Index;
