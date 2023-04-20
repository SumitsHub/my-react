import { Grid } from '@material-ui/core'
import React from 'react'
import Product from '../Product/Product'
import useStyles from './styles'
// const products = [
//     {id: 1, name: 'Shoes', description: 'Running Shoes', price: 50, image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
//     {id: 2, name: 'Mackbook', description: 'Apple Mackbook', price: 1000, image: 'https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg'},
// ]

const Products = ({products}) => {
    const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}>
            {
                products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))
            }
        </Grid>
    </main>
  )
}

export default Products