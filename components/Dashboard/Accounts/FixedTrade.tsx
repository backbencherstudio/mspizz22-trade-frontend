import RefreshIcon from "@/components/Icons/RefreshIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import { Input } from "@/components/ui/input";
import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function FixedTrade() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-[#F6F6F6] border-t-[3px] border-[#027DAE] px-4 2xl:px-6 py-1 flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]
[&::-webkit-scrollbar]:hidden"
    >
      {/* Search */}
      <div className="flex items-center gap-1">
        <div className="relative">
          <Input
            type="text"
            className="w-[200px] text-base rounded-[6px] h-[40px] pl-[35px] shadow-none outline-none focus-visible:ring-0"
            placeholder="Quote"
          />
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
        </div>

        <EllipsisVertical className="rotate-90" />
      </div>
      {/* Info */}
      <div className="flex gap-4 pl-2 border-l border-[#8A98A3]">
        <div>
          <p className="text-sm text-link whitespace-nowrap">DJIA</p>
          <p className="text-[12px] whitespace-nowrap">
            <span>45,960.57</span>
            <span className="text-positive font-medium">+202.67</span>
            <span className="text-positive font-medium">(+0.44%)</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-link whitespace-nowrap">NASDAQ</p>
          <p className="text-[12px] whitespace-nowrap">
            <span>22,256.95</span>
            <span className="text-negative font-medium">-77.01</span>
            <span className="text-negative font-medium">(-0.34%)</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-link whitespace-nowrap">S&P 500</p>
          <p className="text-[12px] whitespace-nowrap">
            <span>22,256.95</span>
            <span className="text-negative font-medium">-77.01</span>
            <span className="text-negative font-medium">(-0.34%)</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-link whitespace-nowrap">Russell 2000</p>
          <p className="text-[12px] whitespace-nowrap">
            <span>45,960.57</span>
            <span className="text-positive font-medium">+202.67</span>
            <span className="text-positive font-medium">(+0.44%)</span>
          </p>
        </div>

        <div>
          <p className="text-sm font-medium whitespace-nowrap">Time (ET)</p>
          <p className="text-[12px] font-medium whitespace-nowrap">
            <span>03:20:15 PM</span>
          </p>
        </div>

        <button className="flex items-center gap-1 text-base font-medium text-link cursor-pointer">
          <RefreshIcon />
          <span>Refresh</span>
        </button>
      </div>
    </div>
  );
}
