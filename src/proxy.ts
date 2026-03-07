import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf)$).*)",
  ],
};

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  // Extract subdomain
  // e.g. "sponsoring.jnjd.vercel.app" → "sponsoring"
  // Handles: production (vercel.app), preview, and localhost dev
  const hostParts = hostname.split(".");

  // Detect "sponsoring" subdomain
  // Works for:
  //   sponsoring.jnjd.vercel.app    (custom domains)
  //   jnjd-sponsoring.vercel.app    (free tier vercel)
  //   sponsoring.localhost:3000     (local dev)
  const isSponsoring =
    (hostParts[0] === "sponsoring" || hostParts[0].includes("sponsoring")) &&
    !hostname.startsWith("www.") &&
    !hostname.startsWith("localhost");

  // Also allow a local dev path override: ?subdomain=sponsoring
  const subdomainParam = req.nextUrl.searchParams.get("subdomain");
  const isLocalDev =
    hostname.includes("localhost") && subdomainParam === "sponsoring";

  if (isSponsoring || isLocalDev) {
    // Rewrite the request to the /sponsoring page, keeping the URL intact
    url.pathname = `/sponsoring${
      url.pathname === "/" ? "" : url.pathname
    }`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
