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

exports.getAllUsers = getAllUsers;