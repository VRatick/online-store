import React from 'react';
import GetAllProducts from '../components/getAllProducts'
import '../styles/productslist.css'

function ProductsList (props) {          

    return (        
        <div className='products-list'>
            <div className='flex-container'>                
                <GetAllProducts productsList={props.allProducts} addProductToBasket={props.addProductToBasket}/>
            </div>                      
        </div>    
    )
}

export default ProductsList;