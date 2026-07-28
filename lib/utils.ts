import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and merges Tailwind classes with twMerge
 * This ensures proper handling of conditional classes and deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string to a localized date format
 * @param date - Date string or Date object
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", options).format(dateObj);
}

/**
 * Truncates a string to a specified length with ellipsis
 * @param str - The string to truncate
 * @param length - Maximum length before truncation
 * @returns Truncated string
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

/**
 * Generates a random ID (useful for keys and tests)
 * @param prefix - Optional prefix for the ID
 * @returns Random ID string
 */
export function generateId(prefix: string = ""): string {
  return `${prefix}${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Checks if a URL is an external link
 * @param url - The URL to check
 * @returns boolean
 */
export function isExternalUrl(url: string): boolean {
  if (!url) return false;
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * Safely gets environment variables with fallback
 * @param key - Environment variable key
 * @param fallback - Fallback value
 * @returns Environment variable value or fallback
 */
export function getEnv(key: string, fallback: string = ""): string {
  const value = process.env[key];
  return value || fallback;
}

/**
 * Debounces a function call
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttles a function call
 * @param fn - Function to throttle
 * @param limit - Limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Scrolls smoothly to an element by ID
 * @param elementId - The ID of the element to scroll to
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/**
 * Copies text to clipboard with fallback
 * @param text - Text to copy
 * @returns Promise<boolean> - Success status
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    return true;
  } catch {
    return false;
  }
}