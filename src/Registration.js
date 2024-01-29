import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./App.css";

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
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="container-fluid mt-3  "> 
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center mb-4 rHeading">Registration Form</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6 label-text-style">
                                <label htmlFor="firstName" className="form-label ">
                                    First Name
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className={`form-control dark-border ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div className="invalid-feedback">{formik.errors.firstName}</div>
                                ) : null}
                                 </label>
                            </div>

                            <div className="col-md-6 label-text-style">
                                <label htmlFor="lastName" className="form-label label-text-style">
                                    Last Name
                               
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    className={`form-control dark-border ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div className="invalid-feedback">{formik.errors.lastName}</div>
                                ) : null}
                                 </label>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-md-12 label-text-style">
                                <label htmlFor="emailId" className="form-label label-text-style">
                                    Email ID
                                </label>
                                <input
                                    id="emailId"
                                    name="emailId"
                                    type="email"
                                    className={`form-control dark-border ${formik.touched.emailId && formik.errors.emailId ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.emailId}
                                />
                                {formik.touched.emailId && formik.errors.emailId ? (
                                    <div className="invalid-feedback">{formik.errors.emailId}</div>
                                ) : null}
                            </div>

                            <div className="col-md-12 label-text-style">
                                <label htmlFor="password" className="form-label label-text-style">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={`form-control dark-border ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
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
                            <div className="col-md-12 label-text-style">
                                <label htmlFor="address" className="form-label label-text-style">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    className={`form-control dark-border ${formik.touched.address && formik.errors.address ? 'is-invalid' : ''}`}
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
                            <div className="col-md-6 label-text-style">
                                <label htmlFor="mobileNumber" className="form-label label-text-style">
                                    Mobile Number
                                </label>
                                <input
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    type="text"
                                    className={`form-control dark-border ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobileNumber}
                                />
                                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                    <div className="invalid-feedback">{formik.errors.mobileNumber}</div>
                                ) : null}
                            </div>

                            <div className="col-md-6 label-text-style">
                                <label htmlFor="role" className="form-label label-text-style">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    className={`form-control dark-border ${formik.touched.role && formik.errors.role ? 'is-invalid' : ''}`}
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
                            <div className="col-md-6 label-text-style">
                                <label htmlFor="department" className="form-label label-text-style">
                                    Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    className={`form-control dark-border ${formik.touched.department && formik.errors.department ? 'is-invalid' : ''}`}
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

                            <div className="col-md-6 label-text-style">
                                <label htmlFor="manager" className="form-label label-text-style">
                                    Manager
                                </label>
                                <select
                                    id="manager"
                                    name="manager"
                                    className={`form-control dark-border ${formik.touched.manager && formik.errors.manager ? 'is-invalid' : ''}`}
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
                            <div className="d-grid gap-2 col-6 mx-auto label-text-style">
                                <button className="btn btn-primary" type="submit">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
