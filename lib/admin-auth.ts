import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
export const ADMIN_COOKIE = "pilot_admin";
export function adminSessionValue(){const p=process.env.ADMIN_PASSWORD;return p?createHash("sha256").update(p).digest("hex"):""}
export function validAdminPassword(candidate:unknown){const expected=process.env.ADMIN_PASSWORD;if(!expected||typeof candidate!=="string")return false;const a=Buffer.from(candidate),b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b)}
export async function isAdmin(){const actual=(await cookies()).get(ADMIN_COOKIE)?.value||"",expected=adminSessionValue();if(!actual||!expected)return false;const a=Buffer.from(actual),b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b)}
