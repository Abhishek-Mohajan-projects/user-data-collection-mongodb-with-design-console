const {v4 : uuidv4} = require("uuid");
const User = require("../models/user.model");


const getUsers = async(req, res) => {
  try{
    const users = await User.find()
    res.status(200).send(users);
  }catch(error){
    res.status(404).send(error.message);
  }
};

const getOneUser = async(req, res) => {
    try{
        const oneUser = await User.findOne({id : req.params.id})
        res.status(201).json(oneUser)
    }catch(error){
        res.status(400).send(error.message)
    }
};

const createUser = async(req, res) => {
    try {
        const newUser = await new User ({
            id : uuidv4(),
            name : req.body.name,
            age: Number(req.body.age),
            image : req.file.filename,
        });
        await newUser.save();
        res.status(201).send( "user is created");
    }catch(error){
        res.status(404).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({id : req.params.id}) 
        user.name = req.body.name;
        user.age = Number(req.body.age);
        user.image = req.file.filename;
        await user.save()
        res.status(200).send(user)
    }catch(error){
        res.status(404).send(error.message);
    }
};

const deleteUser = async(req, res) => {
    try{
        await User.deleteOne({id : req.params. id})
        res.status(201).send("user is deleted");
    }catch(error){
        res.status(403).send(error.message)
    }
};


module.exports = {getUsers, getOneUser, createUser, updateUser, deleteUser};