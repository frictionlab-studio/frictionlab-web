// Merge Tailwind class names safely.
// clsx handles conditional classes; tailwind-merge resolves conflicts
// (e.g. "px-4 px-6" -> "px-6") so component variants never fight each other.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
