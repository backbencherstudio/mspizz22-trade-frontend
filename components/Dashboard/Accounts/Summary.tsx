"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Info from "@/components/Icons/Info";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Cell, Pie, PieChart } from "recharts";

interface Data {
  name: string;
  value: number;
}

const data: Data[] = [
  { name: "Gain", value: 700 },
  { name: "Loss", value: 0 },
];

const COLORS = ["#277326", "#C10C15"];

export default function Summary() {
  const [gainRatio, setGainRatio] = useState<string>("0");

  useEffect(() => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const gainItem = data.find((item) => item.name === "Gain");
    const gainRatio =
      gainItem && total > 0 ? (gainItem.value / total) * 100 : 0;
    setGainRatio(gainRatio.toFixed(2));
  }, [data]);

  return (
    <>
      <div className="mt-[14px] border-2 border-[#C6CDD1] bg-white">
        <Tabs defaultValue="gain-loss-summary">
          <TabsList className="rounded-none p-0 w-full sm:w-fit overflow-auto justify-start">
            <TabsTrigger
              className="rounded-none text-sm sm:text-base p-4 shadow-none outline-none cursor-pointer"
              value="gain-loss-summary"
            >
              Gain/Loss Summary
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none text-sm sm:text-base p-4 shadow-none outline-none cursor-pointer "
              value="transaction-analyze"
            >
              Transaction Analyzer
            </TabsTrigger>
          </TabsList>
          <div className="py-[24px] sm:py-[36px] px-[26px] sm:px-[38px]">
            <TabsContent value="gain-loss-summary">
              <div className="grid lg:grid-cols-[28%_32%_40%] gap-y-4 lg:gap-y-0">
                {/* Reporting Period */}
                <div className="lg:pr-[15px] xl:pr-[25px] lg:border-r lg:border-[#C6CCD3]">
                  <p className="text-base">Reporting Period</p>
                  <h2 className="text-xl mb-4">01/01/2025 to 09/17/2025</h2>

                  <div className="space-y-3 sm:space-y-0">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <p className="text-base text-secondary-text">
                        Total Proceeds
                      </p>
                      <p className="text-base">$1,000,000</p>
                    </div>

                    <div className="flex items-center justify-between gap-1">
                      <p className="text-base text-secondary-text">
                        Total Cost Basis
                      </p>
                      <p className="text-base">$1,000,000</p>
                    </div>
                  </div>
                </div>

                {/* Gain/Loss */}
                <div className="lg:px-[15px] xl:px-[25px] lg:border-r lg:border-[#C6CCD3]">
                  <div className="space-y-3 sm:space-y-0">
                    <h2 className="text-xl font-semibold mb-4">Gain/Loss</h2>

                    <div className="grid grid-cols-3 items-center justify-between gap-1">
                      <p className="text-base text-secondary-text">Long Term</p>
                      <p className="text-base font-medium text-[#C10C15] text-center">
                        -$3,033.91
                      </p>
                      <p className="text-base text-[#C10C15] text-right">
                        (-4.06%)
                      </p>
                    </div>

                    <div className="grid grid-cols-3 items-center justify-between gap-1">
                      <p className="text-base  text-secondary-text">
                        Short Term
                      </p>
                      <p className="text-base  font-medium text-[#277326] text-center">
                        -$3,033.91
                      </p>
                      <p className="text-base  text-[#277326] text-right">
                        (-4.06%)
                      </p>
                    </div>

                    <div className="grid grid-cols-3 items-center justify-between gap-1">
                      <p className="text-base  text-secondary-text">Net Gain</p>
                      <p className="text-base  font-medium text-[#277326] text-center">
                        -$3,033.91
                      </p>
                      <p className="text-base  text-[#277326] text-right">
                        (-4.06%)
                      </p>
                    </div>

                    <div className="grid grid-cols-3 items-center justify-between gap-1">
                      <p className="text-base  text-secondary-text">
                        Disallowed Loss
                      </p>
                      <p className="text-base font-medium text-[#C10C15] text-center">
                        -$3,033.91
                      </p>
                      <p className="text-base  text-[#C10C15] text-right"></p>
                    </div>
                  </div>
                </div>

                {/* Totals */}
                <div className="lg:pl-[15px] xl:pl-[25px]">
                  <div className="grid sm:grid-cols-2 items-center">
                    <div className="space-y-3 sm:space-y-0">
                      <h2 className="text-xl font-semibold mb-4 flex items-center gap-1">
                        <span>Totals</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Totals</p>
                          </TooltipContent>
                        </Tooltip>
                      </h2>
                      <div className="grid grid-cols-2 items-center justify-between gap-1">
                        <p className="text-base  text-secondary-text">
                          Total Gains
                        </p>
                        <p className="text-base text-right font-medium text-[#277326]">
                          -$3,033.91
                        </p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between gap-1">
                        <p className="text-base  text-secondary-text">
                          Total Losses
                        </p>
                        <p className="text-base text-right font-medium text-[#C10C15]">
                          -$0.00
                        </p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between gap-1">
                        <p className="text-base  text-secondary-text">
                          Net Gain
                        </p>
                        <p className="text-base text-right font-medium text-[#277326]">
                          -$3,033.91
                        </p>
                      </div>
                    </div>
                    <div className="relative w-fit mx-auto lg:mx-0">
                      <PieChart height={100} width={200}>
                        <Pie
                          data={data as any}
                          cx={100}
                          cy={100}
                          startAngle={180}
                          endAngle={0}
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${entry.name}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>

                      <div className="absolute -bottom-[20px] left-[52%] -translate-x-1/2 text-center">
                        <p className="text-[12px]">Gain/Loss Ratio</p>
                        <h2 className="text-xl font-semibold">{gainRatio}%</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="transaction-analyze"></TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}
