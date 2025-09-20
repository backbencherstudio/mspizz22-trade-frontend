"use client";
import { useState } from 'react';
import Accounts from '@/components/Dashboard/Accounts/Accounts';


export default function AccountsPage() {
    const [activeSubTab, setActiveSubTab] = useState("Summary");

    const subItems = [
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
        "Relationship Summary"
    ];

    const renderSelectedComponent = () => {
        switch (activeSubTab) {
            case "Summary":
                return ;
            case "Balances":
                return ;
            case "Positions":
                return ;
            case "Realized Gain / Loss":
                return <Accounts/>;
            default:
                return ;
        }
    };


    return (
        <div>
            <div className="bottom-nav">
                {/* Sub Navigation for Accounts (Desktop) */}

                <div className="block border-b border-[#CDCECE] py-[15px]">
                    <div className=" 2xl:max-w-[1640px]  px-5 2xl:px-4  mx-auto">
                        <nav className="flex flex-wrap 2xl:gap-5 gap-4">
                            {/* Iterate over the sub-items */}
                            {subItems.map((navItem, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSubTab(navItem)} // Set active sub-tab
                                    className={`cursor-pointer 2xl:text-sm text-xs font-normal tracking-[-0.07px] leading-[100%] transition-colors duration-200 ${activeSubTab === navItem
                                        ? "text-[#006E99] p-1.5 bg-[#E6F8FF] rounded-[8px]"
                                        : "text-gray-600 hover:text-gray-800"
                                        }`}
                                >
                                    {navItem}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div>{renderSelectedComponent()}</div>
        </div>
    );
}
