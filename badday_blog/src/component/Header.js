import React from 'react';
import {AppBar, Toolbar,IconButton,List,ListItemText,ListItem,Divider,ListItemIcon} from '@material-ui/core';
import { Home} from "@material-ui/icons";
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
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
                <List>
                    <ListItem  button component={Link} to='/home'>
{/*            <IconButton edge="start" color="inherit" aria-label="home">*/}
                        <ListItemIcon>
                            <Home fontSize="large" />
                        </ListItemIcon>

                        <ListItemText primary='Badday' />
          {/*  </IconButton>*/}
                    </ListItem>
                </List>
                <List>
                    <ListItem  button component={Link} to='/about'>
                       {/* <ListItemIcon>
                            <PermIdentityIcon fontSize="large"/>
                        </ListItemIcon>*/}
                        <ListItemText primary='About Us' />
                    </ListItem>
                </List>
                <List>
                    <ListItem  button component={Link} to='/askaquestion/'>
                        {/* <ListItemIcon>
                            <PermIdentityIcon fontSize="large"/>
                        </ListItemIcon>*/}
                        <ListItemText primary='Ask a question' />
                    </ListItem>
                </List>
                {/*<Link to='/about/'>
                    About
                </Link>
                <Link to='/askaquestion/'>
                    Ask a question
                </Link>*/}
            </Toolbar>
        </AppBar>
    )
}
export default Header;
