import {NextFetchEvent, NextMiddleware, NextRequest} from "next/server";

// const match = (path: string, match: string) => {
//     return path.match(new RegExp(localeRegexPathStart + match))
// }

export function AuthMiddleware(middleware: NextMiddleware) {
    return async (req: NextRequest, event: NextFetchEvent) => {
        return middleware(req, event)
    }
}
