import React from "react";
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
  return (
    <>
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-2 gap-x-4">
        <h1 className="text-3xl lg:text-[36px] tracking-[-0.9px]">
          Realized Gain / Loss
        </h1>
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 md:gap-x-4 lg:gap-x-6">
          <p className="text-sm text-secondary-text">
            Updated: 03:18:11 PM ET, 09/17/2025
          </p>
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
            className="max-w-[250px] w-full text-base font-semibold bg-link rounded-[6px] shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer [&_span]:text-white [&_svg]:text-white"
            style={{ height: "50px" }}
          >
            <SelectValue
              className="text-white"
              placeholder="All Brokerage Accounts"
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
