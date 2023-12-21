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
import Catering from '../Catering/Catering';

import catering1 from '../../Assets/Images/catering1.png'
import CardComponent from '../../Components/Card/CardComponent';
import Budget from '../Budget/Budget';
import ContactForm from '../ContactForm/ContactForm';
import { CreatOrderAPI, GetAllEventsAPI, GetAllRangesAPI } from 'API/event';
import { toast } from "react-toastify";
import NavBar from 'Components/Header/Header';
import { Typography } from 'antd';
import Footer from 'Components/Footer/Footer';

const { Title } = Typography;
const { Step } = Steps;
const Stepers = () => {

    const [current, setCurrent] = useState(0);
    const [activeSteps, setActiveSteps] = useState([])

    const [eventData, setEventData] = useState([])
    const [rangeData, setRangeData] = useState([])

    const [selectedEvent, setSelectedEvent] = useState(null)
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [selectedRange, setSelectedRange] = useState(null)

    const [bill, setBill] = useState(0);

    const [formData, setFormData] = useState({
        budget: 0,
        days: "",
        hours: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    })
    const [selectedServices, setSelectedServices] = useState({
        Catering: null,
        Location: null,
        Beverage: null,
        Shuttle: null,
        Staff: null,
        Ausstattung: null,
        Hotelmanagement: null,
        Prasente: null,
        Veranstaltungstechnik: null,
        Eventmodule: null,
        Dekoration: null,
    })

    const enteringData = (event) => {
        let { name, value } = event.target;
        if (name == "hours") {
            if (value >= 25) {
                toast.warn("Please Enter less than 25 Hours")
                return
            }
        }
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const selectingEvent = (id) => {
        setSelectedLocation(null)
        let findEvent = eventData.find(event => event?._id == id)
        setSelectedEvent(findEvent)
    }
    const selectingLocation = (id) => {
        let findLocation = selectedEvent.cities.find(city => city?._id == id)
        setSelectedLocation(findLocation)
    }
    const selectingRange = (id) => {
        let findRange = rangeData.find(range => range?._id == id)
        setSelectedRange(findRange)
    }

    const selectingService = (id, data) => {
        if (selectedServices[id] != null && selectedServices[id]._id == data?._id) {
            setSelectedServices({
                ...selectedServices,
                [id]: null
            })
        } else {
            setSelectedServices({
                ...selectedServices,
                [id]: data
            })
        }
        nextPage()
    }


    const nextPage = () => {
        setCurrent(current + 1)
    }

    const submitForm = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email || !emailRegex.test(formData?.email)) {
            toast.warn("Invalid Email")
            return
        }

        let services = {};
        Object.keys(selectedServices).map(key => {
            if (selectedServices[key] != null) {
                services[key] = selectedServices[key]._id
            }
        })


        let payload = {
            ...formData,
            event: selectedEvent?._id,
            city: selectedLocation?._id,
            guests: selectedRange?._id,
            bill,
            services,
            hours: [`${formData?.hours[0].$H}-${formData?.hours[0].$m}`, `${formData?.hours[1].$H}-${formData?.hours[1].$m}`]
        }
        let res = await CreatOrderAPI(payload)
        if (res.error != null) {
            // toast.error(res.error)
            toast.error("Etwas ist schief gelaufen")
        } else {
            // toast.success(res.data?.message)
            toast.success("Formular erfolgreich eingereicht")
            setTimeout(() => {
                window.location.href = "/"
            }, 1500);
        }
    }

    const steps = [
        {
            title: 'Budget',
            icon: <img src={catering} alt="" width={40} height={50} />,
            content: <Budget allEvents={eventData} allRanges={rangeData} selectedEvent={selectedEvent} selectedRange={selectedRange} selectedLocation={selectedLocation} setSelectedEvent={setSelectedEvent} formData={formData} enteringData={enteringData} selectingEvent={selectingEvent} selectingLocation={selectingLocation} selectingRange={selectingRange} nextPage={nextPage} bill={bill} />,
            isDefault: true
        },
        {
            id: "Catering",
            title: 'Verpflegung',
            icon: <img src={catering2} alt="" width={40} height={50} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Catering"]} nextPage={nextPage} selectedService={selectedServices["Catering"]} selectingService={selectingService} serviceName="Catering" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Location",
            title: 'Locality',
            icon: <img src={catering2} alt="" width={40} height={50} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Location"]} nextPage={nextPage} selectedService={selectedServices["Location"]} selectingService={selectingService} serviceName="Location" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Beverage",
            title: 'Getränk',
            icon: <img src={beverage} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Beverage"]} nextPage={nextPage} selectedService={selectedServices["Beverage"]} selectingService={selectingService} serviceName="Beverage" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Shuttle",
            title: 'Pendelverkehr',
            icon: <img src={shuttle} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Shuttle"]} nextPage={nextPage} selectedService={selectedServices["Shuttle"]} selectingService={selectingService} serviceName="Shuttle" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Staff",
            title: 'Staff',
            icon: <img src={staff} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Staff"]} nextPage={nextPage} selectedService={selectedServices["Staff"]} selectingService={selectingService} serviceName="Staff" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Ausstattung",
            title: 'Ausstattung',
            icon: <img src={ausatting} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Ausstattung"]} nextPage={nextPage} selectedService={selectedServices["Ausstattung"]} selectingService={selectingService} serviceName="Ausstattung" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Hotelmanagement",
            title: 'Hotel Management',
            icon: <img src={hotelService} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Hotelmanagement"]} nextPage={nextPage} selectedService={selectedServices["Hotelmanagement"]} selectingService={selectingService} serviceName="Hotelmanagement" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Prasente",
            title: 'Gegenwart',
            icon: <img src={hotelService} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Prasente"]} nextPage={nextPage} selectedService={selectedServices["Prasente"]} selectingService={selectingService} serviceName="Prasente" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Veranstaltungstechnik",
            title: 'Veranstaltungstechnik',
            icon: <img src={eventTech} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Veranstaltungstechnik"]} nextPage={nextPage} selectedService={selectedServices["Veranstaltungstechnik"]} selectingService={selectingService} serviceName="Veranstaltungstechnik" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Eventmodule",
            title: 'Event-Modul',
            icon: <img src={eventModule} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Eventmodule"]} nextPage={nextPage} selectedService={selectedServices["Eventmodule"]} selectingService={selectingService} serviceName="Eventmodule" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            id: "Dekoration",
            title: 'Dekoration',
            icon: <img src={decoration} alt="" width={40} />,
            content: <CardComponent data={selectedEvent?.cities[0]["Dekoration"]} nextPage={nextPage} selectedService={selectedServices["Dekoration"]} selectingService={selectingService} serviceName="Dekoration" bill={bill} formData={formData} selectedEvent={selectedEvent} selectedLocation={selectedLocation} selectedRange={selectedRange} />,
        },
        {
            title: 'Personal Info',
            icon: <img src={catering} alt="" width={40} height={50} />,
            content: <ContactForm allEvents={eventData} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} formData={formData} enteringData={enteringData} selectingEvent={selectingEvent} nextPage={nextPage} submitForm={submitForm} bill={bill} />,
            isDefault: true,
            end: true
        },
    ];

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };


    const calculateStepWidth = () => {
        const totalStepsWithData = activeSteps.length;
        return 100 / totalStepsWithData + "%";
    };


    let gettingAllEvents = async () => {
        let res = await GetAllEventsAPI()
        if (res.error != null) {
            toast.error(res.error)
        } else {
            setEventData(res.data?.result || [])
        }
    }
    let gettingAllRanges = async () => {
        let res = await GetAllRangesAPI()
        if (res.error != null) {
            toast.error(res.error)
        } else {
            setRangeData(res.data?.result || [])
        }
    }
    useEffect(() => {
        gettingAllEvents()
        gettingAllRanges()

    }, [])

    useEffect(() => {
        let maxRange = 1;
        let drivedBill = 0;
        if (selectedRange) {
            maxRange = selectedRange?.max
        }

        Object.keys(selectedServices).map(key => {
            if (selectedServices[key] != null) {
                drivedBill += Number(maxRange) * Number(selectedServices[key].price)
            }
        })

        setBill(drivedBill);

    }, [selectedServices])
    useEffect(() => {
        let findActiveSteps = []
        if (eventData && eventData?.length >= 1) {
            steps.map(step => {
                if (step.isDefault && !step.end) {
                    findActiveSteps.push(step)
                }
                if (selectedEvent && selectedLocation) {
                    if (selectedLocation[step?.id] && selectedLocation[step?.id].length >= 1) {
                        findActiveSteps.push(step)
                    }
                    if (step.end) {
                        findActiveSteps.push(step)
                    }
                }
            })
        } else {
            steps.map(step => {
                if (step.isDefault && !step.end) {
                    findActiveSteps.push(step)
                }
            })
        }
        setActiveSteps(findActiveSteps)
    }, [eventData, selectedEvent, selectedLocation, formData, selectedServices, current, bill])

    return (
        <>
            <div className="xl:max-w-7xl max-w-4xl md:mx-auto md:pt-6 ">
                <NavBar />
                <div className=''>
                    <h1 className='text-green text-4xl font-bold '>Event planner-everoo</h1>
                </div>

                <div className='py-14'>

                    <Steps current={current} onChange={onChange} labelPlacement="vertical">
                        {activeSteps.map((step, index) => (
                            <Step key={index} title={step.title} icon={step.icon} />
                        ))}
                    </Steps>
                    <div className="steps-content">{activeSteps[current]?.content}</div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Stepers;
