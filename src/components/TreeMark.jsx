// Logodaki şemsiye ağaç motifinin sadeleştirilmiş dekoratif versiyonu
export default function TreeMark({ size = 220, color = "var(--pine)", className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <g fill={color}>
        <path d="M96 190h8V96c14-2 25-9 33-19 10-13 13-28 10-40-8 2-16 7-22 15 2-12-1-23-8-31-7 8-10 19-8 31-6-8-14-13-22-15-3 12 0 27 10 40 8 10 19 17 33 19v94z" opacity="0" />
      </g>
      {/* Gövde */}
      <path d="M98 188V92" stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Toprak çizgisi */}
      <path d="M40 188h120" stroke={color} strokeWidth="5" strokeLinecap="round" />
      {/* Dallar */}
      <path d="M98 120c-14-4-26-12-34-24M98 108c14-4 28-12 38-26M98 132c-8-2-16-6-22-12" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Şemsiye taç */}
      <g fill={color}>
        <ellipse cx="100" cy="66" rx="66" ry="30" />
        <ellipse cx="52" cy="82" rx="26" ry="15" />
        <ellipse cx="150" cy="80" rx="28" ry="16" />
        <ellipse cx="100" cy="46" rx="40" ry="22" />
      </g>
    </svg>
  );
}
