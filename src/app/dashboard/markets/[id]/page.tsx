import ChartComponent from "@/components/chart"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const tdKey = process.env.TD_API_KEY

  if (tdKey === undefined) {
    return <div>API key not provided</div>
  }

  const url = new URL("https://api.twelvedata.com")
  const urlParams = {
    symbol: id,
    interval: "1min",
    apikey: tdKey,
  }
  url.pathname = "/time_series"
  url.search = new URLSearchParams(urlParams).toString()

  const data = await fetch(url).then(res => res.json())
  const chart_data = data.values.map((value : {"datetime": string, "close": string}) => {
    return {time: new Date(value["datetime"]).getTime(), value: Number(value["close"])}
  })
  // console.log(chart_data)
  chart_data.sort((x: {time: number} ,y : {time: number}) => x.time - y.time)
  
  return (
  <>
    <div>{id} Page</div>
    <ChartComponent data={chart_data} />
  </>
  )
}
