import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserDetail = () => {
  const { userid } = useParams();

  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch("http://localhost:8000/user/" + userid).then((res) => {
      return res.json();
    }).then((resp) => {
      // console.log();
      setUserData(resp);
    }).catch((err) => {
      console.error(err.message);
    });

  }, []);
  return (
    <div className="container mt-4 details_wrapper ">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>User Details</h2>
        </div>
        <div className="card-body">
          {userData &&
            <>
              <h2 className="card-title">User First Name is: <b className="float-left">{userData.firstName}</b></h2>
              <h3 className="card-text float-left">User Id is: {userData.id}</h3>
              <h3 className="card-text float-left">User Last Name is: {userData.lastName}</h3>
              <h3 className="card-text float-left">User Address is: {userData.address}</h3>
              <h3 className="card-text float-left">User Mobile Number is: {userData.mobileNumber}</h3>
              <h3 className="card-text float-left">User Role is: {userData.roleId}</h3>
              <h3 className="card-text float-left">User Department is: {userData.departmentId}</h3>
              <h3 className="card-text float-left">User Manager is: {userData.managerId}</h3>
              <div className="clearfix"></div>
              <Link className="btn btn-danger" cla to="/">Back to Dashboard</Link>
            </>
          }
        </div>
      </div>
    </div>


  )
}

export default UserDetail
