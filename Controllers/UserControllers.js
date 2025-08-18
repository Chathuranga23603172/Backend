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
//get by id
const getUserById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "User not found" });
<<<<<<< HEAD
    }
=======
    }l
>>>>>>> 9c5d92c (ch)
    return res.status(200).json({ user });
};

//update User Details
const updateUser = async (req,res,next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let users;
     try{
        users = await User.findByIdAndUpdate(id, 
            { name: name, gmail: gmail, age: age, address: address });
            users = await users.save();
     }catch(err){
        console.log(err);
     }
    if (!users) {
        return res.status(404).json({ message: "Unable to Update User Details" });
    }
    return res.status(200).json({ users });

};

//delete user
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "Unable to Delete User" });
    }
    return res.status(200).json({ user });
};

exports.updateUser = updateUser;
exports.addUsers = addUsers;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.deleteUser = deleteUser;