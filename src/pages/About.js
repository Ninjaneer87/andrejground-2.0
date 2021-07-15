import React from 'react';
import Starfall from "../components/UI/Starfall"
import PageTitle from "../components/UI/PageTitle";

const About = () => {
  return (
    <div>
      <Starfall />
      <PageTitle pageTitle='About' />
    </div>
  );
};

export default React.memo(About);