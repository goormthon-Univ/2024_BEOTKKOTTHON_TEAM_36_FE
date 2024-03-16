import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../asset/maeilmail_logo.svg';
import './styles.scss';

export default function Header() {
  return (
    <>
      <div className="headerContainer">
        <div>
          <div className="menu">메일메일</div>
        </div>
        <Logo className="logo" />
        <div>
          <div className="menu">메일쓰러 가기</div>
        </div>
      </div>
    </>
  );
}
