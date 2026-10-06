// Dile göre içerik demetleri. Yollar (slug) iki dilde de aynıdır; yalnızca
// metinler değişir.
import * as siteTr from "./site.js";
import * as siteEn from "./site.en.js";
import { PAGES as pagesTr, MENU as menuTr } from "./institutional.js";
import { PAGES as pagesEn, MENU as menuEn } from "./institutional.en.js";

export const SITE = { tr: siteTr, en: siteEn };
export const PAGES_BY_LANG = { tr: pagesTr, en: pagesEn };
export const MENU_BY_LANG = { tr: menuTr, en: menuEn };
