import React, { useState } from 'react'
import { SideBarBody,SideBarMenu, SideBarItem, SideBarTitle } from './style'

export const SubNav = ({item}) => {
    const [open,setOpen] = useState(false)
    const renderSideBody = (navbody )=>{
      return navbody.map((navItem,index)=>(
        <SideBarItem key={index}>
          {navItem.icon} {navItem.title}
        </SideBarItem>
      ))
    }
    return (
        <SideBarMenu onClick={()=>{setOpen(!open)}}>
        <SideBarTitle>
         {item.icon}{item.title} 
         {item.subNav?open?item.iconClose:item.iconOpen:null}
        </SideBarTitle>
        {item.subNav && open?<SideBarBody>{renderSideBody(item.subNav)}</SideBarBody>:null}
      </SideBarMenu>
       
    )
}
