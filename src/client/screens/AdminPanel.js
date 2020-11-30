import React, { useState } from 'react';
import Carousel from '../components/carousel';
import adminPanelText from '../assets/local/adminPanel.json';
import DeleteIcon from '../assets/images/DeleteIcon.png'
import PenIcon from '../assets/images/PenIcon.svg';
import GetProductImages from '../components/getProductImages';
import '../styles/adminpanel.css'

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
    
    const products = db.map( (product) => {
        const images = GetProductImages(product, 'small');
        return (
            <div key={product.uuid} className='product height'>
                <div className='product-image'>                                      
                    <Carousel images={images}/>                                  
                </div>
                <div className='product-information'>
                    <p>{adminPanelText.uuid}: {product.uuid}</p>                 
                    <p>{adminPanelText.name}: {product.name}</p>
                    <p>{adminPanelText.price}: ${product.price}</p>                                        
                    <p>{adminPanelText.description_short}: {product.description_short}</p>   
                    <p>{adminPanelText.description_full}: {product.description_full}</p>
                    <p>{adminPanelText.producer}: {product.producer}</p>   
                    <p>{adminPanelText.amount}: {product.amount}</p>   
                    <p>{adminPanelText.language}: {product.language}</p>
                    <p>{adminPanelText.date}: {product.date}</p>
                    <p>{adminPanelText.platform}: {product.platform}</p>
                </div>
                <div className='product-add-to-basket'>
                    <button className="remove-product buy-button" onClick={
                        () => {
                            props.deleteProduct(product.uuid)                            
                        }
                    }><img className='basket-icon' src={DeleteIcon} /></button>
                    <button className='change-button' onClick={
                        () => {                                                                           
                            setProductDB({...productDB,
                                uuid: product.uuid,
                                name: product.name,
                                price: product.price,
                                description_short: product.description_short,
                                description_full: product.description_full,
                                producer: product.producer,
                                amount: product.amount,
                                language: product.language,
                                date: product.date,
                                platform: product.platform,
                                image: product.image,
                                __v: product.__v,
                                _id: product._id
                            });   
                            handleClickOpen();                             
                        }
                    }><img className='basket-icon' src={PenIcon} />
                    </button>
                </div>
            </div>
        )
    })

    const addProductForm = (        
        <div>            
            <form>
                <div className='basket-input'>
                    <p>{adminPanelText.name}</p>
                    <input className='text-input' value={productDB.name} onChange={setProductName} placeholder={adminPanelText.name_help_text}></input>                   
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.price}</p>
                    <input className='text-input' value={productDB.price} onChange={setProductPrice} placeholder={adminPanelText.price_help_text}></input> 
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.description_short}</p>
                    <input className='text-input' value={productDB.description_short} onChange={setProductDescriptionShort} placeholder={adminPanelText.description_short_help_text}></input>   
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.description_full}</p>
                    <input className='text-input' value={productDB.description_full} onChange={setProductDescriptionFull} placeholder={adminPanelText.description_full_help_text}></input>  
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.producer}</p>
                    <input className='text-input' value={productDB.producer} onChange={setProductProducer} placeholder={adminPanelText.producer_help_text}></input>  
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.amount}</p>
                    <input className='text-input' value={productDB.amount} onChange={setProductAmount} placeholder={adminPanelText.amount_help_text}></input> 
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.language}</p>
                    <input className='text-input' value={productDB.language} onChange={setProductLanguage} placeholder={adminPanelText.language_help_text}></input> 
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.date}</p>
                    <input className='text-input' value={productDB.date} onChange={setProductDate} placeholder={adminPanelText.date_help_text}></input> 
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.platform}</p>
                    <input className='text-input' value={productDB.platform} onChange={setProductPlatform} placeholder={adminPanelText.platform_help_text}></input> 
                </div>
                <div className='basket-input'>
                    <p>{adminPanelText.images}</p>
                    <input className='text-input' value={productDB.image === null ? productDB.image : productDB.image.join(' ')} onChange={setProductImages} placeholder={adminPanelText.images_help_text}></input>  
                </div>                           
            </form>
        </div>
        )
    
    return (        
        <div className='products-list center'>
            <div>
                <button className='buy-button' onClick={() => {setShowForm(!showForm)}}>{!showForm ? adminPanelText.add_product : adminPanelText.show_products}</button>
            </div>
            <div className='add-product-form'  style={form.show}>
                {addProductForm}
                <div>
                    <button                         
                        disabled={buttonDisbaled()} 
                        className='buy-button'
                        onClick={() => {                            
                            props.addProduct(productDB);  
                            window.location.reload(false);                            
                        }}
                    >
                        {adminPanelText.add}
                    </button> 
                </div>    
            </div>
            <div className='margin-top' style={form.hide}>
                <div className='flex-container'>                     
                    {products}  
                </div> 
            </div>
            <div>                
                <div class="modal" style={form.modal}>
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">{adminPanelText.change_product}</h3>                                
                            </div>
                            <div class="modal-body">    
                                <p>{addProductForm}</p>
                                <button class='buy-button' onClick={
                                    () => {
                                        handleClose()
                                        props.changeProduct(productDB);
                                    }
                                }>{adminPanelText.change_product}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>    
    )
}

export default AdminPanel;

