import React from 'react'
import adminPanelText from '../assets/local/adminPanel.json';

function AddProductForm (props) {
    return (
        <div className='add-product-form' style={props.form.show}>
            {props.addProductForm}
            <div>
                <button                         
                    disabled={props.buttonDisbaled()} 
                    className='buy-button'
                    onClick={() => {                            
                        props.addProduct(props.productDB);  
                        window.location.reload(false);                            
                    }}
                >
                    {adminPanelText.add}
                </button> 
            </div>    
        </div>
    )
}

export default AddProductForm;