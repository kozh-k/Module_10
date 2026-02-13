import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import { ICONS } from "@/constants/icons";
import type { IconName } from "@/constants/icons";

interface IconProps {
   name: IconName;
   className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
   const theme = useContext(ThemeContext);

   const iconSrc = ICONS[name][theme.theme];

   return <img src={iconSrc} alt={name} className={className} />;
}
