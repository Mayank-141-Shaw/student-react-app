import { Typography,Container } from '@material-ui/core';
import React from 'react';
import './style/Header.css'

export default function Header() {

  return (
      <header>
          <Typography variant='h3'>
            <span style={{fontSize:"11vh", color:"gainsboro"}}>S</span>TUDENT APP
            <Typography variant='h6'>
                A Portable Student Manager
            </Typography>
          </Typography>
      </header>
  );
}
