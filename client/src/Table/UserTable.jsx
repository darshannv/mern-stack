import React, { useState } from 'react'
import axios from 'axios'
import Table from '../Component/Table'
import AddUser from '../Component/AddUser'
import UpdatedUser from '../Component/UpdatedUser'
import DeletUser from '../Component/DeleteUser'
import toast from 'react-hot-toast'

function UserTable() {

    const [value, setValue] = useState({
        name: '',
        fathername: '',
        email: '',
        phone: ''
    })

    const [updateid, setUpdateid] = useState()
    const [deleteid, setDeleteId] = useState()


    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        try {
            const UpdatedUser = await axios.put(`http://localhost:4000/api/update/${updateid}`, value)
            const response = UpdatedUser.data

            if(response.success) {
                toast.success(response.message)
            }

        } catch(error) {
            console.log(error)
        }
    }

    const UpdatedUser = (id) => {
        setUpdateid(id)
    }

    const Deleteuser = (delete_id) => {
        setDeleteId(delete_id)
    }

    const handleUserDelet = async () => {

        try {

            const deleteUser = await axios.delete(`http://localhost:4000/api/delete/${deleteid}`)

            const response = deleteUser.data

            if(response.success) {
                toast.success(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

  return (
<>
<Table UpdatedUser={UpdatedUser} Deleteuser={Deleteuser}/>
<AddUser/>
<UpdatedUser value={value} handleChange={handleChange} handleOnSubmit={handleOnSubmit}/>
<DeletUser handleUserDelet={handleUserDelet}/>
</>
  )
}

export default UserTable