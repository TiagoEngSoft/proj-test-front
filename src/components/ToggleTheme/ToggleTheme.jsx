/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react';
import './ToggleTheme.css'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeSlice';

const ThemeToggle = () => {

  const dispath = useDispatch();

  useEffect(() => {
    const toggler = document.getElementById('theme-toggle');
    const handleChange = () => {
      if (toggler.checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      dispath(toggleTheme())
    };

    toggler.addEventListener('change', handleChange);

    return () => {
      toggler.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className='divToggle'>
      <input type="checkbox" id="theme-toggle" hidden />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>
    </div>
  );
};

export default ThemeToggle;
