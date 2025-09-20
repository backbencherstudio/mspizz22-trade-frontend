"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Mail,
  User,
  HelpCircle,
  Menu,
  X,
  LogOutIcon,
} from "lucide-react";
import SearchIcon from "@/components/Icons/SearchIcon";
import MessageIcon from "@/components/Icons/MessageIcon";
import SupportIcon from "@/components/Icons/SupportIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(""); // To manage the active tab
  const [activeSubTab, setActiveSubTab] = useState(""); // For managing active sub-tab
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubItems, setOpenSubItems] = useState(null); // Sub items visibility

  const router = useRouter(); // For navigation
  const pathname = usePathname(); // To get the current route

  const navItems = [
    {
      label: "Accounts",
      link: "/accounts",
      subItems: [
        "Summary",
        "Balances",
        "Positions",
        "Realized Gain / Loss",
        "Investment Income",
        "Portfolio Performance",
        "Securities Lending",
        "Corporate Actions",
        "Transaction History",
        "Statements & Tax Forms",
        "Open An Account",
        "Relationship Summary",
      ],
    },
    { label: "Trade", link: "/trade", subItems: ["s", "f", "b", "v"] },
    {
      label: "Research",
      link: "/research",
      subItems: ["r", "t", "Positionsbb", "c"],
    },
    {
      label: "Move Money",
      link: "/move-money",
      subItems: ["vv", "Baldfdances", "ddd", "ff"],
    },
    {
      label: "Products",
      link: "/products",
      subItems: ["tt", "yy", "uu", "Realiiized"],
    },
    { label: "Learn", link: "/learn", subItems: [] },
    { label: "How To", link: "/how-to", subItems: [] },
  ];

  const rightSideActions = [
    {
      label: "Messages",
      icon: <MessageIcon className="lg:size-4  size-5 2xl:size-6" />,
      href: "#",
    },
    {
      label: "Support",
      icon: <SupportIcon className="lg:size-4 size-5 2xl:size-6" />,
      href: "#",
    },
    {
      label: "Profile",
      icon: <ProfileIcon className="lg:size-4 size-5.5 2xl:size-6" />,
      href: "#",
    },
  ];

  // Handle the active tab based on pathname
  const handleTabClick = (link: string) => {
    setActiveTab(link);
    setIsMobileMenuOpen(false);
    setOpenSubItems(null); // Close any open sub-items when a main tab is clicked
    router.push(link);
  };

  return (
    <div className="sticky top-0">
      {/* Main Navigation Bar */}
      <div className="px-4 2xl:px-6 flex 2xl:gap-8 xl:gap-6 gap-4 items-center h-[74px]">
        {/* Logo */}
        <div className="flex items-center min-w-[74px]">
          <img src="/logo_default.svg" alt="" />
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 flex items-center justify-between lg:border-b border-[#CDCECE] h-full">
          <div className="hidden lg:flex items-center 2xl:gap-6 gap-2 xl:gap-4 h-full">
            {navItems.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(item.link)}
                  className={`cursor-pointer h-full text-[#596772] hover:text-[#006E99] 2xl:text-lg lg:text-sm text-base font-medium tracking-[-.09px] transition-colors duration-200 ${
                    activeTab === item.link
                      ? "border-b-[3px] -mb-[3px] border-[#006E99] activeBtn transition-all duration-300 ease-in-out"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center 2xl:gap-6 gap-2 xl:gap-4">
            <div className="relative">
              <input
                className="inputStyle 2xl:w-[225px] lg:w-[140px] xl:w-[200px] 2xl:h-[36px] h-[30px] rounded-md transition-colors pl-[38px]"
                placeholder="Search"
              />
              <SearchIcon className="absolute top-1/2 w-[18px] h-[18px] left-[8px] transform -translate-y-1/2 cursor-pointer" />
            </div>

            {rightSideActions.map((action, index) => (
              <Link
                href={action?.href}
                key={index}
                className={`flex gap-1.5 items-center text-[#596772] leading-[-0.18px]`}
              >
                <span>{action.icon}</span>
                <span className="2xl:text-lg lg:text-sm text-base font-normal text-[#596772] hover:text-[#006E99]">
                  {action.label}
                </span>
              </Link>
            ))}
            <button className="2xl:text-lg lg:text-sm text-base font-normal text-[#596772] hover:text-[#006E99] cursor-pointer">
              Log Out
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          {/* Mobile Navigation Items */}
          <div className="px-4 py-3">
            {navItems.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => handleTabClick(item.link)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      activeTab === item.link
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Mobile Sub Items */}
                  {openSubItems === item.link && item.subItems.length > 0 && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => setActiveSubTab(subItem)}
                          className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                            activeSubTab === subItem
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
              <input
                className="inputStyle w-full h-[36px] rounded-md transition-colors pl-[38px]"
                placeholder="Search"
              />
              <SearchIcon className="absolute top-1/2 w-[18px] h-[18px] left-[8px] transform -translate-y-1/2 cursor-pointer" />
            </div>
            {rightSideActions.map((action, index) => (
              <Link
                href={action?.href}
                key={index}
                className={`flex gap-2 px-3 items-center text-[#596772]  leading-[-0.18px]`}
              >
                <span>{action.icon}</span>
                <span className=" text-base font-medium">{action.label}</span>
              </Link>
            ))}
            <button className="flex gap-2 w-full text-left px-3 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
              <span>
                <LogOutIcon className="w-5.5" />
              </span>{" "}
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
