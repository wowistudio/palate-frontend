import {createSharedPathnamesNavigation} from "next-intl/navigation";

export const locales = ["en"] as const
export type Locale = typeof locales[number]
export const localeRegexPathStart = `(^/(?:${locales.join("|")}))?(.*)`;

// All these exports are provided by createSharedPathnamesNavigation
// - Link => will add locale to the href
// - redirect => will add locale to the redirect
// - usePathname => will return the pathname without the locale
// - useRouter => will return the router with the locale
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales});
