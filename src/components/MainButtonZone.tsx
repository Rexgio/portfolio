import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  } from "./ui/tooltip.tsx"


export default function MainButtonZone() {
  return(
  <div className="flex flex-wrap gap-2">
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
        <p>Add to library</p>
        </TooltipContent>
    </Tooltip>

  </div>
  )
  
}
