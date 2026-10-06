import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SITE, PAGES_BY_LANG, MENU_BY_LANG } from "../data/content.js";
import { UI } from "./ui.js";

/* ---------------------------------------------------------------------------
   Dil yönetimi — Türkçe (varsayılan) ve İngilizce.

   Seçim localStorage'da saklanır ve <html lang> özniteliğine yazılır; böylece
   CSS'in `text-transform: uppercase` kuralı da doğru dilin büyük harf
   kurallarını (tr: i → İ, en: i → I) uygular.

   URL'ler iki dilde de aynıdır; dil değişimi sayfa yolunu değiştirmez.
--------------------------------------------------------------------------- */

const STORAGE_KEY = "bisalkent.lang";
export const LANGS = ["tr", "en"];
const DEFAULT_LANG = "tr";

const LangContext = createContext(null);

function readStoredLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* özel sekme / depolama kapalı — varsayılana düş */
  }
  return DEFAULT_LANG;
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* yazılamazsa sessizce geç — seçim yalnızca bu oturumda geçerli olur */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(LANGS.includes(next) ? next : DEFAULT_LANG);
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang yalnızca <LangProvider> içinde kullanılabilir.");
  return ctx;
}

/* Arayüz metinleri. Eksik bir anahtar hiçbir zaman ham anahtar olarak
   görünmez; önce Türkçeye, o da yoksa anahtarın kendisine düşer. */
export function useT() {
  const { lang } = useLang();
  return useCallback(
    (key) => {
      const active = UI[lang]?.[key];
      if (active !== undefined) return active;
      const fallback = UI[DEFAULT_LANG]?.[key];
      return fallback !== undefined ? fallback : key;
    },
    [lang]
  );
}

/* İçerik veri kümeleri */
export function useSite() {
  const { lang } = useLang();
  return SITE[lang] || SITE[DEFAULT_LANG];
}

export function usePages() {
  const { lang } = useLang();
  return PAGES_BY_LANG[lang] || PAGES_BY_LANG[DEFAULT_LANG];
}

export function useMenu() {
  const { lang } = useLang();
  return MENU_BY_LANG[lang] || MENU_BY_LANG[DEFAULT_LANG];
}
