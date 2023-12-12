// CardComponent.js
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import BudgetCard from './BudgetCard';
import IMAGEURLGEN from "Utils/ImgUrlGen"





const CardComponent = ({ data, nextPage }) => {
    const items = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
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
                <div className='flex flex-col items-start gap-5'>
                    <Dropdown
                        className='w-50'
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()} >
                            <Space>
                                Event Type
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                City
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Guest Range
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div>
                    <BudgetCard />
                </div>
            </div>
            <div className='col-span-9'>
                <div className='px-5  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  sm:mb-16  lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {data?.map((card, index) => (
                        <div className='relative cursor-pointer' onClick={nextPage}>
                            <div className='absolute cardalign'>
                                <img src={IMAGEURLGEN(card.image)} alt='Image of card' className='w-64 h-48 object-cover rounded-2xl' />
                            </div>
                            <div className='max-w-xs rounded-2xl overflow-hidden shadow-lg relative pt-48'>
                                <div className='px-6 py-4 group '>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-bold text-xl mb-2 leading-6 text-grey group-hover:text-green'>{card.title}</h2>
                                        <button className='bg-green hover:shadow-lg text-white font-bold py-2 px-4 rounded'>{card.price}</button>
                                    </div>
                                    <p className='mt-5 text-sm leading-6 text-gray-600 text-left'>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CardComponent;
