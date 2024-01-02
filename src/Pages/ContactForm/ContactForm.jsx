// src/components/ContactForm.js
import React, { useState } from 'react';
import { Input, Select, Button, Slider } from 'antd';
import eventIcon from '../../Assets/svgs/userIcon.svg'
import mail from '../../Assets/svgs/mail.svg'
import { ReactComponent as PhoneIcon } from '../../Assets/svgs/phone.svg'
import address from '../../Assets/svgs/address.svg'
import { DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import BudgetCard from '../../Components/Card/BudgetCard';
import axios from 'axios';
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'

const { Option } = Select;



const ContactForm = ({ allEvents, formData, enteringData, selectedEvent, selectingEvent, nextPage, submitForm, bill, loading }) => {


    return (
        <div className="container  mt-8 px-5 lg:px-0">
            <div className='flex items-center mb-4 my-[50px]'>
                <img src={eventIcon} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Persönliche Informationen</h1>
            </div>
            <div className="pb-7 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:items-start">
                {/* Add options for Location */}
                <Input
                    prefix={<img src={eventIcon} width={16} className='mr-3' />}
                    type="text"
                    placeholder="Vorname"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='firstName'
                    onChange={enteringData}
                    value={formData?.firstName}
                />
                <Input
                    prefix={<img src={eventIcon} width={16} className='mr-3' />}
                    type="text"
                    placeholder="Nachname"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='lastName'
                    onChange={enteringData}
                    value={formData?.lastName}
                />

            </div>
            <div className='flex items-center pb-3'>
                <img src={mail} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Kontakt Infos</h1>
            </div>
            <div className="pb-7 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start gap-12">
                {/* Add options for Location */}
                <Input
                    prefix={<img src={mail} width={16} className='mr-3' />}
                    type="text"
                    placeholder="E-Mail"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='email'
                    onChange={enteringData}
                    value={formData?.email}
                />
                <PhoneInput
                    internationalIcon={PhoneIcon}
                    placeholder="Telefonnummer"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='phone'
                    onChange={(value) => enteringData({ target: { name: "phone", value } })}
                    value={formData?.phone}
                />
                {/* <PhoneInput
                    prefix={<img src={phone} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Telefonnummer"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='phone'
                    onChange={enteringData}
                    value={formData?.phone}
                /> */}

            </div>
            <div className='flex items-center pb-3'>
                <img src={address} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Adresse</h1>
            </div>
            <div className="pb-7 flex space-x-12">
                <Input
                    prefix={<img src={address} width={16} className='mr-3' />}
                    type="text"
                    placeholder="Adresse"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='address'
                    onChange={enteringData}
                    value={formData?.address}
                />
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between pb-5 px-5 lg:px-0'>
                <BudgetCard budget={formData?.budget} bill={bill} />
                <Button loading={loading} type="primary" className=" px-10  bg-green rounded-full mt-4 lg:mt-0" onClick={submitForm}>Einreichen</Button>
            </div>

        </div>
    );
};

export default ContactForm;
