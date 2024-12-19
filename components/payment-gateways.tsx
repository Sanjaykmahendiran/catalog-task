
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"

export default function PaymentGateways() {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Payment Gateways</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-100 mr-3"></div>
            <div>
              <p className="font-semibold">Paypal</p>
              <p className="text-sm text-gray-500">Bill payment</p>
            </div>
          </div>
          <p className="font-semibold">+$6235</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 mr-3"></div>
            <div>
              <p className="font-semibold">Wallet</p>
              <p className="text-sm text-gray-500">Bill payment</p>
            </div>
          </div>
          <p className="font-semibold">+$235</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 mr-3"></div>
            <div>
              <p className="font-semibold">Credit card</p>
              <p className="text-sm text-gray-500">Bill payment</p>
            </div>
          </div>
          <p className="font-semibold">+$2235</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
    <Button 
      className="w-full bg-[#F5F3FF] hover:bg-[#EDE9FE] text-[#6366F1] hover:text-[#4F46E5] shadow-sm font-medium"
      variant="ghost"
    >
      View all transactions
    </Button>
    </CardFooter>
  </Card>
  )
}

