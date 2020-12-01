import React from 'react';
import TextInput from './textInput';
import adminPanelText from '../assets/local/adminPanel.json'

function ProductForm (props) {
    return (
        <form>
            <TextInput info='name' infoMessage='name_help_text' onChange={props.setProductName} value={props.productDB} text={adminPanelText}/>
            <TextInput info='price' infoMessage='price_help_text' onChange={props.setProductPrice} value={props.productDB} text={adminPanelText}/>
            <TextInput info='description_short' infoMessage='description_short_help_text' onChange={props.setProductDescriptionShort} value={props.productDB} text={adminPanelText}/>
            <TextInput info='description_full' infoMessage='description_full_help_text' onChange={props.setProductDescriptionFull} value={props.productDB} text={adminPanelText}/>
            <TextInput info='producer' infoMessage='producer_help_text' onChange={props.setProductProducer} value={props.productDB} text={adminPanelText}/>
            <TextInput info='amount' infoMessage='amount_help_text' onChange={props.setProductAmount} value={props.productDB} text={adminPanelText}/>
            <TextInput info='languagee' infoMessage='language_help_text' onChange={props.setProductLanguage} value={props.productDB} text={adminPanelText}/>
            <TextInput info='date' infoMessage='date_help_text' onChange={props.setProductDate} value={props.productDB} text={adminPanelText}/>
            <TextInput info='platform' infoMessage='platform_help_text' onChange={props.setProductPlatform} value={props.productDB} text={adminPanelText}/>
            <div className='basket-input'>
                <p>{adminPanelText.images}</p>
                <input className='text-input' value={props.productDB.image === null ? props.productDB.image : props.productDB.image.join(' ')} onChange={props.setProductImages} placeholder={adminPanelText.images_help_text}></input>  
            </div>                           
        </form>
    )    
}

export default ProductForm;