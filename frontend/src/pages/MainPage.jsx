import React, { useEffect } from 'react';
import IssueTable from '@components/IssueTable';
import Menu from '@components/Menu';
import useGetAllData from '@hooks/useGetAllData';

const MainPage = () => {
  useGetAllData();

  return (
    <div>
      <Menu />
      <IssueTable />
    </div>
  );
};

export default MainPage;
