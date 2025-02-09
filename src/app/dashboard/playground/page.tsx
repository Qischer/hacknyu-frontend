'use client'
import ChatBox from "@/components/ChatBox";
import { PlotComponent } from "@/components/plot-component";

import { usePgContext } from "@/contexts/playground-context"
import { Skeleton, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Playground() {
  const { currentState } = usePgContext()
  const [plotData, setPlotData] = useState(null)

  useEffect(() => {
    const url = new URL("http://localhost:3000/api/" + currentState.dropdownValue)
    const params = {
      symbol: currentState.textValue,
      interval: currentState.numValue,
      start: currentState.date1Value,
      end: currentState.date2Value
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url.toString()).then(res => res.json()).then(data => setPlotData(data))
  },[currentState])

  return (

    <>
      {plotData ?
        <PlotComponent data={plotData["data"]} layout={plotData["layout"]}/>
      : 
      <Stack gap="6" maxW="full">
        <Skeleton height="300px" />
        <Skeleton height="300px" />
      </Stack>
      }
    </>
  )
}
