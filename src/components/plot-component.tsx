import { HStack, Skeleton, Stack } from "@chakra-ui/react"
import Plot from "react-plotly.js"

interface PlotComponentProp {
  data: any[],
  layout: any,
}

export function PlotComponent( {data, layout} : PlotComponentProp) {
  return (
    <>
      {(data && layout) ?
        <Plot
          data={data}
          layout={layout}
        />
      : 
      <Stack gap="6" maxW="full">
        <Skeleton height="300px" />
        <Skeleton height="300px" />
      </Stack>
      }
    </>
  )
}
