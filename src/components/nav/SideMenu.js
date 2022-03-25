import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grow, Divider } from '@material-ui/core';
import colors from '../../utils/colors';

const useStyle = makeStyles((theme) => ({
  drawer:{
    width:'400px',
  },
  menu:{
    marginTop:theme.spacing(2),
    display:'flex',
    justifyContent:'space-around',
  },
  optionContainer :{
    marginTop:theme.spacing(2),
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
  },
  box:{
    width:'45%',
    height:'90px',
    backgroundColor:'purple',
    borderRadius : '9px',
    marginBottom:theme.spacing(2),
  }
}));

export default function SideMenu({setOpenSideMenu, openSideMenu, setBackgroundColor}) {
  const classes = useStyle();
  const [openOptionColor, setOptionColor] = useState(false)
  return (
    <div >
      <Drawer open={openSideMenu} anchor='right' onClose={()=>setOpenSideMenu(false)}>
        <div className={classes.drawer}>
          <div className={classes.menu}>
              {/* <div className={classes.box}></div> */}
              <div className={classes.box}
                  style={{
                    backgroundImage: 'url(https://colordesigner.io/promo/color-palettes/warm.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize : 'cover',
                    fontSize: '2rem',
                  }}
                  onClick={()=>setOptionColor(true)}
              >Colors</div>
          </div>
          <Grow in={openOptionColor}>
            <div className={classes.optionContainer}>
              {colors.map((color,index) => {
                  return(
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundColor : color,
                      }}
                      onClick={()=> setBackgroundColor(color)}
                    ></div>
                  );
              })}
            </div>
          </Grow>
        </div>
      </Drawer>
    </div>
  );
}
