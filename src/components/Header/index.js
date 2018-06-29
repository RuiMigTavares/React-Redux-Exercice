import React from 'react';
import logo from './logo.png';
import './styles.css';
import { Btn, PrimaryBtn } from '../Button/Button';

const Header = () => {
  return (
    <div className="header-title">
      <img src={logo} className="header-logo" alt="logo" />
      <h2>QGo Desktop React Assessment</h2>
      
      <Btn className="class-primary"></Btn>
      <Btn primary></Btn>
      <PrimaryBtn></PrimaryBtn>
    </div>
  );
};

export default Header;
