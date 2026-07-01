const LOGO_SRC = '/images/uva-logo.png'

interface AbsLogoProps {
  className?: string
  /** Use on dark backgrounds (navy nav, sidebar) */
  variant?: 'default' | 'contained'
}

export default function AbsLogo({ className = 'h-10 w-10', variant = 'default' }: AbsLogoProps) {
  if (variant === 'contained') {
    return (
      <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black ${className}`}>
        <img
          src={LOGO_SRC}
          alt="University of Amsterdam"
          className="h-full w-full object-contain p-1"
        />
      </div>
    )
  }

  return (
    <img
      src={LOGO_SRC}
      alt="University of Amsterdam"
      className={`shrink-0 object-contain ${className}`}
    />
  )
}
