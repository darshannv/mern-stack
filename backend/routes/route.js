import express from 'express'
import { Createuser, getUser, updateUser, deleteUser } from '../controller/UserController.js'

const routers = express.Router()

routers.post('/create', Createuser)
routers.get('/get', getUser)
routers.put('/update/:id', updateUser)
routers.delete('/delete/:id', deleteUser)


export default routers