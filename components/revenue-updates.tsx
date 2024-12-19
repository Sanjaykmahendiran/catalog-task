import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "recharts"
import { ResponsiveContainer } from "recharts"
import { Bar } from "recharts"

export default function RevenueUpdates() {

  const revenueData = [
    { name: 'Mon', value: 20 },
    { name: 'Tue', value: 40 },
    { name: 'Wed', value: 30 },
    { name: 'Thu', value: 70 },
    { name: 'Fri', value: 40 },
    { name: 'Sat', value: 60 },
    { name: 'Sun', value: 50 },
  ]
  
  return (
    <Card>
            <CardHeader>
              <CardTitle>Revenue Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <Bar dataKey="value" fill="#7C3AED" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
  )
}

