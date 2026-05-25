import { NextRequest } from "next/server";
import { isAdminEmail, isAdminPassword, createAdminSessionResponse } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = String(body.email || "").trim();
  const password = String(body.password || "");

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password are required." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  if (!isAdminEmail(email) || !isAdminPassword(password)) {
    return new Response(JSON.stringify({ error: "Invalid admin credentials." }), { status: 401, headers: { "Content-Type": "application/json" } });
  }

  return createAdminSessionResponse();
}
