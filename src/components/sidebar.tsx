import Link from "next/link"
import { Home, BarChart2, PieChart, Activity, Settings } from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart2, label: "Markets", href: "/dashboard/markets" },
  { icon: Activity, label: "Playground", href: "/dashboard/playground" },
]

export function Sidebar() {
  return (
    <div className="flex flex-col w-44 bg-card text-card-foreground">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">by1Percent</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}
                className={
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

