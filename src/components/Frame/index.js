import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Flex } from '@radix-ui/themes';
import { useWindowSize } from '../../hooks/useWindowSize';

export const Frame = () => {
  const { width, height } = useWindowSize();

  return (
    <Flex
      direction={'column'}
      style={{
        width: `${width}px`,
        height: `${height - 80}px`,
        backgroundColor: '#FFD875',
      }}
    >
      <Header />
      <main className="layout">
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
};
