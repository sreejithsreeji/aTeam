const bcrypt=require('bcrypt');

let hashPassword= async (password)=>{
    let h=await bcrypt.hash(password,10);
    return h;
}

let comparePassword=async (password,hash)=>{
    return await bcrypt.compare(password,hash);
}

module.exports={
    hashPassword,
    comparePassword
}