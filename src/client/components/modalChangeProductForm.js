import React from 'react';
import adminPanelText from '../assets/local/adminPanel.json'

function ModalChangeProductForm (props) {
    return (
        <div class="modal" style={props.form.modal}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">{adminPanelText.change_product}</h3>                                
                    </div>
                    <div class="modal-body">    
                        <p>{props.addProductForm}</p>
                        <button class='buy-button' onClick={
                            () => {
                                props.handleClose()
                                props.changeProduct(props.productDB);
                            }
                        }>{adminPanelText.change_product}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChangeProductForm