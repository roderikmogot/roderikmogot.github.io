/**
 * The Ride's backdrop. Pure CSS: scroll position drives the time of day and the
 * parallax (scroll-driven animations in globals.css), the rest loops on its own.
 */
export default function RideScene() {
  return (
    <div className="ride" aria-hidden="true">
      <div className="stars" />
      <div className="sun" />
      <div className="moon" />
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={`cloud cloud-${i}`} />
      ))}
      <div className="layer far" />
      <div className="layer mid" />
      <div className="layer poles" />
      <div className="layer trees" />
      <div className="ground" />
      <div className="tint" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`firefly firefly-${i}`} />
      ))}
      <Train />
    </div>
  );
}

function Train() {
  const wheel = (cx: number) => (
    <g className="wheel" key={cx}>
      <circle cx={cx} cy={98} r={9} fill="#2b2a33" />
      <circle cx={cx} cy={98} r={4} fill="#8c8a93" />
      <line x1={cx - 8} y1={98} x2={cx + 8} y2={98} stroke="#8c8a93" strokeWidth={2} />
    </g>
  );
  const carriage = (x: number) => (
    <g key={x}>
      <rect x={x} y={40} width={110} height={52} rx={8} fill="#f3e6c4" />
      <rect x={x - 3} y={34} width={116} height={9} rx={4} fill="#3b3a36" />
      <rect x={x} y={76} width={110} height={6} fill="#3f8f8b" />
      {[12, 42, 72].map((dx) => (
        <g key={dx}>
          <rect x={x + dx} y={50} width={24} height={18} rx={3} fill="#3b3a36" />
          <rect className="glow" x={x + dx} y={50} width={24} height={18} rx={3} fill="#ffd27a" />
        </g>
      ))}
      {wheel(x + 22)}
      {wheel(x + 88)}
    </g>
  );

  return (
    <svg className="train" viewBox="0 0 400 110" role="presentation">
      <g className="bob">
        {carriage(4)}
        {carriage(122)}
        {/* Locomotive */}
        <rect x={240} y={46} width={110} height={46} rx={10} fill="#d9534f" />
        <rect x={240} y={22} width={50} height={70} rx={6} fill="#c2413d" />
        <rect x={234} y={16} width={62} height={10} rx={4} fill="#3b3a36" />
        <rect x={250} y={34} width={30} height={20} rx={3} fill="#3b3a36" />
        <rect className="glow" x={250} y={34} width={30} height={20} rx={3} fill="#ffd27a" />
        <rect x={318} y={22} width={16} height={26} rx={3} fill="#3b3a36" />
        <circle cx={352} cy={66} r={7} fill="#ffe7a3" />
        <path d="M350 92 L372 92 L362 76 Z" fill="#3b3a36" />
        <text x={296} y={76} fontSize={14} fontWeight={700} fill="#fdf3dc" fontFamily="monospace">
          RM
        </text>
        {wheel(262)}
        {wheel(300)}
        {wheel(336)}
        {[0, 1, 2].map((i) => (
          <circle key={i} className={`smoke smoke-${i}`} cx={326} cy={16} r={8} fill="#f4f1ea" />
        ))}
      </g>
    </svg>
  );
}
