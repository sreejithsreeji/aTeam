const mongoose=require('mongoose');
const timestamp=require('mongoose-timestamp');
const friendSchema=mongoose.Schema({
    id:{
        type:String
    },
    status:{
        type:Boolean
    }
});

const requestSchema=mongoose.Schema({
    senderId:{
        type:String
    },
    status:Boolean
})
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    profile_pic:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female','others']
    },
    password:{
        type:String,
        required:true,
    },
    friends:[friendSchema],
    requests:[requestSchema]
})
UserSchema.plugin(timestamp);
const User=mongoose.model('User',UserSchema);
module.exports=User;

