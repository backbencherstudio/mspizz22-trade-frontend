"use client";


import React, { useState } from "react";
import { Search, Mail, User, HelpCircle, Menu, X } from "lucide-react";
import SearchIcon from "@/components/Icons/SearchIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import SupportIcon from "@/components/Icons/SupportIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Accounts");
  const [activeSubTab, setActiveSubTab] = useState("Summary");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accounts", link: "#", subItems: ["Summary", "Balances", "Positions", "Realized"] },
    { label: "Trade", link: "#", subItems: ["s", "f", "b", "v"] },
    { label: "Research", link: "#", subItems: ["r", "t", "Positionsbb", "c"] },
    { label: "Move Money", link: "#", subItems: ["vv", "Baldfdances", "ddd", "ff"] },
    { label: "Products", link: "#", subItems: ["tt", "yy", "uu", "Realiiized"] },
    { label: "Learn", link: "#", subItems: [] },
    { label: "How To", link: "#", subItems: [] }
  ];

  const rightSideActions = [
    { label: "Messages", icon: <MessageIcon />, href: "#" },
    { label: "Support", icon: <SupportIcon />, href: "#" },
    { label: "Profile", icon: <ProfileIcon />, href: "#" },
  ]

  console.log("Active Tab:", activeTab);

  return (
    <div className="sticky top-0 ">
      {/* Main Navigation Bar */}
      <div className=" px-4 lg:px-6 flex gap-8 items-center h-[74px]">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img src="/logo_default.svg" alt="" className=" " />
        </div>

        <div className="flex-1 flex items-center justify-between border-b border-[#CDCECE] h-full  ">
          {/* Desktop Navigation - Main Items */}
          <div className="hidden lg:flex items-center space-x-6 h-full">
            {navItems.map((item, index) => {
              const isObject = typeof item === 'object';
              const itemLabel = isObject ? item.label : item;
              const itemLink = isObject ? item.link : "#";

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(itemLabel)}
                  className={`cursor-pointer  h-full text-[#596772] hover:text-[#006E99] xl:text-lg text-base font-medium tracking-[-.09px] transition-colors duration-200 ${activeTab === itemLabel
                    ? "border-b-[3px] -mb-[3px] border-[#006E99] activeBtn transition-all duration-300 ease-in-out "
                    : "  "
                    }`}
                >
                  {itemLabel}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search */}
            <div className='relative'>
              <input className="inputStyle w-[225px] h-[36px] rounded-md transition-colors pl-[38px]" placeholder="Search" />
              <SearchIcon className="absolute top-1/2 w-[18px] h-[18px] left-[8px] transform -translate-y-1/2 cursor-pointer" />
            </div>

            {rightSideActions.map((action, index) => (
              <Link href={action?.href} key={index} className={`flex gap-1.5 items-center text-[#596772]  leading-[-0.18px] `}>
                <span className="">{action.icon}</span>
                <span className="xl:text-lg text-base font-normal text-[#596772] hover:text-[#006E99]">{action.label}</span>
              </Link>
            ))}
            {/* Log Out */}
            <button className="xl:text-lg text-base font-normal text-[#596772] hover:text-[#006E99] cursor-pointer">
              Log Out
            </button>
          </div>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sub Navigation for Accounts (Desktop) */}
      {navItems.map((navItem) => (
        navItem.label === activeTab && navItem.subItems.length > 0 && (
          <div key={navItem.label} className="hidden lg:block bg-gray-50  ">
            <div className="px-6 py-3">
              <nav className="flex space-x-8">
                {navItem.subItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSubTab(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSubTab === item
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )
      ))}


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          {/* Mobile Navigation Items */}
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item, index) => {
              const isObject = typeof item === 'object';
              const itemLabel = isObject ? item.label : item;
              const itemLink = isObject ? item.link : "#";
              const subItems = isObject ? item.subItems : [];

              return (
                <div key={index}>
                  <button
                    onClick={() => {
                      setActiveTab(itemLabel);
                      if (itemLabel !== "Accounts") {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${activeTab === itemLabel
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      }`}
                  >
                    {itemLabel}
                  </button>

                  {/* Mobile Sub Items */}
                  {itemLabel === "Accounts" && activeTab === "Accounts" && subItems.length > 0 && (
                    <div className="ml-4 mt-2 space-y-2">
                      {subItems.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => {
                            setActiveSubTab(subItem);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${activeSubTab === subItem
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="border-t border-gray-200 px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Messages</span>
            </button>

            <button className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm">Support</span>
            </button>

            <button className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              <User className="w-4 h-4" />
              <span className="text-sm">Profile</span>
            </button>

            <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}