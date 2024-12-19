"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SalesOverview() {
  const salesOverviewData = [
    { name: 'Profit', value: 23450, color: '#4F46E5' },
    { name: 'Expenses', value: 23450, color: '#06B6D4' },
  ]
  
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-gray-800">Sales Overview</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesOverviewData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
              >
                {salesOverviewData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-2xl font-semibold">$500.00</div>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#4F46E5] mr-2"></div>
            <span className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">$23,450</span> Profit
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] mr-2"></div>
            <span className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">$23,450</span> Expense
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

