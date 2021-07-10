import React from 'react';
import Starfall from "../components/UI/Starfall"
import Hero from "../components/sections/home/Hero"
import Mission from "../components/sections/home/Mission"
import Toolbox from "../components/sections/home/Toolbox"
import Projects from "../components/sections/home/Projects"

const Home = () => {
  return (
    <div>
      <Starfall />
      <Hero />
      <Mission />
      <Toolbox />
      <Projects />
    </div>
  );
};

export default Home;