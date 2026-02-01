import { useState } from "react";
import { Icon } from "@iconify/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip.tsx";

export default function MainButtonZone({
  color,
  name,
  description,
  buttonId,
  icon,
  hoverIcon,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip variant="outlined">
        <TooltipTrigger asChild>
          <button
            id={buttonId}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group w-full h-10 rounded-lg flex items-center justify-center gap-4 px-4 transition-all duration-300 active:scale-95 ease-out"
            style={{ backgroundColor: color }}
          >
            <div className="relative flex items-center justify-center w-6 h-6">
              <span
                className={`absolute transition-all duration-300 ease-in-out transform ${
                  isHovered
                    ? "opacity-0 scale-50 rotate-45"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              >
                <Icon icon={icon} width="24" height="24" color="#1a1b26" />
              </span>

              <span
                className={`absolute transition-all duration-300 ease-in-out transform ${
                  isHovered
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 -rotate-45"
                }`}
              >
                <Icon
                  icon={hoverIcon || icon}
                  width="24"
                  height="24"
                  color="#1a1b26"
                />
              </span>
            </div>

            <p className="font-[900] whitespace-nowrap uppercase tracking-wider text-[#1a1b26] font-mono">
              {name}
            </p>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
