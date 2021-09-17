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
        title: "Cart",
        icon: <AddShoppingCartIcon/>,
        link: "/cart"
    },
    {
        title: "Checkout",
        icon: <ShoppingCartIcon/>,
        link: "/checkout"
    },
    {
        title: "...?",
        icon: <FlareIcon/>,
        link: "/shiny"
    }
]
