
import React, { useState, useEffect } from 'react';
import Header from '../components/Layout/Header';
import AnimatedHero from '../components/Hero/AnimatedHero';
import UserDashboard from '../components/Dashboard/UserDashboard';
import LoadingScreen from '../components/Loading/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<'admin' | 'instructor' | 'student' | null>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, you can uncomment one of these to test different user roles:
      // setUserRole('admin');
      // setUserRole('instructor');
      // setUserRole('student');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Header userRole={userRole} />
      
      {userRole ? (
        <UserDashboard userRole={userRole} userName="Alex Thompson" />
      ) : (
        <AnimatedHero />
      )}
    </div>
  );
};

export default Index;
