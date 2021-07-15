import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core';
import ThemeContext from "../../../context/themeContext";

const useStyles = makeStyles(theme => ({
  root: ({ themeMode }) => {
    return {
      paddingRight: 2,
      minHeight: 150,
      backgroundColor: 'rgba(0, 0, 0, 0.38)',
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '6px 0 0 6px',
      boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.38)`,
      '&::after': {
        content: '""',
        position: 'absolute',
        border: `1px solid ${themeMode === 'dark' ? theme.palette.custom.accent : 'transparent'} `,
        width: 'var(--width)',
        left: 'var(--left)',
        top: 'var(--top)',
        height: 'var(--height)',
        backgroundColor: `${themeMode === 'dark' ? 'transparent' : theme.palette.custom.accent} `,
        zIndex: -1,
        borderRadius: '6px',
        transition: `all ${theme.transitions.duration.short}ms ease 0s`,
      },
    }
  },
  item: {
    padding: '12px 6px',
    cursor: 'pointer',
    width: '100%',
    borderRadius: '6px 0 0 6px',
    [theme.breakpoints.up(600)]: {
      padding: '16px 6px',
    },
  },
}))
const initialBox = {
  width: 0,
  left: 0,
  top: 0,
  height: 0,
}
const SectionNav = ({ sections, activeSection, activateSection }) => {
  const activeRef = useRef(null);
  const [box, setBox] = useState(initialBox);
  const themeMode = useContext(ThemeContext).themeMode;
  const classes = useStyles({ themeMode });

  const setBoxToActiveRef = useCallback(() => {
    const newBox = {
      width: activeRef.current.offsetWidth,
      left: activeRef.current.offsetLeft,
      top: activeRef.current.offsetTop,
      height: activeRef.current.offsetHeight,
    };
    setBox(newBox);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", setBoxToActiveRef);
    return () => window.removeEventListener("resize", setBoxToActiveRef)
  }, [setBoxToActiveRef]);

  useEffect(() => {
    setBoxToActiveRef();
  }, [activeSection, setBoxToActiveRef]);

  // const mouseEnterHandler = (e) => {
  //   const newBox = {
  //     width: e.target.offsetWidth,
  //     left: e.target.offsetLeft,
  //     top: e.target.offsetTop,
  //     height: e.target.offsetHeight,
  //   }
  //   setBox(newBox)
  // }

  // const mouseLeaveHandler = () => {
  //   setBoxToActiveRef();
  // }

  return ReactDom.createPortal(
    <div className={`${classes.root} fadeIn`} style={{
      '--width': Math.round(box.width) - 4 + 'px',
      '--left': Math.round(box.left) + 2 + 'px',
      '--top': Math.round(box.top) + 2 + 'px',
      '--height': Math.round(box.height) - 8 + 'px',
    }}>
      {sections.map(section =>
        <div
          ref={section.name === activeSection ? activeRef : null}
          key={section.name}
          onClick={() => activateSection(section.name)}
          className={classes.item}
        // onMouseEnter={mouseEnterHandler}
        // onMouseLeave={mouseLeaveHandler}
        >
          {section.icon}
        </div>
      )}
    </div>,
    document.getElementById('portal')
  );
};

export default React.memo(SectionNav);