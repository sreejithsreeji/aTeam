require('dotenv').config();

const appConfig={
    name:'App Server',
    version:'0.0.1',
    mongoURI:process.env.CONNECTION_STRING.toString().replace(("<PASSWORD>"),process.env.MONGO_PASSWORD)
}

const envConfig={
    PORT:5000,
    CONNECTION_STRING:'mongodb+srv://user:<PASSWORD>@cluster0-bzl5t.mongodb.net/test?retryWrites=true&w=majority',
    MONGO_PASSWORD:"Qwerty"
}

module.exports=appConfig