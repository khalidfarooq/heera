import React from 'react';
import { Button ,AppBar, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import App from '../../App'


const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  AppBar:{
    background:'grey',
  },
  title:{
    fontSize: '1.2rem',
    fontWeight: 'bold',
    flexGrow: 1,
  },
  btn:{
    color:"#fff",
    background: 'hsla(0,0%,100%,.24)',
  }
}));

export default function TopBar({ setOpenSideMenu  }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.AppBar} elevation={0}>
        <Toolbar>
          <h1 className={classes.title}>Heera</h1>
          <Button className={classes.btn}
            onClick={()=>setOpenSideMenu(true)}
            >Change Background</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}