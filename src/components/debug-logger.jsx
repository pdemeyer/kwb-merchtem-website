import { useTheme } from "@material-tailwind/react";

export default function DebugLogger({text, logObject}) {
  console.log(text);
  console.log(logObject);
  return null;
};
