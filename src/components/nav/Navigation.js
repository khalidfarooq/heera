import React,{useState} from 'react';
import TopBar from './TopBar';
import SideMenu from './SideMenu';

export default function Navigation({ setBackgroundColor }) {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    return (
        <div>
            <TopBar setOpenSideMenu={setOpenSideMenu} setBackgroundColor={setBackgroundColor}/>
            <SideMenu 
                openSideMenu={openSideMenu} 
                setOpenSideMenu={setOpenSideMenu}
                setBackgroundColor={setBackgroundColor}
            />
        </div>
    );
}
