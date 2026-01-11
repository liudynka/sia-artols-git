interface LogoProps {
  variant?: "dark" | "light"
}

export function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0B1220"
  const accentColor = "#112CC8"

  return (
    <svg
      width="180"
      height="32"
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Artols Investment"
    >
      {/* Abstract mark: leaf + hexagon representing nature + technology */}
      <path
        d="M4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16Z"
        stroke={accentColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16 8C16 8 10 14 10 18C10 21.314 12.686 24 16 24C19.314 24 22 21.314 22 18C22 14 16 8 16 8Z"
        fill={accentColor}
      />
      <path
        d="M16 12V20M13 17H19"
        stroke={variant === "light" ? "#0B1220" : "#FFFFFF"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Text */}
      <text x="36" y="21" fill={textColor} fontFamily="Mulish, sans-serif" fontWeight="700" fontSize="14">
        Artols Investment
      </text>
    </svg>
  )
}
