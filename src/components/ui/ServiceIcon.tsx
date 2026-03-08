"use client";

interface ServiceIconProps {
  icon: string;
  className?: string;
}

// Abstract SVG icons for each service type
export function ServiceIcon({ icon, className = "w-8 h-8" }: ServiceIconProps) {
  switch (icon) {
    // Strategy & Implementation: connected nodes with upward path
    case "Rocket":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="12" cy="36" r="3" fill="white" opacity="0.5" />
          <circle cx="24" cy="24" r="3.5" fill="white" opacity="0.7" />
          <circle cx="36" cy="12" r="4" fill="white" />
          <path
            d="M14 34.5L22 25.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M26 22.5L34 13.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M36 12V6M36 6H30M36 6L28 14"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // Assessments & Diagnostics: radar/pulse with data points
    case "BarChart3":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <circle
            cx="24"
            cy="24"
            r="16"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.25"
          />
          <circle
            cx="24"
            cy="24"
            r="10"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <circle cx="24" cy="24" r="3" fill="white" opacity="0.6" />
          <circle cx="24" cy="8" r="2.5" fill="white" />
          <circle cx="37" cy="19" r="2.5" fill="white" opacity="0.8" />
          <circle cx="14" cy="32" r="2.5" fill="white" opacity="0.9" />
          <path
            d="M24 11V21"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <path
            d="M35 20L27 23"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <path
            d="M16 31L22 26"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </svg>
      );

    // Organizational Transformation: interlocking gears/shapes morphing
    case "Building2":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect
            x="6"
            y="22"
            width="14"
            height="14"
            rx="3"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d="M22 18L26 14L42 14L42 30L38 34"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <circle cx="34" cy="24" r="7" stroke="white" strokeWidth="2" />
          <path
            d="M31 24L33 26.5L37.5 21.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 18V12H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
        </svg>
      );

    // Research & Reports: document with chart/insight
    case "FileSearch":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className}>
          <rect
            x="8"
            y="4"
            width="24"
            height="32"
            rx="3"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d="M14 28L18 22L22 25L28 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="14"
            y1="12"
            x2="26"
            y2="12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />
          <circle
            cx="34"
            cy="34"
            r="8"
            stroke="white"
            strokeWidth="2"
            opacity="0.8"
          />
          <path
            d="M39.5 39.5L44 44"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="34" cy="34" r="3" fill="white" opacity="0.3" />
        </svg>
      );

    default:
      return null;
  }
}
