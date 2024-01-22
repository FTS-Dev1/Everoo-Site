// CardComponent.js
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd';
import BudgetCard from './BudgetCard';
import IMAGEURLGEN from "Utils/ImgUrlGen"
import eventIcon from '../../Assets/svgs/eventIcon.svg'
import location from '../../Assets/svgs/location.svg'
import guest from '../../Assets/svgs/guest.svg'
import arrow from 'Assets/svgs/arrow.svg'




const CardComponent = ({ data, nextPage, serviceName, selectedService, selectingService, formData, bill, selectedEvent, selectingLocation, selectedLocation, selectedRange, rangeData, selectingRange }) => {
    return (

        <div className='px-5 mt-10 grid grid-cols-1 gap-x-2 sm:gap-x-8 gap-y-16 py-10 sm:mb-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-12'>
            <div className='col-span-12 sm:col-span-12 lg:col-span-3  flex flex-col md:flex-row lg:flex-col justify-center md:justify-between px-0 md:px-5 lg:px-0'>
                <div className='flex flex-col items-start gap-5 pb-5'>
                    <div className='flex items-start gap-5'>
                        <img src={location} width={20} />
                        <Dropdown
                            className='w-80'
                            menu={{
                                items: selectedEvent?.cities?.map(city => ({ label: <div style={selectedLocation?._id == city?._id ? { fontWeight: "bold" } : {}}> {city.name} </div>, key: city?._id })),
                                onClick: (e) => selectingLocation(e?.key)
                            }}
                        >
                            <Space>
                                Stadt
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </div>
                    <div className='flex items-start gap-5'>
                        <img src={guest} width={20} />
                        <Dropdown
                            className='w-80'
                            menu={{
                                items: rangeData.map(range => ({ label: <div style={selectedRange?._id == range?._id ? { fontWeight: "bold" } : {}}> {`${range?.min} - ${range?.max}`} </div>, key: range?._id })),
                                onClick: (e) => selectingRange(e?.key)
                            }}
                        >

                            <Space>
                                Anzahl Gäste
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </div>
                </div>
                <div>
                    <BudgetCard budget={formData?.budget} bill={bill} />
                </div>
            </div>
            <div className='col-span-12 sm:col-span-9 lg:col-span-9'>
                <div className='px-0 sm:px-5  grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-8 gap-y-16  sm:mb-16  lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3'>
                    {data?.map((card, index) => (
                        <div className={`${selectedService?._id == card?._id ? "relative cursor-pointer bg-[#C8F1F3] rounded-2xl text-Dblack shadow-md shadow-2xl border-green hover:shadow-2xl hover:border-green" : "relative cursor-pointer bg-white rounded-2xl text-Dblack shadow-md hover:shadow-2xl hover:border-green"}`} onClick={() => selectingService(serviceName, card)}>
                            <div className='absolute left-0 sm:left-[-1.3rem] top-0 sm:top-[-12px]'>
                                <img src={IMAGEURLGEN(card.image)} alt='Image of card' className='w-[270px] h-48 object-cover rounded-2xl' />
                            </div>
                            <div className='max-w-xs  overflow-hidden  relative pt-48'>
                                <div className='px-6 py-4 group '>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-bold text-xl mb-2 leading-6 text-grey group-hover:text-green'>{card.title}</h2>
                                        <button className='bg-green hover:shadow-lg text-white font-bold py-2 px-4 rounded'>€ {card.price}</button>
                                    </div>
                                    <p className='mt-5 text-sm leading-6 text-gray-600 text-left'>{card.description && card.description.length >= 100 ? `${card.description.slice(0, 100)} ...` : card.description}</p>
                                    <div className='flex justify-end pt-4 pb-5'>
                                        <img src={arrow}>
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='flex justify-center pt-10 md:pt-0 md:justify-end'>
                    <Button type="primary" className=" px-10  bg-green rounded-full customeButtons" onClick={nextPage}>Nächster</Button>
                </div>
            </div>

        </div>
    );
};

export default CardComponent;
