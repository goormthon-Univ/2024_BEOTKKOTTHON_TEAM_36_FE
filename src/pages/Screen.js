import React from 'react';
import Header from '../components/Header/Header';
import '../config/globalStyle.scss';

const Screen = ({ children, bgColor = 'gray', headerColor = 'black' }) => {
  return (
    <div
    // className={bgColor === 'gray' ? 'bgGray' : ' bgWhite'}
    // style={{ width: '100vw' }}
    >
      <Header color={headerColor} />
      {children}
    </div>
  );
};

export default Screen;
