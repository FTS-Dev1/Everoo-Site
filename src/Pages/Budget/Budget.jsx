// src/components/BudgetForm.js
import React, { useState } from 'react';
import { Input, Select, Button, Slider } from 'antd';
import eventIcon from '../../Assets/svgs/eventIcon.svg'
import time from '../../Assets/svgs/time.svg'
import guest from '../../Assets/svgs/guest.svg'
import { IoLogoEuro } from "react-icons/io";
import { DollarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import BudgetCard from '../../Components/Card/BudgetCard';
import axios from 'axios';
import { DatePicker, TimePicker } from 'antd';
import dayjs from "dayjs"
import { toast } from "react-toastify";



const { RangePicker } = DatePicker;
const { Option } = Select;
const BudgetForm = ({ allEvents, allRanges, formData, enteringData, selectedEvent, selectedLocation, selectedRange, selectingEvent, selectingLocation, selectingRange, nextPage, bill }) => {

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().startOf('day');
    };

    const goNextPage = () => {
        if (!formData.budget || !formData.hours || !formData.days || !selectedEvent || !selectedLocation || !selectedRange) {
            console.log("---------------->", formData, selectedEvent, selectedRange, selectedLocation);
            toast.warn("Bitte alle Felder ausfüllen")
            return
        }
        nextPage()
    }

    return (
        <div className="container  mt-8 px-5 lg:px-0">
            <div className='flex items-center mb-4'>
                <img src={eventIcon} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Art des Ereignisses</h1>
            </div>
            <div className="pb-7 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:items-start">
                <Select className="bg-white shadow-md rounded-md w-full text-left h-[64px]" placeholder="Ereignis wählen" prefix={<EnvironmentOutlined />}
                    options={allEvents.map(event => ({ value: event?._id, label: event?.name }))}
                    onChange={selectingEvent}
                    value={selectedEvent?._id}
                />
                <Input
                    prefix={<IoLogoEuro size={15} color='#5E9894' />}
                    type="number"
                    placeholder="Budget eingeben"
                    className="bg-white shadow-md py-5 w-50"
                    name='budget'
                    onChange={enteringData}
                    value={formData?.budget}
                />
            </div>
            <div className='flex items-center pb-3'>
                <img src={eventIcon} alt="" width={20} />
                <h1 className="text-xl  text-left pl-3">Ereignis </h1>
            </div>
            <div className="pb-7 flex ">
                <Select placeholder="Veranstaltungsort |" prefix={<EnvironmentOutlined />} className="flex-1 rounded-md bg-white shadow-md text-left  h-[64px]"
                    value={selectedLocation?._id}
                    options={selectedEvent?.cities?.map(city => ({ value: city?._id, label: city?.name }))}
                    onChange={selectingLocation}
                />
            </div>
            <div className="pb-7 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:items-start">
                <RangePicker
                    placeholder={["Startdatum", "Endtermin"]}
                    disabledDate={disabledDate}
                    onChange={(event) => enteringData({ target: { name: "days", value: event } })}
                    value={formData?.days} className="flex-1 bg-white shadow-md py-5" />
                <TimePicker.RangePicker
                    // disabledDate={disabledDate}
                    placeholder={["Startzeit", "Endzeit"]}
                    format={"HH:mm"}
                    onChange={(event) => enteringData({ target: { name: "hours", value: event } })}
                    value={formData?.hours} className="flex-1 bg-white shadow-md py-5" />

                {/* <Input
                    prefix={<img src={time} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Anzahl der Stunden |"
                    className="flex-1 bg-white shadow-md py-5"
                    name='hours'
                    onChange={enteringData}
                    value={formData?.hours}
                    max={24}
                />  */}
            </div>
            <div className="pb-7 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:items-start">
                <Select className="bg-white shadow-md rounded-md w-full text-left h-[64px]" placeholder="Die Anzahl der Gäste |" prefix={<EnvironmentOutlined />}
                    value={selectedRange?._id}
                    options={allRanges.map(range => ({ value: range?._id, label: `${range?.min} - ${range?.max}` }))}
                    onChange={selectingRange}
                />
                {/* <Input
                    prefix={<img src={guest} width={16} className='mr-3' />}
                    type="number"
                    placeholder="Die Anzahl der Gäste |"
                    className="flex-1 bg-white shadow-md py-5"
                    name='guests'
                    onChange={enteringData}
                    value={formData?.guests}
                /> */}
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between pb-5 px-5 lg:px-0'>
                <BudgetCard budget={formData?.budget} bill={bill} />
                <Button type="primary" className="px-10 bg-green rounded-full mt-4 lg:mt-0 customeButtons" onClick={goNextPage}>
                    Nächster
                </Button>
            </div>

        </div>
    );
};

export default BudgetForm;
