import React from 'react';
import {AppBar, Toolbar,IconButton} from '@material-ui/core';
import { Home } from "@material-ui/icons";
import {Link} from 'react-router-dom';

const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
]

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
            </IconButton>
                <Link to='/about/'>
                    <li>About</li>
                </Link>
                <Link to='/askaquestion/'>
                    <li>Ask a question</li>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
