'use client'

import { usePgContext } from "@/contexts/playground-context"
import { Button, Input, Field, MenuContent, MenuItem, MenuRoot, MenuTrigger, NativeSelectField, NativeSelectRoot } from "@chakra-ui/react"
import { useState } from "react"
import { Slider } from "@/components/ui/slider"

const models = [
  {label:"BB", val:"bb", type:"avg"},
  {label:"MESA", val:"fama",type:"avg"},
  {label:"SAR", val:"sar",type:"avg"},
  {label:"SMA", val:"sma",type:"avg"},
  {label:"KAMA", val:"kama", type:"avg"},
  {label:"DEMA", val:"dema", type:"avg"},
  {label:"ENG", val:"eng", type:"pattern"},
  {label:"HAM", val:"ham", type:"pattern"},
  {label:"LAD", val:"lad", type:"pattern"},
  {label:"TWS", val:"tws", type:"pattern"},
  {label:"MS", val:"ms", type:"pattern"},
  {label:"PP", val:"pp", type:"pattern"},
  {label:"UTR", val:"utr", type:"pattern"},
  {label:"ADX", val:"adx", type:"momentum"},
  {label:"BOP", val:"bop", type:"momentum"},
  {label:"MAC", val:"mac", type:"momentum"},
  {label:"MOM", val:"mom", type:"momentum"},
  {label:"RSI", val:"rsi", type:"momentum"},
  {label:"STOCF", val:"stocf", type:"momentum"},
  {label:"ULTOS", val:"ultos", type:"momentum"},

]

export function PlaygroundControl() {

  const [choiceModel, setChoiceModel] = useState(null)
  const { draftState, updateDraftState, submitChanges } = usePgContext()

  return (
    <>
      <div className="flex flex-col bg-card text-card-foreground justify-between">
        <div className="flex-1 p-4">
          <MenuRoot variant="subtle">
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                {choiceModel ? choiceModel["label"] : "Choose a Model"}
              </Button>
            </MenuTrigger>
            <MenuContent>
              <ul className="space-y-2">
                {models.map((item, i) => (
                  <li key={i} onClick={() => {setChoiceModel(item); updateDraftState({dropdownValue: item.val})}}>
                    {item.label}
                  </li>
                ))}
              </ul>
              
            </MenuContent>
          </MenuRoot>

          <Field.Root>
            <Field.Label>Symbol</Field.Label>
            <Input 
              id="textField"
              value={draftState.textValue}
              onChange={(e) => updateDraftState({ textValue: e.target.value })}
              placeholder="Enter text..."
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Interval</Field.Label>
            <Input 
              id="numField"
              value={draftState.numValue}
              onChange={(e) => updateDraftState({ numValue: Number(e.target.value) })}
              placeholder="10s of minutes"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Start Date</Field.Label>
            <Input 
              id="date1Field"
              type="date"
              value={draftState.date1Value}
              onChange={(e) => updateDraftState({ date1Value: e.target.value })}
              placeholder="Enter text..."
            />
          </Field.Root>


          <Field.Root>
            <Field.Label>End Date</Field.Label>
            <Input 
              id="date2Field"
              type="date"
              value={draftState.date2Value}
              onChange={(e) => updateDraftState({ date2Value: e.target.value })}
              placeholder="Enter text..."
            />
          </Field.Root>
        </div>
        

        <div className="flex-1 p-4">
          <Button className="bg-black text-white w-24 p-4" onClick={submitChanges}>
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}
