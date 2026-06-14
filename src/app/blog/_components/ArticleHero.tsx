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
  const skin = "#F1C7A5";
  return (
    <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <Bg id={id} />
      {/* subtle side tints — medical (cool) vs nutrition (green) */}
      <rect x="0" y="0" width="400" height="300" fill="#8FB0C9" opacity="0.07" />
      <rect x="400" y="0" width="400" height="300" fill={C.primary} opacity="0.07" />
      <line x1="400" y1="46" x2="400" y2="250" stroke={C.dark} strokeWidth="1" strokeDasharray="4 7" opacity="0.18" />

      {/* ===== LEFT: medical icons (dietolog) ===== */}
      <g opacity="0.75">
        {/* medical report */}
        <g transform="translate(64 64)">
          <rect width="58" height="74" rx="6" fill="#ffffff" stroke="#9FB6C4" strokeWidth="2" />
          <path d="M44 0 L58 14 L44 14 Z" fill="#D7E3EA" />
          <line x1="12" y1="24" x2="46" y2="24" stroke="#BCCCD7" strokeWidth="3" strokeLinecap="round" />
          <line x1="12" y1="36" x2="46" y2="36" stroke="#BCCCD7" strokeWidth="3" strokeLinecap="round" />
          <line x1="12" y1="48" x2="34" y2="48" stroke="#BCCCD7" strokeWidth="3" strokeLinecap="round" />
          <circle cx="15" cy="13" r="7" fill="#E2706A" />
          <path d="M15 9 v8 M11 13 h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* blood vial — analyses */}
        <g transform="translate(40 168) rotate(16)">
          <rect x="0" y="0" width="20" height="64" rx="10" fill="#ffffff" stroke="#9FB6C4" strokeWidth="2" />
          <path d="M2 36 h16 v18 a8 8 0 0 1 -16 0 Z" fill="#C65B5B" />
          <line x1="-2" y1="-1" x2="22" y2="-1" stroke="#9FB6C4" strokeWidth="4" strokeLinecap="round" />
        </g>
        {/* pills */}
        <g transform="translate(120 224)">
          <g transform="rotate(-25)">
            <rect x="0" y="0" width="46" height="20" rx="10" fill="#E2706A" />
            <path d="M0 10 a10 10 0 0 1 10 -10 h13 v20 h-13 a10 10 0 0 1 -10 -10 Z" fill="#F2D6D4" />
          </g>
          <circle cx="56" cy="2" r="11" fill="#ffffff" stroke="#9FB6C4" strokeWidth="2" />
          <line x1="48" y1="2" x2="64" y2="2" stroke="#9FB6C4" strokeWidth="1.5" />
        </g>
      </g>

      {/* ===== RIGHT: nutrition / biohacking icons ===== */}
      <g opacity="0.85">
        {/* food pyramid */}
        <g transform="translate(636 66)">
          <path d="M50 0 L64 24 L36 24 Z" fill={C.primary} opacity="0.8" />
          <path d="M36 24 L64 24 L78 52 L22 52 Z" fill={C.gold} opacity="0.8" />
          <path d="M22 52 L78 52 L100 86 L0 86 Z" fill={C.light} opacity="0.9" />
        </g>
        {/* supplement bottle (БАД) */}
        <g transform="translate(612 182)">
          <rect x="6" y="0" width="20" height="10" rx="2" fill={C.dark} />
          <rect x="0" y="10" width="32" height="48" rx="6" fill="#ffffff" stroke={C.light} strokeWidth="2" />
          <rect x="4" y="26" width="24" height="20" rx="3" fill={C.warm} />
          <path d="M16 30 c-5 3 -5 10 0 13 c5 -3 5 -10 0 -13 Z" fill={C.primary} />
        </g>
        {/* smartwatch — biohacking device */}
        <g transform="translate(690 190)">
          <rect x="5" y="0" width="11" height="16" rx="3" fill="#7A8A99" />
          <rect x="5" y="44" width="11" height="16" rx="3" fill="#7A8A99" />
          <rect x="-4" y="12" width="30" height="34" rx="9" fill="#33424E" />
          <rect x="0" y="16" width="22" height="26" rx="6" fill={C.light} />
          <path d="M2 30 h4 l3 -7 l4 13 l3 -6 h5" fill="none" stroke={C.dark} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* ===== FIGURES (back to back) ===== */}
      {/* Doctor / dietolog — left */}
      <g>
        <path d="M323 290 L330 168 Q334 150 360 148 Q386 150 390 168 L397 290 Z" fill="#ffffff" stroke="#DDE5DD" strokeWidth="2" />
        <path d="M360 150 L345 200 L353 205 L360 168 Z" fill="#EFF3EF" />
        <path d="M360 150 L375 200 L367 205 L360 168 Z" fill="#EFF3EF" />
        <circle cx="360" cy="202" r="2.5" fill="#C7D2C9" />
        <circle cx="360" cy="224" r="2.5" fill="#C7D2C9" />
        <circle cx="360" cy="246" r="2.5" fill="#C7D2C9" />
        <path d="M348 156 C 340 185, 352 200, 362 206" fill="none" stroke="#4B8C6A" strokeWidth="3" strokeLinecap="round" />
        <path d="M372 156 C 378 182, 372 198, 362 206" fill="none" stroke="#4B8C6A" strokeWidth="3" strokeLinecap="round" />
        <circle cx="362" cy="209" r="6" fill="#4B8C6A" />
        <rect x="352" y="128" width="16" height="22" rx="6" fill={skin} />
        <circle cx="360" cy="96" r="29" fill="#6E5235" />
        <circle cx="388" cy="84" r="10" fill="#6E5235" />
        <circle cx="360" cy="100" r="24" fill={skin} />
        <path d="M337 97 Q360 73 383 97 Q372 85 360 85 Q348 85 337 97 Z" fill="#6E5235" />
        <circle cx="352" cy="100" r="2.4" fill="#4A3B2E" />
        <circle cx="368" cy="100" r="2.4" fill="#4A3B2E" />
        <path d="M348 94 q4 -2 8 0" stroke="#6E5235" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M364 94 q4 -2 8 0" stroke="#6E5235" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M352 110 q8 7 16 0" stroke="#B5705A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="349" cy="107" r="3.5" fill="#EC9C8E" opacity="0.5" />
        <circle cx="371" cy="107" r="3.5" fill="#EC9C8E" opacity="0.5" />
        {/* crossed arms */}
        <path d="M330 182 q30 16 60 3 l-2 15 q-30 9 -56 -6 Z" fill="#F4F7F4" stroke="#DDE5DD" strokeWidth="1.5" />
        <ellipse cx="331" cy="186" rx="7" ry="6" fill={skin} />
        <ellipse cx="388" cy="187" rx="7" ry="6" fill={skin} />
      </g>

      {/* Nutritionist — Anna — right */}
      <g>
        {/* long hair behind */}
        <path d="M427 100 Q424 172 433 208 L451 208 Q445 150 449 100 Z" fill="#D7A24F" />
        <path d="M483 100 Q486 172 477 208 L459 208 Q465 150 461 100 Z" fill="#D7A24F" />
        {/* shirt */}
        <path d="M420 290 L424 168 Q428 150 455 148 Q482 150 486 168 L490 290 Z" fill="#D6E8D5" stroke="#B6D4B8" strokeWidth="2" />
        {/* jeans */}
        <path d="M421 250 L489 250 L492 290 L418 290 Z" fill="#7C9AC0" />
        <rect x="421" y="248" width="68" height="8" fill="#5E7DA3" />
        <line x1="455" y1="256" x2="455" y2="290" stroke="#5E7DA3" strokeWidth="1.5" />
        {/* open collar */}
        <path d="M455 150 L444 174 L452 178 L455 160 Z" fill="#C3DCC4" />
        <path d="M455 150 L466 174 L458 178 L455 160 Z" fill="#C3DCC4" />
        <circle cx="455" cy="192" r="2.2" fill="#B6D4B8" />
        <circle cx="455" cy="212" r="2.2" fill="#B6D4B8" />
        <rect x="447" y="128" width="16" height="22" rx="6" fill={skin} />
        <circle cx="455" cy="96" r="29" fill="#D7A24F" />
        <circle cx="455" cy="100" r="24" fill={skin} />
        {/* side-parted fringe */}
        <path d="M431 96 Q455 72 479 96 Q470 80 452 81 Q440 83 431 96 Z" fill="#D7A24F" />
        {/* front locks over shoulders */}
        <path d="M433 110 Q427 152 434 190 L443 190 Q438 150 441 112 Z" fill="#E8C078" />
        <path d="M477 110 Q483 152 476 190 L467 190 Q472 150 469 112 Z" fill="#E8C078" />
        <circle cx="447" cy="100" r="2.4" fill="#3E5240" />
        <circle cx="463" cy="100" r="2.4" fill="#3E5240" />
        <path d="M443 94 q4 -2 8 0" stroke="#B98A3C" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M459 94 q4 -2 8 0" stroke="#B98A3C" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M447 110 q8 7 16 0" stroke="#B5705A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="444" cy="107" r="3.5" fill="#EC9C8E" opacity="0.5" />
        <circle cx="466" cy="107" r="3.5" fill="#EC9C8E" opacity="0.5" />
        {/* crossed arms */}
        <path d="M485 182 q-30 16 -60 3 l2 15 q30 9 56 -6 Z" fill="#E4F0E3" stroke="#B6D4B8" strokeWidth="1.5" />
        <ellipse cx="484" cy="186" rx="7" ry="6" fill={skin} />
        <ellipse cx="427" cy="187" rx="7" ry="6" fill={skin} />
      </g>
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
