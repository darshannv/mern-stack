import UserModels from "../models/User.js"

const Createuser = async (req, res)=> {


    try {
        const {name, fathername, email, phone} = req.body;

        const NewUser = new UserModels({
            name, fathername, email, phone
        })
    
        await NewUser.save();
        res.status(200).json({success: true, Message: 'User Created Successfully', NewUser});
    } catch (error) {
        console.lof(error)
        res.status(500).json({success: false, Message: 'Internal server error', NewUser});
        
    }
  

}


//read a data

const getUser = async (req, res) => {

    try {
        const user = await UserModels.find();

        if(!user) {
            return res.status(404).json({success:true, message: 'Users not found'})
        }
        res.status(200).json({success:true, user})
    } catch (error) {
        console.log(error)

        return res.status(500).json({success:false, message: 'Internal server error'})
    }

}


// update user
const updateUser = async(req, res) => {
    try {
    const userId = req.params.id

    const updatedUser = await UserModels.findByIdAndUpdate(userId, req.body, {new:true});

    if(!updatedUser) {
        return res.status(404).json({success:false, message: 'User not found'});
    }

    res.status(200).json({success:true, message:'User Updated successfully', updateUser});
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Internal server error'});
    }
}

// delete user

const deleteUser = async (req, res) => {

    try {
        
        const userId = req.params.id;

        const deletedUser = await UserModels.findByIdAndDelete(userId)

        if(!deletedUser) {
           return res.status(404).json({success: false, message: 'User not found'});
        }
        res.status(200).json({success: true, message: 'User Deleted Successfully'});

    } catch (error) {

        console.log(error)
        return res.status(500).json({success: false, message: 'Internal server error'});
        
    }

}

export {Createuser, getUser, updateUser, deleteUser}