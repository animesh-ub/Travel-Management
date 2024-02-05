import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./ShowUser.css";

const ShowUSer = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const EditFunction = (id) => {
        navigate("/user/edit/" + id)
    };

    const RemoveFunction = (id) => {
       if(window.confirm("Are you sure you want to remove?")){
        fetch("http://localhost:8000/user/" + id ,{
            method: "DELETE"
        }).then(() => {
            window.location.reload();
            alert(`Removed Successfully"`);
        }).catch((err) => {
            console.error(err.message);
        })
       }
    };

    
    const DetailFunction = (id) => {
        navigate("/user/detail/" + id)
    };


    useEffect(() => {
        fetch("http://localhost:8000/user").then((res) => {
            return res.json();
        }).then((res) => {
            // console.log();
            setUserData(res);
        }).catch((err) => {
            console.error(err.message);
        });

    }, [])
    return (
        <div className='container showUSer-container'>
            <div className='card show-all-card'>
                <div className='card-title showTable-title'>
                    <h2> All Users</h2>
                </div>
                <div className='card-body'>
                    <div className='addNew-btn'>
                        <Link to="user/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className='table table-striped'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>Id</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Role</td>
                                <td>Department</td>
                                <td>Manager Name</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData &&
                                userData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.roleID}</td>
                                        <td>{item.departmentId}</td>
                                        <td>{item.managerId}</td>
                                        <td>
                                            <a onClick={()=>{EditFunction(item.id)}} className='btn btn-success'>Edit</a>
                                            <a onClick={()=>{RemoveFunction(item.id)}} className='btn btn-danger'>Remove</a>
                                            <a onClick={()=>{DetailFunction(item.id)}} className='btn btn-primary'>Details</a>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ShowUSer
