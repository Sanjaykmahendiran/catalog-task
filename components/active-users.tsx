"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import Map from "@/app/assets/map.jpg"

export default function ActiveUsers() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active User</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
            Export
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={Map}
            alt="World map showing active user locations"
            fill
            className="object-contain"
            priority
            unoptimized
          />
          {/* Active user indicators */}
          <div className="absolute top-[30%] left-[25%] size-1.5 rounded-full bg-blue-500" />
          <div className="absolute top-[20%] left-[75%] size-1.5 rounded-full bg-blue-500" />
          <div className="absolute top-[60%] left-[35%] size-1.5 rounded-full bg-blue-500" />
          <div className="absolute top-[40%] left-[85%] size-1.5 rounded-full bg-blue-500" />
          <div className="absolute top-[70%] left-[65%] size-1.5 rounded-full bg-blue-500" />
        </div>
        <div className="mt-4">
          <div className="text-2xl font-bold">23,214</div>
          <p className="text-xs text-muted-foreground">Total Active User</p>
        </div>
      </CardContent>
    </Card>
  )
}

