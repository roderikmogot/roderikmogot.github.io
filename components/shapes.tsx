/** Flat, still organic forms. Decorative only. */

export function HeroShapes() {
  return (
    <svg viewBox="0 0 480 420" aria-hidden className="h-auto w-full">
      <path
        d="M96 64C170 8 300 20 360 88s52 170-20 226-210 66-270 6S22 120 96 64Z"
        className="fill-clay"
      />
      <path d="M318 214c42-22 112-6 130 44s-24 104-84 106-108-28-110-70 22-58 64-80Z" className="fill-moss" />
      <path d="M58 300c22-34 84-38 108-6s8 82-38 88-92-48-70-82Z" className="fill-terracotta" />
      <path d="M262 30c30-18 78-8 86 22s-28 46-62 44-54-48-24-66Z" className="fill-grass" />
      <ellipse cx="404" cy="96" rx="34" ry="26" transform="rotate(-18 404 96)" className="fill-stone" />
    </svg>
  );
}

export function ClosingShapes() {
  return (
    <svg viewBox="0 0 480 120" aria-hidden className="mx-auto h-auto w-full max-w-md">
      <path d="M40 92c10-40 70-60 110-40s30 64-20 68-100 12-90-28Z" className="fill-grass" />
      <path d="M170 70c26-46 110-56 148-18s6 78-58 76-112-12-90-58Z" className="fill-clay" />
      <path d="M340 84c16-26 70-30 92-8s4 50-36 52-72-18-56-44Z" className="fill-moss" />
      <ellipse cx="300" cy="24" rx="22" ry="16" transform="rotate(12 300 24)" className="fill-terracotta" />
    </svg>
  );
}

export function PebbleShape() {
  return (
    <svg viewBox="0 0 200 120" aria-hidden className="h-full w-full">
      <path d="M40 30c40-28 110-24 136 10s0 74-60 78-102-14-110-44 4-26 34-44Z" className="fill-terracotta" />
      <ellipse cx="150" cy="30" rx="18" ry="13" className="fill-grass" />
    </svg>
  );
}
