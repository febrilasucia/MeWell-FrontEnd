import React from 'react';
import DashboardUser from '../../components/User/DashboardUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DashboardUserPage = () => {
  return (
    <>
      <Header />
      <DashboardUser />
      <Footer />
    </>
  );
};

export default DashboardUserPage;
