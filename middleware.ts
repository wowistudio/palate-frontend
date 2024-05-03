import {chain} from "@/parts/middleware/chain";
import {LocaleMiddleware} from "@/parts/middleware/localeMiddleware";
import {AuthMiddleware} from "@/parts/middleware/authMiddleware";

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

// IntlMiddleware should go last in array!
export default chain([
  AuthMiddleware,
  LocaleMiddleware
])
