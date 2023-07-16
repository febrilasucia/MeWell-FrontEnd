import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDashboardGuard = ({ children }) => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    // Cek peran dan arahkan pengguna ke dashboard yang sesuai
    try {
      if (
        !authState ||
        !authState.user ||
        !authState.user.role ||
        authState.user.role !== 'user'
      ) {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      navigate('/login?message=Unauthorized');
    }
  }, [navigate, authState]);

  return <>{children}</>;
};

export default UserDashboardGuard;
