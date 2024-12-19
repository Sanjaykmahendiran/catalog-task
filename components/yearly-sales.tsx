"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function YearlySales() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Yearly Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Gradient fill */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path
              d="M0,65 C10,50 20,45 30,60 S50,85 60,70 70,45 80,55 90,75 100,65 V100 H0 Z"
              fill="url(#areaGradient)"
            />
            {/* Main line */}
            <path
              d="M0,65 C10,50 20,45 30,60 S50,85 60,70 70,45 80,55 90,75 100,65"
              className="stroke-[#7C88FB] fill-none"
              strokeWidth="2"
            />
           
          </svg>
          {/* Sales labels */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
            <div className="text-sm text-center">
              <div className="font-medium">$5476</div>
              <div className="text-muted-foreground text-xs">2023</div>
            </div>
            <div className="text-sm text-center">
              <div className="font-medium">$4476</div>
              <div className="text-muted-foreground text-xs">2022</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
