import React, { useState } from 'react';
import adminPanelText from '../assets/local/adminPanel.json';
import GetProductImages from '../components/getProductImages';
import '../styles/adminpanel.css'
import GetAllAdminProducts from '../components/getAllAdminProducts';
import ProductForm from '../components/productForm';
import ModalChangeProductForm from '../components/modalChangeProductForm';
import AddProductForm from '../components/addProductForm';

function AdminPanel (props) {
    const [productDB, setProductDB] = useState({
        uuid: null,
        name: null,
        price: null,
        description_short: null,
        description_full: null,
        producer: null,
        amount: null,
        language: null,
        date: null,
        platform: null,
        image: null
    })
    const [showForm, setShowForm] = useState(false)
    const [open, setOpen] = useState(false);
    const form = {
        show: {display: showForm ? 'block' : 'none'},
        hide: {display: showForm ? 'none' : 'block'},
        modal: {display: open ? 'block' : 'none'}
    };    
    
    const db = props.allProducts
    
    const buttonDisbaled = () => {
        return !(productDB.name && 
            productDB.price && 
            productDB.description_short &&
            productDB.description_full && 
            productDB.producer &&
            productDB.amount &&
            productDB.language &&
            productDB.date &&
            productDB.platform &&
            productDB.image !== null)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const setProductName = (event) => {
        const product = {...productDB};
        product.name = event.target.value;        
        setProductDB(product);        
    }

    const setProductPrice = (event) => {
        const product = {...productDB};
        product.uuid = Date.now();
        product.price = +event.target.value;        
        setProductDB(product);        
    }

    const setProductDescriptionShort = (event) => {
        const product = {...productDB};
        product.description_short = event.target.value;        
        setProductDB(product);        
    }

    const setProductDescriptionFull = (event) => {
        const product = {...productDB};
        product.description_full = event.target.value;        
        setProductDB(product);        
    }

    const setProductProducer = (event) => {
        const product = {...productDB};
        product.producer = event.target.value;        
        setProductDB(product);        
    }

    const setProductAmount = (event) => {
        const product = {...productDB};
        product.amount = +event.target.value;        
        setProductDB(product);        
    }

    const setProductLanguage = (event) => {
        const product = {...productDB};
        product.language = event.target.value;        
        setProductDB(product);        
    }

    const setProductDate = (event) => {
        const product = {...productDB};
        product.date = +event.target.value;        
        setProductDB(product);        
    }

    const setProductPlatform = (event) => {
        const product = {...productDB};
        product.platform = event.target.value;        
        setProductDB(product);        
    }

    const setProductImages = (event) => {
        const product = {...productDB};
        product.image = event.target.value.split(' ');        
        setProductDB(product);        
    }    

    const addProductForm = (        
        <div>            
            <ProductForm 
                productDB={productDB}
                setProductAmount={setProductAmount}
                setProductDate={setProductDate}
                setProductDescriptionFull={setProductDescriptionFull}
                setProductDescriptionShort={setProductDescriptionShort}
                setProductImages={setProductImages}
                setProductLanguage={setProductLanguage}
                setProductName={setProductName}
                setProductPlatform={setProductPlatform}
                setProductPrice={setProductPrice}
                setProductProducer={setProductProducer}
            />
        </div>
        )
    
    return (        
        <div className='products-list center'>
            <div>
                <button className='buy-button' onClick={() => {setShowForm(!showForm)}}>{!showForm ? adminPanelText.add_product : adminPanelText.show_products}</button>
            </div>
            <AddProductForm 
                form={form}
                buttonDisbaled={buttonDisbaled}
                addProduct={props.addProduct}
                productDB={productDB}
                addProductForm={addProductForm}
            />
            <div className='margin-top' style={form.hide}>
                <div className='flex-container'>                     
                    <GetAllAdminProducts 
                        db={db}
                        GetProductImages={GetProductImages}
                        deleteProduct={props.deleteProduct}
                        productDB={productDB}
                        setProductDB={setProductDB}
                        handleClickOpen={handleClickOpen}                        
                    />
                </div> 
            </div>
            <div>                
                <ModalChangeProductForm 
                    form={form}
                    addProductForm={addProductForm}
                    handleClose={handleClose}
                    changeProduct={props.changeProduct}
                    productDB={productDB}
                />
            </div>         
        </div>    
    )
}

export default AdminPanel;

