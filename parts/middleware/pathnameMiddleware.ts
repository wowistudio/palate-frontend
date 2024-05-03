import {NextFetchEvent, NextMiddleware, NextRequest} from "next/server";


export function SetPathnameMiddleware(middleware: NextMiddleware) {
  return async (req: NextRequest, event: NextFetchEvent) => {
    req.headers.set('x-pathname', req.nextUrl.pathname);
    return middleware(req, event)
  }
}
