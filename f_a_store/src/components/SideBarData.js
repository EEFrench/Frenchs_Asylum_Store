import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlareIcon from '@material-ui/icons/Flare';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Shopping",
        icon: <AddShoppingCartIcon/>,
        link: "/home"
    },
    {
        title: "Cart",
        icon: <ShoppingCartIcon/>,
        link: "/home"
    },
    {
        title: "...?",
        icon: <FlareIcon/>,
        link: "/shiny"
    }
]
