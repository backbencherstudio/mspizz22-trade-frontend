import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RealizedGainLoss() {
  const tableData = [
    {
      symbol: {
        icon: "",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "01/17/2025",
      qty: "5,659",
      closingPrice: "$49.82",
      costBasisMethod: "FIFO",
      proceeds: "$281,923.17",
      costBasisCB: {
        positive: ["$259,990.00"],
        normal: [],
      },
      transactionTotal: {
        positive: ["$21,933.17"],
        normal: [],
        negative: [],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: ["$21,933.17"],
        normal: [],
        negative: [],
      },
    },
    {
      symbol: {
        icon: "Ⓦ",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "03/18/2025",
      qty: "1,975",
      closingPrice: "$35.47",
      costBasisMethod: "FIFO",
      proceeds: "$70,060.85",
      costBasisCB: {
        positive: ["$93,919.04"],
        normal: [],
      },
      transactionTotal: {
        positive: [],
        normal: ["$0.00"],
        negative: [],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: [],
        normal: ["$0.00"],
        negative: [],
        disallowedLoss: "$23,858.19",
      },
    },
    {
      symbol: {
        icon: "Ⓦ",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "03/18/2025",
      qty: "1,975",
      closingPrice: "$35.47",
      costBasisMethod: "FIFO",
      proceeds: "$70,051.17",
      costBasisCB: {
        positive: ["$119,596.00"],
        normal: ["$95,737.81"],
      },
      transactionTotal: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$25,686.64"],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$25,686.64"],
        disallowedLoss: "$49,544.83",
      },
    },
    {
      symbol: {
        icon: "Ⓦ",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "03/18/2025",
      qty: "1,975",
      closingPrice: "$35.44",
      costBasisMethod: "FIFO",
      proceeds: "$69,993.30",
      costBasisCB: {
        positive: ["$162,027.09"],
        normal: ["$88,997.66"],
      },
      transactionTotal: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$19,004.36"],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$19,004.36"],
        disallowedLoss: "$92,033.79",
      },
    },
    {
      symbol: {
        icon: "Ⓦ",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "03/18/2025",
      qty: "1,975",
      closingPrice: "$35.47",
      costBasisMethod: "FIFO",
      proceeds: "$70,051.17",
      costBasisCB: {
        positive: ["$143,080.60"],
        normal: ["$93,535.77"],
      },
      transactionTotal: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$23,484.60"],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$23,484.60"],
        disallowedLoss: "$73,029.43",
      },
    },
    {
      symbol: {
        icon: "Ⓦ",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "03/18/2025",
      qty: "1,975",
      closingPrice: "$35.49",
      costBasisMethod: "FIFO",
      proceeds: "$70,090.47",
      costBasisCB: {
        positive: ["$174,422.26"],
        normal: ["$82,388.47"],
      },
      transactionTotal: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$12,298.00"],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: [],
        normal: ["$0.00"],
        negative: ["$12,298.00"],
        disallowedLoss: "$104,331.79",
      },
    },
    {
      symbol: {
        icon: "",
        title: "SPYU",
        bank: "BANK MONTREAL MAX SE...",
      },
      date: "08/28/2025",
      qty: "14,864",
      closingPrice: "$49.75",
      costBasisMethod: "FIFO",
      proceeds: "$739,494.54",
      costBasisCB: {
        positive: ["$602,078.21"],
        normal: ["$497,746.42"],
      },
      transactionTotal: {
        positive: ["$137,416.33", "$241,748.12"],
        normal: [],
        negative: [],
      },
      transactionLT: {
        positive: [],
        normal: [],
        negative: [],
      },
      transactionST: {
        positive: ["$137,416.33", "$241,748.12"],
        normal: [],
        negative: [],
      },
    },
  ];

  return (
    <div className="bg-white rounded-[2px] border border-[#C6CDD1] py-4 px-6 mt-[14px]">
      <h1 className="text-lg md:text-xl font-medium">
        Realized Gain/Loss Details
      </h1>

      <div className="overflow-x-auto w-full mt-3">
        <Table className="w-full text-sm align-top">
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-pre-wrap md:sticky md:left-0 md:bg-white">
                <span className="text-link">Symbol Description</span>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Closed Date</span>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Quantity</span>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-secondary-text">Closing Price</span>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-secondary-text">Cost Basis Method</span>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Proceeds</span>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Cost Basis (CB)</span>
                <p>
                  <i className="text-secondary-text">Transaction CB</i>
                </p>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Total</span>
                <p>
                  <i className="text-secondary-text">Transaction Total $</i>
                </p>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Long Term</span>
                <p>
                  <i className="text-secondary-text">Transaction LT $</i>
                </p>
              </TableHead>
              <TableHead className="text-end">
                <span className="text-link">Short Term</span>
                <p>
                  <i className="text-secondary-text">Transaction ST $</i>
                </p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm md:text-base">
            {tableData.map((row, i) => (
              <TableRow className="hover:bg-transparent" key={i}>
                <TableCell className="whitespace-pre-wrap align-top md:sticky md:left-0 md:bg-white">
                  <p className="flex items-start gap-1">
                    {row.symbol.icon && (
                      <span className="leading-[120%]">{row.symbol.icon}</span>
                    )}
                    <span className="text-link">{row.symbol.title}</span>
                  </p>
                  <p>{row.symbol.bank}</p>
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.date}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.qty}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.closingPrice}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.costBasisMethod}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.proceeds}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.costBasisCB.positive &&
                    row.costBasisCB.positive.map((item, i) => (
                      <p className="text-link" key={i}>
                        +{item}
                      </p>
                    ))}
                  {row.costBasisCB.normal &&
                    row.costBasisCB.normal.map((item, i) => (
                      <p key={i}>
                        <i>{item}</i>
                      </p>
                    ))}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.transactionTotal.positive &&
                    row.transactionTotal.positive.map((item, i) => (
                      <p className="text-positive" key={i}>
                        +{item}
                      </p>
                    ))}

                  {row.transactionTotal.normal &&
                    row.transactionTotal.normal.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}

                  {row.transactionTotal.negative &&
                    row.transactionTotal.negative.map((item, i) => (
                      <p className="text-negative" key={i}>
                        <i>-{item}</i>
                      </p>
                    ))}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.transactionLT.positive &&
                    row.transactionLT.positive.map((item, i) => (
                      <p className="text-positive" key={i}>
                        +{item}
                      </p>
                    ))}

                  {row.transactionLT.normal &&
                    row.transactionLT.normal.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  {row.transactionLT.negative &&
                    row.transactionLT.negative.map((item, i) => (
                      <p className="text-negative" key={i}>
                        <i>-{item}</i>
                      </p>
                    ))}
                </TableCell>
                <TableCell className="whitespace-pre-wrap align-top text-end">
                  {row.transactionST.positive &&
                    row.transactionST.positive.map((item, i) => (
                      <p className="text-positive" key={i}>
                        +{item}
                      </p>
                    ))}
                  {row.transactionST.normal &&
                    row.transactionST.normal.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  {row.transactionST.negative &&
                    row.transactionST.negative.map((item, i) => (
                      <p className="text-negative" key={i}>
                        <i>-{item}</i>
                      </p>
                    ))}
                  {row.transactionST.disallowedLoss && (
                    <>
                      <p className="text-sm">
                        <i>Disallowed Loss:</i>
                      </p>
                      <p className="text-sm">
                        <i>{row.transactionST.disallowedLoss}</i>
                      </p>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
