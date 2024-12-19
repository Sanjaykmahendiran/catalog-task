'use client'

import { Bell, Search, Settings, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import YearlySales from "@/components/yearly-sales"
import SalesDistribution from "@/components/SalesDistribution"
import ActiveUsers from "@/components/active-users"
import Sidebar from '@/components/sidebar'
import SalesOverview from '@/components/sales-overview'
import RevenueUpdates from '@/components/revenue-updates'
import PaymentGateways from '@/components/payment-gateways'


export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     <Sidebar/>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto ml-64">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10 pr-4 py-2 rounded-full bg-white" placeholder="Search" />
            </div>
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Sales Distribution */}
        <SalesDistribution/>


        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sales Overview */}
          <SalesOverview/>

          {/* Revenue Updates */}
          <RevenueUpdates/>

          {/* Yearly Sales */}
          <YearlySales/>
        </div>

        {/* Active Users and Payment Gateways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActiveUsers/>

          {/* Payment Gateways */}
          <PaymentGateways/>
          
        </div>
      </main>
    </div>
  );
}

