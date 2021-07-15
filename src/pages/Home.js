import React, { useCallback } from 'react';
import Starfall from "../components/UI/Starfall"
import Hero from "../components/sections/home/Hero"
import Mission from "../components/sections/home/Mission"
import Toolbox from "../components/sections/home/Toolbox"
import Projects from "../components/sections/home/Projects"
import ContactInfo from '../components/sections/home/ContactInfo';
import SectionNav from '../components/sections/home/SectionNav';
import { useState } from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import FolderSpecialOutlinedIcon from '@material-ui/icons/FolderSpecialOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const sections = [
  {
    name: 'home',
    icon: <HomeOutlinedIcon style={{ color: '#fff' }} />
  },
  {
    name: 'mission',
    icon: <AssignmentTurnedInOutlinedIcon style={{ color: '#fff' }} />
  },
  {
    name: 'toolbox',
    icon: <BuildOutlinedIcon style={{ color: '#fff' }} />
  },
  {
    name: 'projects',
    icon: <FolderSpecialOutlinedIcon style={{ color: '#fff' }} />
  },
  {
    name: 'contact',
    icon: <EmailOutlinedIcon style={{ color: '#fff' }} />
  },
]
const refs = {};
const setRefs = (sectionName, ref) => refs[sectionName] = ref;

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  const activateSection = useCallback((section) => {
    refs[section].scrollIntoView();
  }, []);

  return (
    <div>
      <Starfall />

      <Hero
        setRefs={setRefs}
        setActiveSection={setActiveSection}
      />

      <Mission
        setRefs={setRefs}
        setActiveSection={setActiveSection}
      />

      <Toolbox
        setRefs={setRefs}
        setActiveSection={setActiveSection}
      />

      <Projects
        setRefs={setRefs}
        setActiveSection={setActiveSection}
      />

      <ContactInfo
        setRefs={setRefs}
        setActiveSection={setActiveSection}
      />

      <SectionNav
        sections={sections}
        activeSection={activeSection}
        activateSection={activateSection}
      />
    </div>
  );
};

export default React.memo(Home);