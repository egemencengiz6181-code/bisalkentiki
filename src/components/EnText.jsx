import { Fragment } from "react";

/* ---------------------------------------------------------------------------
   Türkçe sayfada (html lang="tr") CSS'in `text-transform: uppercase` kuralı
   "i" harfini Türkçe kurallarına göre "İ"ye çevirir. Bu, Türkçe kelimelerde
   doğru; ancak İngilizce kurum ve program adlarında yanlıştır:
   "British" → "BRİTİSH" olmamalı, "BRITISH" olmalı.

   Aşağıdaki İngilizce terimler lang="en" ile sarılarak tarayıcının İngilizce
   büyütme kuralını (i → I) kullanması sağlanır. Siteye yeni bir İngilizce
   kurum/program adı eklendiğinde bu listeye de eklenmelidir.
--------------------------------------------------------------------------- */
const EN_TERMS = [
  "British International School Istanbul",
  "The British School Istanbul",
  "British School Istanbul",
  "International Baccalaureate",
  "BIS Schools",
  "BIS STEAM",
  "EYFS Junior",
  "Reception",
  "BISS",
  "EYFS",
];

const PATTERN = new RegExp(`(${EN_TERMS.join("|")})`, "g");

export default function EnText({ children }) {
  if (typeof children !== "string") return children ?? null;

  const parts = children.split(PATTERN);
  return parts.map((part, i) =>
    EN_TERMS.includes(part)
      ? <span key={i} lang="en">{part}</span>
      : <Fragment key={i}>{part}</Fragment>
  );
}
