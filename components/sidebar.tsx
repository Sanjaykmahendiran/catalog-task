import Link from "next/link"
import { Home, ShoppingCart, Users, MessageSquare, Calendar, Mail, Ticket, GitFork, Heart, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import profile from "@/app/assets/profile.jpeg"

interface NavItem {
  label: string
  icon: React.ReactNode
  href?: string
  variant?: "default" | "ghost"
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: "HOME",
    items: [
      {
        label: "Home",
        icon: <Home className="h-4 w-4" />,
        href: "/",
      },
      {
        label: "eCommerce",
        icon: <ShoppingCart className="h-4 w-4 " />,
        href: "/ecommerce",
        variant: "default"
      },
    ]
  },
  {
    title: "App",
    items: [
      {
        label: "Contacts",
        icon: <Users className="h-4 w-4" />,
        href: "/contacts"
      },
      {
        label: "Chats",
        icon: <MessageSquare className="h-4 w-4" />,
        href: "/chats"
      },
      {
        label: "Calendar",
        icon: <Calendar className="h-4 w-4" />,
        href: "/calendar"
      },
      {
        label: "Email",
        icon: <Mail className="h-4 w-4" />,
        href: "/email"
      },
      {
        label: "Tickets",
        icon: <Ticket className="h-4 w-4" />,
        href: "/tickets"
      }
    ]
  },
  {
    title: "Page",
    items: [
      {
        label: "Tree view",
        icon: <GitFork className="h-4 w-4" />,
        href: "/tree-view"
      },
      {
        label: "Pricing",
        icon: <Heart className="h-4 w-4" />,
        href: "/pricing"
      }
    ]
  }
]

export default function Sidebar() {
  return (
    <div className="flex flex-col fixed inset-y-0 bg-white w-[240px] border-r">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600" />
          <span className="font-semibold text-lg">Catalog</span>
        </div>
      </div>

      <div className="flex-1 px-3">
        {navigation.map((section, index) => (
          <div key={section.title} className={cn("pb-4", index !== 0 && "pt-4")}>
            <h4 className="mb-1 px-2 text-xs font-medium text-muted-foreground">
              {section.title}
            </h4>
            <div className="grid gap-1">
              {section.items.map((item, index) => (
                <Button
                  key={index}
                  variant={item.variant || "ghost"}
                  className={cn(
                    "w-full justify-start",
                    item.variant === "default" && " hover:bg-muted"
                  )}
                  asChild
                >
                  <Link href={item.href || "#"}>
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 mt-auto border-t">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={profile.src} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Jane Cooper</p>
            <p className="text-xs text-muted-foreground truncate">Admin</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-0.5 p-4">
          <Button size="icon" variant="ghost" className="h-8 w-8 flex items-center">
            <Settings className="h-4 w-4" />
            <span className="">Settings</span>
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <LogOut className="h-4 w-4" />
            <span className="">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

