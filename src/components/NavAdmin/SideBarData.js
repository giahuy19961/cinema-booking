import {RiDashboardFill} from 'react-icons/ri'
import {IoTicketOutline} from 'react-icons/io5'
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'
import {HiOutlineUser} from 'react-icons/hi'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {RiMovie2Line} from 'react-icons/ri'

export const SideBarData = [
    {  
       title:"Dashboard",
       path:"/dashboard",
       icon:<RiDashboardFill size={16} className="icon"/>,
    },
    {  
        title:"Quản Lý Người Dùng",
        path:"/usermanagerment",
        icon:<HiOutlineUser size={16} className="icon"/>,
        iconClose:<IoMdArrowDropup size={16} className="icon"/>,
        iconOpen:<IoMdArrowDropdown size={16} className="icon"/>,
        subNav:[{
            title:"Danh sách người dùng",
            path:"/user/list",
            icon:<AiOutlineUserAdd size={16} className="icon"/>,
        },
        {
            title:"Thêm người dùng",
            path:"/user/add-user",
            icon:<AiOutlineUserAdd size={16} className="icon"/>,
        }]
    }, 
     {  
        title:"Quản lý Phim",
        path:"/moviemanagerment",
        icon:<RiMovie2Line size={16} className="icon"/>,
     },
     {
         title:"Quản lý Vé",
         path:"/ticketmanagerment",
         icon:<IoTicketOutline size={16} className="icon"/>,
     }
]