import React from "react";
import Link from "next/link";
import Info from "@/components/Icons/Info";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/components/Icons/SearchIcon";

export default function TransactionFilter() {
  return (
    <>
      {/* Title */}
      <div className="flex flex-wrap justify-between gap-2 pt-6 sm:pt-8">
        <p className="text-base">
          For today's transactions, real time realized gain/loss information may
          be delayed.
        </p>
        <Link href="/" className="text-base text-link flex items-center gap-1">
          <span>Cost Basis Calculator</span>
          <Tooltip>
            <TooltipTrigger>
              <Info />
            </TooltipTrigger>
            <TooltipContent>
              <p>Cost Basis Calculator</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </div>

      {/* Filter */}
      <div className="py-[46px] px-[26px] border-2 border-[#C6CDD1] bg-white mt-4">
        <div className="flex flex-wrap items-end gap-3">
          <div className="md:max-w-[250px] lg:max-w-[300px] w-full">
            <Label className="text-base mb-1">Date range</Label>
            <Select>
              <SelectTrigger
                className="w-full text-base rounded-[6px] shadow-none outline-none focus-visible:ring-0 cursor-pointer"
                style={{ height: "50px" }}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value="Current Year" className="cursor-pointer">
                  Current Year
                </SelectItem>
                <SelectItem value="Previous Year" className="cursor-pointer">
                  Previous Year
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:max-w-[250px] lg:max-w-[300px] w-full">
            <Label className="text-base mb-1">
              Symbol <span className="text-secondary-text">(Optional)</span>
            </Label>
            <div className="relative">
              <Input
                type="text"
                className="w-full text-base rounded-[6px] h-[50px] pl-[35px] shadow-none outline-none focus-visible:ring-0"
              />
              <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button className="text-base rounded-[6px] h-[50px] p-4 bg-[#EBEDEF] border border-[#4F5A64] flex items-center justify-center cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
