import React from 'react';
import {Container, Typography} from "@material-ui/core"
import "./style/Home.css"

export default function Home() {
  return (
    <Container className="homeBlock">
        <Container className="welcomeBlock" style={{width:'40%'}}>
            <Typography variant='inherit' className='bigWelcome'>WELCOME</Typography>
            <br></br>
            <Typography variant='inherit' className="subText">To Student App</Typography>
        </Container>
    </Container>
  );
}
