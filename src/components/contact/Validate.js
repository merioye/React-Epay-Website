
const Validate = ({fname,lname,number,email,address,message})=>{
    let result = {fname:false, lname:false, number:false, email:false, address:false, message:false};
    
    if(fname.trim().length>=3){
        result.fname = true;
    }
    if(lname.trim().length>=3){
        result.lname = true;
    }
    if(number.trim().length===11){
        result.number = true;
    }
    if(email.trim().length>=6 && email.includes('@') && email.includes('.') && email.endsWith('com')){
        result.email = true;
    }
    if(address.trim().length>=10){
        result.address = true;
    }
    if(message.trim().length>=3){
        result.message = true;
    }
    
    return result
}

export {Validate};