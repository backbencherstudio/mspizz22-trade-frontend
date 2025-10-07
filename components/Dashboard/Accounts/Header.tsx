"use client";
import React, { useState, useEffect } from "react";
import Download from "@/components/Icons/Download";
import Print from "@/components/Icons/Print";
import QuestionCircle from "@/components/Icons/QuestionCircle";
import Refresh from "@/components/Icons/Refresh";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");

  // Real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const dateString = now.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
      setCurrentTime(`${timeString} ET, ${dateString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-2 gap-x-4">
        <h1 className="text-3xl lg:text-[32px] tracking-[-0.9px] leading-[100%] font-[300]">
          Realized Gain / Loss
        </h1>
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 md:gap-x-4 lg:gap-x-6">
          <p className="text-sm text-secondary-text">Updated: {currentTime}</p>
          <div className="flex gap-y-2 gap-x-2 sm:gap-x-4 md:gap-x-2 lg:gap-x-4">
            <button className="cursor-pointer hover:bg-gray-200 rounded-full p-2">
              <Refresh className="h-5 w-5" />
            </button>
            <button className="cursor-pointer hover:bg-gray-200 rounded-full p-2">
              <QuestionCircle className="h-5 w-5" />
            </button>
            <button className="cursor-pointer hover:bg-gray-200 rounded-full p-2">
              <Download className="h-5 w-5" />
            </button>
            <button className="cursor-pointer hover:bg-gray-200 rounded-full p-2">
              <Print className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* All Account */}
      <div className="flex justify-between items-center flex-wrap gap-y-2 sm:gap-x-4 gap-x-2 pt-6 sm:pt-8">
        <Select>
          <SelectTrigger
            className="max-w-[350px] w-full text-base font-semibold bg-link rounded-[6px] shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer [&_span]:text-white [&_svg]:!text-white grid grid-cols-[90%_10%]"
            style={{ height: "50px" }}
          >
            <SelectValue
              placeholder={
                <div className="flex justify-between w-full">
                  <span>Limit Liability Comp...</span>
                  <span>...339</span>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            <SelectItem value="1" className="cursor-pointer">
              Account 1
            </SelectItem>
            <SelectItem value="2" className="cursor-pointer">
              Account 2
            </SelectItem>
            <SelectItem value="3" className="cursor-pointer">
              Account 3
            </SelectItem>
          </SelectContent>
        </Select>

        <Link href="/" className="text-link text-base whitespace-nowrap">
          View Position
        </Link>
      </div>
    </>
  );
}
