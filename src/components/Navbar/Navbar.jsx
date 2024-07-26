import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AuthModel from '../Authmodal/Authmodal.jsx'; // Ensure correct import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const navigate = useNavigate();

  const handleOpen = (type) => {
    setModalType(type);
    setOpenAuthModal(true);
    navigate(`/${type}`);
  };

  const handleClose = () => {setOpenAuthModal(false)
    navigate('/')
  };

  return (
    <>
      <nav className="bg-gray-900 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">MyApp</Link>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => handleOpen('login')}
              className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-200 ease-in-out"
            >
              Login
            </button>
            <button
              onClick={() => handleOpen('register')}
              className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-200 ease-in-out"
            >
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="w-8 h-8 text-white" />
                ) : (
                  <Bars3Icon className="w-8 h-8 text-white" />
                )}
              </Menu.Button>
              <Transition
                show={isOpen}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg ring-1 ring-gray-900/5">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleOpen('login')}
                        className={`block px-4 py-2 rounded-lg transition duration-200 ${
                          active ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        Login
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleOpen('register')}
                        className={`block px-4 py-2 rounded-lg transition duration-200 ${
                          active ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        Sign Up
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
      <AuthModel open={openAuthModal} handleClose={handleClose} modalType={modalType} />
    </>
  );
};

export default Navbar;
