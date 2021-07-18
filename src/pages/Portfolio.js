import React from 'react';
import Starfall from "../components/UI/Starfall"
import PageTitle from "../components/UI/PageTitle";
import ProjectsList from '../components/sections/portfolio/ProjectsList';

const Portfolio = () => {
  return (
    <div>
      <Starfall />
      <PageTitle pageTitle='Portfolio' />
      <ProjectsList />
    </div>
  );
};

export default React.memo(Portfolio);