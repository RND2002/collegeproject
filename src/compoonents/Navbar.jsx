import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdWifiCalling } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import KitLogo from '../assets/KIT-Logo.webp'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = {
  
  pages: [
    { name: "ERp-Login", href: "#" },
    { name: "Alumini", href: "#" },
    
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
 

   // const navigate=useNavigate()

  

 


  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");

  const handleUserClick = (event) => {
    setAnchorEl(event.current.target);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOPen = () => {
    setOpenAuthModel(true);
  };

//   const handleCategoryClick = (category, section, item, close) => {
//     navigate(`/${category.id}/${section.id}/${item.id}`)
//     close();
//   };

  return (
    <div className="bg-white z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

              

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src={KitLogo}
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-blue-800 z-500">
        <div className="flex justify-evenly h-15 items-center  bg-yellow-700 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          {/* Made with love by CodeSite ❤️ */}
        
            <div className="flex cursor-pointer"><span className="mr-1 mt-1"><MdWifiCalling /></span><span>Admission Helpline</span></div>
            <div className="flex cursor-pointer"><span className="mr-1 mt-1"><CiMail /></span><span>info@kashiit.ac.in</span></div>
            <div className="flex">
            <span className="m-2 cursor-pointer"><CiFacebook  style={{ fontSize: '2em' }} /></span>
            <span className="m-2 cursor-pointer"><CiInstagram   style={{ fontSize: '2em' }}/></span>
            <span className="m-2 cursor-pointer"><TiSocialYoutubeCircular  style={{ fontSize: '2em' }} /></span>
            </div>
          </div>
        

        
      </header>
    </div>
  );
}