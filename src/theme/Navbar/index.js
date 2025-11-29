import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <>
      <OriginalNavbar {...props} />
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '0.9rem',
          padding: '0.3rem',
          background: 'var(--ifm-color-secondary)',
        }}
      >
        Docusaurus Microsite · Built for TWR2019 Assignment 3
      </div>
    </>
  );
}
