const User = require("../Model/UserModel");

const getAllUsers = async (req,res,next) => {
    let Users;
    //Get all Users
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message:"Users not found"})
    }
    //display all users
    return res.status(200).json({ users });
};
//data insert
const addUsers = async (req, res, next) => {
    const { name,gmail,age, address} = req.body;
    let users;

    try{
        users = new User ({name,gmail,age,address});
        await users.save();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
        return res.status(200).json({ users });
};

exports.addUsers = addUsers;
exports.getAllUsers = getAllUsers;