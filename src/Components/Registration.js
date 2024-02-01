import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './registration.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Registration = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            mobileNumber: '',
            emailId: '',
            password: '',
            role: '',
            department: '',
            manager: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            address: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            mobileNumber: Yup.string()
                .matches(/^[0-9]{10,}$/, 'Must be a valid phone number')
                .required('Required'),
            emailId: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
            role: Yup.string()
                .oneOf(['Employee', 'Manager'], 'Invalid Role')
                .required('Required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {

                const response = await fetch('http://localhost:21384/api/User/Add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify(values),
                    body: JSON.stringify({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        address: values.address,
                        mobileNumber: values.mobileNumber,
                        email: values.emailId,
                        password: values.password,
                        roleId: parseInt(values.role),
                        departmentId: parseInt(values.department),
                        managerId: parseInt(values.manager),


                    }),
                });
                const data = await response.json();
                console.log('User added:', data);

                setSubmitting(false);
                resetForm();
            } catch (error) {
                console.error('Error adding user:', error);
            } finally {
                setSubmitting(false);
            }

        },
    });



    return (
        <div className="container-fluid">
            <div>
                <div className="row justify-content-center form-wrapper my-2">
                    <div className="col-md-6 form">
                        <h1 className="text-center mb-4 rHeading">Add User</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6 label-text-style align-items-start">
                                    {/* <label htmlFor="firstName" className="form-label ">
                                        First Name
                                    </label> */}
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder='First Name'
                                        className={`form-control-sm form-control dark-border ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className="invalid-feedback">{formik.errors.firstName}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    {/* <label htmlFor="lastName" className="form-label label-text-style">
                                        Last Name
                                    </label> */}

                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder='Last Name'
                                        className={`form-control-sm form-control dark-border ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className="invalid-feedback">{formik.errors.lastName}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-md-12 label-text-style align-items-start">
                                    {/* <label htmlFor="emailId" className="form-label label-text-style">
                                        Email ID
                                    </label> */}
                                    <input
                                        id="emailId"
                                        name="emailId"
                                        placeholder='Email'
                                        type="email"
                                        className={`form-control-sm form-control dark-border ${formik.touched.emailId && formik.errors.emailId ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.emailId}
                                    />
                                    {formik.touched.emailId && formik.errors.emailId ? (
                                        <div className="invalid-feedback">{formik.errors.emailId}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-12 label-text-style align-items-start">
                                    {/* <label htmlFor="password" className="form-label label-text-style">
                                        Password
                                    </label> */}
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder='Password'
                                        type="password"
                                        className={`form-control-sm form-control dark-border ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="invalid-feedback">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-md-12 label-text-style align-items-start">
                                    {/* <label htmlFor="address" className="form-label label-text-style">
                                        Address
                                    </label> */}
                                    <input
                                        id="address"
                                        name="address"
                                        type="textarea"
                                        placeholder='Address'
                                        className={`form-control-sm form-control dark-border ${formik.touched.address && formik.errors.address ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address}
                                    />
                                    {formik.touched.address && formik.errors.address ? (
                                        <div className="invalid-feedback">{formik.errors.address}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className='row g-3'>
                                <div className="col-md-6 label-text-style align-items-start">
                                    {/* <label htmlFor="mobileNumber" className="form-label label-text-style">
                                        Mobile Number
                                    </label> */}
                                    <input
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        type="text"
                                        placeholder='Mobile Number'
                                        className={` form-control-sm form-control dark-border ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.mobileNumber}
                                    />
                                    {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                        <div className="invalid-feedback">{formik.errors.mobileNumber}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    {/* <label htmlFor="role" className="form-label label-text-style">
                                        Role
                                    </label> */}
                                    <select
                                        id="role"
                                        name="role"
                                        className={`form-control-sm form-control dark-border ${formik.touched.role && formik.errors.role ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.role}
                                    >
                                        <option value="" label="Select a role" />
                                        <option value="Employee" label="Employee" />
                                        <option value="Manager" label="Manager" />
                                    </select>
                                    {formik.touched.role && formik.errors.role ? (
                                        <div className="invalid-feedback">{formik.errors.role}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-md-6 label-text-style align-items-start">
                                    {/* <label htmlFor="department" className="form-label label-text-style">
                                        Department
                                    </label> */}
                                    <select
                                        id="department"
                                        name="department"
                                        className={`form-control-sm form-control dark-border ${formik.touched.department && formik.errors.department ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.department}
                                    >
                                        <option value="" label="Select Department" />
                                        <option value="IT" label="IT" />
                                        <option value="Sales" label="Sales" />
                                        <option value="HR" label="HR" />
                                    </select>
                                    {formik.touched.department && formik.errors.department ? (
                                        <div className="invalid-feedback">{formik.errors.department}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    {/* <label htmlFor="manager" className="form-label label-text-style">
                                        Manager
                                    </label> */}
                                    <select
                                        id="manager"
                                        name="manager"
                                        className={`form-control-sm form-control dark-border ${formik.touched.manager && formik.errors.manager ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.manager}
                                    >
                                        <option value="" label="Select Manager" />
                                        <option value="IT_Manager" label="IT Manager" />
                                        <option value="Sales_Manager" label="Sales Manager" />
                                        <option value="HR_Manager" label="HR Manager" />
                                    </select>
                                    {formik.touched.manager && formik.errors.manager ? (
                                        <div className="invalid-feedback">{formik.errors.manager}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row mt-2 mb-2">
                                <div className="d-grid p-1 gap-2 col-6 mx-auto label-text-style  align-items-start submitbtn-wrapper w-100">
                                    <button className="btn btn-primary w-100 mt-3" type="submit">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;