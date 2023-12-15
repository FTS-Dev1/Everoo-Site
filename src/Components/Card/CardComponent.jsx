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




const CardComponent = ({ data, nextPage, serviceName, selectedService, selectingService, formData, bill, selectedEvent, selectedLocation, selectedRange }) => {
    const items = [
        {
            label: '1st menu item',
            key: '0',
        },
        {
            label: '1st menu item',
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    return (

        <div className='px-5 mt-10 grid grid-cols-1 gap-x-8 gap-y-16 py-10 sm:mb-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-12'>
            <div className=' col-span-3 flex flex-col justify-between'>
                <div className='flex flex-col items-start gap-5 pb-5'>
                    <div className='flex items-start gap-5'>
                        <img src={location} width={20} />
                        <Dropdown
                            className='w-80'
                            menu={{
                                items: [
                                    {
                                        label: selectedLocation?.name,
                                        key: '0',
                                    }
                                ],
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
                                items: [
                                    {
                                        label: `${selectedRange?.min} - ${selectedRange?.max}`,
                                        key: '0',
                                    }
                                ],
                            }}
                        >

                            <Space>
                                Gast Wut
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </div>
                </div>
                <div>
                    <BudgetCard budget={formData?.budget} bill={bill} />
                </div>
            </div>
            <div className='col-span-9'>
                <div className='px-5  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  sm:mb-16  lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {data?.map((card, index) => (
                        <div className={`${selectedService?._id == card?._id ? "relative cursor-pointer bg-[#C8F1F3] rounded-2xl text-Dblack shadow-md shadow-2xl border-green hover:shadow-2xl hover:border-green" : "relative cursor-pointer bg-white rounded-2xl text-Dblack shadow-md hover:shadow-2xl hover:border-green"}`} onClick={() => selectingService(serviceName, card)}>
                            <div className='absolute cardalign'>
                                <img src={IMAGEURLGEN(card.image)} alt='Image of card' className='w-64 h-48 object-cover rounded-2xl' />
                            </div>
                            <div className='max-w-xs  overflow-hidden  relative pt-48'>
                                <div className='px-6 py-4 group '>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-bold text-xl mb-2 leading-6 text-grey group-hover:text-green'>{card.title}</h2>
                                        <button className='bg-green hover:shadow-lg text-white font-bold py-2 px-4 rounded'>{card.price}</button>
                                    </div>
                                    <p className='mt-5 text-sm leading-6 text-gray-600 text-left'>{card.description}</p>
                                    <div className='flex justify-end pt-4 pb-5'>
                                        <img src={arrow}>
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='flex justify-end'>

                    <Button type="primary" className=" px-10  bg-green rounded-full" onClick={nextPage}>Next</Button>
                </div>
            </div>

        </div>
    );
};

export default CardComponent;
