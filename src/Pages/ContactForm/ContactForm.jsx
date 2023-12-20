// src/components/ContactForm.js
import React, { useState } from 'react';
import { Input, Select, Button, Slider } from 'antd';
import eventIcon from '../../Assets/svgs/eventIcon.svg'
import time from '../../Assets/svgs/time.svg'
import guest from '../../Assets/svgs/guest.svg'
import { DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import BudgetCard from '../../Components/Card/BudgetCard';
import axios from 'axios';

const { Option } = Select;



const ContactForm = ({ allEvents, formData, enteringData, selectedEvent, selectingEvent, nextPage, submitForm, bill }) => {


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
                <img src={eventIcon} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Kontakt Infos</h1>
            </div>
            <div className="pb-7 flex space-x-12">
                <Input
                    prefix={<img src={eventIcon} width={16} className='mr-3' />}
                    type="text"
                    placeholder="E-Mail"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    name='email'
                    onChange={enteringData}
                    value={formData?.email}
                />
            </div>
            <div className="pb-7 flex space-x-4">
                <Input
                    prefix={<img src={guest} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Telefonnummer"
                    className="flex-1 bg-white shadow-md py-5"
                    name='phone'
                    onChange={enteringData}
                    value={formData?.phone}
                /> </div>
            <div className='flex flex-col lg:flex-row items-center justify-between pb-5 px-5 lg:px-0'>
                <BudgetCard budget={formData?.budget} bill={bill} />
                <Button type="primary" className=" px-10  bg-green rounded-full mt-4 lg:mt-0" onClick={submitForm}>Einreichen</Button>
            </div>

        </div>
    );
};

export default ContactForm;
