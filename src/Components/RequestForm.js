// import React from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './EditUser.css';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TravelRequestForm = () => {
    const formik = useFormik({
        initialValues: {
            employeeId: '',
            employeeName: '',
            projectName: '',
            departmentName: '',
            reasonForTravel: '',
            typeOfBooking: '',
            Aadhar: '',
            domesticFlightDate: '',
            passportNumber: '',
            passportFile: '',
            visaFile: '',
            internationalFlightDate: '',
            hotelDate: '',
            daysOfStay: '',
            mealRequired: '',
            mealPreference: '',
        },
        onSubmit: values => {
            // Handle form submission here
            console.log(values);
        },
        // Add validation schema for each field
        validationSchema: Yup.object({
            employeeId: Yup.number().required('Required'),
            employeeName: Yup.string().required('Required'),
            projectName: Yup.string().required('Required'),
            departmentName: Yup.string().required('Required'),
            reasonForTravel: Yup.string().required('Required'),
            typeOfBooking: Yup.string().required('Required'),
            Aadhar: Yup.string().required('Required'),
            // domesticFlightDate: Yup.string.required('Required'),


            // Add validation for Air Ticket fields
            // domesticFlightAadhar: Yup.string().when('typeOfBooking', {
            //     is: 'Air Ticket',
            //     then: Yup.string().required('Required'),
            // }),
            // domesticFlightDate: Yup.date().when('typeOfBooking', {
            //     is: 'Air Ticket',
            //     then: Yup.date().required('Required'),
            // }),
            // passportNumber: Yup.string().when('typeOfBooking', {
            //     is: 'Air Ticket + Hotel',
            //     then: Yup.string().required('Required'),
            // }),
            // passportFile: Yup.mixed().when('typeOfBooking', {
            //     is: 'Air Ticket + Hotel',
            //     then: Yup.mixed().required('Required'),
            // }),
            // visaFile: Yup.mixed().when('typeOfBooking', {
            //     is: 'Air Ticket + Hotel',
            //     then: Yup.mixed().required('Required'),
            // }),
            // internationalFlightDate: Yup.date().when('typeOfBooking', {
            //     is: 'Air Ticket + Hotel',
            //     then: Yup.date().required('Required'),
            // }),
            // // Add validation for Hotel fields
            // hotelDate: Yup.date().when('typeOfBooking', {
            //     is: 'Hotel Only',
            //     then: Yup.date().required('Required'),
            // }),
            // daysOfStay: Yup.number().when('typeOfBooking', {
            //     is: 'Hotel Only',
            //     then: Yup.number().required('Required'),
            // }),
            // mealRequired: Yup.string().when('typeOfBooking', {
            //     is: 'Hotel Only',
            //     then: Yup.string().required('Required'),
            // }),
            // mealPreference: Yup.string().when('typeOfBooking', {
            //     is: 'Hotel Only',
            //     then: Yup.string().required('Required'),
            // }),
        }),
    });

    return (
        <div className='container-fluid'>
            <div>
                <div className='row justify-content-center form-wrapper my-2'>
                    <div className='col-md-6-form'>
                        <h1 className='text-center mb-4 rHeading'>
                            Request Form
                        </h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='row-g-3'>
                                <div className='col-md-6 label-text-style align-items-start'>
                                    <input
                                        id="employeeID"
                                        type="number"
                                        name="employeeId"
                                        placeholder='Employee ID'
                                        className={`form-control-sm form-control dark-border ${formik.touched.employeeId && formik.errors.employeeId ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.employeeId}
                                    />
                                    {formik.touched.employeeId && formik.errors.employeeId ? (
                                        <div className="invalid-feedback">{formik.errors.employeeId}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    <input
                                        id="employeeName"
                                        name="employeeName"
                                        type="text"
                                        placeholder='Employee Name'
                                        className={`form-control-sm form-control dark-border ${formik.touched.employeeName && formik.errors.employeeName ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.employeeName}
                                    />
                                    {formik.touched.employeeName && formik.errors.employeeName ? (
                                        <div className="invalid-feedback">{formik.errors.employeeName}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    <input
                                        id="projectName"
                                        name="projectName"
                                        type="text"
                                        placeholder='Project Name'
                                        className={`form-control-sm form-control dark-border ${formik.touched.projectName && formik.errors.projectName ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.projectName}
                                    />
                                    {formik.touched.projectName && formik.errors.projectName ? (
                                        <div className="invalid-feedback">{formik.errors.projectName}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    <input
                                        id="departmentName"
                                        name="departmentName"
                                        type="text"
                                        placeholder='Department Name'
                                        className={`form-control-sm form-control dark-border ${formik.touched.departmentName && formik.errors.departmentName ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.departmentName}
                                    />
                                    {formik.touched.departmentName && formik.errors.departmentName ? (
                                        <div className="invalid-feedback">{formik.errors.departmentName}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    <input
                                        id="reasonForTravel"
                                        name="reasonForTravel"
                                        type="text"
                                        placeholder='Reason for Traveling'
                                        className={`form-control-sm form-control dark-border ${formik.touched.reasonForTravel && formik.errors.reasonForTravel ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.reasonForTravel}
                                    />
                                    {formik.touched.reasonForTravel && formik.errors.reasonForTravel ? (
                                        <div className="invalid-feedback">{formik.errors.reasonForTravel}</div>
                                    ) : null}
                                </div>

                                <div className="col-md-6 label-text-style align-items-start">
                                    <label htmlFor="typeOfBooking" className="form-label label-text-style">
                                        Type of Booking
                                    </label>
                                    <select
                                        id="typeOfBooking"
                                        name="typeOfBooking"
                                        className={`form-control-sm form-control dark-border ${formik.touched.typeOfBooking && formik.errors.typeOfBooking ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.typeOfBooking}
                                    >
                                        <option value="" label="Select Type of Booking" />
                                        <option value="Air Ticket" label="Air Ticket" />
                                        <option value="Hotel Only" label="Hotel Only" />
                                        <option value="Air Ticket + Hotel" label="Air Ticket + Hotel" />
                                    </select>
                                    {formik.touched.typeOfBooking && formik.errors.typeOfBooking ? (
                                        <div className="invalid-feedback">{formik.errors.typeOfBooking}</div>
                                    ) : null}
                                </div>
                                {formik.values.typeOfBooking === 'Air Ticket' && (
                                    <div className="col-md-6 label-text-style align-items-start">
                                        <label htmlFor="flightType" className="form-label label-text-style">
                                            Flight Type
                                        </label>
                                        <select
                                            id="flightType"
                                            name="flightType"
                                            className={`form-control-sm form-control dark-border ${formik.touched.flightType && formik.errors.flightType ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.flightType}
                                        >
                                            <option value="" label="Select Flight Type" />
                                            <option value="International" label="International" />
                                            <option value="Domestic" label="Domestic" />
                                        </select>
                                        {formik.touched.flightType && formik.errors.flightType ? (
                                            <div className="invalid-feedback">{formik.errors.flightType}</div>
                                        ) : null}
                                        {formik.values.flightType === "Domestic" && (
                                            <div className="col-md-6 label-text-style align-items-start">
                                                <input
                                                    id="Aadhar"
                                                    name="Aadhar"
                                                    type="number"
                                                    placeholder='Aadhar Number'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.Aadhar && formik.errors.Aadhar ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Aadhar}
                                                />
                                                {formik.touched.Aadhar && formik.errors.Aadhar ? (
                                                    <div className="invalid-feedback">{formik.errors.Aadhar}</div>
                                                ) : null}

                                                <input
                                                    id="domesticDate"
                                                    name="domesticDate"
                                                    type="date"
                                                    placeholder='Date of Flight'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.domesticDate && formik.errors.domesticDate ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.domesticDate}
                                                />
                                                {formik.touched.domesticDate && formik.errors.domesticDate ? (
                                                    <div className="invalid-feedback">{formik.errors.domesticDate}</div>
                                                ) : null}
                                            </div>
                                        )
                                        }

                                        {formik.values.flightType === "International" && (
                                            <div className="col-md-6 label-text-style align-items-start">
                                                <input
                                                    id="Aadhar"
                                                    name="Aadhar"
                                                    type="number"
                                                    placeholder='Aadhar Number'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.Aadhar && formik.errors.Aadhar ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Aadhar}
                                                />
                                                {formik.touched.Aadhar && formik.errors.Aadhar ? (
                                                    <div className="invalid-feedback">{formik.errors.Aadhar}</div>
                                                ) : null}

                                                <input
                                                    id="internationalDate"
                                                    name="internationalDate"
                                                    type="date"
                                                    placeholder='Date of Flight'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.internationalDate && formik.errors.internationalDate ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.internationalDate}
                                                />
                                                {formik.touched.internationalDate && formik.errors.internationalDate ? (
                                                    <div className="invalid-feedback">{formik.errors.internationalDate}</div>
                                                ) : null}

                                                <input
                                                    id="passportNumber"
                                                    name="passportNumber"
                                                    type="text"
                                                    placeholder='Pssport Number'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.passportNumber && formik.errors.passportNumber ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.passportNumber}
                                                />
                                                {formik.touched.passportNumber && formik.errors.passportNumber ? (
                                                    <div className="invalid-feedback">{formik.errors.passportNumber}</div>
                                                ) : null}

                                                <input
                                                    id="passportFile"
                                                    name="passportFile"
                                                    type="file"
                                                    placeholder='Passport File'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.passportFile && formik.errors.passportFile ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.passportFile}
                                                />
                                                {formik.touched.passportFile && formik.errors.passportFile ? (
                                                    <div className="invalid-feedback">{formik.errors.passportFile}</div>
                                                ) : null}
                                            </div>
                                        )
                                        }
                                        {formik.touched.reasonForTravel && formik.errors.reasonForTravel ? (
                                            <div className="invalid-feedback">{formik.errors.reasonForTravel}</div>
                                        ) : null}

                                    </div>
                                )}

                                {formik.values.typeOfBooking === 'Hotel Only' && (
                                    <div className="col-md-6 label-text-style align-items-start">
                                        <input
                                            id="Date"
                                            name="Date"
                                            type="date"
                                            placeholder='Date'
                                            className={`form-control-sm form-control dark-border ${formik.touched.hotelDate && formik.errors.hotelDate ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.hotelDate}
                                        />
                                        {formik.touched.hotelDate && formik.errors.hotelDate ? (
                                            <div className="invalid-feedback">{formik.errors.hotelDate}</div>
                                        ) : null}

                                        <input
                                            id="daysOfStay"
                                            name="daysOfStay"
                                            type="number"
                                            placeholder='Days of Stay'
                                            className={`form-control-sm form-control dark-border ${formik.touched.daysOfStay && formik.errors.daysOfStay ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.daysOfStay}
                                        />
                                        {formik.touched.daysOfStay && formik.errors.daysOfStay ? (
                                            <div className="invalid-feedback">{formik.errors.daysOfStay}</div>
                                        ) : null}

                                        <select
                                            id="mealRequired"
                                            name="mealRequired"
                                            className={`form-control-sm form-control dark-border ${formik.touched.mealRequired && formik.errors.mealRequired ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mealRequired}
                                        >
                                            <option value="" label="Select Meal Required" />
                                            <option value="Lunch" label="Lunch" />
                                            <option value="Dinner" label="Dinner" />
                                            <option value="Both" label="Both" />
                                        </select>
                                        {formik.touched.mealRequired && formik.errors.mealRequired ? (
                                            <div className="invalid-feedback">{formik.errors.mealRequired}</div>
                                        ) : null}

                                        <select
                                            id="mealPreference"
                                            name="mealPreference"
                                            className={`form-control-sm form-control dark-border ${formik.touched.mealPreference && formik.errors.mealPreference ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mealPreference}
                                        >
                                            <option value="" label="Select Meal Preference" />
                                            <option value="Veg" label="Veg" />
                                            <option value="Non-Veg" label="Non-Veg" />
                                        </select>
                                        {formik.touched.mealPreference && formik.errors.mealPreference ? (
                                            <div className="invalid-feedback">{formik.errors.mealPreference}</div>
                                        ) : null}
                                    </div>
                                )}

                                {formik.values.typeOfBooking === 'Air Ticket + Hotel' && (
                                    <div className="col-md-6 label-text-style align-items-start">
                                        <input
                                            id="Date"
                                            name="Date"
                                            type="date"
                                            placeholder='Date'
                                            className={`form-control-sm form-control dark-border ${formik.touched.hotelDate && formik.errors.hotelDate ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.hotelDate}
                                        />
                                        {formik.touched.hotelDate && formik.errors.hotelDate ? (
                                            <div className="invalid-feedback">{formik.errors.hotelDate}</div>
                                        ) : null}

                                        <input
                                            id="daysOfStay"
                                            name="daysOfStay"
                                            type="number"
                                            placeholder='Days of Stay'
                                            className={`form-control-sm form-control dark-border ${formik.touched.daysOfStay && formik.errors.daysOfStay ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.daysOfStay}
                                        />
                                        {formik.touched.daysOfStay && formik.errors.daysOfStay ? (
                                            <div className="invalid-feedback">{formik.errors.daysOfStay}</div>
                                        ) : null}

                                        <select
                                            id="mealRequired"
                                            name="mealRequired"
                                            className={`form-control-sm form-control dark-border ${formik.touched.mealRequired && formik.errors.mealRequired ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mealRequired}
                                        >
                                            <option value="" label="Select Meal Required" />
                                            <option value="Lunch" label="Lunch" />
                                            <option value="Dinner" label="Dinner" />
                                            <option value="Both" label="Both" />
                                        </select>
                                        {formik.touched.mealRequired && formik.errors.mealRequired ? (
                                            <div className="invalid-feedback">{formik.errors.mealRequired}</div>
                                        ) : null}

                                        <select
                                            id="mealPreference"
                                            name="mealPreference"
                                            className={`form-control-sm form-control dark-border ${formik.touched.mealPreference && formik.errors.mealPreference ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mealPreference}
                                        >
                                            <option value="" label="Select Meal Preference" />
                                            <option value="Veg" label="Veg" />
                                            <option value="Non-Veg" label="Non-Veg" />
                                        </select>
                                        {formik.touched.mealPreference && formik.errors.mealPreference ? (
                                            <div className="invalid-feedback">{formik.errors.mealPreference}</div>
                                        ) : null}

                                        <div className="col-md-6 label-text-style align-items-start">
                                            <label htmlFor="typeOfBooking" className="form-label label-text-style">
                                                Type of Booking
                                            </label>
                                            <select
                                                id="typeOfBooking"
                                                name="typeOfBooking"
                                                className={`form-control-sm form-control dark-border ${formik.touched.typeOfBooking && formik.errors.typeOfBooking ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.typeOfBooking}
                                            >
                                                <option value="" label="Select Type of Booking" />
                                                <option value="Air Ticket" label="Air Ticket" />
                                                <option value="Hotel Only" label="Hotel Only" />
                                                <option value="Air Ticket + Hotel" label="Air Ticket + Hotel" />
                                            </select>
                                            {formik.touched.typeOfBooking && formik.errors.typeOfBooking ? (
                                                <div className="invalid-feedback">{formik.errors.typeOfBooking}</div>
                                            ) : null}
                                        </div>

                                        <div className="col-md-6 label-text-style align-items-start">
                                        <label htmlFor="flightType" className="form-label label-text-style">
                                            Flight Type
                                        </label>
                                        <select
                                            id="flightType"
                                            name="flightType"
                                            className={`form-control-sm form-control dark-border ${formik.touched.flightType && formik.errors.flightType ? 'is-invalid' : ''}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.flightType}
                                        >
                                            <option value="" label="Select Flight Type" />
                                            <option value="International" label="International" />
                                            <option value="Domestic" label="Domestic" />
                                        </select>
                                        {formik.touched.flightType && formik.errors.flightType ? (
                                            <div className="invalid-feedback">{formik.errors.flightType}</div>
                                        ) : null}
                                        {formik.values.flightType === "Domestic" && (
                                            <div className="col-md-6 label-text-style align-items-start">
                                                <input
                                                    id="Aadhar"
                                                    name="Aadhar"
                                                    type="number"
                                                    placeholder='Aadhar Number'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.Aadhar && formik.errors.Aadhar ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Aadhar}
                                                />
                                                {formik.touched.Aadhar && formik.errors.Aadhar ? (
                                                    <div className="invalid-feedback">{formik.errors.Aadhar}</div>
                                                ) : null}

                                                <input
                                                    id="domesticDate"
                                                    name="domesticDate"
                                                    type="date"
                                                    placeholder='Date of Flight'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.domesticDate && formik.errors.domesticDate ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.domesticDate}
                                                />
                                                {formik.touched.domesticDate && formik.errors.domesticDate ? (
                                                    <div className="invalid-feedback">{formik.errors.domesticDate}</div>
                                                ) : null}
                                            </div>
                                        )
                                        }

                                        {formik.values.flightType === "International" && (
                                            <div className="col-md-6 label-text-style align-items-start">
                                                <input
                                                    id="Aadhar"
                                                    name="Aadhar"
                                                    type="number"
                                                    placeholder='Aadhar Number'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.Aadhar && formik.errors.Aadhar ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.Aadhar}
                                                />
                                                {formik.touched.Aadhar && formik.errors.Aadhar ? (
                                                    <div className="invalid-feedback">{formik.errors.Aadhar}</div>
                                                ) : null}

                                                <input
                                                    id="internationalDate"
                                                    name="internationalDate"
                                                    type="date"
                                                    placeholder='Date of Flight'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.internationalDate && formik.errors.internationalDate ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.internationalDate}
                                                />
                                                {formik.touched.internationalDate && formik.errors.internationalDate ? (
                                                    <div className="invalid-feedback">{formik.errors.internationalDate}</div>
                                                ) : null}

                                                <input
                                                    id="passportNumber"
                                                    name="passportNumber"
                                                    type="text"
                                                    placeholder='Pssport Number'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.passportNumber && formik.errors.passportNumber ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.passportNumber}
                                                />
                                                {formik.touched.passportNumber && formik.errors.passportNumber ? (
                                                    <div className="invalid-feedback">{formik.errors.passportNumber}</div>
                                                ) : null}

                                                <input
                                                    id="passportFile"
                                                    name="passportFile"
                                                    type="file"
                                                    placeholder='Passport File'
                                                    className={`form-control-sm form-control dark-border ${formik.touched.passportFile && formik.errors.passportFile ? 'is-invalid' : ''}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.passportFile}
                                                />
                                                {formik.touched.passportFile && formik.errors.passportFile ? (
                                                    <div className="invalid-feedback">{formik.errors.passportFile}</div>
                                                ) : null}
                                            </div>
                                        )
                                        }
                                        {formik.touched.reasonForTravel && formik.errors.reasonForTravel ? (
                                            <div className="invalid-feedback">{formik.errors.reasonForTravel}</div>
                                        ) : null}

                                    </div>





                                    </div>

                                )}

                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelRequestForm;
