import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from './components/Wrapper';
import Navigation from './components/nav/Navigation';

const useStyles = makeStyles((theme) => ({
}));


export default function App() {
  const classes = useStyles();
  const [backgroundColor, setBackgroundColor] = useState('lightgrey')
  return (
    <div className={classes.root}
      style={{
        backgroundColor: backgroundColor,
        backgroundRepeat:'no-repeat',
        backgroundSize : 'cover',
      }}
    >
      <Navigation setBackgroundColor={setBackgroundColor}/>
      <Wrapper/>
    </div>
  );
}
