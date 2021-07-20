import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md'

import React from 'react'

export const SidebarData = [
    {
    title:'Dashboard',
    path:'/',
    icon:<AiIcons.AiOutlineUser/>,
    cName:'nav-text'
},
{
    title:'Admin User',
    path:'/adminuser',
    icon:<AiIcons.AiOutlineUser/>,
    cName:'nav-text'
},
{
    title:'End User',
    path:'/enduser',
    icon:<AiIcons.AiOutlineUser/>,
    cName:'nav-text'
    
},
{
    title:'Franchise',
    path:'/franchise',
    icon:<BiIcons.BiBuilding/>,
    cName:'nav-text'
},
{
    title:'Order list',
    path:'/order',
    icon:<BiIcons.BiBuilding/>,
    cName:'nav-text'
},
{
    title:'State',
    path:'/state',
    icon:<BiIcons.BiBuilding/>,
    cName:'nav-text'
},
{
    title:'City',
    path:'/city',
    icon:<BiIcons.BiBuildingHouse/>,
    cName:'nav-text'
},
{
    title:'Zones',
    path:'/zone',
    icon:<BiIcons.BiBuilding/>,
    cName:'nav-text'
},
{
    title:'Pincodes',
    path:'/pincode',
    icon:<BiIcons.BiBuilding/>,
    cName:'nav-text'
},
{
    title:'Settings',
    path:'/settings',
    icon:<AiIcons.AiFillSetting/>,
    cName:'nav-text'
},
{
    title:'Properties',
    path:'/property',
    icon:<BsIcons.BsHouse/>,
    cName:'nav-text'
},
{
    title:'Reports',
    path:'/report',
    icon:<MdIcons.MdReportProblem/>,
    cName:'nav-text'
},
]
