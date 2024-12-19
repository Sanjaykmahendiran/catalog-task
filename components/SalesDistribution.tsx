"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import Background from "@/app/assets/backgroung.jpg"

export default function SalesDistribution() {
  const salesData = [
    { amount: "$4.5k", percentage: "40%", label: "By Website" },
    { amount: "$2.8k", percentage: "25%", label: "By Mobile" },
    { amount: "$2.2k", percentage: "20%", label: "By Referral" },
    { amount: "$1.7k", percentage: "15%", label: "By Agent" },
  ]

  return (
    <div className="relative w-full overflow-hidden m-2">
      {/* Background Banner */}
      <Image
        src={Background}
        alt="Sales Distribution Background"
        width={1200}
        height={200}
        className="absolute inset-0 h-full w-full object-cover"
        unoptimized
      />

      <div className="relative z-10 p-6 md:p-8">
        <h2 className="mb-1 text-lg font-semibold text-gray-800">Sales Distribution</h2>
        <p className="mb-4 text-sm text-gray-600">This is all over Platform Sales Generated</p>

        <div className="flex flex-wrap items-end gap-4">
          {/* Total Sales Card */}
          <Card className="bg-white p-3 shadow-sm">
            <p className="text-2xl font-bold text-gray-900">$34,343.00</p>
            <p className="text-xs font-medium text-gray-600">Total Sales</p>
          </Card>

          {/* Distribution Cards */}
          {salesData.map((item, index) => (
            <Card 
              key={index}
              className="flex min-w-[120px] flex-col items-start justify-between bg-white p-3 shadow-sm"
            >
              <div>
                <p className="text-lg font-semibold text-gray-900">{item.amount}</p>
                <p className="text-xs text-gray-600">{item.label}</p>
              </div>
              <span className="mt-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                {item.percentage}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

