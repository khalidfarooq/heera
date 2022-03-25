import React, { useEffect, useState } from 'react';
import { Drawer, Typography, Divider, Link,Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../utils/color';
const useStyle = makeStyles((theme) => ({
  drawerPaper: {
    width: '400px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(2),
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  menu: {
    width: '45%',
    height: '90px',
    background: 'blue',
    display: 'flex',
    alignItems: 'flex-end',
    borderRadius: '8px',
    marginTop: theme.spacing(2),
  },
  optionContainer :{
    display :'flex',
    flexWrap:'wrap',
  },
  ref: {
    fontSize: '1rem',
    color: '#fff',
  },
}));
export default function SideMenu({ setOpenSideMenu, openSideMenu}) {
  const classes = useStyle();
  const [openOptionColor, setOpenOptionColor] = useState(false)
  return (
    <div>
    <Drawer
      open={openSideMenu}
      onClose={() => setOpenSideMenu(false)}
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
    >

        <div className={classes.box}>
            <div
            className={classes.menu}
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/2027047/pexels-photo-2027047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            onClick={() => setOpenOptionColor(true)}
            ></div>
        </div>


       <Grow in={openOptionColor}>
        <div className={classes.optionContainer}>
                {colors.map((color,index)=>{
                    return (
                        <div
                            key={index}
                            className={classes.box}
                            style={{
                            backgroundColor: color,
                            }}
                        ></div>
                    );
                })}
            </div>
       </Grow>
    </Drawer>
    </div>
  );
}