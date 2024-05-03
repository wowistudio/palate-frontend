import {NextFetchEvent, NextMiddleware, NextRequest} from "next/server";
import {locales} from "@/parts/locale";
import createIntlMiddleware from "next-intl/middleware";


export function LocaleMiddleware(_m: NextMiddleware) {
    return async (req: NextRequest, _e: NextFetchEvent) => {
        return createIntlMiddleware({
            locales: locales as unknown as string[],
            defaultLocale: locales[0]
        })(req)
    }
}
