import { Card, Flex, Badge } from "@chakra-ui/react"
import Link from "next/link"

const navItems = [
  { label: "AAPL", href: "/dashboard/markets/AAPL" },
  { label: "SPOT", href: "/dashboard/markets/SPOT" },
  { label: "AMZN", href: "/dashboard/markets/AMZN" },
]

const url = new URL("https://api.twelvedata.com")

const prefix = "/dashboard/markets/"

export async function MarketSideBar() {
  const tdKey = process.env.TD_API_KEY
  if (tdKey === undefined) {
    return <div>API key not provided</div>
  }
  const tickers = navItems.map((item: {label: string}) => item.label)
  const urlParams = {
    symbol: tickers.join(","),
    outputsize: 1,
    interval: "1day",
    apikey: tdKey,
  }

  url.pathname = "/time_series"
  url.search = new URLSearchParams(urlParams).toString()
  
  const data = await fetch(url).then(res => res.json())
  
  const items = []
  for (const key in data) {
    items.push({
      label:key, 
      href: prefix.concat(key), 
      diff: (data[key]?.values[0].close - data[key]?.values[0].open).toFixed(2)})
  }

  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <Card.Root variant="elevated">
                  <Card.Body>
                    <Flex justify="space-between">
                      <span>{item.label}</span>
                      <Badge variant="solid" colorPalette="red">{item.diff}</Badge>
                    </Flex>
                  </Card.Body>
                </Card.Root>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

