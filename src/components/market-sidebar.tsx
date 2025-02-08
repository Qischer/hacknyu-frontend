import Link from "next/link"

const navItems = [
  {  label: "AAPL", href: "/dashboard/markets/AAPL" },
  {  label: "SPOT", href: "/dashboard/markets/SPOT" },
  {  label: "NASDAQ", href: "/dashboard/markets/NASDAQ" },
  {  label: "AMZN", href: "/dashboard/markets/AMZN" },
  {  label: "^SPX", href: "/dashboard/markets/^SPX" },
]

export function MarketSideBar() {
  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  "flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              >
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

