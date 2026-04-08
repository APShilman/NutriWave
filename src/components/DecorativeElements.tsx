type Props = { className?: string };

export function LeafSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 10C20 30 10 60 15 90c5 15 15 22 25 25 10-3 20-10 25-25 5-30-5-60-25-80z"
        fill="currentColor"
        opacity="0.6"
      />
      <path d="M40 10c0 30-2 60 0 90" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M40 40c-8 4-14 10-18 18M40 60c-6 4-11 10-14 16M40 50c8-6 14-12 17-20M40 70c6-4 10-10 13-16" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}

export function AvocadoHalfSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="70" rx="38" ry="50" fill="currentColor" opacity="0.4" />
      <ellipse cx="50" cy="70" rx="28" ry="38" fill="currentColor" opacity="0.15" />
      <circle cx="50" cy="72" r="16" fill="currentColor" opacity="0.35" />
      <ellipse cx="47" cy="68" rx="4" ry="5" fill="currentColor" opacity="0.08" />
      <path d="M50 20c-3-6-4-12-2-16s6-4 8-1c3 4 0 11-2 16" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function CitrusSliceSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="currentColor" opacity="0.25" />
      <circle cx="50" cy="50" r="38" fill="currentColor" opacity="0.1" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="50"
          x2={50 + 36 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 36 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.2"
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function BerrySVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="45" r="14" fill="currentColor" opacity="0.4" />
      <circle cx="40" cy="45" r="14" fill="currentColor" opacity="0.35" />
      <circle cx="30" cy="30" r="14" fill="currentColor" opacity="0.45" />
      <ellipse cx="27" cy="26" rx="3" ry="3.5" fill="currentColor" opacity="0.1" />
      <path d="M30 16c-2-6-1-12 1-14s4 1 4 4c0 4-3 7-5 10z" fill="currentColor" opacity="0.5" />
      <path d="M30 16c2-4 5-8 8-9s3 3 1 5c-2 3-6 4-9 4z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function SmallLeavesSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50c10-15 25-25 40-28-10 15-25 25-40 28z" fill="currentColor" opacity="0.4" />
      <path d="M25 55c8-18 22-30 38-35-5 18-18 32-38 35z" fill="currentColor" opacity="0.3" />
      <path d="M10 50c15-10 28-18 40-28" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <path d="M25 55c12-12 26-24 38-35" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <path d="M5 52c5-2 10-3 15-3" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}

export function RosemarySVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 10v100" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      {[18, 30, 42, 54, 66, 78, 90].map((y, i) => (
        <g key={y}>
          <path
            d={i % 2 === 0
              ? `M20 ${y}c-8-3-14-1-16 2s4 5 10 3c3-1 5-3 6-5z`
              : `M20 ${y}c8-3 14-1 16 2s-4 5-10 3c-3-1-5-3-6-5z`
            }
            fill="currentColor"
            opacity={0.3 + (i % 3) * 0.05}
          />
        </g>
      ))}
    </svg>
  );
}

/* ── New decorative elements ── */

export function BroccoliSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="35" r="22" fill="currentColor" opacity="0.35" />
      <circle cx="32" cy="45" r="18" fill="currentColor" opacity="0.3" />
      <circle cx="68" cy="45" r="18" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="28" r="15" fill="currentColor" opacity="0.25" />
      <circle cx="60" cy="28" r="15" fill="currentColor" opacity="0.25" />
      <rect x="46" y="55" width="8" height="35" rx="4" fill="currentColor" opacity="0.4" />
      <path d="M46 75c-6 2-10 6-12 12" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
      <path d="M54 70c4 3 8 8 10 14" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round" />
    </svg>
  );
}

