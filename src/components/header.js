import logo from "../assets/logo-1.png";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, ChevronDownIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Listing', href: '/listing', dropdown: [
        { name: 'Category 1', href: '/listing' },
        { name: 'Category 2', href: '/listing' },
    ] },
    { name: 'Pages', href: '/pages', dropdown: [
        { name: 'About Us', href: '/pages' },
        { name: 'FAQ', href: '/pages' },
    ] },
    { name: 'Blog', href: '/blog', dropdown: [
        { name: 'Latest Posts', href: '/blog' },
        { name: 'Popular Posts', href: '/blog' },
    ] },
    { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function AppHeader() {
    return (
        <Disclosure as="nav" className="bg-white shadow fixed top-0 left-0 w-full z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                            <Bars3Icon className="block h-6 w-6" />
                        </DisclosureButton>
                    </div>
                    {/* Logo Section */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img src={logo} alt="Your Company" className="h-16 w-auto" />
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 mt-[14px]">
                                {navigation.map((item) => (
                                    item.dropdown ? (
                                        <Menu as="div" key={item.name} className="relative">
                                            <MenuButton className="flex items-center text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                {item.name} <ChevronDownIcon className="ml-1 h-4 w-4" />
                                            </MenuButton>
                                            <MenuItems className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md py-1 ring-1 ring-black/5">
                                                {item.dropdown.map((subItem) => (
                                                    <MenuItem key={subItem.name}>
                                                        <Link to={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                            {subItem.name}
                                                        </Link>
                                                    </MenuItem>
                                                ))}
                                            </MenuItems>
                                        </Menu>
                                    ) : (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({ isActive }) =>
                                                classNames(
                                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Add Property Button */}
                    <Link to="/property"
  className="border border-orange-500 hover:bg-orange-700 text-orange-500 hover:text-white font-medium py-2 px-4 rounded-md mr-4 hidden sm:inline">
  Add property
                    </Link>
                    {/* Profile Dropdown */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">
                        <Menu as="div" className="relative">
                            <MenuButton className="flex items-center text-gray-700 hover:bg-gray-700 hover:text-white rounded-full p-2">
                                <UserCircleIcon className="h-6 w-6" />
                            </MenuButton>
                            <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 ring-1 ring-black/5">
                                <MenuItem>
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Open/Close) */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        item.dropdown ? (
                            <Menu as="div" key={item.name} className="relative">
                                <MenuButton className="flex items-center text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    {item.name} <ChevronDownIcon className="ml-1 h-4 w-4" />
                                </MenuButton>
                                <MenuItems className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md py-1 ring-1 ring-black/5">
                                    {item.dropdown.map((subItem) => (
                                        <MenuItem key={subItem.name}>
                                            <Link to={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                {subItem.name}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        ) : (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    classNames(
                                        isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )
                                }
                            >
                                {item.name}
                            </NavLink>
                        )
                    ))}
<div className="flex justify-center mt-4">
  <div className="w-full max-w-xs">
    <Link
      to="/property"
      className="block text-center border border-orange-500 hover:bg-orange-700 text-orange-500 hover:text-white font-medium py-2 px-4 rounded-md w-full"
    >
      Add property
    </Link>
  </div>
</div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
