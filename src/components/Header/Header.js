import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import homelogo from '../../asset/homelogo.png';
import userlogo from '../../asset/User.png';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="homelogo" src={homelogo} alt="홈로고" />
      </Link>
      <div className="menu-container">
        <Link to="/write" className="menu-item">
          메일작성
        </Link>
        <Link to="/community" className="menu-item">
          커뮤니티
        </Link>
        <Link to="/template" className="menu-item">
          템플릿
        </Link>
        <img className="userlogo" src={userlogo} alt="사용자프로필" />
      </div>
    </header>
  );
}
