import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

const COOKIE_NAME = "texo_admin_session";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 4; // 4 hours

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const COOKIE_SECRET = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

function ensureSecret() {
  if (!COOKIE_SECRET) {
    throw new Error("ADMIN AUTH COOKIE_SECRET is missing. Set SUPABASE_SERVICE_ROLE_KEY in .env.local.");
  }
}

function createSignature(value: string) {
  ensureSecret();
  return crypto.createHmac("sha256", COOKIE_SECRET).update(value).digest("hex");
}

function encodePayload(payload: object) {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

function decodePayload(token: string) {
  return JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
}

export function isAdminEmail(email: string) {
  return email === ADMIN_EMAIL;
}

export function isAdminPassword(password: string) {
  return password === ADMIN_PASSWORD;
}

export function createAdminToken(email: string) {
  const payload = {
    email,
    expiresAt: Date.now() + COOKIE_MAX_AGE_SECONDS * 1000,
  };
  const token = encodePayload(payload);
  const signature = createSignature(token);
  return `${token}.${signature}`;
}

export function verifyAdminToken(cookieValue: string | undefined) {
  if (!cookieValue) return null;
  const [token, signature] = cookieValue.split(".");
  if (!token || !signature) return null;
  if (createSignature(token) !== signature) return null;

  let payload;
  try {
    payload = decodePayload(token) as { email: string; expiresAt: number };
  } catch {
    return null;
  }

  if (!payload?.email || !payload?.expiresAt) return null;
  if (payload.expiresAt < Date.now()) return null;
  return payload.email;
}

export async function getAdminSessionEmail() {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(COOKIE_NAME)?.value;
  return verifyAdminToken(cookieValue);
}

export function createAdminSessionResponse() {
  const token = createAdminToken(ADMIN_EMAIL);
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });
  return response;
}

export function clearAdminSessionResponse() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });
  return response;
}
