import React from 'react';
import {SidebarRow} from './SidebarRow';

function SideBar() {
    return (
        <div className="SideBar">
            {/* profile picture +name */}
            {/* <SidebarRow title=''/> */}
            <SidebarRow Icon={<img alt="..." src={require("assets/img/yp.png").default}/>} title='Your Programs'/>
            <SidebarRow Icon={<img alt="..." src={require("assets/img/fp.png").default}/>} title='Free Programs'/>
            <SidebarRow Icon={<img alt="..." src={require("assets/img/coaches.png").default}/>} title='Coaches'/>
            <SidebarRow Icon={<img alt="..." src={require("assets/img/fs.png").default}/>} title='Fitness seekers'/>
            <SidebarRow Icon={<img alt="..." src={require("assets/img/fr.png").default}/>} title='Food Recipes'/>
        </div>
    )
}

export default SideBar;
