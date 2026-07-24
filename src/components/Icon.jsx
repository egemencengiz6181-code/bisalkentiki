// Hafif, inline SVG ikon seti — dış bağımlılık yok
const paths = {
  play: <><circle cx="12" cy="12" r="9" /><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 9-9 1 6-1 11-2 12-1 1-3 2-4 2z" /><path d="M11 20c0-4 1-7 4-9" /></>,
  heart: <path d="M12 20s-7-4.5-9-9c-1.5-3.5 2-7 5-4l4 4 4-4c3-3 6.5.5 5 4-2 4.5-9 9-9 9z" />,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  phone: <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  star: <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />,
  book: <><path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 0-2 2z" /><path d="M20 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2z" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.5 1-2 2.5-2H18a3 3 0 0 0 3-3c0-5-4-9-9-9z" /><circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" /><circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" /></>,
  music: <><path d="M9 18V6l10-2v12" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></>,
  sprout: <><path d="M12 20v-6M12 14c0-3-2-5-5-5 0 3 2 5 5 5zM12 12c0-3 2-5 5-5 0 3-2 5-5 5z" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 5a3 3 0 0 1 0 6M21 20c0-2.5-1.5-4.7-4-5.5" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><circle cx="12" cy="7.6" r="0.6" fill="currentColor" stroke="none" /></>,
  edit: <><path d="M4 20h4L18 10l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></>,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
};

export default function Icon({ name, size = 24, stroke = 1.7, className = "", style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}
