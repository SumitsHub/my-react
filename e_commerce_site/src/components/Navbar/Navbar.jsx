import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React from 'react'

import cartImage from '../../assets/shopping_cart.png'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={cartImage} alt="" height="25px" className={classes.image} />
                    Shoping Station
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar