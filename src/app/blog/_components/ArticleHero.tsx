export type Variant = "nutritionist" | "detox" | "keto" | "pregnancy";

/* Brand palette */
const C = {
  primary: "#3A7D5C",
  dark: "#2B5C3F",
  light: "#A8D5BA",
  warm: "#E8F0E4",
  gold: "#C9A96E",
  cream: "#F5F2EC",
  water: "#9FD3E0",
  yolk: "#F2C14E",
};

function Bg({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EEF3E8" />
          <stop offset="100%" stopColor="#E2EEDF" />
        </linearGradient>
      </defs>
      <rect width="800" height="300" fill={`url(#${id}-bg)`} />
      {/* soft blobs */}
      <circle cx="90" cy="60" r="120" fill={C.light} opacity="0.18" />
      <circle cx="720" cy="250" r="140" fill={C.primary} opacity="0.08" />
      <circle cx="700" cy="50" r="60" fill={C.gold} opacity="0.10" />
    </>
  );
}

/* small reusable leaf */
function Leaf({ x, y, r, s = 1, fill = C.primary, op = 0.5 }: { x: number; y: number; r: number; s?: number; fill?: string; op?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} opacity={op}>
      <path d="M0 0C-14 10 -18 30 -8 44c4 6 10 8 8 8 6-2 12-6 16-14 6-14 0-34-16-38z" fill={fill} />
      <path d="M0 4c0 14 -1 28 0 40" stroke="#fff" strokeWidth="1" opacity="0.4" />
    </g>
  );
}

function Nutritionist({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <Bg id={id} />
      <Leaf x={120} y={210} r={-20} s={1.2} op={0.35} />
      <Leaf x={690} y={120} r={150} s={1} op={0.3} fill={C.gold} />
      {/* plate */}
      <g transform="translate(400 155)">
        <ellipse cx="0" cy="6" rx="150" ry="100" fill={C.primary} opacity="0.12" />
        <ellipse cx="0" cy="0" rx="148" ry="98" fill="#ffffff" />
        <ellipse cx="0" cy="0" rx="120" ry="80" fill="none" stroke={C.warm} strokeWidth="3" />
        {/* portions */}
        <path d="M0 0 L0 -78 A120 80 0 0 1 104 40 Z" fill={C.light} opacity="0.9" />
        <path d="M0 0 L104 40 A120 80 0 0 1 -104 40 Z" fill={C.gold} opacity="0.55" />
        <path d="M0 0 L-104 40 A120 80 0 0 1 0 -78 Z" fill={C.primary} opacity="0.75" />
        {/* veg dots */}
        <circle cx="45" cy="-30" r="9" fill="#ffffff" opacity="0.55" />
        <circle cx="60" cy="20" r="8" fill="#ffffff" opacity="0.4" />
        <circle cx="-45" cy="-25" r="9" fill="#ffffff" opacity="0.5" />
      </g>
      {/* fork & knife */}
      <g stroke={C.dark} strokeWidth="5" strokeLinecap="round" opacity="0.55">
        <line x1="205" y1="105" x2="205" y2="205" />
        <line x1="595" y1="105" x2="595" y2="205" />
      </g>
      <circle cx="595" cy="100" r="10" fill={C.dark} opacity="0.55" />
    </svg>
  );
}

function Detox({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <Bg id={id} />
      <Leaf x={150} y={70} r={20} s={1.1} op={0.4} />
      <Leaf x={120} y={210} r={-40} s={0.9} op={0.3} />
      <Leaf x={660} y={210} r={160} s={1.1} op={0.35} />
      {/* glass */}
      <g transform="translate(400 150)">
        <path d="M-55 -90 L55 -90 L46 95 Q44 110 30 110 L-30 110 Q-44 110 -46 95 Z" fill="#ffffff" opacity="0.55" />
        <path d="M-50 -10 L50 -10 L46 95 Q44 110 30 110 L-30 110 Q-44 110 -46 95 Z" fill={C.water} opacity="0.55" />
        <path d="M-55 -90 L55 -90 L54 -78 L-54 -78 Z" fill="#ffffff" opacity="0.7" />
        <path d="M-55 -90 L55 -90 L46 95 Q44 110 30 110 L-30 110 Q-44 110 -46 95 Z" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
        {/* bubbles */}
        <circle cx="-20" cy="40" r="5" fill="#ffffff" opacity="0.6" />
        <circle cx="10" cy="65" r="4" fill="#ffffff" opacity="0.5" />
        <circle cx="22" cy="25" r="6" fill="#ffffff" opacity="0.55" />
        {/* lemon slice on rim */}
        <g transform="translate(40 -90)">
          <circle r="26" fill={C.yolk} opacity="0.9" />
          <circle r="20" fill="#FBE9B0" />
          {[0, 45, 90, 135].map((a) => (
            <line key={a} x1={-18 * Math.cos((a * Math.PI) / 180)} y1={-18 * Math.sin((a * Math.PI) / 180)} x2={18 * Math.cos((a * Math.PI) / 180)} y2={18 * Math.sin((a * Math.PI) / 180)} stroke={C.yolk} strokeWidth="2" opacity="0.7" />
          ))}
        </g>
        {/* mint */}
        <g transform="translate(-30 -98)">
          <Leaf x={0} y={0} r={-30} s={0.7} op={0.9} fill={C.primary} />
          <Leaf x={14} y={-6} r={20} s={0.6} op={0.85} fill={C.dark} />
        </g>
      </g>
      {/* droplets */}
      <circle cx="300" cy="80" r="6" fill={C.water} opacity="0.5" />
      <circle cx="520" cy="120" r="8" fill={C.water} opacity="0.45" />
      <circle cx="500" cy="60" r="5" fill={C.water} opacity="0.5" />
    </svg>
  );
}

function Keto({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <Bg id={id} />
      <Leaf x={130} y={90} r={10} s={1} op={0.35} />
      <Leaf x={680} y={210} r={150} s={1.1} op={0.3} fill={C.gold} />
      {/* plate */}
      <g transform="translate(400 165)">
        <ellipse cx="0" cy="6" rx="160" ry="95" fill={C.primary} opacity="0.12" />
        <ellipse cx="0" cy="0" rx="158" ry="92" fill="#ffffff" />
        {/* avocado half */}
        <g transform="translate(-80 -8)">
          <ellipse cx="0" cy="0" rx="42" ry="54" fill={C.primary} opacity="0.85" />
          <ellipse cx="0" cy="0" rx="32" ry="44" fill={C.light} />
          <circle cx="0" cy="6" r="18" fill={C.gold} opacity="0.9" />
        </g>
        {/* salmon fillet */}
        <g transform="translate(70 -15) rotate(12)">
          <path d="M-55 0 Q-20 -28 50 -16 Q60 0 50 16 Q-20 28 -55 0 Z" fill="#E8956F" opacity="0.9" />
          <path d="M-40 0 Q-10 -16 40 -9 M-40 0 Q-10 16 40 9" stroke="#fff" strokeWidth="3" opacity="0.5" fill="none" />
        </g>
        {/* egg */}
        <g transform="translate(40 45)">
          <ellipse cx="0" cy="0" rx="30" ry="24" fill="#ffffff" stroke={C.warm} strokeWidth="2" />
          <circle cx="0" cy="0" r="11" fill={C.yolk} />
        </g>
        {/* nuts */}
        <circle cx="-70" cy="55" r="11" fill={C.gold} opacity="0.8" />
        <circle cx="-48" cy="62" r="9" fill={C.dark} opacity="0.6" />
      </g>
    </svg>
  );
}

function Pregnancy({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <Bg id={id} />
      <Leaf x={140} y={210} r={-30} s={1.1} op={0.35} />
      <Leaf x={660} y={90} r={150} s={1} op={0.3} fill={C.gold} />
      {/* gentle womb circle with sprout */}
      <g transform="translate(400 160)">
        <circle cx="0" cy="0" r="95" fill={C.primary} opacity="0.10" />
        <circle cx="0" cy="0" r="72" fill="#ffffff" />
        <circle cx="0" cy="0" r="72" fill="none" stroke={C.light} strokeWidth="3" />
        {/* sprout */}
        <path d="M0 40 C0 10 0 -6 0 -24" stroke={C.primary} strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M0 -6 C-18 -10 -30 -26 -30 -44 C-10 -44 4 -30 0 -8 Z" fill={C.primary} opacity="0.85" />
        <path d="M0 4 C18 0 32 -14 34 -34 C14 -34 0 -18 0 2 Z" fill={C.light} />
        {/* seed */}
        <circle cx="0" cy="44" r="8" fill={C.gold} opacity="0.9" />
      </g>
      {/* hearts */}
      <path d="M250 100 c-6 -10 -22 -4 -16 8 c3 7 16 14 16 14 s13 -7 16 -14 c6 -12 -10 -18 -16 -8 z" fill={C.gold} opacity="0.55" />
      <path d="M545 200 c-5 -8 -18 -3 -13 6 c3 6 13 12 13 12 s10 -6 13 -12 c5 -9 -8 -14 -13 -6 z" fill={C.primary} opacity="0.4" />
    </svg>
  );
}

const SCENES: Record<Variant, ({ id }: { id: string }) => React.ReactElement> = {
  nutritionist: Nutritionist,
  detox: Detox,
  keto: Keto,
  pregnancy: Pregnancy,
};

export function ArticleHero({ variant }: { variant: Variant }) {
  const Scene = SCENES[variant];
  return (
    <div className="mb-8 rounded-[20px] overflow-hidden shadow-[0_2px_20px_rgba(58,125,92,0.08)]">
      <Scene id={variant} />
    </div>
  );
}

/* Compact thumbnail for cards and related lists */
export function ArticleThumb({ variant }: { variant: Variant }) {
  const Scene = SCENES[variant];
  return <Scene id={`${variant}-t`} />;
}
