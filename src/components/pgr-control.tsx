'use client'

import { usePgContext } from "@/contexts/playground-context"
import { Button, Input, Field, MenuContent, MenuItem, MenuRoot, MenuTrigger, NativeSelectField, NativeSelectRoot } from "@chakra-ui/react"
import { useState } from "react"
import { Slider } from "@/components/ui/slider"

const models = [
  {label:"BB", val:"bb"},
  {label:"MESA", val:"fama"},
  {label:"SAR", val:"sar"},
  {label:"SMA", val:"sma"},
  {label:"KAMA", val:"kama"},
  {label:"DEMA", val:"dema"},
  {label:"ENG", val:"eng"},
  {label:"HAM", val:"ham"},
  {label:"LAD", val:"lad"},
  {label:"TWS", val:"tws"},
  {label:"MS", val:"ms"},
  {label:"PP", val:"pp"},
  {label:"UTR", val:"utr"},
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

          <Slider 
            id="slider1"
            min={0}
            max={10}
            step={1}
            value={draftState.slider1Value}
            onValueChange={(e) => updateDraftState({slider1Value: e.value})}

          />
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
