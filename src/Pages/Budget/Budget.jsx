// src/components/BudgetForm.js
import React, { useState } from 'react';
import { Input, Select, Button, Slider } from 'antd';
import eventIcon from '../../Assets/svgs/eventIcon.svg'
import time from '../../Assets/svgs/time.svg'
import guest from '../../Assets/svgs/guest.svg'
import { DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import BudgetCard from '../../Components/Card/BudgetCard';
import axios from 'axios';

const { Option } = Select;
const BudgetForm = ({ allEvents, formData, enteringData, selectedEvent, selectingEvent, nextPage }) => {
    const handleFormSubmit = async () => {

    };
    return (
        <div className="container  mt-8">
            <div className='flex items-center mb-4'>
                <img src={eventIcon} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Event Type</h1>
            </div>
            <div className="pb-7 flex space-x-12">
                <Select className="bg-white shadow-md rounded-md w-full text-left h-[64px]" placeholder="Select Event" prefix={<EnvironmentOutlined />}
                    options={allEvents.map(event => ({ value: event?._id, label: event?.name }))}
                    onChange={selectingEvent}
                    value={selectedEvent?._id}
                />
                {/* Add options for Location */}
                {/* <Input
                    prefix={<img src={eventIcon} width={16} className='mr-3' />}
                    type="text"
                    placeholder="Select Your Event Type"
                    className="bg-white shadow-md py-5 w-50 pl-5"
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                /> */}
                <Input
                    prefix={<img src={eventIcon} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Enter budget"
                    className="bg-white shadow-md py-5 w-50"
                    name='budget'
                    onChange={enteringData}
                    value={formData?.budget}
                />
            </div>
            <div className='flex items-center pb-3'>
                <img src={eventIcon} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Event </h1>
            </div>
            <div className="pb-7 flex space-x-12">
                {/* <Select prefix={<img src={eventIcon} width={16} className='mr-3' />} placeholder="Event Locality" className="flex-1 bg-white shadow-md text-left" onChange={(value) => setFormData({ ...formData, eventLocality: value })}>
                </Select> */}
                <Select placeholder="Location" prefix={<EnvironmentOutlined />} className="flex-1 rounded-md bg-white shadow-md text-left  h-[64px]"
                    options={selectedEvent?.cities?.map(city => ({ value: city?._id, label: city?.name }))}
                />
            </div>
            <div className="pb-7 flex space-x-12">
                <Input
                    prefix={<img src={time} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Number of days"
                    className="flex-1 bg-white shadow-md py-5"
                    name='days'
                    onChange={enteringData}
                    value={formData?.days}
                />
                <Input
                    prefix={<img src={time} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Number of hours"
                    className="flex-1 bg-white shadow-md py-5"
                    name='hours'
                    onChange={enteringData}
                    value={formData?.hours}
                /> </div>
            <div className="pb-7 flex space-x-4">
                <Input
                    prefix={<img src={guest} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Amount of guests"
                    className="flex-1 bg-white shadow-md py-5"
                    name='guests'
                    onChange={enteringData}
                    value={formData?.guests}
                /> </div>
            <div className='flex  items-center justify-between'>
                <BudgetCard />
                <Button type="primary" className=" px-10  bg-green rounded-full" onClick={nextPage}>Next</Button>
            </div>

        </div>
    );
};

export default BudgetForm;
