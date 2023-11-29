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

      <header className="relative bg-blue-600 z-500">
        <div className="flex justify-evenly h-15 items-center  bg-yellow-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          {/* Made with love by CodeSite ❤️ */}
        
            <div className="flex cursor-pointer"><span className="mr-1 mt-1"><MdWifiCalling /></span><span>Admission Helpline</span></div>
            <div className="flex cursor-pointer"><span className="mr-1 mt-1"><CiMail /></span><span>info@kashiit.ac.in</span></div>
            <div className="flex">
            <span className="m-2 cursor-pointer"><CiFacebook  style={{ fontSize: '2em' }} /></span>
            <span className="m-2 cursor-pointer"><CiInstagram   style={{ fontSize: '2em' }}/></span>
            <span className="m-2 cursor-pointer"><TiSocialYoutubeCircular  style={{ fontSize: '2em' }} /></span>
            </div>
          </div>
        

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-32 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-16 w-auto"
                    src={KitLogo}
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-white hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {
                    true ? (
                      <div>
                        <Avatar 
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu":undefined}
                        aria-haspopup="true"
                        aria-expended={open ? "true" :undefined}
                        //onClick={handleUserClick}
                        sx={{
                          bgcolor:"deepPurpule[500]"
                          ,color:"white",
                          cursor:"pointer"
                        }}
                        >
                          R
                        </Avatar>
                        {/* <Button id="basic-button" aria-controls={open? "basic-menu":undefined}
                        aria-haspopup="true"
                        aria-expended={open ? "true" :undefined}>
                          DashBoard
                        </Button> */}

                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labbeledBy":"basic-button",
                        }}
                        >
                          <MenuItem onClick={handleCloseUserMenu}>
                                Profile
                          </MenuItem>
                        
                          <MenuItem>
                          MyOrders
                          </MenuItem>
                          <MenuItem>
                          Log-Out
                          </MenuItem>
                        </Menu>
                      </div>
                    ):(
                      <Button onClick={handleOPen}
                      className="text-sm font-medium text-grey-700 hover:text-grey-800">SignIn</Button>
                    )
                  }
                 
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                {/* <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div> */}
                <button className="btn btn-warning" >Login/Signup</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}