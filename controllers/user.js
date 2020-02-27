const User = require("../models/user");
const helper = require("../shared/helper");

const register = async (req, res, next) => {
    
    let password = req.params.password;
    let user = new User({
        name: req.params.name,
        email: req.params.email,
        profile_pic: req.files.profile_pic ? req.files.profile_pic.path : null,
        gender: req.params.gender,
        password: await helper.hashPassword(password)
    });
    user.save(err => {
        if (err) res.send(err);
        else
            res.send({
                status: "success",
                code: 200,
                message: "user registerd successfully"
            });
    });
    next();
};

const login = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    let user = await User.findOne({
        email: email
    });
    if (user) {
        let passwordmatchResult = await helper.comparePassword(
            password,
            user.password
        );
        if (passwordmatchResult)
            res.send({
                status: 200,
                message: "login sucessfull"
            });
        else {
            res.send({
                status: 200,
                message: "invalid credentials"
            });
        }
        next();
    } else {
        res.send({
            status: 200,
            message: "Sorry. we didn't find your details."
        });
        next();
    }
};

const getAll = async (req, res, next) => {
    const users = await User.find({
        email: {
            $ne: req.params.email
        }
    });
    res.send(users);
    next();
};

const sendRequest = (senderId, recepientId) => {};

const getFriends = async (req, res, next) => {
    const user = await User.find({
        email: req.params.email
    });
    if (user.length > 0) {
        res.send({
            status: true,
            result: user.friends
        });
    } else {
        res.send({
            status: false,
            message: "No user found"
        });
    }
    next();
};

const getRequests = async (req, res, next) => {
    const user = await User.find({
        email: req.params.email
    });
    if (user.length > 0) {
        res.send({
            status: true,
            result: user.requests
        });
    } else {
        res.send({
            status: false,
            message: "No user found"
        });
    }
    next();
};

module.exports = {
    getAll,
    register,
    getFriends,
    login,
    getRequests
};