export function LemonSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="40" rx="40" ry="30" fill="currentColor" opacity="0.3" />
      <ellipse cx="50" cy="40" rx="34" ry="24" fill="currentColor" opacity="0.15" />
      <path d="M18 40c16-2 30-2 46 0M20 30c14 4 28 4 42 0M20 50c14-4 28-4 42 0" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
      <path d="M85 35c4-3 8-4 10-2s-1 6-5 7-6-2-5-5z" fill="currentColor" opacity="0.4" />
      <path d="M88 32c2-4 3-8 2-10" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export function MintLeafSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 5C15 20 5 50 15 70c5 10 15 15 25 18 10-3 20-8 25-18 10-20 0-50-25-65z" fill="currentColor" opacity="0.4" />
      <path d="M40 10v70" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <path d="M40 25c-10 3-18 8-22 15M40 40c-12 4-20 10-24 18M40 55c-8 3-14 8-18 14" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
      <path d="M40 25c10 3 18 8 22 15M40 40c12 4 20 10 24 18M40 55c8 3 14 8 18 14" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
    </svg>
  );
}

export function AppleSVG({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 20C20 20 8 40 8 55c0 18 14 30 32 30s32-12 32-30c0-15-12-35-32-35z" fill="currentColor" opacity="0.35" />
      <path d="M40 20c-2-8-1-16 2-18s5 3 4 8c-1 4-4 7-6 10z" fill="currentColor" opacity="0.5" />
      <path d="M42 14c4-4 10-6 14-5s2 5-2 7-9 1-12-2z" fill="currentColor" opacity="0.3" />
      <ellipse cx="30" cy="45" rx="6" ry="8" fill="currentColor" opacity="0.08" />
    </svg>
  );
}

export function WaveDivider({ className, flip }: Props & { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className || ""}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 10 480 65 720 40S1200 10 1440 40V80H0V40Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M0 50C200 25 400 70 720 45S1100 20 1440 50V80H0V50Z"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

export function OrganicBlob({ className, variant = 1 }: Props & { variant?: number }) {
  const paths: Record<number, string> = {
    1: "M44.5,-51.6C56.7,-40.4,65.2,-25.2,67.3,-9.1C69.4,7,65.2,23.9,55.7,37.1C46.2,50.3,31.5,59.8,15.3,64.3C-0.9,68.8,-18.5,68.3,-33.1,61.2C-47.7,54.1,-59.2,40.5,-64.8,24.8C-70.4,9.1,-70,-8.7,-63.5,-23.3C-57,-37.9,-44.3,-49.3,-30.5,-59.8C-16.7,-70.3,-1.8,-79.9,11.7,-78.3C25.3,-76.7,32.3,-62.8,44.5,-51.6Z",
    2: "M39.5,-46.3C51.8,-36.7,63.1,-24.5,66.4,-10.1C69.7,4.3,65,20.8,55.7,34.1C46.4,47.4,32.5,57.5,16.8,62.3C1.1,67.1,-16.3,66.6,-30.6,59.7C-44.9,52.8,-56.1,39.5,-61.5,24.2C-66.9,8.9,-66.5,-8.4,-60.3,-22.6C-54.1,-36.8,-42.1,-47.9,-29,-57.4C-15.9,-66.9,-1.7,-74.8,11.1,-73.4C23.9,-72,27.2,-55.9,39.5,-46.3Z",
    3: "M42.7,-50.7C54.4,-41.3,62.5,-27.1,65.1,-11.9C67.7,3.3,64.8,19.5,56.4,32.5C48,45.5,34.1,55.3,18.5,60.3C2.9,65.3,-14.4,65.5,-28.5,59.1C-42.6,52.7,-53.5,39.7,-59.7,24.7C-65.9,9.7,-67.4,-7.3,-62.3,-21.5C-57.2,-35.7,-45.5,-47.1,-32.5,-56C-19.5,-64.9,-5.2,-71.3,7.1,-69.6C19.4,-67.9,31,-60.1,42.7,-50.7Z",
  };
  return (
    <svg className={className} viewBox="-80 -80 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={paths[variant] || paths[1]} fill="currentColor" />
    </svg>
  );
}
