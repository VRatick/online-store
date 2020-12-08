export default function inputPhoneReplace (phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g,'');        
    phoneNumber = phoneNumber.substring(0,10);    
    let size = phoneNumber.length;
    if(size == 0){
        phoneNumber = phoneNumber;
    }else if(size < 4){
        phoneNumber = '(' + phoneNumber;
    }else if(size < 7){
        phoneNumber = '(' + phoneNumber.substring(0,3)+') ' + phoneNumber.substring(3,6);
    }else{
        phoneNumber = '(' + phoneNumber.substring(0,3)+') ' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6,10);
    }
    return phoneNumber; 
    
}