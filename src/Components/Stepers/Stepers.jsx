import React, { useEffect, useState } from 'react';
import { Steps, Divider } from 'antd';
import catering from '../../Assets/svgs/catering.svg';
import catering2 from '../../Assets/svgs/catering1.svg';
import beverage from '../../Assets/svgs/beverage.svg';
import shuttle from '../../Assets/svgs/shuttle.svg';
import staff from '../../Assets/svgs/staff.svg';
import ausatting from '../../Assets/svgs/ausatting.svg';
import hotelService from '../../Assets/svgs/hotelService.svg';
import eventTech from '../../Assets/svgs/eventTech.svg';
import eventModule from '../../Assets/svgs/eventModule.svg';
import decoration from '../../Assets/svgs/decoration.svg';
import Catering from '../../Pages/Catering/Catering';

import catering1 from '../../Assets/Images/catering1.png'
import CardComponent from '../Card/CardComponent';
import Budget from '../../Pages/Budget/Budget';
import ContactForm from '../../Pages/ContactForm/ContactForm';
import { CreatOrderAPI, GetAllEventsAPI } from 'API/event';
import { toast } from "react-toastify";
import NavBar from 'Pages/Header/Header';




const { Step } = Steps;
const cateringData = [
    {
        imageSrc: catering1,
        title: 'Catering',
        price: '$500',
        description:
            'Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.',
    },
    {
        imageSrc: catering1,
        title: 'Catering',
        price: '$500',
        description:
            'Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.',
    },
    {
        imageSrc: catering1,
        title: 'Catering',
        price: '$500',
        description:
            'Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.',
    },
    {
        imageSrc: catering1,
        title: 'Catering',
        price: '$500',
        description:
            'Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.',
    },
    {
        imageSrc: catering1,
        title: 'Catering',
        price: '$500',
        description:
            'Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.',
    },
    {
        imageSrc: catering1,
        title: 'Catering',
        price: '$500',
        description:
            'Discover the perfect solution for successful meetings with Everoo. From planning to implementation, we offer tailor-made concepts and professional support. Smooth and effective meeting experience for your participants.',
    },
    // Add more card data objects as needed
];
const Stepers = () => {

    const [current, setCurrent] = useState(0);

    const [eventData, setEventData] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null)

    const [formData, setFormData] = useState({
        budget: "",
        days: "",
        hours: "",
        guests: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const enteringData = (event) => {
        let { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const selectingEvent = (id) => {
        let findEvent = eventData.find(event => event?._id == id)
        setSelectedEvent(findEvent)
    }


    const nextPage = () => {
        setCurrent(current + 1)
    }

    const submitForm = async () => {
        let payload = {
            ...formData,
            event: selectedEvent?._id
        }
        let res = await CreatOrderAPI(payload)
        if (res.error != null) {
            toast.error(res.error)
        } else {
            toast.success(res.data?.message)
        }
        setTimeout(() => {
            window.location.href = "/"
        }, 1500);
    }

    const steps = [
        {
            title: 'Budget',
            icon: <img src={catering} alt="" width={40} height={50} />,
            content: <Budget allEvents={eventData} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} formData={formData} enteringData={enteringData} selectingEvent={selectingEvent} nextPage={nextPage} />,
        },
        {
            title: 'Verpflegung',
            icon: <img src={catering2} alt="" width={40} height={50} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Catering"]} nextPage={nextPage} />,
        },
        {
            title: 'Getränk',
            icon: <img src={beverage} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Beverage"]} nextPage={nextPage} />,
        },
        {
            title: 'Pendelverkehr',
            icon: <img src={shuttle} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Shuttle"]} nextPage={nextPage} />,
        },
        {
            title: 'Staff',
            icon: <img src={staff} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Staff"]} nextPage={nextPage} />,
        },
        {
            title: 'Ausstattung',
            icon: <img src={ausatting} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Ausstattung"]} nextPage={nextPage} />,
        },
        {
            title: 'Hotel Management',
            icon: <img src={hotelService} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Hotelmanagement"]} nextPage={nextPage} />,
        },
        {
            title: 'Gegenwart',
            icon: <img src={hotelService} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Prasente"]} nextPage={nextPage} />,
        },
        {
            title: 'Veranstaltungstechnik',
            icon: <img src={eventTech} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Veranstaltungstechnik"]} nextPage={nextPage} />,
        },
        {
            title: 'Event-Modul',
            icon: <img src={eventModule} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Eventmodule"]} nextPage={nextPage} />,
        },
        {
            title: 'Dekoration',
            icon: <img src={decoration} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Dekoration"]} nextPage={nextPage} />,
        },
        {
            title: 'Personal Info',
            icon: <img src={catering} alt="" width={40} height={50} />,
            content: <ContactForm allEvents={eventData} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} formData={formData} enteringData={enteringData} selectingEvent={selectingEvent} nextPage={nextPage} submitForm={submitForm} />,
        },
    ];

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };


    let gettingAllEvents = async () => {
        let res = await GetAllEventsAPI()
        if (res.error != null) {
            toast.error(res.error)
        } else {
            setEventData(res.data?.result || [])
        }
    }
    useEffect(() => {
        gettingAllEvents()

    }, [])

    return (
        <>
            <div className="everooContainer md:mx-auto md:pt-6 h-screen">
                <NavBar />
                <div className='pt-20'>
                    <Steps current={current} onChange={onChange} labelPlacement="vertical">
                        {steps.map((step, index) => (
                            <Step key={index} title={step.title} icon={step.icon} />
                        ))}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                </div>

            </div>
        </>
    );
};

export default Stepers;
