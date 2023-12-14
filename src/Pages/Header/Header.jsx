// Navbar.jsx

import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import everoo from '../../Assets/Images/logo-everoo.png.png'

const { Header } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header className="flex items-center justify-between ">
      <div className="flex items-center space-x-10">
        <img src={everoo}></img>
        {/* <div className="text-white text-2xl font-bold">Your Logo</div> */}
      </div>
      <div className='flex-1'>

        <Menu
          mode="horizontal"
          className="text-Dblack text-lg font-medium justify-center"
        >
          <Menu.Item key="1">Events & Service</Menu.Item>
          <Menu.Item key="2">Eventplaner</Menu.Item>
          <Menu.Item key="3">Unternehmen</Menu.Item>
          <Menu.Item key="5">Kontakt</Menu.Item>
        </Menu>
      </div>

      <div className="flex items-center space-x-4">
      <Button type="primary" className=" px-10  bg-green rounded-full" >Eventplaner</Button>
      </div>
    </Header>
  );
};

export default Navbar;
