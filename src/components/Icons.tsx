type IconProps = {
  size?: number
  className?: string
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: false,
}

export function ArrowUpRight({ size = 16, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  )
}

export function ArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowLeft({ size = 16, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </svg>
  )
}

export function ArrowDown({ size = 16, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  )
}

export function Plus({ size = 14, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M12 4v16M4 12h16" />
    </svg>
  )
}

export function Close({ size = 16, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

export function Menu({ size = 18, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M3 8h18M3 16h18" />
    </svg>
  )
}

export function Replay({ size = 13, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="M4 10a8 8 0 1 1 2.4 7.4M4 4v6h6" />
    </svg>
  )
}

export function Check({ size = 14, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  )
}

export function TrendUp({ size = 14, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...base}>
      <path d="m4 17 6-6 4 4 6-8M15 7h5v5" />
    </svg>
  )
}


export function Sun({ size = 18, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable={false}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  )
}

export function Moon({ size = 18, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable={false}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3c.2 0 .4 0 .6.02A7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}
