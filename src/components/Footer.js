import { Typography } from '@material-ui/core';
import React from 'react';
import "./style/Footer.css"

export default function Footer() {
  return (
      <footer>
        <Typography variant='h6'>
            STUDENT APP
        </Typography>
        <section>
            <ul className='leftList'>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
            <div className='rightList'>
                <p>
                    Trademark
                </p>
            </div>
        </section>
      </footer>
  );
}
