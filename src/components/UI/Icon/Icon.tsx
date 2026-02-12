import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";

interface IconProps {
   name: string;
   className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
   const theme = useContext(ThemeContext);

   const iconSrc = new URL(
      `/src/assets/icons/${name}/${name}-${theme}.svg`,
      import.meta.url,
   ).href;

   return <img src={iconSrc} alt={name} className={className} />;
}
