// Navbar.jsx

import React,{useState} from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined ,MenuOutlined,BarsOutlined} from '@ant-design/icons';
// import everoo from '../../Assets/Images/logo-everoo.png.png'
import { ReactComponent as Logo } from '../../Assets/svgs/logo.svg'

const { Header } = Layout;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-10">
        <Logo width={220} />
      </div>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu for larger screens */}
      <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center">
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

      {/* Hamburger menu overlay for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Sidebar menu items */}
          <div className="flex flex-col items-center space-y-4 text-white">
            <span>Events & Service</span>
            <span>Eventplaner</span>
            <span>Unternehmen</span>
            <span>Kontakt</span>
          </div>
        </div>
      )}

      <div className="hidden lg:flex items-center space-x-4">
        <Button type="primary" className="px-10 bg-green rounded-full">
          Eventplaner
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
