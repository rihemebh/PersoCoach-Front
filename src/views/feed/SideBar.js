import React from 'react';
import SidebarRow from 'views/feed/SidebarRow';
import {FaRunning, FaUserFriends, FaFileAlt, FaCookieBite } from "react-icons/fa" ;


function SideBar() {
    return (
        <div className="SideBar">
            <SidebarRow src='https://www.google.com/search?q=photo+de+profil&rlz=1C1CHBD_frTN865TN865&sxsrf=ALeKk01qd57BycxKPzqWr1rYNslk_Fxxtw:1621183938935&tbm=isch&source=iu&ictx=1&fir=IbPMbjH3JkD7aM%252C2M5DrWLkxnc-8M%252C_&vet=1&usg=AI4_-kTM1i_T0lZcaxF3ENQ_PbVw4DL_Fw&sa=X&ved=2ahUKEwidua7m1M7wAhXKCuwKHS47CCsQ9QF6BAgREAE&biw=1362&bih=615#imgrc=IbPMbjH3JkD7aM' title='User name'/> 
            <SidebarRow Icon={<FaFileAlt style={{ color: '##70D4E6'}}/>} title='Your Programs'/>
            <SidebarRow Icon={<FaFileAlt style={{ color: '##70D4E6'}}/>} title='Free Programs'/>
            <SidebarRow Icon={<FaUserFriends style={{ color: '##70D4E6'}}/>} title='Coaches'/>
            <SidebarRow Icon={<FaRunning style={{ color: '##70D4E6'}}/>} title='Fitness seekers'/>
            <SidebarRow Icon={<FaCookieBite style={{ color: '##70D4E6'}}/>} title='Food Recipes'/>
        </div>
    )
}

export default SideBar;
